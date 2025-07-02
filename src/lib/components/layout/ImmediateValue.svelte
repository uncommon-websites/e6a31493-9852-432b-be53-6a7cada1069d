<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";
	import IconBrain from "~icons/lucide/brain";
	import IconEye from "~icons/lucide/eye";
	import IconTarget from "~icons/lucide/target";
	import IconGitBranch from "~icons/lucide/git-branch";
	import IconRadar from "~icons/lucide/radar";
	import IconAlertTriangle from "~icons/lucide/alert-triangle";
	import IconDatabase from "~icons/lucide/database";
	import IconNetwork from "~icons/lucide/network";
	import IconShield from "~icons/lucide/shield";

	const valueProps = [
		{
			title: "Builds a memory of your company",
			description: "Sentra connects to your existing tools, creating a unified timeline of decisions and commitments.",
			visualization: "memory"
		},
		{
			title: "Deeply understands your vision",
			description: "Through conversations with your team, Sentra learns your priorities and strategic context.",
			visualization: "vision"
		},
		{
			title: "Spots misalignment before it spreads",
			description: "With real-time awareness, Sentra identifies conflicts and breakdowns before they become problems.",
			visualization: "detection"
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
						<div class="relative flex w-full flex-col overflow-hidden rounded-3xl bg-white p-10 transition-all duration-300 hover:bg-gray-50 min-h-[400px]">
							<!-- Visualization Container -->
							<div class="mb-8 flex h-32 items-center justify-center">
								{#if prop.visualization === "memory"}
									<!-- Memory/Timeline Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central brain icon -->
										<div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-200">
											<IconBrain class="h-8 w-8" />
										</div>
										
										<!-- Connected nodes around it -->
										<div class="absolute -left-12 -top-6 h-6 w-6 rounded-lg bg-gray-200 opacity-60 transition-all duration-300 group-hover:opacity-80 flex items-center justify-center">
											<IconDatabase class="h-4 w-4 text-gray-500" />
										</div>
										<div class="absolute -right-12 -top-6 h-6 w-6 rounded-lg bg-gray-200 opacity-60 transition-all duration-300 group-hover:opacity-80 flex items-center justify-center">
											<IconNetwork class="h-4 w-4 text-gray-500" />
										</div>
										<div class="absolute -left-12 bottom-2 h-6 w-6 rounded-lg bg-gray-200 opacity-60 transition-all duration-300 group-hover:opacity-80 flex items-center justify-center">
											<IconGitBranch class="h-4 w-4 text-gray-500" />
										</div>
										<div class="absolute -right-12 bottom-2 h-6 w-6 rounded-lg bg-gray-200 opacity-60 transition-all duration-300 group-hover:opacity-80 flex items-center justify-center">
											<IconShield class="h-4 w-4 text-gray-500" />
										</div>
										
										<!-- Connection lines -->
										<div class="absolute h-px w-12 bg-gradient-to-r from-primary-300 to-transparent -left-12 top-1/2 transform -translate-y-1/2 opacity-40"></div>
										<div class="absolute h-px w-12 bg-gradient-to-l from-primary-300 to-transparent -right-12 top-1/2 transform -translate-y-1/2 opacity-40"></div>
										<div class="absolute w-px h-12 bg-gradient-to-b from-primary-300 to-transparent left-1/2 -top-12 transform -translate-x-1/2 opacity-40"></div>
										<div class="absolute w-px h-12 bg-gradient-to-t from-primary-300 to-transparent left-1/2 -bottom-12 transform -translate-x-1/2 opacity-40"></div>
									</div>
								{:else if prop.visualization === "vision"}
									<!-- Vision/Understanding Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central eye icon with layered understanding -->
										<div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary-200">
											<IconEye class="h-8 w-8" />
										</div>
										
										<!-- Concentric circles representing layers of understanding -->
										<div class="absolute h-20 w-20 rounded-full border-2 border-secondary-200 opacity-30 transition-all duration-300 group-hover:scale-105"></div>
										<div class="absolute h-28 w-28 rounded-full border border-secondary-200 opacity-20 transition-all duration-300 group-hover:scale-105"></div>
										<div class="absolute h-36 w-36 rounded-full border border-secondary-200 opacity-10 transition-all duration-300 group-hover:scale-105"></div>
										
										<!-- Target points -->
										<div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
											<IconTarget class="h-4 w-4 text-secondary-400 opacity-60" />
										</div>
										<div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
											<IconTarget class="h-4 w-4 text-secondary-400 opacity-60" />
										</div>
									</div>
								{:else if prop.visualization === "detection"}
									<!-- Detection/Radar Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central radar icon -->
										<div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
											<IconRadar class="h-8 w-8" />
										</div>
										
										<!-- Radar sweep animation -->
										<div class="absolute h-24 w-24 rounded-full border-2 border-orange-200 opacity-40">
											<div class="absolute top-0 left-1/2 h-12 w-px bg-gradient-to-b from-orange-400 to-transparent transform -translate-x-1/2 opacity-60 animate-pulse"></div>
										</div>
										
										<!-- Warning indicators at different positions -->
										<div class="absolute -top-4 -left-4 transition-all duration-300 group-hover:scale-110">
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-70" />
										</div>
										<div class="absolute -top-4 -right-4 transition-all duration-300 group-hover:scale-110">
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-50" />
										</div>
										<div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:scale-110">
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-60" />
										</div>
										
										<!-- Detection waves -->
										<div class="absolute h-32 w-32 rounded-full border border-orange-200 opacity-20 animate-pulse"></div>
										<div class="absolute h-40 w-40 rounded-full border border-orange-200 opacity-10 animate-pulse" style="animation-delay: 0.5s;"></div>
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