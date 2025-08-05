<script lang="ts">
	import { onMount } from "svelte"
	import { cubicOut } from "svelte/easing"
	import { fly } from "svelte/transition"

	// Card data representing organizational scenarios
	const cards = [
		{
			role: "VP of Product",
			content: "10min before every meeting, send me a brief with context on who/what/why",
			accent: "bg-blue-50 border-blue-200"
		},
		{
			role: "Engineering Lead",
			content: "Alert me when product requirements change mid-sprint so I can adjust team capacity",
			accent: "bg-green-50 border-green-200"
		},
		{
			role: "Head of Sales",
			content: "Keep me updated on product roadmap changes that affect customer commitments",
			accent: "bg-purple-50 border-purple-200"
		},
		{
			role: "CEO",
			content: "Surface cross-team dependencies before they become blockers",
			accent: "bg-orange-50 border-orange-200"
		},
		{
			role: "Design Lead",
			content: "Notify me when engineering constraints impact user experience decisions",
			accent: "bg-pink-50 border-pink-200"
		}
	]

	let currentCardIndex = $state(0)
	let isVisible = $state(false)

	onMount(() => {
		isVisible = true

		const interval = setInterval(() => {
			currentCardIndex = (currentCardIndex + 1) % cards.length
		}, 5000)

		return () => clearInterval(interval)
	})

	let visibleCards = $derived.by(() => {
		const result = []
		for (let i = 0; i < 3; i++) {
			const index = (currentCardIndex + i) % cards.length
			result.push({
				...cards[index],
				zIndex: 3 - i,
				translateY: i * 8,
				translateX: i * 4,
				opacity: 1 - i * 0.15,
				scale: 1 - i * 0.05
			})
		}
		return result
	})
</script>

<section data-hero class="relative min-h-[70vh] bg-gray-50 py-20">
	<div class="mx-auto max-w-6xl px-8">
		<!-- Header -->
		<div class="mb-16 text-center">
			<h1 class="text-display mb-4 text-balance">Sentra keeps everyone aligned</h1>
			<p class="text-title2 text-emphasis-medium">
				Your AI teammate that proactively prevents organizational drift
			</p>
		</div>

		<!-- Card Stack -->
		<div class="relative mx-auto max-w-md">
			<div class="card-stack">
				{#each visibleCards as card, index (card.role + currentCardIndex)}
					<div
						class={[
							"card",
							card.accent,
							"absolute inset-0 rounded-xl border bg-white p-6 transition-all duration-700 ease-out"
						]}
						style="
							z-index: {card.zIndex};
							transform: translateY({card.translateY}px) translateX({card.translateX}px) scale({card.scale});
							opacity: {card.opacity};
						"
						in:fly={{ y: 20, duration: 700, easing: cubicOut }}
					>
						<div class="mb-3">
							<div class="text-sm font-medium text-gray-900">
								{card.role}
							</div>
						</div>
						<div class="leading-relaxed text-gray-700">
							{card.content}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Bottom text -->
		<div class="mt-16 text-center">
			<p class="text-body text-emphasis-medium mx-auto max-w-2xl">
				Every 5 seconds, a new organizational challenge surfaces. Sentra anticipates these moments
				and keeps your team synchronized.
			</p>
		</div>
	</div>
</section>

<style>
	.card-stack {
		position: relative;
		height: 200px;
		width: 100%;
	}

	.card {
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.card:hover {
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.card-stack {
			height: 180px;
		}

		.card {
			padding: 1rem;
		}
	}
</style>
