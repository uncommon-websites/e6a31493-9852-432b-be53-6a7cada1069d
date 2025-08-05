<script lang="ts">
	import { onMount, onDestroy } from "svelte"
	import IconShield from "~icons/lucide/shield"
	import IconDatabase from "~icons/lucide/database"
	import IconServer from "~icons/lucide/server"
	import IconLock from "~icons/lucide/lock"
	import IconCloud from "~icons/lucide/cloud"

	let currentActiveIndex = 0
	let interval: NodeJS.Timeout

	const securityElements = [
		{ icon: IconDatabase, name: "database", position: "top-left" },
		{ icon: IconServer, name: "server", position: "top-right" },
		{ icon: IconCloud, name: "cloud", position: "bottom" }
	]

	onMount(() => {
		interval = setInterval(() => {
			currentActiveIndex = (currentActiveIndex + 1) % securityElements.length
		}, 2500)
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

<div class="relative flex h-full w-full items-center justify-center p-8">
	<div class="relative h-80 w-80">
		<!-- Dotted circles - BEHIND everything -->
		<div
			class="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-300 opacity-60"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-blue-200 opacity-40"
		></div>

		<!-- Central shield at top -->
		<div
			class="absolute top-16 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-xl border-2 border-blue-200 bg-white shadow-lg"
		>
			<IconShield class="h-8 w-8 text-blue-600" />
		</div>

		<!-- Vertical line down from shield -->
		<div class="absolute top-32 left-1/2 z-10 h-8 w-0.5 -translate-x-1/2 bg-blue-500"></div>

		<!-- Horizontal line -->
		<div class="absolute top-40 left-1/2 z-10 h-0.5 w-40 -translate-x-1/2 bg-blue-500"></div>

		<!-- Three vertical lines to bottom icons - properly aligned -->
		<div class="absolute top-40 z-10 h-12 w-0.5 bg-blue-500" style="left: calc(50% - 5rem);"></div>
		<div class="absolute top-40 left-1/2 z-10 h-12 w-0.5 -translate-x-1/2 bg-blue-500"></div>
		<div class="absolute top-40 z-10 h-12 w-0.5 bg-blue-500" style="right: calc(50% - 5rem);"></div>

		<!-- Three icons at bottom - aligned with lines -->
		<div
			class="absolute bottom-16 h-12 w-12 border-2 bg-white {isActive(0)
				? 'border-blue-400'
				: 'border-gray-200'} z-10 flex items-center justify-center rounded-lg shadow-sm"
			style="left: calc(50% - 6.5rem);"
		>
			<svelte:component
				this={securityElements[0].icon}
				class="h-6 w-6 {isActive(0) ? 'text-blue-500' : 'text-gray-400'}"
			/>
		</div>

		<div
			class="absolute bottom-16 left-1/2 h-12 w-12 -translate-x-1/2 border-2 bg-white {isActive(1)
				? 'border-blue-400'
				: 'border-gray-200'} z-10 flex items-center justify-center rounded-lg shadow-sm"
		>
			<svelte:component
				this={securityElements[1].icon}
				class="h-6 w-6 {isActive(1) ? 'text-blue-500' : 'text-gray-400'}"
			/>
		</div>

		<div
			class="absolute bottom-16 h-12 w-12 border-2 bg-white {isActive(2)
				? 'border-blue-400'
				: 'border-gray-200'} z-10 flex items-center justify-center rounded-lg shadow-sm"
			style="right: calc(50% - 6.5rem);"
		>
			<svelte:component
				this={securityElements[2].icon}
				class="h-6 w-6 {isActive(2) ? 'text-blue-500' : 'text-gray-400'}"
			/>
		</div>
	</div>
</div>
