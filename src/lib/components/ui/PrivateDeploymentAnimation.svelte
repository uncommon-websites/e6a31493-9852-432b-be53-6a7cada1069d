<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import IconShield from "~icons/lucide/shield"
	import IconDatabase from "~icons/lucide/database"
	import IconServer from "~icons/lucide/server"
	import IconLock from "~icons/lucide/lock"
	import IconCloud from "~icons/lucide/cloud"

	let currentActiveIndex = 0
	let interval: NodeJS.Timeout

	const securityElements = [
		{ icon: IconDatabase, name: 'database', position: 'top-left' },
		{ icon: IconServer, name: 'server', position: 'top-right' },
		{ icon: IconCloud, name: 'cloud', position: 'bottom' },
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
	<div class="relative w-80 h-80">
		<!-- Dotted circles - BEHIND everything -->
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-gray-300 rounded-full opacity-60"></div>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-blue-200 rounded-full opacity-40"></div>
		
		<!-- Central shield at top -->
		<div class="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-2 border-blue-200 rounded-xl flex items-center justify-center shadow-lg z-10">
			<IconShield class="h-8 w-8 text-blue-600" />
		</div>

		<!-- Vertical line down from shield -->
		<div class="absolute left-1/2 -translate-x-1/2 top-20 w-0.5 h-16 {isActive(0) || isActive(1) || isActive(2) ? 'bg-blue-500' : 'bg-gray-300'} z-10"></div>

		<!-- Horizontal line -->
		<div class="absolute left-1/2 -translate-x-1/2 top-36 w-32 h-0.5 {isActive(0) || isActive(1) || isActive(2) ? 'bg-blue-500' : 'bg-gray-300'} z-10"></div>

		<!-- Three vertical lines to bottom icons - properly aligned -->
		<div class="absolute top-36 w-0.5 h-20 {isActive(0) ? 'bg-blue-500' : 'bg-gray-300'} z-10" style="left: 6rem;"></div>
		<div class="absolute left-1/2 -translate-x-1/2 top-36 w-0.5 h-20 {isActive(1) ? 'bg-blue-500' : 'bg-gray-300'} z-10"></div>
		<div class="absolute top-36 w-0.5 h-20 {isActive(2) ? 'bg-blue-500' : 'bg-gray-300'} z-10" style="right: 6rem;"></div>

		<!-- Three icons at bottom - aligned with lines -->
		<div class="absolute bottom-16 w-12 h-12 bg-white border-2 {isActive(0) ? 'border-blue-400' : 'border-gray-200'} rounded-lg flex items-center justify-center shadow-sm z-10" style="left: calc(6rem - 1.5rem);">
			<svelte:component this={securityElements[0].icon} class="h-6 w-6 {isActive(0) ? 'text-blue-500' : 'text-gray-400'}" />
		</div>

		<div class="absolute left-1/2 -translate-x-1/2 bottom-16 w-12 h-12 bg-white border-2 {isActive(1) ? 'border-blue-400' : 'border-gray-200'} rounded-lg flex items-center justify-center shadow-sm z-10">
			<svelte:component this={securityElements[1].icon} class="h-6 w-6 {isActive(1) ? 'text-blue-500' : 'text-gray-400'}" />
		</div>

		<div class="absolute bottom-16 w-12 h-12 bg-white border-2 {isActive(2) ? 'border-blue-400' : 'border-gray-200'} rounded-lg flex items-center justify-center shadow-sm z-10" style="right: calc(6rem - 1.5rem);">
			<svelte:component this={securityElements[2].icon} class="h-6 w-6 {isActive(2) ? 'text-blue-500' : 'text-gray-400'}" />
		</div>
	</div>
</div>