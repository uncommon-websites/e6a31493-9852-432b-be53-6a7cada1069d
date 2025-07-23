<script lang="ts">
	import BenefitCard from "$lib/components/ui/BenefitCard.svelte"

	type Props = {
		title?: string
		benefits?: Array<{
			title: string
			description: string
			visualization:
				| "visibility"
				| "misalignment"
				| "culture"
				| "meetings"
				| "onboarding"
				| "future"
		}>
	}

	let {
		title = "Grow your company effortlessly",
		benefits = [
			{
				title: "Organizational Visibility",
				description:
					"Sentra's unified memory promotes clarity across teams, reducing blindspots and second-guessing.",
				visualization: "visibility" as const
			},
			{
				title: "Stay ahead of misalignment",
				description:
					"A team of engineers working on the wrong tasks for a week can cost 100k+ every year. Sentra spots the smoke before the house burns down.",
				visualization: "misalignment" as const
			},
			{
				title: "Drive company culture at scale",
				description:
					"Get real time insights on sentiment, engagement, and questions you have for your team.",
				visualization: "culture" as const
			},
			{
				title: "Reduce unnecessary meetings",
				description:
					"Sentra's unified memory can spot which meetings are unnecessary, and answer questions that would have taken a sync meeting.",
				visualization: "meetings" as const
			},
			{
				title: "Simplify onboarding",
				description:
					"Sentra's memory makes new hires understand where and how they fit into the current initiatives quickly.",
				visualization: "onboarding" as const
			}
		]
	}: Props = $props()
</script>

<section class="section-py">
	<div class="section-px mx-auto max-w-7xl">
		<div class="mb-12 text-center">
			<h2 class="text-title1 mb-4">{title}</h2>
		</div>

		<!-- Benefits Grid -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
			{#each benefits as benefit, index}
				<BenefitCard
					title={benefit.title}
					description={benefit.description}
					visualization={benefit.visualization}
					class={[
						// First 2 cards: 3 columns each
						index === 0 || index === 1 ? "lg:col-span-3" : "",
						// Next 3 cards: 2 columns each
						index === 2 || index === 3 || index === 4 ? "lg:col-span-2" : ""
					].join(" ")}
				/>
			{/each}
		</div>
	</div>
</section>
