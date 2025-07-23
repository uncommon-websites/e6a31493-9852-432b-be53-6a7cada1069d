<script lang="ts">
	// Icons
	import IconEye from "~icons/lucide/eye"
	import IconRadar from "~icons/lucide/radar"
	import IconUsers from "~icons/lucide/users"
	import IconCalendarX from "~icons/lucide/calendar-x"
	import IconTrendingUp from "~icons/lucide/trending-up"
	import IconArrowRight from "~icons/lucide/arrow-right"

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
		style="border-radius: var(--radius-2xl);"
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
				<!-- Organizational Seismograph - Early Warning System -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Chart Background Grid (Subtle) -->
					<div class="absolute inset-0 opacity-10">
						<!-- Horizontal grid lines -->
						<div class="absolute top-1/4 left-0 right-0 h-px bg-gray-300"></div>
						<div class="absolute top-1/2 left-0 right-0 h-px bg-gray-400"></div>
						<div class="absolute top-3/4 left-0 right-0 h-px bg-gray-300"></div>
						<!-- Vertical grid lines -->
						<div class="absolute top-0 bottom-0 left-1/4 w-px bg-gray-300"></div>
						<div class="absolute top-0 bottom-0 left-1/2 w-px bg-gray-400"></div>
						<div class="absolute top-0 bottom-0 left-3/4 w-px bg-gray-300"></div>
					</div>

					<!-- Central Radar Detection System -->
					<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-20">
						<div class="relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-600 ring-2 ring-orange-100">
							<IconRadar class="h-8 w-8" />
							<!-- Scanning rings -->
							<div class="absolute inset-0 animate-pulse rounded-full bg-orange-200 opacity-30"></div>
							<div class="absolute inset-0 animate-ping rounded-full bg-orange-300 opacity-20" style="animation-duration: 2s;"></div>
							<!-- Rotating scan line -->
							<div class="absolute inset-0 animate-spin rounded-full border-r-2 border-orange-500 opacity-40" style="animation-duration: 3s;"></div>
						</div>
					</div>

					<!-- Organizational Health Trend Line (SVG) -->
					<div class="absolute inset-0 z-10">
						<svg class="h-full w-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
							<!-- Healthy trend (left side) -->
							<path
								d="M20 80 Q60 70 100 75 Q120 78 140 82"
								stroke="url(#healthyGradient)"
								stroke-width="3"
								fill="none"
								stroke-linecap="round"
								opacity="0.8"
							/>
							
							<!-- Declining trend (middle to detection point) -->
							<path
								d="M140 82 Q160 88 180 100 Q200 115 220 135"
								stroke="url(#decliningGradient)"
								stroke-width="3"
								fill="none"
								stroke-linecap="round"
								opacity="0.8"
							/>
							
							<!-- Recovery trend (after detection) -->
							<path
								d="M220 135 Q240 125 260 110 Q275 100 285 95"
								stroke="url(#recoveryGradient)"
								stroke-width="3"
								fill="none"
								stroke-linecap="round"
								opacity="0.8"
								stroke-dasharray="5,3"
							/>

							<!-- Gradient definitions -->
							<defs>
								<linearGradient id="healthyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
									<stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
								</linearGradient>
								<linearGradient id="decliningGradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" style="stop-color:#059669;stop-opacity:1" />
									<stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
									<stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
								</linearGradient>
								<linearGradient id="recoveryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
									<stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
								</linearGradient>
							</defs>

							<!-- Data points -->
							<circle cx="100" cy="75" r="2" fill="#10b981" opacity="0.7">
								<animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
							</circle>
							<circle cx="140" cy="82" r="2" fill="#059669" opacity="0.7">
								<animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="0.5s" />
							</circle>
							<circle cx="180" cy="100" r="2" fill="#f59e0b" opacity="0.8">
								<animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="1s" />
							</circle>
							
							<!-- Critical Detection Point -->
							<circle cx="220" cy="135" r="4" fill="#dc2626" opacity="0.9">
								<animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
								<animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
							</circle>
							
							<!-- Recovery points -->
							<circle cx="260" cy="110" r="2" fill="#10b981" opacity="0.6">
								<animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="1.5s" />
							</circle>
						</svg>
					</div>

					<!-- Detection Alert Indicator -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform z-15">
						<div class="relative">
							<!-- Alert pulse -->
							<div class="h-3 w-3 animate-pulse rounded-full bg-red-500 opacity-80"></div>
							<div class="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-40"></div>
							<!-- Alert text indicator -->
							<div class="absolute -top-6 -left-8 text-xs font-medium text-red-600 opacity-70">
								DETECTED
							</div>
						</div>
					</div>

					<!-- Success Recovery Indicator -->
					<div class="absolute right-4 top-1/3 transform z-15">
						<div class="relative">
							<div class="h-2 w-2 animate-pulse rounded-full bg-green-500 opacity-60"></div>
							<!-- Recovery text indicator -->
							<div class="absolute -top-5 -left-6 text-xs font-medium text-green-600 opacity-60">
								PREVENTED
							</div>
						</div>
					</div>

					<!-- Ambient monitoring particles -->
					<div class="absolute top-1/4 left-1/4 h-1 w-1 animate-pulse rounded-full bg-orange-400 opacity-30" style="animation-delay: 0s; animation-duration: 3s;"></div>
					<div class="absolute top-1/3 right-1/4 h-1 w-1 animate-pulse rounded-full bg-orange-400 opacity-25" style="animation-delay: 1s; animation-duration: 4s;"></div>
					<div class="absolute bottom-1/4 left-1/3 h-1 w-1 animate-pulse rounded-full bg-orange-400 opacity-20" style="animation-delay: 2s; animation-duration: 5s;"></div>
				</div>
			{:else if visualization === "onboarding"}
				<!-- Onboarding: Connecting to Organizational Network -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Left side: Individual user -->
					<div class="absolute left-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-2 ring-blue-100"
						>
							<IconUsers class="h-6 w-6" />
							<!-- Subtle pulse to show "joining" -->
							<div class="absolute inset-0 animate-pulse rounded-full bg-blue-200 opacity-30"></div>
						</div>
					</div>

					<!-- Right side: Organizational network -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 ring-2 ring-blue-50"
						>
							<IconNetwork class="h-8 w-8" />
							<!-- Network activity indicator -->
							<div class="absolute inset-0 animate-ping rounded-full bg-blue-300 opacity-20"></div>
						</div>
					</div>

					<!-- Connection bridge/beam -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<!-- Main connection line -->
						<div
							class="h-px w-32 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-60"
						></div>
						
						<!-- Data flow indicators -->
						<div class="absolute top-0 left-4 h-px w-2 animate-pulse bg-blue-500 opacity-80" style="animation-delay: 0s;"></div>
						<div class="absolute top-0 left-12 h-px w-2 animate-pulse bg-blue-500 opacity-80" style="animation-delay: 0.5s;"></div>
						<div class="absolute top-0 left-20 h-px w-2 animate-pulse bg-blue-500 opacity-80" style="animation-delay: 1s;"></div>
						
						<!-- Connection point in center -->
						<div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-blue-500 opacity-70"></div>
					</div>

					<!-- Integration success indicator -->
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
						<div class="h-1 w-1 animate-pulse rounded-full bg-green-500 opacity-60"></div>
					</div>
				</div>
			{:else if visualization === "meetings"}
				<!-- Meetings: Signal Through Noise -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Left side: Radar (Primary - Proactive Detection) -->
					<div class="absolute left-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 ring-2 ring-green-100"
						>
							<IconRadar class="h-8 w-8" />
							<!-- Scanning animation -->
							<div class="absolute inset-0 animate-pulse rounded-full bg-green-200 opacity-30"></div>
							<!-- Rotating scan line -->
							<div class="absolute inset-0 animate-spin rounded-full border-r-2 border-green-400 opacity-40" style="animation-duration: 2s;"></div>
						</div>
					</div>

					<!-- Right side: Target (Secondary - Focused Alignment) -->
					<div class="absolute right-8 top-1/2 -translate-y-1/2 transform">
						<div
							class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 ring-2 ring-green-50"
						>
							<IconTarget class="h-6 w-6" />
							<!-- Target lock animation -->
							<div class="absolute inset-0 animate-ping rounded-full bg-green-300 opacity-20"></div>
						</div>
					</div>

					<!-- Signal beam connecting radar to target -->
					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<!-- Main signal beam -->
						<div
							class="h-px w-32 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-70"
						></div>
						
						<!-- Signal pulses showing detection -->
						<div class="absolute top-0 left-6 h-px w-3 animate-pulse bg-green-500 opacity-90" style="animation-delay: 0s;"></div>
						<div class="absolute top-0 left-14 h-px w-3 animate-pulse bg-green-500 opacity-90" style="animation-delay: 0.3s;"></div>
						<div class="absolute top-0 left-22 h-px w-3 animate-pulse bg-green-500 opacity-90" style="animation-delay: 0.6s;"></div>
						
						<!-- Signal lock point -->
						<div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-green-600 opacity-80"></div>
					</div>

					<!-- Noise clearing indicators (subtle scattered elements being organized) -->
					<!-- First dot removed -->
					<!-- Second dot removed -->
					<!-- Third dot removed -->

					<!-- Success indicator - clear signal achieved -->
					<div class="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
						<div class="h-1 w-1 animate-pulse rounded-full bg-green-600 opacity-70"></div>
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
