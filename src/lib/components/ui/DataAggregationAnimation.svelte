<script lang="ts">
	import { onMount, onDestroy } from "svelte"
	import IconBrain from "~icons/lucide/brain"
	import IconCalendar from "~icons/lucide/calendar"
	import IconGithub from "~icons/lucide/github"
	import IconClipboardList from "~icons/lucide/clipboard-list"
	import IconFileText from "~icons/lucide/file-text"
	import IconMessageSquare from "~icons/lucide/message-square"
	import IconBookOpen from "~icons/lucide/book-open"
	import IconRocket from "~icons/lucide/rocket"
	import IconMail from "~icons/lucide/mail"

	let currentActiveIndex = 0
	let interval: NodeJS.Timeout

	const dataItems = [
		{ icon: IconCalendar, name: "calendar", direction: "down" },
		{ icon: IconGithub, name: "github", direction: "left" },
		{ icon: IconClipboardList, name: "jira", direction: "left" },
		{ icon: IconFileText, name: "notion", direction: "left" },
		{ icon: IconMessageSquare, name: "slack", direction: "up" },
		{ icon: IconBookOpen, name: "docs", direction: "right" },
		{ icon: IconRocket, name: "linear", direction: "right" },
		{ icon: IconMail, name: "email", direction: "right" }
	]

	onMount(() => {
		// Start cycling through items every 3 seconds
		interval = setInterval(() => {
			currentActiveIndex = (currentActiveIndex + 1) % dataItems.length
		}, 3000)
	})

	onDestroy(() => {
		if (interval) {
			clearInterval(interval)
		}
	})

	function isActive(index: number): boolean {
		return currentActiveIndex === index
	}
</script>

<div class="relative flex h-full w-full flex-col">
	<!-- Main visual elements centered -->
	<div class="flex flex-1 items-center justify-center">
		<div class="relative">
			<!-- Central memory unit with brain icon -->
			<div class="relative flex items-center justify-center">
				<div
					class="relative h-16 w-16 border-2 border-blue-200 bg-white shadow-lg"
					style="border-radius: var(--radius-lg);"
				>
					<!-- Brain icon -->
					<div class="absolute inset-0 flex items-center justify-center">
						<IconBrain
							class="h-8 w-8 animate-pulse text-blue-600"
							style="animation-duration: 3s;"
						/>
					</div>
				</div>
			</div>

			<!-- Data sources evenly distributed around center -->
			<!-- Top: Calendar -->
			<div class="absolute -top-12 left-1/2 -translate-x-1/2">
				<div class="flex flex-col items-center space-y-2">
					<svelte:component
						this={dataItems[0].icon}
						class="h-4 w-4 {isActive(0) ? 'text-blue-500' : 'text-gray-400'}"
					/>
					<div class="relative h-6 w-px {isActive(0) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(0)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Top Right: GitHub -->
			<div class="absolute -top-8 -right-16" style="transform: translate(-50%, 50%) rotate(45deg);">
				<div class="flex items-center space-x-2" style="transform: rotate(-45deg);">
					<div class="relative h-px w-6 {isActive(1) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(1)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
					<svelte:component
						this={dataItems[1].icon}
						class="h-4 w-4 {isActive(1) ? 'text-blue-500' : 'text-gray-400'}"
					/>
				</div>
			</div>

			<!-- Right: Jira -->
			<div class="absolute top-1/2 -right-12 -translate-y-1/2">
				<div class="flex items-center space-x-2">
					<div class="relative h-px w-6 {isActive(2) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(2)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
					<svelte:component
						this={dataItems[2].icon}
						class="h-4 w-4 {isActive(2) ? 'text-blue-500' : 'text-gray-400'}"
					/>
				</div>
			</div>

			<!-- Bottom Right: Notion -->
			<div
				class="absolute -right-16 -bottom-8"
				style="transform: translate(-50%, -50%) rotate(-45deg);"
			>
				<div class="flex items-center space-x-2" style="transform: rotate(45deg);">
					<div class="relative h-px w-6 {isActive(3) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(3)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
					<svelte:component
						this={dataItems[3].icon}
						class="h-4 w-4 {isActive(3) ? 'text-blue-500' : 'text-gray-400'}"
					/>
				</div>
			</div>

			<!-- Bottom: Slack -->
			<div class="absolute -bottom-12 left-1/2 -translate-x-1/2">
				<div class="flex flex-col items-center space-y-2">
					<div class="relative h-6 w-px {isActive(4) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(4)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
					<svelte:component
						this={dataItems[4].icon}
						class="h-4 w-4 {isActive(4) ? 'text-blue-500' : 'text-gray-400'}"
					/>
				</div>
			</div>

			<!-- Bottom Left: Docs -->
			<div
				class="absolute -bottom-8 -left-16"
				style="transform: translate(50%, -50%) rotate(45deg);"
			>
				<div class="flex items-center space-x-2" style="transform: rotate(-45deg);">
					<svelte:component
						this={dataItems[5].icon}
						class="h-4 w-4 {isActive(5) ? 'text-blue-500' : 'text-gray-400'}"
					/>
					<div class="relative h-px w-6 {isActive(5) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(5)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Left: Linear -->
			<div class="absolute top-1/2 -left-12 -translate-y-1/2">
				<div class="flex items-center space-x-2">
					<svelte:component
						this={dataItems[6].icon}
						class="h-4 w-4 {isActive(6) ? 'text-blue-500' : 'text-gray-400'}"
					/>
					<div class="relative h-px w-6 {isActive(6) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(6)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Top Left: Email -->
			<div class="absolute -top-8 -left-16" style="transform: translate(50%, 50%) rotate(-45deg);">
				<div class="flex items-center space-x-2" style="transform: rotate(45deg);">
					<svelte:component
						this={dataItems[7].icon}
						class="h-4 w-4 {isActive(7) ? 'text-blue-500' : 'text-gray-400'}"
					/>
					<div class="relative h-px w-6 {isActive(7) ? 'bg-blue-500' : 'bg-gray-300'}">
						{#if isActive(7)}
							<div class="absolute inset-0 animate-pulse bg-blue-500"></div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Text at bottom -->
	<div class="mt-12 text-center">
		<div class="mb-1 text-sm text-gray-500">Unified data layer</div>
		<div class="text-lg font-medium text-gray-900">Structured knowledge</div>
	</div>
</div>
