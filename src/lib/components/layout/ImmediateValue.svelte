<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	const valueProps = [
		{
			title: "Builds a memory of your company",
			description: "Sentra connects to your existing tools—meetings, Slack, documents—creating a unified timeline of every decision, debate, and commitment across your organization.",
			image: "/generated/image-a-calming-grounded-image-of-a-hybrid-wor.webp",
			features: ["Captures meeting context", "Connects all your tools", "Creates unified timeline"]
		},
		{
			title: "Deeply understands your vision",
			description: "Through ongoing conversations with leadership and team members, Sentra learns your priorities, goals, and the nuanced context behind every initiative.",
			image: "/generated/image-a-group-of-business-leaders-in-a-strateg.webp",
			features: ["Learns company priorities", "Understands team context", "Captures strategic nuance"]
		},
		{
			title: "Spots misalignment before it spreads",
			description: "With real-time awareness across your organization, Sentra identifies conflicts, duplicate work, and communication breakdowns before they become costly problems.",
			image: "/generated/image-a-close-up-shot-of-hands-in-motion-reach.webp",
			features: ["Real-time monitoring", "Early warning system", "Prevents costly conflicts"]
		}
	];
</script>

<section class="bg-gray-50">
	<div class="section-px section-py container mx-auto">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="Keep everyone on the same page"
				subtitle="Sentra transforms organizational chaos into clarity through intelligent awareness and proactive intervention"
			/>
		</div>

		<!-- Value Propositions Grid -->
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each valueProps as prop, index}
					<div class="group relative">
						<!-- Card Container -->
						<div class="relative overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:bg-gray-50">
							<!-- Image Container -->
							<div class="mb-6 overflow-hidden rounded-2xl">
								<img
									src={prop.image}
									alt={prop.title}
									class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<!-- Content -->
							<div class="space-y-4">
								<h3 class="text-headline font-semibold text-gray-900">
									{prop.title}
								</h3>
								
								<p class="text-caption leading-relaxed text-gray-600">
									{prop.description}
								</p>

								<!-- Feature List -->
								<ul class="space-y-2">
									{#each prop.features as feature}
										<li class="flex items-center gap-3">
											<div class="h-1.5 w-1.5 rounded-full bg-primary"></div>
											<span class="text-footnote text-gray-700">{feature}</span>
										</li>
									{/each}
								</ul>
							</div>

							<!-- Step Number -->
							<div class="absolute -top-3 -right-3">
								<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-footnote font-bold text-white">
									{index + 1}
								</div>
							</div>
						</div>

						<!-- Connection Line (except for last item) -->
						{#if index < valueProps.length - 1}
							<div class="absolute -right-4 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gradient-to-r from-primary to-primary/30 md:block"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Bottom CTA -->
		<div class="mx-auto mt-12 max-w-2xl text-center">
			<p class="text-caption text-gray-600">
				The result? Your team stays aligned, productive, and focused on what matters most—without the overhead of constant check-ins or surveillance.
			</p>
		</div>
	</div>
</section>