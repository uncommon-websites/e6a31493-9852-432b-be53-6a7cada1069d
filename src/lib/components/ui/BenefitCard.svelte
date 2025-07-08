<script lang="ts">
	import type { ComponentType } from "svelte";
	
	// Icons
	import IconBrain from "~icons/lucide/brain";
	import IconEye from "~icons/lucide/eye";
	import IconTarget from "~icons/lucide/target";
	import IconGitBranch from "~icons/lucide/git-branch";
	import IconRadar from "~icons/lucide/radar";
	import IconAlertTriangle from "~icons/lucide/alert-triangle";
	import IconDatabase from "~icons/lucide/database";
	import IconNetwork from "~icons/lucide/network";
	import IconShield from "~icons/lucide/shield";
	import IconUsers from "~icons/lucide/users";
	import IconCalendarX from "~icons/lucide/calendar-x";
	import IconUserPlus from "~icons/lucide/user-plus";
	import IconTrendingUp from "~icons/lucide/trending-up";
	import IconZap from "~icons/lucide/zap";
	import IconMessageSquare from "~icons/lucide/message-square";
	import IconFileText from "~icons/lucide/file-text";
	import IconGlobe from "~icons/lucide/globe";
	import IconLayers from "~icons/lucide/layers";
	import IconActivity from "~icons/lucide/activity";

	type Props = {
		title: string;
		description: string;
		visualization: 'visibility' | 'misalignment' | 'culture' | 'meetings' | 'onboarding' | 'future';
		class?: string;
	};

	let { title, description, visualization, class: customClass = '' }: Props = $props();

	// Define visualization components based on type
	const getVisualization = (type: string) => {
		switch (type) {
			case 'visibility':
				return {
					icon: IconEye,
					bgColor: 'bg-primary-100',
					textColor: 'text-primary-600',
					supportIcons: [IconDatabase, IconNetwork, IconUsers, IconShield]
				};
			case 'misalignment':
				return {
					icon: IconRadar,
					bgColor: 'bg-orange-100',
					textColor: 'text-orange-600',
					supportIcons: [IconAlertTriangle, IconTarget, IconZap]
				};
			case 'culture':
				return {
					icon: IconUsers,
					bgColor: 'bg-secondary-100',
					textColor: 'text-secondary-600',
					supportIcons: [IconTrendingUp, IconTarget, IconBrain]
				};
			case 'meetings':
				return {
					icon: IconCalendarX,
					bgColor: 'bg-green-100',
					textColor: 'text-green-600',
					supportIcons: [IconDatabase, IconBrain, IconNetwork]
				};
			case 'onboarding':
				return {
					icon: IconUserPlus,
					bgColor: 'bg-blue-100',
					textColor: 'text-blue-600',
					supportIcons: [IconBrain, IconDatabase, IconGitBranch]
				};
			case 'future':
				return {
					icon: IconTrendingUp,
					bgColor: 'bg-purple-100',
					textColor: 'text-purple-600',
					supportIcons: [IconBrain, IconDatabase, IconNetwork, IconShield]
				};
			default:
				return {
					icon: IconBrain,
					bgColor: 'bg-primary-100',
					textColor: 'text-primary-600',
					supportIcons: [IconDatabase, IconNetwork, IconShield]
				};
		}
	};

	let visualConfig = $derived(getVisualization(visualization));
	let MainIcon = $derived(visualConfig.icon);
</script>

