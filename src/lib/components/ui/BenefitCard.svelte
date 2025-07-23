<script lang="ts">
	// Icons
	import IconBrain from "~icons/lucide/brain"
	import IconEye from "~icons/lucide/eye"
	import IconTarget from "~icons/lucide/target"
	import IconRadar from "~icons/lucide/radar"
	import IconAlertTriangle from "~icons/lucide/alert-triangle"
	import IconDatabase from "~icons/lucide/database"
	import IconNetwork from "~icons/lucide/network"
	import IconShield from "~icons/lucide/shield"
	import IconUsers from "~icons/lucide/users"
	import IconCalendarX from "~icons/lucide/calendar-x"
	import IconTrendingUp from "~icons/lucide/trending-up"
	import IconZap from "~icons/lucide/zap"

	type Props = {
		title: string
		description: string
		visualization: "visibility" | "misalignment" | "culture" | "meetings" | "onboarding" | "future"
		class?: string
	}

	let { title, description, visualization, class: customClass = "" }: Props = $props()

	// Define visualization components based on type
	const getVisualization = (type: string) => {
		switch (type) {
			case "visibility":
				return {
					icon: IconEye,
					bgColor: "bg-primary-100",
					textColor: "text-primary-600",
					supportIcons: [IconDatabase, IconNetwork, IconUsers, IconShield]
				}
			case "misalignment":
				return {
					icon: IconRadar,
					bgColor: "bg-orange-100",
					textColor: "text-orange-600",
					supportIcons: [IconAlertTriangle, IconTarget, IconZap]
				}
			case "culture":
				return {
					icon: IconUsers,
					bgColor: "bg-secondary-100",
					textColor: "text-secondary-600",
					supportIcons: [IconTrendingUp, IconTarget, IconBrain]
				}
			case "meetings":
				return {
					icon: IconCalendarX,
					bgColor: "bg-green-100",
					textColor: "text-green-600",
					supportIcons: [IconDatabase, IconBrain, IconNetwork]
				}
			case "onboarding":
				return {
					icon: IconUsers,
					bgColor: "bg-blue-100",
					textColor: "text-blue-600",
					supportIcons: [IconNetwork]
				}
			case "future":
				return {
					icon: IconTrendingUp,
					bgColor: "bg-purple-50",
					textColor: "text-purple-600",
					supportIcons: [IconBrain, IconDatabase, IconNetwork, IconShield]
				}
			default:
				return {
					icon: IconBrain,
					bgColor: "bg-primary-50",
					textColor: "text-primary-600",
					supportIcons: [IconDatabase, IconNetwork, IconShield]
				}
		}
	}

	let visualConfig = $derived(getVisualization(visualization))
	let MainIcon = $derived(visualConfig.icon)
</script>

