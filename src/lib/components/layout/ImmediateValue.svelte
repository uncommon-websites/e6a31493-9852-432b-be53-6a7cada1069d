<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte"
	import BenefitCard from "$lib/components/ui/BenefitCard.svelte"
	
	const valueProps = [
		{
			title: "Builds a memory of your company",
			description:
				"Sentra connects to your existing tools, creating a unified timeline of decisions and commitments.",
			visualization: "memory" as const
		},
		{
			title: "Combat misalignment in real time",
			description:
				"Through conversations with your team, Sentra learns your priorities and strategic context.",
			visualization: "alignment" as const
		},
		{
			title: "Spots misalignment before it spreads",
			description:
				"With real-time awareness, Sentra identifies conflicts and breakdowns before they become problems.",
			visualization: "preferences" as const
		}
	]
</script>

<section>
	<div class="section-px section-py mx-auto max-w-7xl">
		<div class="text-left">
			<SectionHeader
				title="Keep everyone on the same page"
				subtitle="Sentra transforms organizational chaos into clarity through intelligent awareness and proactive intervention"
			/>
		</div>

		<!-- Value Propositions Grid -->
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each valueProps as prop}
					<BenefitCard
						title={prop.title}
						description={prop.description}
						visualization={prop.visualization}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
