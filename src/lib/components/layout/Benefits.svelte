<script lang="ts">
	type Props = {
		title?: string;
		benefits?: Array<{
			title: string;
			description: string;
			image: string;
		}>;
	};

	let { 
		title = "Grow your company effortlessly",
		benefits = [
			{
				title: "Organizational Visibility",
				description: "Sentra's unified memory promotes clarity across teams, reducing blindspots and second-guessing.",
				image: "/generated/image-a-group-of-diverse-individuals-in-a-warm.webp"
			},
			{
				title: "Stay ahead of misalignment",
				description: "A team of engineers working on the wrong tasks for a week can cost 100k+ every year. Sentra spots the smoke before the house burns down.",
				image: "/generated/image-a-serene-living-room-converted-into-a-wo.webp"
			},
			{
				title: "Drive company culture at scale",
				description: "Get real time insights on sentiment, engagement, and questions you have for your team.",
				image: "/generated/image-a-close-up-shot-of-two-hands-reaching-ac.webp"
			},
			{
				title: "Reduce unnecessary meetings",
				description: "Sentra's unified memory can spot which meetings are unnecessary, and answer questions that would have taken a sync meeting.",
				image: "/generated/image-an-individual-sitting-alone-at-a-kitchen.webp"
			},
			{
				title: "Simplify onboarding",
				description: "Sentra's memory makes new hires understand where and how they fit into the current initiatives quickly.",
				image: "/generated/image-a-group-of-people-in-a-quiet-shared-work.webp"
			},
			{
				title: "Prepare for the future",
				description: "Context makes AI useful. Start memorializing your company's work today to build a unified context layer for the future.",
				image: "/generated/image-abstract-future-technology-symbols-and-c.webp"
			}
		]
	}: Props = $props();
</script>

<section class="section-py">
	<div class="mx-auto max-w-7xl section-px">
		<div class="text-center mb-12">
			<h2 class="text-display mb-4">{title}</h2>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each benefits as benefit, index}
				<div class={[
					'bg-card rounded-lg p-6 border border-border hover:bg-card-hover transition-colors',
					// Make first card span 2 columns on larger screens
					index === 0 ? 'lg:col-span-2' : '',
					// Make last card span 2 columns on larger screens
					index === benefits.length - 1 ? 'lg:col-span-2' : ''
				]}>
					<div class="aspect-video mb-4 overflow-hidden rounded-md">
						<img 
							src={benefit.image} 
							alt={benefit.title}
							class="w-full h-full object-cover"
						/>
					</div>
					<h3 class="text-title3 mb-2">{benefit.title}</h3>
					<p class="text-body text-muted-foreground">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>