<script lang="ts">
	import { onMount } from "svelte"
	import { fly } from "svelte/transition"
	import { scrollY } from "svelte/reactivity/window"
	import { Spring } from "svelte/motion"

	let scrollContainer: HTMLElement
	let scrollProgress = new Spring(0, {
		// damping: 2,
		stiffness: 0.1
	})

	// Create a proper mesh grid
	const gridSize = 4 // 4x4 grid
	const nodes = []
	let nodeId = 0

	// Track when to flip text
	let textFlipped = $state(false)

	// Text opacity transitions

	// Store element's top position
	let elementTop = $state(0)

	// Create grid nodes
	for (let row = 0; row < gridSize; row++) {
		for (let col = 0; col < gridSize; col++) {
			const gridX = 20 + (col * 60) / (gridSize - 1)
			const gridY = 20 + (row * 60) / (gridSize - 1)

			nodes.push({
				id: nodeId++,
				// Random initial positions for chaos
				initialX: 10 + Math.random() * 80,
				initialY: 10 + Math.random() * 80,
				// Final positions in grid
				finalX: gridX,
				finalY: gridY
			})
		}
	}

	// Create connections for mesh (connect each node to its neighbors)
	let connections: { from: number; to: number }[] = $state([])
	for (let row = 0; row < gridSize; row++) {
		for (let col = 0; col < gridSize; col++) {
			const currentId = row * gridSize + col

			// Connect to right neighbor
			if (col < gridSize - 1) {
				connections.push({ from: currentId, to: currentId + 1 })
			}

			// Connect to bottom neighbor
			if (row < gridSize - 1) {
				connections.push({ from: currentId, to: currentId + gridSize })
			}

			// Connect diagonally for mesh effect
			if (row < gridSize - 1 && col < gridSize - 1) {
				connections.push({ from: currentId, to: currentId + gridSize + 1 })
			}
			if (row < gridSize - 1 && col > 0) {
				connections.push({ from: currentId, to: currentId + gridSize - 1 })
			}
		}
	}

	onMount(() => {
		// Get element's position on mount
		if (scrollContainer) {
			elementTop = scrollContainer.getBoundingClientRect().top
		}

		const handleScroll = () => {
			if (!scrollContainer) return

			const rect = scrollContainer.getBoundingClientRect()
			const viewportHeight = window.innerHeight

			// Calculate progress based on element position in viewport
			// Animation completes at 50% of scroll
			const start = viewportHeight
			const end = -rect.height
			const current = rect.top

			const rawProgress = (start - current) / (start - end)
			// Scale progress so it reaches 1.0 at 50% scroll
			const progress = Math.max(0, Math.min(1, rawProgress * 2))

			scrollProgress.set(progress)

			// Flip text when bottom of section hits bottom of viewport
			const bottomOfSection = rect.bottom
			textFlipped = bottomOfSection <= viewportHeight
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll() // Initial check

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	})

	// Interpolate positions based on scroll
	const currentNodes = $derived(
		nodes.map((node) => ({
			...node,
			x: node.initialX + (node.finalX - node.initialX) * scrollProgress.current,
			y: node.initialY + (node.finalY - node.initialY) * scrollProgress.current
		}))
	)
</script>

<section bind:this={scrollContainer} class="relative h-screen">
	<div class="relative h-full">
		<!-- Background color layer -->
		<div class="absolute inset-0">
			<!-- Gray background that fades in -->
			<div
				class="absolute inset-0 bg-gray-50 transition-opacity duration-300"
				style="opacity: {textFlipped ? 0 : scrollProgress.current}"
			></div>
			<!-- Primary background that appears after text flip -->
			<div
				class="bg-primary-50 absolute inset-0 transition-opacity duration-500"
				style="opacity: {textFlipped ? 1 : 0}"
			></div>
		</div>

		<div class="relative grid h-full place-items-center justify-center">
			<!-- Background visualization -->
			<div class="pointer-events-none absolute inset-0 overflow-hidden">
				<div class="absolute inset-0 flex items-center justify-center">
					<svg viewBox="0 0 100 100" class="max-h-4xl h-full w-full max-w-4xl opacity-20">
						<!-- Connections -->
						{#each connections as connection}
							{@const fromNode = currentNodes.find((n) => n.id === connection.from)}
							{@const toNode = currentNodes.find((n) => n.id === connection.to)}
							{#if fromNode && toNode}
								<line
									x1={fromNode.x}
									y1={fromNode.y}
									x2={toNode.x}
									y2={toNode.y}
									stroke={!textFlipped ? "var(--color-slate-300)" : "var(--color-primary-200)"}
									stroke-width="0.5"
									opacity={scrollProgress.current}
								/>
							{/if}
						{/each}

						<!-- Nodes -->
						{#each currentNodes as node}
							<circle
								cx={node.x}
								cy={node.y}
								r="1"
								fill={!textFlipped ? "var(--color-slate-400)" : "var(--color-primary-400)"}
							/>
						{/each}
					</svg>
				</div>
			</div>

			<!-- Content -->
			<div class="section-px relative z-10 w-full">
				<div
					class="mx-auto grid max-w-7xl items-center justify-center text-balance transition-transform"
				>
					{#key textFlipped}
						<h2
							class="text-display grid-center text-foreground mx-auto max-w-5xl text-center"
							in:fly={{ y: ".5em", duration: 500, delay: 250 }}
							out:fly={{ y: "-.5em", duration: 500 }}
						>
							{textFlipped
								? "Sentra helps keep everyone on the same page."
								: "In every organisation, everyone has a different picture of what's happening."}
						</h2>
					{/key}
				</div>
			</div>
		</div>
	</div>
</section>