<div class={["group flex", customClass]}>
	<!-- Card Container -->
	<div
		class="relative flex min-h-[400px] w-full flex-col overflow-hidden border border-gray-200 bg-white p-10"
		style="border-radius: var(--radius-2xl);"
	>
		<!-- Visualization Container -->
		<div class="mb-8 flex aspect-video items-center justify-center">
			{#if visualization === "visibility"}
				<!-- Organizational Visibility: Clear hierarchical view -->
				<div class="relative flex h-full w-full items-center justify-center">
					<div class="relative">
						<!-- Organization tree structure -->
						<div class="flex flex-col items-center space-y-4">
							<!-- Top level -->
							<div class="flex items-center justify-center">
								<div 
									class="h-10 w-10 bg-blue-500"
									style="border-radius: var(--radius-lg);"
								></div>
							</div>
							
							<!-- Connections -->
							<div class="relative h-8 w-full flex items-center justify-center">
								<div class="absolute h-px w-32 bg-blue-400"></div>
								<div class="absolute left-1/2 -translate-x-1/2 h-8 w-px bg-blue-400"></div>
							</div>
							
							<!-- Second level -->
							<div class="flex items-center space-x-12">
								<div 
									class="h-8 w-8 bg-blue-400"
									style="border-radius: var(--radius-md);"
								></div>
								<div 
									class="h-8 w-8 bg-blue-400"
									style="border-radius: var(--radius-md);"
								></div>
								<div 
									class="h-8 w-8 bg-blue-400"
									style="border-radius: var(--radius-md);"
								></div>
							</div>
							
							<!-- Bottom connections -->
							<div class="flex items-start space-x-12">
								<div class="flex flex-col items-center">
									<div class="h-4 w-px bg-blue-300"></div>
									<div class="flex space-x-2 mt-1">
										<div class="h-2 w-2 bg-blue-300" style="border-radius: var(--radius-sm);"></div>
										<div class="h-2 w-2 bg-blue-300" style="border-radius: var(--radius-sm);"></div>
									</div>
								</div>
								<div class="flex flex-col items-center">
									<div class="h-4 w-px bg-blue-300"></div>
									<div class="flex space-x-2 mt-1">
										<div class="h-2 w-2 bg-blue-300" style="border-radius: var(--radius-sm);"></div>
										<div class="h-2 w-2 bg-blue-300" style="border-radius: var(--radius-sm);"></div>
									</div>
								</div>
								<div class="flex flex-col items-center">
									<div class="h-4 w-px bg-blue-300"></div>
									<div class="flex space-x-2 mt-1">
										<div class="h-2 w-2 bg-blue-300" style="border-radius: var(--radius-sm);"></div>
										<div class="h-2 w-2 bg-blue-300" style="border-radius: var(--radius-sm);"></div>
									</div>
								</div>
							</div>
						</div>
						
						<!-- Clarity indicator -->
						<div class="mt-6 text-center">
							<div class="text-sm text-gray-500">
								Complete visibility
							</div>
							<div class="text-lg font-medium text-blue-600">
								Every level connected
							</div>
						</div>
					</div>
				</div>
			{:else if visualization === "misalignment"}
				<!-- Stay Ahead of Misalignment: Minimal drift visualization -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Main visualization container -->
					<div class="relative">
						<!-- Team alignment visualization -->
						<div class="flex items-center justify-center space-x-8">
							<!-- Left side: Misaligned state -->
							<div class="relative">
								<div class="space-y-2">
									<!-- Team members drifting apart -->
									<div class="flex space-x-1">
										<div class="h-3 w-3 bg-gray-300" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-gray-300 translate-x-1" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-gray-300 translate-x-2" style="border-radius: var(--radius-sm);"></div>
									</div>
									<div class="flex space-x-1">
										<div class="h-3 w-3 bg-gray-300 -translate-x-1" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-gray-300" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-gray-300 translate-x-3" style="border-radius: var(--radius-sm);"></div>
									</div>
									<div class="flex space-x-1">
										<div class="h-3 w-3 bg-gray-300 translate-x-1" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-gray-300 -translate-x-2" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-gray-300 translate-x-2" style="border-radius: var(--radius-sm);"></div>
									</div>
								</div>
							</div>

							<!-- Center: Arrow showing intervention -->
							<div class="flex items-center">
								<div class="h-px w-12 bg-gray-400"></div>
								<div class="ml-1">
									<svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" stroke-width="2" d="M9 5l7 7-7 7"/>
									</svg>
								</div>
							</div>

							<!-- Right side: Aligned state -->
							<div class="relative">
								<div class="space-y-2">
									<!-- Team members aligned -->
									<div class="flex space-x-1">
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
									</div>
									<div class="flex space-x-1">
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
									</div>
									<div class="flex space-x-1">
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
										<div class="h-3 w-3 bg-orange-500" style="border-radius: var(--radius-sm);"></div>
									</div>
								</div>
							</div>
						</div>

						<!-- Subtle cost indicator -->
						<div class="mt-6 text-center">
							<div class="text-sm text-gray-500">
								Preventing drift saves
							</div>
							<div class="text-lg font-medium text-orange-600">
								$100k+/year
							</div>
						</div>
					</div>
				</div>
			{:else if visualization === "culture"}
				<!-- Drive Company Culture at Scale: Minimal pulse visualization -->
				<div class="relative flex h-full w-full items-center justify-center">
					<div class="relative">
						<!-- Culture pulse visualization -->
						<div class="flex items-end justify-center space-x-2 h-32">
							{#each Array(9) as _, i}
								{@const heights = [20, 40, 60, 80, 100, 80, 60, 40, 20]}
								{@const isCenter = i === 4}
								<div 
									class={[
										"w-3 transition-all",
										isCenter ? "bg-purple-500" : "bg-gray-300"
									]}
									style="height: {heights[i]}%; border-radius: var(--radius-sm);"
								></div>
							{/each}
						</div>
						
						<!-- Culture metrics -->
						<div class="mt-6 text-center">
							<div class="text-sm text-gray-500">
								Culture alignment
							</div>
							<div class="text-lg font-medium text-purple-600">
								Real-time insights
							</div>
						</div>
					</div>
				</div>
			{:else if visualization === "onboarding"}
				<!-- Simplify Onboarding: Minimal connection visualization -->
				<div class="relative flex h-full w-full items-center justify-center">
					<div class="relative">
						<!-- Progress steps visualization -->
						<div class="flex items-center space-x-4">
							<!-- Starting point -->
							<div class="relative">
								<div 
									class="h-4 w-4 bg-gray-300"
									style="border-radius: var(--radius-md);"
								></div>
							</div>
							
							<!-- Progress line with steps -->
							<div class="flex items-center space-x-1">
								<div class="h-px w-8 bg-blue-500"></div>
								<div 
									class="h-2 w-2 bg-blue-500"
									style="border-radius: var(--radius-sm);"
								></div>
								<div class="h-px w-8 bg-blue-500"></div>
								<div 
									class="h-3 w-3 bg-blue-500"
									style="border-radius: var(--radius-sm);"
								></div>
								<div class="h-px w-8 bg-blue-500"></div>
							</div>
							
							<!-- Integrated state -->
							<div class="relative">
								<div 
									class="h-8 w-8 bg-blue-500"
									style="border-radius: var(--radius-lg);"
								></div>
								<!-- Success indicator -->
								<div 
									class="absolute -top-1 -right-1 h-3 w-3 bg-white border-2 border-blue-500"
									style="border-radius: var(--radius-md);"
								></div>
							</div>
						</div>
						
						<!-- Time to productivity -->
						<div class="mt-6 text-center">
							<div class="text-sm text-gray-500">
								Time to productivity
							</div>
							<div class="text-lg font-medium text-blue-600">
								Days → Hours
							</div>
						</div>
					</div>
				</div>
			{:else if visualization === "meetings"}
				<!-- Reduce Unnecessary Meetings: Minimal calendar with strike-through -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Clean calendar representation -->
					<div class="relative">
						<!-- Simple calendar grid -->
						<div class="grid grid-cols-7 gap-1">
							{#each Array(28) as _, i}
								{@const hasMeeting = i === 3 || i === 8 || i === 10 || i === 15 || i === 18 || i === 22 || i === 25}
								{@const isUnnecessary = i === 3 || i === 10 || i === 18 || i === 25}
								<div
									class="relative h-8 w-8 border border-gray-100"
									style="border-radius: var(--radius-md);"
								>
									{#if hasMeeting}
										<!-- Meeting indicator -->
										<div class="absolute inset-0 flex items-center justify-center">
											<div 
												class={[
													"h-5 w-5",
													isUnnecessary ? "bg-gray-200" : "bg-green-500"
												]}
												style="border-radius: var(--radius-sm);"
											></div>
											{#if isUnnecessary}
												<!-- Elegant strike-through for unnecessary meetings -->
												<div class="absolute inset-0 flex items-center justify-center">
													<div class="h-px w-7 rotate-45 bg-gray-600"></div>
												</div>
											{/if}
										</div>
									{/if}
								</div>
							{/each}
						</div>
						
						<!-- Subtle time saved indicator -->
						<div class="mt-4 text-center">
							<div class="text-sm text-gray-500">
								Time reclaimed
							</div>
							<div class="text-lg font-medium text-green-600">
								5+ hours/week
							</div>
						</div>
					</div>
				</div>
			{:else}
				<!-- Default visualization for other types -->
				<div class="relative flex items-center justify-center">
					<!-- Central icon -->
					<div
						class={[
							"relative z-10 flex h-16 w-16 items-center justify-center",
							visualConfig.bgColor,
							visualConfig.textColor
						]}
						style="border-radius: var(--radius-xl);"
					>
						<MainIcon class="h-8 w-8" />
					</div>

					<!-- Support icons positioned around the main icon -->
					{#each visualConfig.supportIcons as SupportIcon, index}
						{@const positions = [
							"-top-6 -left-12",
							"-top-6 -right-12",
							"bottom-2 -left-12",
							"-right-12 bottom-2"
						]}
						<div
							class={[
								"absolute flex h-6 w-6 items-center justify-center bg-gray-200 opacity-60",
								positions[index] || positions[0]
							]}
							style="border-radius: var(--radius-md);"
						>
							<SupportIcon class="h-4 w-4" />
						</div>
					{/each}

					<!-- Connection lines -->
					<div
						class="from-primary-300 absolute top-1/2 -left-12 h-px w-12 -translate-y-1/2 transform bg-gradient-to-r to-transparent opacity-40"
					></div>
					<div
						class="from-primary-300 absolute top-1/2 -right-12 h-px w-12 -translate-y-1/2 transform bg-gradient-to-l to-transparent opacity-40"
					></div>
					<div
						class="from-primary-300 absolute -top-12 left-1/2 h-12 w-px -translate-x-1/2 transform bg-gradient-to-b to-transparent opacity-40"
					></div>
					<div
						class="from-primary-300 absolute -bottom-12 left-1/2 h-12 w-px -translate-x-1/2 transform bg-gradient-to-t to-transparent opacity-40"
					></div>
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
