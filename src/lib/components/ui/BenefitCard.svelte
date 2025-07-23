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
		class="relative grid grid-rows-[3fr_2fr] place-content-center justify-center overflow-hidden border border-gray-200 bg-white"
		style="border-radius: var(--radius-2xl);"
	>
		<!-- Visualization Container -->
		<div class="relative flex max-w-full items-center justify-center bg-gray-50/50 py-10">
			{#if visualization === "visibility"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #3b82f6 0%, transparent 70%);"
					></div>
				</div>
				<!-- Organizational Visibility: Enhanced hierarchical view with depth -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Organization tree structure -->
							<div class="flex flex-col items-center space-y-4">
								<!-- Top level with glow -->
								<div class="relative flex items-center justify-center">
									<div
										class="relative h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30"
										style="border-radius: var(--radius-lg);"
									>
										<!-- Inner light -->
										<div
											class="absolute inset-1 bg-white opacity-20"
											style="border-radius: var(--radius-md);"
										></div>
									</div>
									<!-- Pulse effect -->
									<div
										class="absolute h-12 w-12 animate-ping bg-blue-400 opacity-20"
										style="border-radius: var(--radius-lg);"
									></div>
								</div>

								<!-- Enhanced connections -->
								<div class="relative flex h-8 w-full items-center justify-center">
									<div
										class="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
									></div>
									<div
										class="absolute left-1/2 h-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-400 to-blue-300"
									></div>
									<!-- Connection nodes -->
									<div
										class="absolute top-0 left-1/2 h-1 w-1 -translate-x-1/2 bg-blue-400"
										style="border-radius: var(--radius-full);"
									></div>
									<div
										class="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 bg-blue-400"
										style="border-radius: var(--radius-full);"
									></div>
								</div>

								<!-- Second level with shadows -->
								<div class="flex items-center space-x-12">
									<div
										class="h-9 w-9 bg-gradient-to-br from-blue-300 to-blue-500 shadow-md shadow-blue-500/20"
										style="border-radius: var(--radius-md);"
									>
										<div
											class="h-full w-full bg-white opacity-10"
											style="border-radius: var(--radius-md);"
										></div>
									</div>
									<div
										class="h-9 w-9 bg-gradient-to-br from-blue-300 to-blue-500 shadow-md shadow-blue-500/20"
										style="border-radius: var(--radius-md);"
									>
										<div
											class="h-full w-full bg-white opacity-10"
											style="border-radius: var(--radius-md);"
										></div>
									</div>
									<div
										class="h-9 w-9 bg-gradient-to-br from-blue-300 to-blue-500 shadow-md shadow-blue-500/20"
										style="border-radius: var(--radius-md);"
									>
										<div
											class="h-full w-full bg-white opacity-10"
											style="border-radius: var(--radius-md);"
										></div>
									</div>
								</div>

								<!-- Enhanced bottom connections -->
								<div class="flex items-start space-x-12">
									{#each Array(3) as _}
										<div class="flex flex-col items-center">
											<div class="h-4 w-0.5 bg-gradient-to-b from-blue-300 to-blue-200"></div>
											<div class="mt-1 flex space-x-2">
												<div
													class="h-2.5 w-2.5 bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm shadow-blue-500/15"
													style="border-radius: var(--radius-sm);"
												></div>
												<div
													class="h-2.5 w-2.5 bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm shadow-blue-500/15"
													style="border-radius: var(--radius-sm);"
												></div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Complete visibility</div>
						<div
							class="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Every level connected
						</div>
					</div>
				</div>
			{:else if visualization === "misalignment"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #fb923c 0%, transparent 70%);"
					></div>
				</div>
				<!-- Stay Ahead of Misalignment: Enhanced drift visualization with motion -->
				<div class="relative flex h-full w-full flex-col p-8">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Team alignment visualization -->
							<div class="flex items-center justify-center space-x-10">
								<!-- Left side: Misaligned state with enhanced visuals -->
								<div class="relative">
									<div class="space-y-2">
										<!-- Team members drifting apart with gradients and shadows -->
										<div class="flex space-x-1">
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-gray-200 to-gray-400 opacity-60 shadow-sm shadow-gray-500/30"
												style="border-radius: var(--radius-sm); transform: rotate(12deg);"
											></div>
											<div
												class="h-3.5 w-3.5 translate-x-1 bg-gradient-to-br from-gray-200 to-gray-400 opacity-70 shadow-sm shadow-gray-500/30"
												style="border-radius: var(--radius-sm); transform: rotate(-8deg);"
											></div>
											<div
												class="h-3.5 w-3.5 translate-x-2 bg-gradient-to-br from-gray-200 to-gray-400 opacity-50 shadow-sm"
												style="border-radius: var(--radius-sm); transform: rotate(20deg);"
											></div>
										</div>
										<div class="flex space-x-1">
											<div
												class="h-3.5 w-3.5 -translate-x-1 bg-gradient-to-br from-gray-200 to-gray-400 opacity-80 shadow-sm"
												style="border-radius: var(--radius-sm); transform: rotate(-15deg);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-gray-200 to-gray-400 opacity-60 shadow-sm shadow-gray-500/30"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 translate-x-3 bg-gradient-to-br from-gray-200 to-gray-400 opacity-40 shadow-sm"
												style="border-radius: var(--radius-sm); transform: rotate(30deg);"
											></div>
										</div>
										<div class="flex space-x-1">
											<div
												class="h-3.5 w-3.5 translate-x-1 bg-gradient-to-br from-gray-200 to-gray-400 opacity-50 shadow-sm"
												style="border-radius: var(--radius-sm); transform: rotate(-25deg);"
											></div>
											<div
												class="h-3.5 w-3.5 -translate-x-2 bg-gradient-to-br from-gray-200 to-gray-400 opacity-70 shadow-sm"
												style="border-radius: var(--radius-sm); transform: rotate(10deg);"
											></div>
											<div
												class="h-3.5 w-3.5 translate-x-2 bg-gradient-to-br from-gray-200 to-gray-400 opacity-60 shadow-sm"
												style="border-radius: var(--radius-sm); transform: rotate(-5deg);"
											></div>
										</div>
									</div>
								</div>

								<!-- Center: Enhanced arrow with gradient -->
								<div class="relative flex items-center">
									<div
										class="h-0.5 w-16 bg-gradient-to-r from-gray-300 via-orange-300 to-orange-400"
									></div>
									<div
										class="absolute left-0 h-1 w-1 bg-gray-300"
										style="border-radius: var(--radius-full);"
									></div>
									<div
										class="absolute right-0 h-1 w-1 bg-orange-400"
										style="border-radius: var(--radius-full);"
									></div>
									<div class="ml-1">
										<svg class="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24">
											<path stroke="currentColor" stroke-width="2.5" d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>

								<!-- Right side: Aligned state with enhanced visuals -->
								<div class="relative">
									<div class="space-y-2">
										<!-- Team members perfectly aligned with gradients -->
										<div class="flex space-x-1.5">
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<div class="flex space-x-1.5">
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<div class="flex space-x-1.5">
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
											<div
												class="h-3.5 w-3.5 bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/25"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Preventing drift saves</div>
						<div
							class="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-lg font-medium text-transparent"
						>
							$100k+/year
						</div>
					</div>
				</div>
			{:else if visualization === "culture"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #a855f7 0%, transparent 70%);"
					></div>
				</div>
				<!-- Drive Company Culture at Scale: Enhanced pulse visualization -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Culture pulse visualization with enhanced visuals -->
							<div class="flex h-32 items-end justify-center space-x-2">
								{#each Array(9) as _, i}
									{@const heights = [20, 40, 60, 80, 100, 80, 60, 40, 20]}
									{@const isCenter = i === 4}
									{@const isNearCenter = i === 3 || i === 5}
									<div class="relative">
										<div
											class={[
												"w-3.5 shadow-sm transition-all",
												isCenter
													? "bg-gradient-to-t from-purple-600 to-purple-400"
													: isNearCenter
														? "bg-gradient-to-t from-purple-200 to-purple-100"
														: "bg-gradient-to-t from-gray-300 to-gray-200"
											]}
											style="height: {heights[i] *
												1.2}px; border-radius: var(--radius-sm) var(--radius-sm) 0 0;"
										>
											<!-- Inner glow for center bar -->
											{#if isCenter}
												<div
													class="absolute inset-x-0 top-0 h-2 bg-purple-300 opacity-50"
													style="border-radius: var(--radius-sm);"
												></div>
											{/if}
										</div>
										<!-- Base platform -->
										<div
											class={[
												"h-1 w-3.5",
												isCenter ? "bg-purple-500" : isNearCenter ? "bg-purple-200" : "bg-gray-200"
											]}
										></div>
										<!-- Reflection effect -->
										<div
											class={[
												"h-4 w-3.5 opacity-10",
												isCenter
													? "bg-gradient-to-b from-purple-500 to-transparent"
													: "bg-gradient-to-b from-gray-300 to-transparent"
											]}
										></div>
									</div>
								{/each}
							</div>

							<!-- Pulse animation ring for center -->
							<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
								<div
									class="h-24 w-24 animate-ping rounded-full border border-purple-300 opacity-20"
								></div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Culture alignment</div>
						<div
							class="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Real-time insights
						</div>
					</div>
				</div>
			{:else if visualization === "onboarding"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #3b82f6 0%, transparent 70%);"
					></div>
				</div>
				<!-- Simplify Onboarding: Enhanced connection visualization with journey -->
				<div class="relative flex h-full w-full flex-col p-8">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Journey path with enhanced steps -->
							<div class="flex items-center space-x-4">
								<!-- Starting point - new hire -->
								<div class="relative">
									<div
										class="h-6 w-6 border-2 border-white bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm shadow-gray-500/25"
										style="border-radius: var(--radius-lg);"
									></div>
									<!-- Person icon indicator -->
									<div class="absolute inset-0 flex items-center justify-center">
										<div
											class="h-2 w-2 bg-gray-500 opacity-60"
											style="border-radius: var(--radius-full);"
										></div>
									</div>
									<!-- Label -->
									<div class="absolute -bottom-6 left-1/2 -translate-x-1/2">
										<span class="text-xs text-gray-400">New</span>
									</div>
								</div>

								<!-- Enhanced progress path -->
								<div class="flex items-center space-x-1">
									<!-- First connection -->
									<div class="h-0.5 w-8 bg-gradient-to-r from-gray-300 to-blue-300"></div>
									<div class="relative">
										<div
											class="h-3 w-3 bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm"
											style="border-radius: var(--radius-sm);"
										></div>
										<div
											class="absolute inset-0 bg-white opacity-30"
											style="border-radius: var(--radius-sm);"
										></div>
									</div>

									<!-- Second connection -->
									<div class="h-0.5 w-8 bg-gradient-to-r from-blue-300 to-blue-400"></div>
									<div class="relative">
										<div
											class="h-4 w-4 bg-gradient-to-br from-blue-300 to-blue-500 shadow-md"
											style="border-radius: var(--radius-md);"
										></div>
										<div
											class="absolute inset-0.5 bg-white opacity-20"
											style="border-radius: var(--radius-sm);"
										></div>
									</div>

									<!-- Final connection -->
									<div class="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-blue-500"></div>
								</div>

								<!-- Fully integrated state -->
								<div class="relative">
									<div
										class="h-10 w-10 bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30"
										style="border-radius: var(--radius-xl);"
									>
										<!-- Inner glow -->
										<div
											class="absolute inset-1 bg-white opacity-30"
											style="border-radius: var(--radius-lg);"
										></div>
									</div>
									<!-- Success pulse -->
									<div
										class="absolute inset-0 animate-ping bg-blue-400 opacity-20"
										style="border-radius: var(--radius-xl);"
									></div>
									<!-- Productivity indicator -->
									<div
										class="absolute -top-1 -right-1 h-4 w-4 border-2 border-white bg-gradient-to-br from-green-400 to-green-600 shadow-sm shadow-green-500/25"
										style="border-radius: var(--radius-md);"
									>
										<div
											class="absolute inset-0.5 bg-white opacity-30"
											style="border-radius: var(--radius-sm);"
										></div>
									</div>
									<!-- Label -->
									<div class="absolute -bottom-6 left-1/2 -translate-x-1/2">
										<span class="text-xs font-medium text-blue-600">Productive</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Time to productivity</div>
						<div class="inline-flex items-center space-x-3">
							<div class="text-lg font-medium text-gray-400 line-through">Days</div>
							<svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
							<div
								class="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-lg font-medium text-transparent"
							>
								Hours
							</div>
						</div>
					</div>
				</div>
			{:else if visualization === "meetings"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #10b981 0%, transparent 70%);"
					></div>
				</div>
				<!-- Reduce Unnecessary Meetings: Enhanced calendar with depth -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Calendar header -->
							<div class="mb-2 text-center">
								<div
									class="inline-flex items-center space-x-2 bg-gray-50 px-3 py-1"
									style="border-radius: var(--radius-lg);"
								>
									<div class="h-2 w-2 bg-green-500" style="border-radius: var(--radius-full);"></div>
									<span class="text-xs font-medium text-gray-600">Meeting Optimization</span>
								</div>
							</div>

							<!-- Enhanced calendar grid -->
							<div class="grid grid-cols-7 gap-1.5">
								{#each Array(28) as _, i}
									{@const hasMeeting =
										i === 3 || i === 8 || i === 10 || i === 15 || i === 18 || i === 22 || i === 25}
									{@const isUnnecessary = i === 3 || i === 10 || i === 18 || i === 25}
									<div
										class="relative h-8 w-8 border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
										style="border-radius: var(--radius-md);"
									>
										{#if hasMeeting}
											<!-- Enhanced meeting indicator -->
											<div class="absolute inset-0 flex items-center justify-center">
												<div
													class={[
														"h-5 w-5 shadow-sm",
														isUnnecessary
															? "bg-gradient-to-br from-gray-100 to-gray-300"
															: "bg-gradient-to-br from-green-400 to-green-600"
													]}
													style="border-radius: var(--radius-sm);"
												>
													<!-- Inner highlight for necessary meetings -->
													{#if !isUnnecessary}
														<div
															class="absolute inset-1 bg-white opacity-20"
															style="border-radius: var(--radius-xs);"
														></div>
													{/if}
												</div>
												{#if isUnnecessary}
													<!-- Enhanced strike-through with shadow -->
													<div class="absolute inset-0 flex items-center justify-center">
														<div
															class="h-0.5 w-7 rotate-45 bg-gradient-to-r from-red-400 to-red-600 shadow-sm shadow-red-500/25"
														></div>
													</div>
												{/if}
											</div>
										{:else}
											<!-- Empty day subtle indicator -->
											<div class="absolute inset-0 flex items-center justify-center">
												<div
													class="h-1 w-1 bg-gray-200 opacity-30"
													style="border-radius: var(--radius-full);"
												></div>
											</div>
										{/if}
									</div>
								{/each}
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Time reclaimed</div>
						<div class="inline-flex items-center space-x-2">
							<div
								class="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-lg font-medium text-transparent"
							>
								5+ hours/week
							</div>
							<div
								class="h-1.5 w-1.5 animate-pulse bg-green-500"
								style="border-radius: var(--radius-full);"
							></div>
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
		<div class="flex-1 space-y-6 p-10">
			<h3 class="text-title3 font-semibold text-gray-900">
				{title}
			</h3>

			<p class="text-callout leading-relaxed text-gray-600">
				{description}
			</p>
		</div>
	</div>
</div>
