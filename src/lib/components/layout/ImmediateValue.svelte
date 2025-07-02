<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	const valueProps = [
		{
			title: "Builds a memory of your company",
			description: "Sentra connects to your existing tools, creating a unified timeline of decisions and commitments.",
			image: "/generated/image-a-calming-grounded-image-of-a-hybrid-wor.webp"
		},
		{
			title: "Deeply understands your vision",
			description: "Through conversations with your team, Sentra learns your priorities and strategic context.",
			image: "/generated/image-a-group-of-business-leaders-in-a-strateg.webp"
		},
		{
			title: "Spots misalignment before it spreads",
			description: "With real-time awareness, Sentra identifies conflicts and breakdowns before they become problems.",
			image: "/generated/image-a-close-up-shot-of-hands-in-motion-reach.webp"
		}
	];
</script>

<section class="bg-gray-50">
	<div class="section-px section-py container mx-auto">
		<div class="text-left">
			<SectionHeader
				title="Keep everyone on the same page"
				subtitle="Sentra transforms organizational chaos into clarity through intelligent awareness and proactive intervention"
			/>
		</div>

		<!-- Value Propositions Grid -->
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each valueProps as prop, index}
					<div class="group flex">
						<!-- Card Container -->
						<div class="relative flex w-full flex-col overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:bg-gray-50">
							<!-- Image Container -->
							<div class="mb-6 overflow-hidden rounded-2xl">
								<img
									src={prop.image}
									alt={prop.title}
									class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<!-- Content -->
							<div class="flex-1 space-y-4">
								<h3 class="text-headline font-semibold text-gray-900">
									{prop.title}
								</h3>
								
								<p class="text-caption leading-relaxed text-gray-600">
									{prop.description}
								</p>
							</div>

							<!-- Step numbers removed as requested -->
						</div>
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>