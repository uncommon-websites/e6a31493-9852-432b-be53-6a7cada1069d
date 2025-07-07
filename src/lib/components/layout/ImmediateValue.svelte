<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";
	import IconTarget from "~icons/lucide/target";
	import IconRadar from "~icons/lucide/radar";
	import IconAlertTriangle from "~icons/lucide/alert-triangle";

	const valueProps = [
		{
			title: "Builds a memory of your company",
			description:
				"Sentra connects to your existing tools, creating a unified timeline of decisions and commitments.",
			visualization: "memory"
		},
		{
			title: "Deeply understands your vision",
			description:
				"Through conversations with your team, Sentra learns your priorities and strategic context.",
			visualization: "vision"
		},
		{
			title: "Spots misalignment before it spreads",
			description:
				"With real-time awareness, Sentra identifies conflicts and breakdowns before they become problems.",
			visualization: "detection"
		}
	];
</script>

<section class="bg-gray-50">
	<div class="section-px section-py container-sm mx-auto">
		<div class="text-left">
			<SectionHeader
				title="Keep everyone on the same page"
				subtitle="Sentra transforms organizational chaos into clarity through intelligent awareness and proactive intervention"
			/>
		</div>

		<!-- Value Propositions Grid -->
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each valueProps as prop, index}
					<div class="group flex">
						<!-- Card Container -->
						<div
							class="relative flex min-h-[400px] w-full flex-col overflow-hidden rounded-3xl bg-white p-10"
						>
							<!-- Visualization Container -->
							<div class="mb-8 flex aspect-video items-center justify-center">
								{#if prop.visualization === "memory"}
									<!-- Memory/Timeline Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central brain icon -->
										<div
											class="bg-primary-100 text-primary-600 relative z-10 flex h-16 w-16 items-center justify-center rounded-full"
										>
											<IconTarget class="h-8 w-8" />
										</div>

										<!-- Connected nodes around it -->
										<div
											class="absolute -top-6 -left-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconTarget class="h-4 w-4 text-gray-500 opacity-60" />
										</div>
										<div
											class="absolute -top-6 -right-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconTarget class="h-4 w-4 text-gray-500 opacity-60" />
										</div>
										<div
											class="absolute bottom-2 -left-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconTarget class="h-4 w-4 text-gray-500 opacity-60" />
										</div>
										<div
											class="absolute -right-12 bottom-2 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconTarget class="h-4 w-4 text-gray-500 opacity-60" />
										</div>

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
								{:else if prop.visualization === "vision"}
									<!-- Vision/Understanding Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central eye icon with layered understanding -->
										<div
											class="bg-secondary-100 text-secondary-600 relative z-10 flex h-16 w-16 items-center justify-center rounded-full"
										>
											<IconTarget class="h-8 w-8" />
										</div>

										<!-- Concentric circles representing layers of understanding -->
										<div
											class="border-secondary-200 absolute h-20 w-20 rounded-full border-2 opacity-30"
										></div>
										<div
											class="border-secondary-200 absolute h-28 w-28 rounded-full border opacity-20"
										></div>
										<div
											class="border-secondary-200 absolute h-36 w-36 rounded-full border opacity-10"
										></div>

										<!-- Target points -->
										<div class="absolute -top-6 left-1/2 -translate-x-1/2 transform">
											<IconTarget class="text-secondary-400 h-4 w-4 opacity-60" />
										</div>
										<div class="absolute -bottom-6 left-1/2 -translate-x-1/2 transform">
											<IconTarget class="text-secondary-400 h-4 w-4 opacity-60" />
										</div>
									</div>
								{:else if prop.visualization === "detection"}
									<!-- Detection/Radar Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central radar icon -->
										<div
											class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600"
										>
											<IconRadar class="h-8 w-8" />
										</div>

										<!-- Radar sweep animation -->
										<div
											class="absolute h-24 w-24 rounded-full border-2 border-orange-200 opacity-40"
										>
											<div
												class="absolute top-0 left-1/2 h-12 w-px -translate-x-1/2 transform animate-pulse bg-gradient-to-b from-orange-400 to-transparent opacity-60"
											></div>
										</div>

										<!-- Warning indicators at different positions -->
										<div class="absolute -top-4 -left-4">
											<div class="h-5 w-5 rounded bg-orange-400 opacity-70"></div>
										</div>
										<div class="absolute -top-4 -right-4">
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-50" />
										</div>
										<div class="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
											<div class="h-5 w-5 rounded bg-orange-400 opacity-60"></div>
										</div>

										<!-- Detection waves -->
										<div
											class="absolute h-32 w-32 animate-pulse rounded-full border border-orange-200 opacity-20"
										></div>
										<div
											class="absolute h-40 w-40 animate-pulse rounded-full border border-orange-200 opacity-10"
											style="animation-delay: 0.5s;"
										></div>
									</div>
								{/if}
							</div>

							<!-- Content -->
							<div class="flex-1 space-y-6">
								<h3 class="text-title3 font-semibold text-gray-900">
									{prop.title}
								</h3>

								<p class="text-callout leading-relaxed text-gray-600">
									{prop.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
