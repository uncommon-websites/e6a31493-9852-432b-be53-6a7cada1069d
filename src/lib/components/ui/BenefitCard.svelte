<script lang="ts">
	import type { ComponentType } from "svelte"

	// Icons
	import IconBrain from "~icons/lucide/brain"
	import IconEye from "~icons/lucide/eye"
	import IconTarget from "~icons/lucide/target"
	import IconGitBranch from "~icons/lucide/git-branch"
	import IconRadar from "~icons/lucide/radar"
	import IconAlertTriangle from "~icons/lucide/alert-triangle"
	import IconDatabase from "~icons/lucide/database"
	import IconNetwork from "~icons/lucide/network"
	import IconShield from "~icons/lucide/shield"
	import IconUsers from "~icons/lucide/users"
	import IconCalendarX from "~icons/lucide/calendar-x"
	import IconUserPlus from "~icons/lucide/user-plus"
	import IconTrendingUp from "~icons/lucide/trending-up"
	import IconZap from "~icons/lucide/zap"
	import IconMessageSquare from "~icons/lucide/message-square"
	import IconFileText from "~icons/lucide/file-text"
	import IconGlobe from "~icons/lucide/globe"
	import IconLayers from "~icons/lucide/layers"
	import IconActivity from "~icons/lucide/activity"

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
		class="relative flex min-h-[400px] w-full flex-col overflow-hidden p-10 bg-white border border-gray-200"
		style="border-radius: var(--radius-2xl);"
	>
		<!-- Visualization Container -->
		<div class="mb-8 flex aspect-video items-center justify-center">
			{#if visualization === "visibility"}
				<!-- Organizational Visibility Visualization - Center Eye Only -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Central Eye with Enhanced Design -->
					<div
						class="bg-primary-100 text-primary-600 ring-primary-50 relative z-20 flex h-20 w-20 items-center justify-center ring-4"
						style="border-radius: var(--radius-xl);"
					>
						<IconEye class="h-10 w-10" />
						<!-- Subtle background accent -->
						<div class="bg-primary-200 absolute inset-0 opacity-20" style="border-radius: var(--radius-xl);"></div>
					</div>

					<!-- Organizational Layers - Concentric Circles -->
					<div class="border-primary-200 absolute h-32 w-32 border-2 opacity-30" style="border-radius: var(--radius-2xl);"></div>
					<div class="border-primary-200 absolute h-44 w-44 border opacity-20" style="border-radius: var(--radius-3xl);"></div>
					<div class="border-primary-200 absolute h-56 w-56 border opacity-10" style="border-radius: var(--radius-4xl);"></div>
				</div>
			{:else if visualization === "misalignment"}
				<!-- Smoke Before Fire - Vigilant Eye Detection -->
				<div class="relative flex items-center justify-center">
					<!-- Central eye icon - vigilant observer -->
					<div
						class="relative z-10 flex h-20 w-20 items-center justify-center bg-orange-50 text-orange-600 ring-2 ring-orange-100"
						style="border-radius: var(--radius-xl);"
					>
						<IconEye class="h-10 w-10" />
						<!-- Vigilant monitoring accent -->
						<div class="absolute inset-0 bg-orange-200 opacity-25" style="border-radius: var(--radius-xl);"></div>
					</div>

					<!-- Smoke wisp - early warning signs (left side) -->
					<div class="absolute top-1/2 -left-12 -translate-y-1/2 transform">
						<!-- Main smoke particle -->
						<div class="relative">
							<div class="h-3 w-3 bg-gray-400 opacity-40" style="border-radius: var(--radius);"></div>
							<!-- Smaller smoke particles rising -->
							<div class="absolute -top-2 left-1 h-1 w-1 bg-gray-300 opacity-30" style="border-radius: var(--radius-xs);"></div>
							<div class="absolute -top-4 -left-1 h-1 w-1 bg-gray-200 opacity-20" style="border-radius: var(--radius-xs);"></div>
						</div>
					</div>

					<!-- Clarity zone - prevention success (right side) -->
					<div class="absolute top-1/2 -right-12 -translate-y-1/2 transform">
						<div class="h-4 w-4 bg-green-400 opacity-50" style="border-radius: var(--radius);"></div>
						<!-- Success indicator -->
						<div class="absolute -top-1 -right-1 h-2 w-2 bg-green-500 opacity-30" style="border-radius: var(--radius-sm);"></div>
					</div>

					<!-- Detection beam - from smoke to clarity -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<!-- Gradient showing transformation from problem to solution -->
						<div
							class="h-px w-24 bg-gradient-to-r from-gray-400 via-orange-400 to-green-400 opacity-60"
						></div>
						
						<!-- Detection point in center -->
						<div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform bg-orange-500 opacity-70" style="border-radius: var(--radius-sm);"></div>
					</div>

					<!-- Watchful monitoring arc -->
					<div
						class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform"
					>
						<div
							class="h-full w-full border-r-2 border-orange-300 opacity-20"
							style="border-radius: var(--radius-2xl);"
						></div>
					</div>
				</div>
			{:else if visualization === "onboarding"}
				<!-- Onboarding: Connecting to Organizational Network -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Left side: Individual user -->
					<div class="absolute left-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600 ring-2 ring-blue-100"
							style="border-radius: var(--radius-lg);"
						>
							<IconUsers class="h-6 w-6" />
							<!-- Subtle accent to show "joining" -->
							<div class="absolute inset-0 bg-blue-200 opacity-30" style="border-radius: var(--radius-lg);"></div>
						</div>
					</div>

					<!-- Right side: Organizational network -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-16 w-16 items-center justify-center bg-blue-100 text-blue-600 ring-2 ring-blue-50"
							style="border-radius: var(--radius-xl);"
						>
							<IconNetwork class="h-8 w-8" />
							<!-- Network activity indicator -->
							<div class="absolute inset-0 bg-blue-300 opacity-20" style="border-radius: var(--radius-xl);"></div>
						</div>
					</div>

					<!-- Connection bridge/beam -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<!-- Main connection line -->
						<div
							class="h-px w-32 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-60"
						></div>
						
						<!-- Static data flow indicators -->
						<div class="absolute top-0 left-4 h-px w-2 bg-blue-500 opacity-80"></div>
						<div class="absolute top-0 left-12 h-px w-2 bg-blue-500 opacity-80"></div>
						<div class="absolute top-0 left-20 h-px w-2 bg-blue-500 opacity-80"></div>
						
						<!-- Connection point in center -->
						<div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform bg-blue-500 opacity-70" style="border-radius: var(--radius-sm);"></div>
					</div>

					<!-- Integration success indicator -->
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
						<div class="h-1 w-1 bg-green-500 opacity-60" style="border-radius: var(--radius-xs);"></div>
					</div>
				</div>
			{:else if visualization === "meetings"}
				<!-- Meetings: Signal Through Noise -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Left side: Radar (Primary - Proactive Detection) -->
					<div class="absolute left-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-16 w-16 items-center justify-center bg-green-50 text-green-600 ring-2 ring-green-100"
							style="border-radius: var(--radius-xl);"
						>
							<IconRadar class="h-8 w-8" />
							<!-- Static background accent -->
							<div class="absolute inset-0 bg-green-200 opacity-30" style="border-radius: var(--radius-xl);"></div>
							<!-- Static scan line -->
							<div class="absolute inset-0 border-r-2 border-green-400 opacity-40" style="border-radius: var(--radius-xl);"></div>
						</div>
					</div>

					<!-- Right side: Target (Secondary - Focused Alignment) -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-12 w-12 items-center justify-center bg-green-100 text-green-600 ring-2 ring-green-50"
							style="border-radius: var(--radius-lg);"
						>
							<IconTarget class="h-6 w-6" />
							<!-- Static target accent -->
							<div class="absolute inset-0 bg-green-300 opacity-20" style="border-radius: var(--radius-lg);"></div>
						</div>
					</div>

					<!-- Signal beam connecting radar to target -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<!-- Main signal beam -->
						<div
							class="h-px w-32 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-70"
						></div>
						
						<!-- Static signal indicators -->
						<div class="absolute top-0 left-6 h-px w-3 bg-green-500 opacity-90"></div>
						<div class="absolute top-0 left-14 h-px w-3 bg-green-500 opacity-90"></div>
						<div class="absolute top-0 left-22 h-px w-3 bg-green-500 opacity-90"></div>
						
						<!-- Signal lock point -->
						<div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform bg-green-600 opacity-80" style="border-radius: var(--radius-sm);"></div>
					</div>

					<!-- Noise clearing indicators (subtle scattered elements being organized) -->
					<!-- First dot removed -->
					<!-- Second dot removed -->
					<!-- Third dot removed -->

					<!-- Success indicator - clear signal achieved -->
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
						<div class="h-1 w-1 bg-green-600 opacity-70" style="border-radius: var(--radius-xs);"></div>
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