<div class={[
	'group flex',
	customClass
]}>
	<!-- Card Container -->
	<div class="relative flex min-h-[400px] w-full flex-col overflow-hidden rounded-3xl bg-white p-10">
		<!-- Visualization Container -->
		<div class="mb-8 flex aspect-video items-center justify-center">
			{#if visualization === 'visibility'}
				<!-- Enhanced Organizational Visibility Visualization -->
				<div class="relative flex h-full w-full items-center justify-center">
					<!-- Central Eye with Enhanced Design -->
					<div class="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary-600 ring-4 ring-primary-50">
						<IconEye class="h-10 w-10" />
						<!-- Subtle pulse animation -->
						<div class="absolute inset-0 rounded-full bg-primary-200 opacity-20 animate-ping"></div>
					</div>

					<!-- Organizational Layers - Concentric Circles -->
					<div class="absolute h-32 w-32 rounded-full border-2 border-primary-200 opacity-30"></div>
					<div class="absolute h-44 w-44 rounded-full border border-primary-200 opacity-20"></div>
					<div class="absolute h-56 w-56 rounded-full border border-primary-200 opacity-10"></div>

					<!-- Team/Department Nodes - Positioned around the eye -->
					<div class="absolute -top-8 left-1/2 -translate-x-1/2 transform">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 ring-2 ring-blue-50">
							<IconUsers class="h-5 w-5" />
						</div>
						<div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
					</div>

					<div class="absolute -bottom-8 left-1/2 -translate-x-1/2 transform">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 ring-2 ring-purple-50">
							<IconDatabase class="h-5 w-5" />
						</div>
						<div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
					</div>

					<div class="absolute -left-8 top-1/2 -translate-y-1/2 transform">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 ring-2 ring-green-50">
							<IconNetwork class="h-5 w-5" />
						</div>
						<div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
					</div>

					<div class="absolute -right-8 top-1/2 -translate-y-1/2 transform">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-2 ring-orange-50">
							<IconShield class="h-5 w-5" />
						</div>
						<div class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
					</div>

					<!-- Information Flow Nodes - Centered below eye icon -->
					<div class="absolute top-20 left-1/2 -translate-x-1/2 transform">
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
							<IconMessageSquare class="h-4 w-4" />
						</div>
					</div>

					<div class="absolute -top-4 -right-6">
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
							<IconFileText class="h-4 w-4" />
						</div>
					</div>

					<div class="absolute -bottom-4 -left-6">
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
							<IconActivity class="h-4 w-4" />
						</div>
					</div>

					<div class="absolute -bottom-4 -right-6">
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
							<IconLayers class="h-4 w-4" />
						</div>
					</div>

					<!-- Enhanced Connection Lines with Gradients -->
					<div class="absolute top-1/2 -left-8 h-px w-8 -translate-y-1/2 transform bg-gradient-to-r from-primary-400 to-green-400 opacity-60"></div>
					<div class="absolute top-1/2 -right-8 h-px w-8 -translate-y-1/2 transform bg-gradient-to-l from-primary-400 to-orange-400 opacity-60"></div>
					<div class="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 transform bg-gradient-to-b from-primary-400 to-blue-400 opacity-60"></div>
					<div class="absolute -bottom-8 left-1/2 h-8 w-px -translate-x-1/2 transform bg-gradient-to-t from-primary-400 to-purple-400 opacity-60"></div>

					<!-- Diagonal connections for information flow -->
					<div class="absolute top-1/4 left-1/4 h-px w-12 rotate-45 transform bg-gradient-to-r from-primary-300 to-transparent opacity-40"></div>
					<div class="absolute top-1/4 right-1/4 h-px w-12 -rotate-45 transform bg-gradient-to-l from-primary-300 to-transparent opacity-40"></div>
					<div class="absolute bottom-1/4 left-1/4 h-px w-12 -rotate-45 transform bg-gradient-to-r from-primary-300 to-transparent opacity-40"></div>
					<div class="absolute bottom-1/4 right-1/4 h-px w-12 rotate-45 transform bg-gradient-to-l from-primary-300 to-transparent opacity-40"></div>

					<!-- Data Flow Indicators -->
					<div class="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform">
						<div class="h-full w-full rounded-full bg-primary-400 opacity-60 animate-ping"></div>
					</div>
				</div>
			{:else if visualization === 'misalignment'}
				<!-- Stay Ahead of Misalignment - Simple Single Icon Visualization -->
				<div class="relative flex items-center justify-center">
					<!-- Central radar icon with enhanced presence -->
					<div class="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-2 ring-orange-50">
						<IconRadar class="h-10 w-10" />
						
						<!-- Subtle scanning animation -->
						<div class="absolute inset-0 rounded-full bg-orange-200 opacity-20 animate-pulse"></div>
					</div>

					<!-- "Ahead" visualization - Timeline concept -->
					<!-- Past (left) - faded -->
					<div class="absolute -left-16 top-1/2 -translate-y-1/2 transform">
						<div class="h-2 w-2 rounded-full bg-gray-300 opacity-40"></div>
					</div>
					
					<!-- Present (center) - current position -->
					<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<div class="h-1 w-1 rounded-full bg-orange-500 opacity-80"></div>
					</div>
					
					<!-- Future (right) - where problems would occur -->
					<div class="absolute -right-16 top-1/2 -translate-y-1/2 transform">
						<div class="h-3 w-3 rounded-full bg-red-400 opacity-60 animate-pulse"></div>
						<!-- Small warning indicator -->
						<div class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 opacity-40"></div>
					</div>

					<!-- Detection beam - showing radar "seeing ahead" -->
					<div class="absolute top-1/2 left-1/2 h-px w-20 -translate-y-1/2 transform bg-gradient-to-r from-orange-400 to-red-400 opacity-50"></div>
					
					<!-- Scanning arc - subtle indicator of proactive detection -->
					<div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform">
						<div class="h-full w-full rounded-full border-r-2 border-orange-300 opacity-30 animate-spin" style="animation-duration: 3s;"></div>
					</div>
				</div>
			{:else}
				<!-- Default visualization for other types -->
				<div class="relative flex items-center justify-center">
					<!-- Central icon -->
					<div class={[
						'relative z-10 flex h-16 w-16 items-center justify-center rounded-full',
						visualConfig.bgColor,
						visualConfig.textColor
					]}>
						<MainIcon class="h-8 w-8" />
					</div>

					<!-- Support icons positioned around the main icon -->
					{#each visualConfig.supportIcons as SupportIcon, index}
						{@const positions = [
							'-top-6 -left-12',
							'-top-6 -right-12', 
							'bottom-2 -left-12',
							'-right-12 bottom-2'
						]}
						<div class={[
							'absolute flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60',
							positions[index] || positions[0]
						]}>
							<SupportIcon class="h-4 w-4" />
						</div>
					{/each}

					<!-- Connection lines -->
					<div class="from-primary-300 absolute top-1/2 -left-12 h-px w-12 -translate-y-1/2 transform bg-gradient-to-r to-transparent opacity-40"></div>
					<div class="from-primary-300 absolute top-1/2 -right-12 h-px w-12 -translate-y-1/2 transform bg-gradient-to-l to-transparent opacity-40"></div>
					<div class="from-primary-300 absolute -top-12 left-1/2 h-12 w-px -translate-x-1/2 transform bg-gradient-to-b to-transparent opacity-40"></div>
					<div class="from-primary-300 absolute -bottom-12 left-1/2 h-12 w-px -translate-x-1/2 transform bg-gradient-to-t to-transparent opacity-40"></div>
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