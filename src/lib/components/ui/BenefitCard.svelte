<script lang="ts">
	// Icons
	import IconEye from "~icons/lucide/eye"
	import IconRadar from "~icons/lucide/radar"
	import IconUsers from "~icons/lucide/users"
	import IconCalendarX from "~icons/lucide/calendar-x"
	import IconTrendingUp from "~icons/lucide/trending-up"
	import IconArrowRight from "~icons/lucide/arrow-right"
	import IconTarget from "~icons/lucide/target"
	import IconNetwork from "~icons/lucide/network"

	type Props = {
		title: string
		description: string
		visualization: "visibility" | "misalignment" | "culture" | "meetings" | "onboarding" | "future"
		class?: string
	}

	let { title, description, visualization, class: customClass = "" }: Props = $props()

	// Simple visualization config
	const getVisualization = (type: string) => {
		switch (type) {
			case "visibility":
				return {
					icon: IconEye,
					color: "text-blue-600"
				}
			case "misalignment":
				return {
					icon: IconRadar,
					color: "text-orange-600"
				}
			case "culture":
				return {
					icon: IconUsers,
					color: "text-green-600"
				}
			case "meetings":
				return {
					icon: IconCalendarX,
					color: "text-purple-600"
				}
			case "onboarding":
				return {
					icon: IconUsers,
					color: "text-blue-600"
				}
			case "future":
				return {
					icon: IconTrendingUp,
					color: "text-indigo-600"
				}
			default:
				return {
					icon: IconEye,
					color: "text-gray-600"
				}
		}
	}

	let visualConfig = $derived(getVisualization(visualization))
	let MainIcon = $derived(visualConfig.icon)
</script>

<div class={["group flex", customClass]}>
	<!-- Card Container -->
	<div
		class="relative flex min-h-[400px] w-full flex-col overflow-hidden p-10 bg-white border border-gray-200"
	>
		<!-- Visualization Container -->
		<div class="mb-8 flex aspect-video items-center justify-center">
			{#if visualization === "visibility"}
				<!-- Clean Organizational Visibility -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Central Eye -->
					<div class="bg-blue-50 text-blue-600 border-2 border-blue-200 relative z-20 flex h-20 w-20 items-center justify-center">
						<IconEye class="h-10 w-10" />
					</div>

					<!-- Organizational Layers - Clean Squares -->
					<div class="border-blue-200 absolute h-32 w-32 border-2 opacity-30"></div>
					<div class="border-blue-200 absolute h-44 w-44 border opacity-20"></div>
					<div class="border-blue-200 absolute h-56 w-56 border opacity-10"></div>
				</div>
			{:else if visualization === "misalignment"}
				<!-- Clean Misalignment Detection - Early Warning System -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Timeline: Before → Detection → After -->
					<div class="flex items-center space-x-8">
						<!-- Before: Healthy State -->
						<div class="flex flex-col items-center space-y-2">
							<div class="h-12 w-12 bg-green-100 flex items-center justify-center">
								<div class="h-6 w-6 bg-green-500"></div>
							</div>
							<div class="text-xs text-gray-500 font-medium">HEALTHY</div>
						</div>

						<!-- Detection Point: Radar Alert -->
						<div class="flex flex-col items-center space-y-2">
							<div class="h-16 w-16 bg-orange-50 flex items-center justify-center border-2 border-orange-200">
								<IconRadar class="h-8 w-8 text-orange-600" />
							</div>
							<div class="text-xs text-orange-600 font-medium">DETECTED</div>
						</div>

						<!-- After: Prevented Crisis -->
						<div class="flex flex-col items-center space-y-2">
							<div class="h-12 w-12 bg-green-100 flex items-center justify-center">
								<div class="h-6 w-6 bg-green-500"></div>
							</div>
							<div class="text-xs text-gray-500 font-medium">PREVENTED</div>
						</div>
					</div>

					<!-- Connection Lines -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<!-- Left connection -->
						<div class="absolute -left-16 top-0 h-px w-8 bg-gray-300"></div>
						<!-- Right connection -->
						<div class="absolute -right-16 top-0 h-px w-8 bg-gray-300"></div>
					</div>
				</div>
			{:else if visualization === "onboarding"}
				<!-- Clean Onboarding: Connecting to Organization -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Left side: Individual user -->
					<div class="absolute left-8 top-1/2 -translate-y-1/2 transform">
						<div class="relative z-10 flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600 border-2 border-blue-100">
							<IconUsers class="h-6 w-6" />
						</div>
					</div>

					<!-- Right side: Organizational network -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform">
						<div class="relative z-10 flex h-16 w-16 items-center justify-center bg-blue-100 text-blue-600 border-2 border-blue-50">
							<IconNetwork class="h-8 w-8" />
						</div>
					</div>

					<!-- Connection line -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<div class="h-px w-32 bg-blue-400 opacity-60"></div>
					</div>
				</div>
			{:else if visualization === "meetings"}
				<!-- Clean Meetings: Signal Through Noise -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Left side: Radar Detection -->
					<div class="absolute left-8 top-1/2 -translate-y-1/2 transform">
						<div class="relative z-10 flex h-16 w-16 items-center justify-center bg-green-50 text-green-600 border-2 border-green-100">
							<IconRadar class="h-8 w-8" />
						</div>
					</div>

					<!-- Right side: Target Alignment -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform">
						<div class="relative z-10 flex h-12 w-12 items-center justify-center bg-green-100 text-green-600 border-2 border-green-50">
							<IconTarget class="h-6 w-6" />
						</div>
					</div>

					<!-- Signal connection -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<div class="h-px w-32 bg-green-500 opacity-70"></div>
					</div>
				</div>
			{:else}
				<!-- Default visualization for other types -->
				<div class="relative flex items-center justify-center">
					<!-- Central icon -->
					<div class="relative z-10 flex h-16 w-16 items-center justify-center bg-gray-50 border-2 border-gray-200">
						<MainIcon class={["h-8 w-8", visualConfig.color]} />
					</div>
				</div>
			{/if}
		</div>

		<!-- Content -->
		<div class="flex-1 space-y-6">
			<h3 class="text-title3 font-semibold text-gray-900">
				{title}
			</h3>

			<p class="text-callout leading-relaxed text-gray-600">
				{description}
			</p>
		</div>
	</div>
</div>
