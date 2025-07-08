<script lang="ts">
	import BenefitCard from "$lib/components/ui/BenefitCard.svelte";

	type Props = {
		title?: string;
		benefits?: Array<{
			title: string;
			description: string;
			visualization: 'visibility' | 'misalignment' | 'culture' | 'meetings' | 'onboarding' | 'future';
		}>;
	};

	let { 
		title = "Grow your company effortlessly",
		benefits = [
			{
				title: "Organizational Visibility",
				description: "Sentra's unified memory promotes clarity across teams, reducing blindspots and second-guessing.",
				visualization: 'visibility' as const
			},
			{
				title: "Stay ahead of misalignment",
				description: "A team of engineers working on the wrong tasks for a week can cost 100k+ every year. Sentra spots the smoke before the house burns down.",
				visualization: 'misalignment' as const
			},
			{
				title: "Drive company culture at scale",
				description: "Get real time insights on sentiment, engagement, and questions you have for your team.",
				visualization: 'culture' as const
			},
			{
				title: "Reduce unnecessary meetings",
				description: "Sentra's unified memory can spot which meetings are unnecessary, and answer questions that would have taken a sync meeting.",
				visualization: 'meetings' as const
			},
			{
				title: "Simplify onboarding",
				description: "Sentra's memory makes new hires understand where and how they fit into the current initiatives quickly.",
				visualization: 'onboarding' as const
			},
			{
				title: "Prepare for the future",
				description: "Context makes AI useful. Start memorializing your company's work today to build a unified context layer for the future.",
				visualization: 'future' as const
			}
		]
	}: Props = $props();
</script>

<section class="section-py">
	<div class="mx-auto max-w-7xl section-px">
		<div class="text-center mb-12">
			<h2 class="text-display mb-4">{title}</h2>
		</div>

		<!-- Benefits Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each benefits as benefit, index}
				<BenefitCard 
					title={benefit.title}
					description={benefit.description}
					visualization={benefit.visualization}
					class={[
						// Make first card span 2 columns on larger screens
						index === 0 ? 'lg:col-span-2' : '',
						// Make last card span 2 columns on larger screens
						index === benefits.length - 1 ? 'lg:col-span-2' : ''
					]}
				/>
			{/each}
		</div>
	</div>
</section>