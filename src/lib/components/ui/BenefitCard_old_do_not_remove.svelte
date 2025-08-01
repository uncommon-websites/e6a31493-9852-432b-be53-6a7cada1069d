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
	import IconCalendar from "~icons/lucide/calendar"
	import IconGithub from "~icons/lucide/github"
	import IconClipboardList from "~icons/lucide/clipboard-list"
	import IconFileText from "~icons/lucide/file-text"
	import IconMessageSquare from "~icons/lucide/message-square"
	import IconBookOpen from "~icons/lucide/book-open"
	import IconRocket from "~icons/lucide/rocket"
	import IconMail from "~icons/lucide/mail"
	// DataAggregationAnimation component removed - using SVG instead

	type Props = {
		title: string
		description: string
		visualization:
			| "visibility"
			| "misalignment"
			| "culture"
			| "meetings"
			| "onboarding"
			| "future"
			| "memory"
			| "vision"
			| "detection"
			| "knowledge_assembly"
			| "strategic_compass"
			| "early_warning"
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
							<div class="flex flex-col items-center space-y-2">
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
								<div class="relative flex h-4 w-full items-center justify-center">
									<div
										class="absolute h-0.5 w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
									></div>
									<div
										class="absolute left-1/2 h-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-400 to-blue-300"
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
											<div class="h-2 w-0.5 bg-gradient-to-b from-blue-300 to-blue-200"></div>
											<div class="flex space-x-4">
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
									<div class="space-y-4">
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
									<div class="space-y-4">
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
							<div class="flex h-32 items-end justify-center space-x-4">
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
									class="h-24 w-24 animate-ping border border-purple-300 opacity-20"
									style="border-radius: var(--radius-full);"
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
									class="inline-flex items-center space-x-4 bg-gray-50 px-3 py-1"
									style="border-radius: var(--radius-lg);"
								>
									<div
										class="h-2 w-2 bg-green-500"
										style="border-radius: var(--radius-full);"
									></div>
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
						<div class="inline-flex items-center space-x-4">
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
			{:else if visualization === "memory"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #3b82f6 0%, transparent 70%);"
					></div>
				</div>
				<!-- Memory Building Visualization -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Central memory core -->
							<div class="relative flex items-center justify-center">
								<div
									class="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/30"
								>
									<!-- Inner neural pattern -->
									<div class="absolute inset-2 flex items-center justify-center">
										<div class="grid grid-cols-3 gap-0.5">
											{#each Array(9) as _, i}
												<div
													class="h-1 w-1 bg-white opacity-60"
													style="border-radius: var(--radius-full);"
												></div>
											{/each}
										</div>
									</div>
									<!-- Pulse effect -->
									<div
										class="absolute inset-0 animate-ping rounded-2xl bg-blue-400 opacity-20"
									></div>
								</div>
							</div>

							<!-- Data streams flowing in -->
							<div class="absolute inset-0">
								<!-- Top left stream -->
								<div class="absolute -top-4 -left-16">
									<div class="flex items-center space-x-1">
										<div class="flex space-x-0.5">
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 0s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 0.2s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 0.4s;"
											></div>
										</div>
										<div class="h-0.5 w-10 bg-gradient-to-r from-blue-300 to-blue-400"></div>
										<div
											class="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm shadow-blue-500/20"
										>
											<div
												class="absolute inset-1 bg-white opacity-20"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
									</div>
								</div>

								<!-- Top right stream -->
								<div class="absolute -top-4 -right-16">
									<div class="flex items-center space-x-1">
										<div
											class="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm shadow-blue-500/20"
										>
											<div
												class="absolute inset-1 bg-white opacity-20"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<div class="h-0.5 w-10 bg-gradient-to-l from-blue-300 to-blue-400"></div>
										<div class="flex space-x-0.5">
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 0.6s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 0.8s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 1s;"
											></div>
										</div>
									</div>
								</div>

								<!-- Bottom left stream -->
								<div class="absolute -bottom-4 -left-16">
									<div class="flex items-center space-x-1">
										<div class="flex space-x-0.5">
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 1.2s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 1.4s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 1.6s;"
											></div>
										</div>
										<div class="h-0.5 w-10 bg-gradient-to-r from-blue-300 to-blue-400"></div>
										<div
											class="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm shadow-blue-500/20"
										>
											<div
												class="absolute inset-1 bg-white opacity-20"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
									</div>
								</div>

								<!-- Bottom right stream -->
								<div class="absolute -right-16 -bottom-4">
									<div class="flex items-center space-x-1">
										<div
											class="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 shadow-sm shadow-blue-500/20"
										>
											<div
												class="absolute inset-1 bg-white opacity-20"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<div class="h-0.5 w-10 bg-gradient-to-l from-blue-300 to-blue-400"></div>
										<div class="flex space-x-0.5">
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 1.8s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 2s;"
											></div>
											<div
												class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300"
												style=" animation-delay: 2.2s;"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Building knowledge</div>
						<div
							class="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Connected memory
						</div>
					</div>
				</div>
			{:else if visualization === "vision"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #a855f7 0%, transparent 70%);"
					></div>
				</div>
				<!-- Vision Clarification: Enhanced lens effect -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Lens system showing focus clarity -->
							<div class="relative flex items-center justify-center">
								<!-- Central focusing lens -->
								<div
									class="relative h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/30"
								>
									<!-- Inner lens reflection -->
									<div
										class="absolute inset-2 bg-white opacity-30"
										style="border-radius: var(--radius-full);"
									></div>
									<!-- Center focus point -->
									<div class="absolute inset-0 flex items-center justify-center">
										<div
											class="h-2 w-2 bg-white opacity-80"
											style="border-radius: var(--radius-full);"
										></div>
									</div>
									<!-- Lens rings -->
									<div
										class="absolute inset-0 border-2 border-white opacity-20"
										style="border-radius: var(--radius-full);"
									></div>
									<div
										class="absolute inset-1 border border-white opacity-15"
										style="border-radius: var(--radius-full);"
									></div>
								</div>

								<!-- Concentric vision layers -->
								<div
									class="absolute h-20 w-20 border-2 border-purple-300 opacity-30"
									style="border-radius: var(--radius-full);"
								></div>
								<div
									class="absolute h-28 w-28 border border-purple-300 opacity-20"
									style="border-radius: var(--radius-full);"
								></div>
								<div
									class="absolute h-36 w-36 border border-purple-300 opacity-10"
									style="border-radius: var(--radius-full);"
								></div>
							</div>

							<!-- Focus targets around the lens -->
							<div class="absolute inset-0">
								<!-- Top target -->
								<div class="absolute -top-8 left-1/2 -translate-x-1/2">
									<div class="relative">
										<div
											class="h-4 w-4 bg-gradient-to-br from-purple-300 to-purple-500 shadow-sm shadow-purple-500/25"
											style="border-radius: var(--radius-md);"
										>
											<div
												class="absolute inset-0.5 bg-white opacity-30"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<!-- Focus beam -->
										<div
											class="absolute top-4 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-300 to-transparent"
										></div>
									</div>
								</div>

								<!-- Bottom target -->
								<div class="absolute -bottom-8 left-1/2 -translate-x-1/2">
									<div class="relative">
										<div
											class="h-4 w-4 bg-gradient-to-br from-purple-300 to-purple-500 shadow-sm shadow-purple-500/25"
											style="border-radius: var(--radius-md);"
										>
											<div
												class="absolute inset-0.5 bg-white opacity-30"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<!-- Focus beam -->
										<div
											class="absolute bottom-4 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-gradient-to-t from-purple-300 to-transparent"
										></div>
									</div>
								</div>

								<!-- Left target -->
								<div class="absolute top-1/2 -left-8 -translate-y-1/2">
									<div class="relative">
										<div
											class="h-4 w-4 bg-gradient-to-br from-purple-300 to-purple-500 shadow-sm shadow-purple-500/25"
											style="border-radius: var(--radius-md);"
										>
											<div
												class="absolute inset-0.5 bg-white opacity-30"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<!-- Focus beam -->
										<div
											class="absolute top-1/2 left-4 h-0.5 w-4 -translate-y-1/2 bg-gradient-to-r from-purple-300 to-transparent"
										></div>
									</div>
								</div>

								<!-- Right target -->
								<div class="absolute top-1/2 -right-8 -translate-y-1/2">
									<div class="relative">
										<div
											class="h-4 w-4 bg-gradient-to-br from-purple-300 to-purple-500 shadow-sm shadow-purple-500/25"
											style="border-radius: var(--radius-md);"
										>
											<div
												class="absolute inset-0.5 bg-white opacity-30"
												style="border-radius: var(--radius-sm);"
											></div>
										</div>
										<!-- Focus beam -->
										<div
											class="absolute top-1/2 right-4 h-0.5 w-4 -translate-y-1/2 bg-gradient-to-l from-purple-300 to-transparent"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Perfect clarity</div>
						<div
							class="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Vision focused
						</div>
					</div>
				</div>
			{:else if visualization === "detection"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #f59e0b 0%, transparent 70%);"
					></div>
				</div>
				<!-- Radar Detection System -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Radar sweep visualization -->
							<div class="relative flex items-center justify-center">
								<!-- Central radar hub -->
								<div
									class="relative h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30"
								>
									<!-- Pulse effect -->
									<div
										class="absolute inset-0 animate-ping bg-orange-400 opacity-20"
										style="border-radius: var(--radius-full);"
									></div>
									<!-- Inner radar core -->
									<div class="absolute inset-0 flex items-center justify-center">
										<div
											class="h-2 w-2 bg-white opacity-90"
											style="border-radius: var(--radius-full);"
										></div>
									</div>
								</div>

								<!-- Radar rings -->
								<div
									class="absolute h-20 w-20 border-2 border-orange-300 opacity-30"
									style="border-radius: var(--radius-full);"
								></div>
								<div
									class="absolute h-32 w-32 border border-orange-300 opacity-20"
									style="border-radius: var(--radius-full);"
								></div>
								<div
									class="absolute h-44 w-44 border border-orange-300 opacity-10"
									style="border-radius: var(--radius-full);"
								></div>
							</div>

							<!-- Detection points -->
							<div class="absolute inset-0">
								<!-- Healthy signals (green) -->
								<div class="absolute -top-6 -left-8">
									<div
										class="h-3 w-3 animate-pulse bg-gradient-to-br from-green-400 to-green-600 shadow-sm shadow-green-500/25"
										style="border-radius: var(--radius-full); animation-delay: 0.5s;"
									></div>
								</div>
								<div class="absolute -right-10 -bottom-4">
									<div
										class="h-3 w-3 animate-pulse bg-gradient-to-br from-green-400 to-green-600 shadow-sm shadow-green-500/25"
										style="border-radius: var(--radius-full); animation-delay: 1.2s;"
									></div>
								</div>

								<!-- Warning signals (amber) -->
								<div class="absolute -top-2 right-12">
									<div
										class="h-3.5 w-3.5 animate-pulse bg-gradient-to-br from-amber-400 to-amber-600 shadow-md shadow-amber-500/30"
										style="border-radius: var(--radius-full); animation-delay: 0.8s;"
									></div>
								</div>

								<!-- All clear indicator -->
								<div class="absolute -bottom-12 left-1/2 -translate-x-1/2">
									<div class="flex items-center space-x-1">
										<div
											class="h-2 w-2 animate-pulse bg-green-500"
											style="border-radius: var(--radius-full);"
										></div>
										<span class="text-xs font-medium text-green-600">Clear</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Early detection</div>
						<div
							class="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Problems prevented
						</div>
					</div>
				</div>
			{:else if visualization === "knowledge_assembly"}
				<!-- SVG Only -->
				<img 
					src="/uploaded/unified-knowledge.svg" 
					alt="Unified knowledge visualization" 
					class="h-32 w-auto"
				/>
			{:else if visualization === "strategic_compass"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #7c3aed 0%, transparent 70%);"
					></div>
				</div>
				<!-- Strategic Compass: Navigation finding true direction -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Enhanced Compass -->
							<div class="relative flex items-center justify-center">
								<!-- Outer compass ring -->
								<div
									class="relative h-20 w-20 rounded-full bg-gradient-to-br from-violet-300 to-violet-500 shadow-xl shadow-violet-500/40"
								>
									<!-- Inner compass face -->
									<div
										class="absolute inset-2 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-inner"
									></div>

									<!-- Compass markings -->
									<div class="absolute inset-0">
										<!-- Major direction markers -->
										<div
											class="absolute top-1 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-violet-600"
										></div>
										<div
											class="absolute bottom-1 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-violet-400"
										></div>
										<div
											class="absolute top-1/2 right-1 h-0.5 w-3 -translate-y-1/2 bg-violet-400"
										></div>
										<div
											class="absolute top-1/2 left-1 h-0.5 w-3 -translate-y-1/2 bg-violet-400"
										></div>

										<!-- Minor direction markers -->
										<div
											class="absolute top-2 right-2 h-1.5 w-0.5 rotate-45 transform bg-violet-300"
										></div>
										<div
											class="absolute top-2 left-2 h-1.5 w-0.5 -rotate-45 transform bg-violet-300"
										></div>
										<div
											class="absolute right-2 bottom-2 h-1.5 w-0.5 -rotate-45 transform bg-violet-300"
										></div>
										<div
											class="absolute bottom-2 left-2 h-1.5 w-0.5 rotate-45 transform bg-violet-300"
										></div>
									</div>

									<!-- Compass needle -->
									<div class="absolute inset-0 flex items-center justify-center">
										<div class="relative">
											<!-- North pointer (red) -->
											<div
												class="absolute -top-6 left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-t from-red-600 to-red-400 shadow-sm"
												style="animation: compass-settle 4s ease-out infinite;"
											></div>
											<!-- South pointer (white) -->
											<div
												class="absolute -bottom-6 left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-white to-gray-300 shadow-sm"
												style="animation: compass-settle 4s ease-out infinite;"
											></div>
											<!-- Center pivot -->
											<div
												class="h-3 w-3 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-md"
											>
												<div class="absolute inset-0.5 rounded-full bg-white opacity-30"></div>
											</div>
										</div>
									</div>

									<!-- Compass directions -->
									<div class="absolute inset-0">
										<!-- N -->
										<div
											class="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-violet-700"
										>
											N
										</div>
										<!-- S -->
										<div
											class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-violet-500 opacity-70"
										>
											S
										</div>
										<!-- E -->
										<div
											class="absolute top-1/2 -right-6 -translate-y-1/2 text-sm font-bold text-violet-500 opacity-70"
										>
											E
										</div>
										<!-- W -->
										<div
											class="absolute top-1/2 -left-6 -translate-y-1/2 text-sm font-bold text-violet-500 opacity-70"
										>
											W
										</div>
									</div>

									<!-- Compass rose decorative elements -->
									<div class="absolute inset-0">
										<!-- Decorative star points -->
										<div
											class="absolute top-0 left-1/2 h-1 w-0.5 -translate-x-1/2 bg-violet-400 opacity-60"
										></div>
										<div
											class="absolute bottom-0 left-1/2 h-1 w-0.5 -translate-x-1/2 bg-violet-400 opacity-60"
										></div>
										<div
											class="absolute top-1/2 right-0 h-0.5 w-1 -translate-y-1/2 bg-violet-400 opacity-60"
										></div>
										<div
											class="absolute top-1/2 left-0 h-0.5 w-1 -translate-y-1/2 bg-violet-400 opacity-60"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Through conversations</div>
						<div
							class="bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Aligned with your goals
						</div>
					</div>
				</div>
			{:else if visualization === "early_warning"}
				<!-- Subtle radial gradient background -->
				<div class="absolute inset-0">
					<div
						class="h-full w-full opacity-10"
						style="background: radial-gradient(circle at center, #dc2626 0%, transparent 70%);"
					></div>
				</div>
				<!-- Simple Radar Scanner -->
				<div class="relative flex h-full w-full flex-col">
					<!-- Main visual elements centered -->
					<div class="flex flex-1 items-center justify-center">
						<div class="relative">
							<!-- Radar scope -->
							<div class="relative flex items-center justify-center">
								<!-- Transparent radar rings -->
								<div class="absolute h-32 w-32 rounded-full border-2 border-red-300/30"></div>
								<div class="absolute h-24 w-24 rounded-full border border-red-300/40"></div>
								<div class="absolute h-16 w-16 rounded-full border border-red-300/50"></div>

								<!-- Center dot -->
								<div
									class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
								></div>

								<style>
									:root {
										--radar-duration: 8s;
									}
								</style>

								<!-- Diagonal radar sweep line -->
								<div
									class="absolute bottom-1/2 left-1/2 h-16 w-0.5 -translate-x-1/2 bg-gradient-to-t from-red-500 to-transparent"
									style="transform-origin: bottom; animation: spin var(--radar-duration) linear infinite;"
								></div>

								<!-- Radar detection dots -->
								<!-- Dot 1 - at 45 degrees (top-right) -->
								<div class="absolute top-6 right-6">
									<div
										class="size-1 origin-center rounded-full bg-red-500 opacity-0 shadow-lg shadow-red-500/50"
										style="animation: radar-detect var(--radar-duration) var(--ease-out) infinite; animation-delay: calc(var(--radar-duration) /1.65);"
									></div>
								</div>

								<!-- Dot 2 - at 135 degrees (bottom-right) -->
								<div class="absolute right-6 bottom-6">
									<div
										class="size-1 origin-center rounded-full bg-red-500 opacity-0 shadow-lg shadow-red-500/50"
										style="animation: radar-detect var(--radar-duration) var(--ease-out) infinite; animation-delay: calc(var(--radar-duration) /1.15);"
									></div>
								</div>

								<!-- Dot 3 - at 225 degrees (bottom-left) -->
								<div class="absolute bottom-6 left-6">
									<div
										class="size-1 origin-center rounded-full bg-red-500 opacity-0 shadow-lg shadow-red-500/50"
										style="animation: radar-detect var(--radar-duration) var(--ease-out) infinite; animation-delay: calc(var(--radar-duration) /.9);"
									></div>
								</div>

								<style>
									@keyframes radar-detect {
										0% {
											opacity: 0;
											transform: scale(1);
										}
										3% {
											opacity: 1;
											transform: scale(1.2);
										}
										6% {
											opacity: 0.8;
											transform: scale(1);
										}
										10% {
											opacity: 0;
											transform: scale(1);
										}
										100% {
											opacity: 0;
											transform: scale(1);
										}
									}
								</style>
							</div>
						</div>
					</div>

					<!-- Text at bottom -->
					<div class="mt-6 pb-2 text-center">
						<div class="mb-1 text-sm text-gray-500">Real-time awareness</div>
						<div
							class="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-lg font-medium text-transparent"
						>
							Conflicts spotted
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

<style>
	/* Animation keyframes for new visualizations */
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	@keyframes settle {
		0%,
		100% {
			transform: rotate(-10deg);
		}
		50% {
			transform: rotate(-5deg);
		}
	}

	@keyframes compass-settle {
		0%,
		100% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(2deg);
		}
		75% {
			transform: rotate(-1deg);
		}
	}

	@keyframes pulse-input {
		0%,
		100% {
			opacity: 0.7;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
	}

	@keyframes lighthouse-sweep {
		0% {
			transform: translateX(-50%) rotate(0deg);
		}
		100% {
			transform: translateX(-50%) rotate(360deg);
		}
	}

	@keyframes storm-approach {
		0%,
		100% {
			transform: translateX(0px);
		}
		50% {
			transform: translateX(-2px);
		}
	}

	@keyframes safe-passage {
		0%,
		100% {
			transform: translateX(0px);
		}
		50% {
			transform: translateX(4px);
		}
	}

	@keyframes document-float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-2px) rotate(1deg);
		}
	}

	@keyframes matrix-pulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 0.9;
		}
	}

	@keyframes node-healthy {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	@keyframes node-warning {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	@keyframes node-critical {
		0%,
		100% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.15);
		}
		75% {
			transform: scale(1.05);
		}
	}

	@keyframes node-recovered {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
	}

	@keyframes monitoring-sweep {
		0% {
			transform: scale(0.8);
			opacity: 0.4;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.2;
		}
		100% {
			transform: scale(1.6);
			opacity: 0;
		}
	}

	@keyframes radar-sweep {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Active states for data aggregation animation */
	.icon-active {
		color: rgb(59 130 246) !important; /* blue-500 */
	}

	.line-active-down {
		background: rgb(59 130 246); /* blue-500 */
		overflow: hidden;
	}

	.line-active-up {
		background: rgb(59 130 246); /* blue-500 */
		overflow: hidden;
	}

	.line-active-left {
		background: rgb(59 130 246); /* blue-500 */
		overflow: hidden;
	}

	.line-active-right {
		background: rgb(59 130 246); /* blue-500 */
		overflow: hidden;
	}

	.line-active-down::after {
		content: "";
		position: absolute;
		top: -100%;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, transparent, rgb(59 130 246), transparent);
		animation: flow-down 2s ease-in-out infinite;
	}

	.line-active-up::after {
		content: "";
		position: absolute;
		bottom: -100%;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, transparent, rgb(59 130 246), transparent);
		animation: flow-up 2s ease-in-out infinite;
	}

	.line-active-left::after {
		content: "";
		position: absolute;
		right: -100%;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to left, transparent, rgb(59 130 246), transparent);
		animation: flow-left 2s ease-in-out infinite;
	}

	.line-active-right::after {
		content: "";
		position: absolute;
		left: -100%;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, transparent, rgb(59 130 246), transparent);
		animation: flow-right 2s ease-in-out infinite;
	}

	@keyframes flow-down {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(200%);
		}
	}

	@keyframes flow-up {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(-200%);
		}
	}

	@keyframes flow-left {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-200%);
		}
	}

	@keyframes flow-right {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(200%);
		}
	}

	/* Cycling animation classes */
	.calendar-active {
		animation: activate-calendar 24s infinite;
	}
	.github-active {
		animation: activate-github 24s infinite;
	}
	.jira-active {
		animation: activate-jira 24s infinite;
	}
	.notion-active {
		animation: activate-notion 24s infinite;
	}
	.slack-active {
		animation: activate-slack 24s infinite;
	}
	.docs-active {
		animation: activate-docs 24s infinite;
	}
	.linear-active {
		animation: activate-linear 24s infinite;
	}
	.email-active {
		animation: activate-email 24s infinite;
	}

	/* Line activation classes */
	.calendar-line {
		animation: activate-line-calendar 24s infinite;
	}
	.github-line {
		animation: activate-line-github 24s infinite;
	}
	.jira-line {
		animation: activate-line-jira 24s infinite;
	}
	.notion-line {
		animation: activate-line-notion 24s infinite;
	}
	.slack-line {
		animation: activate-line-slack 24s infinite;
	}
	.docs-line {
		animation: activate-line-docs 24s infinite;
	}
	.linear-line {
		animation: activate-line-linear 24s infinite;
	}
	.email-line {
		animation: activate-line-email 24s infinite;
	}

	@keyframes activate-calendar {
		0%,
		8.33% {
			color: rgb(59 130 246);
		}
		8.34%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-github {
		0%,
		12.49% {
			color: rgb(156 163 175);
		}
		12.5%,
		20.83% {
			color: rgb(59 130 246);
		}
		20.84%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-jira {
		0%,
		24.99% {
			color: rgb(156 163 175);
		}
		25%,
		33.33% {
			color: rgb(59 130 246);
		}
		33.34%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-notion {
		0%,
		37.49% {
			color: rgb(156 163 175);
		}
		37.5%,
		45.83% {
			color: rgb(59 130 246);
		}
		45.84%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-slack {
		0%,
		49.99% {
			color: rgb(156 163 175);
		}
		50%,
		58.33% {
			color: rgb(59 130 246);
		}
		58.34%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-docs {
		0%,
		62.49% {
			color: rgb(156 163 175);
		}
		62.5%,
		70.83% {
			color: rgb(59 130 246);
		}
		70.84%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-linear {
		0%,
		74.99% {
			color: rgb(156 163 175);
		}
		75%,
		83.33% {
			color: rgb(59 130 246);
		}
		83.34%,
		100% {
			color: rgb(156 163 175);
		}
	}

	@keyframes activate-email {
		0%,
		87.49% {
			color: rgb(156 163 175);
		}
		87.5%,
		95.83% {
			color: rgb(59 130 246);
		}
		95.84%,
		100% {
			color: rgb(156 163 175);
		}
	}

	/* Line activation keyframes */
	@keyframes activate-line-calendar {
		0%,
		8.33% {
			background: rgb(59 130 246);
		}
		8.34%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-github {
		0%,
		12.49% {
			background: rgb(209 213 219);
		}
		12.5%,
		20.83% {
			background: rgb(59 130 246);
		}
		20.84%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-jira {
		0%,
		24.99% {
			background: rgb(209 213 219);
		}
		25%,
		33.33% {
			background: rgb(59 130 246);
		}
		33.34%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-notion {
		0%,
		37.49% {
			background: rgb(209 213 219);
		}
		37.5%,
		45.83% {
			background: rgb(59 130 246);
		}
		45.84%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-slack {
		0%,
		49.99% {
			background: rgb(209 213 219);
		}
		50%,
		58.33% {
			background: rgb(59 130 246);
		}
		58.34%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-docs {
		0%,
		62.49% {
			background: rgb(209 213 219);
		}
		62.5%,
		70.83% {
			background: rgb(59 130 246);
		}
		70.84%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-linear {
		0%,
		74.99% {
			background: rgb(209 213 219);
		}
		75%,
		83.33% {
			background: rgb(59 130 246);
		}
		83.34%,
		100% {
			background: rgb(209 213 219);
		}
	}

	@keyframes activate-line-email {
		0%,
		87.49% {
			background: rgb(209 213 219);
		}
		87.5%,
		95.83% {
			background: rgb(59 130 246);
		}
		95.84%,
		100% {
			background: rgb(209 213 219);
		}
	}
</style>
