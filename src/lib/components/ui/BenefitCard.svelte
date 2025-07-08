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