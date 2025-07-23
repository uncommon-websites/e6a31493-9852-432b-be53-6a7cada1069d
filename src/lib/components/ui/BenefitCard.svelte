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
					icon: IconUserPlus,
					bgColor: "bg-blue-100",
					textColor: "text-blue-600",
					supportIcons: [IconBrain, IconDatabase, IconGitBranch]
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
		class="relative flex min-h-[400px] w-full flex-col overflow-hidden rounded-3xl bg-white p-10"
	>
		<!-- Visualization Container -->
		<div class="mb-8 flex aspect-video items-center justify-center">
			{#if visualization === "visibility"}
				<!-- Organizational Visibility Visualization - Center Eye Only -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Central Eye with Enhanced Design -->
					<div
						class="bg-primary-100 text-primary-600 ring-primary-50 relative z-20 flex h-20 w-20 items-center justify-center rounded-full ring-4"
					>
						<IconEye class="h-10 w-10" />
						<!-- Subtle pulse animation -->
						<div class="bg-primary-200 absolute inset-0 animate-ping rounded-full opacity-20"></div>
					</div>

					<!-- Organizational Layers - Concentric Circles -->
					<div class="border-primary-200 absolute h-32 w-32 rounded-full border-2 opacity-30"></div>
					<div class="border-primary-200 absolute h-44 w-44 rounded-full border opacity-20"></div>
					<div class="border-primary-200 absolute h-56 w-56 rounded-full border opacity-10"></div>
				</div>
			{:else if visualization === "misalignment"}
				<!-- Stay Ahead of Misalignment - Simple Single Icon Visualization -->
				<div class="relative flex items-center justify-center">
					<!-- Central radar icon with enhanced presence -->
					<div
						class="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-2 ring-orange-50"
					>
						<IconRadar class="h-10 w-10" />

						<!-- Subtle scanning animation -->
						<div class="absolute inset-0 animate-pulse rounded-full bg-orange-200 opacity-20"></div>
					</div>

					<!-- "Ahead" visualization - Timeline concept -->
					<!-- Past (left) - faded -->
					<div class="absolute top-1/2 -left-16 -translate-y-1/2 transform">
						<div class="h-2 w-2 rounded-full bg-gray-300 opacity-40"></div>
					</div>

					<!-- Present (center) - current position -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<div class="h-1 w-1 rounded-full bg-orange-500 opacity-80"></div>
					</div>

					<!-- Future (right) - where problems would occur -->
					<div class="absolute top-1/2 -right-16 -translate-y-1/2 transform">
						<div class="h-3 w-3 animate-pulse rounded-full bg-red-400 opacity-60"></div>
						<!-- Small warning indicator -->
						<div class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 opacity-40"></div>
					</div>

					<!-- Detection beam - showing radar "seeing ahead" -->
					<div
						class="absolute top-1/2 left-1/2 h-px w-20 -translate-y-1/2 transform bg-gradient-to-r from-orange-400 to-red-400 opacity-50"
					></div>

					<!-- Scanning arc - subtle indicator of proactive detection -->
					<div
						class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform"
					>
						<div
							class="h-full w-full animate-spin rounded-full border-r-2 border-orange-300 opacity-30"
							style="animation-duration: 3s;"
						></div>
					</div>
				</div>
			{:else}
				<!-- Default visualization for other types -->
				<div class="relative flex items-center justify-center">
					<!-- Central icon -->
					<div
						class={[
							"relative z-10 flex h-16 w-16 items-center justify-center rounded-full",
							visualConfig.bgColor,
							visualConfig.textColor
						]}
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
								"absolute flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60",
								positions[index] || positions[0]
							]}
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
