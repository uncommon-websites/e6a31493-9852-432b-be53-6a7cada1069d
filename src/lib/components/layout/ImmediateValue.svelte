<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte"
	import IconBrain from "~icons/lucide/brain"
	import IconEye from "~icons/lucide/eye"
	import IconTarget from "~icons/lucide/target"
	import IconGitBranch from "~icons/lucide/git-branch"
	import IconRadar from "~icons/lucide/radar"
	import IconAlertTriangle from "~icons/lucide/alert-triangle"
	import IconDatabase from "~icons/lucide/database"
	import IconNetwork from "~icons/lucide/network"
	import IconShield from "~icons/lucide/shield"
	import IconCheck from "~icons/lucide/check"
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
	]
</script>

<section class="bg-gray-50">
	<div class="section-px section-py mx-auto max-w-6xl">
		<div class="text-left">
			<SectionHeader
				title="Keep everyone on the same page"
				subtitle="Sentra transforms organizational chaos into clarity through intelligent awareness and proactive intervention"
			/>
		</div>

		<!-- Value Propositions Grid -->
		<div class="mx-auto max-w-6xl">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each valueProps as prop, index}
					<div class="group flex">
						<!-- Card max-w-6xl-->
						<div
							class="relative flex min-h-[400px] w-full flex-col overflow-hidden rounded-3xl bg-white p-10"
						>
							<!-- Visualization max-w-6xl-->
							<div class="mb-8 flex aspect-video items-center justify-center">
								{#if prop.visualization === "memory"}
									<!-- Memory/Timeline Visualization -->
									<div class="relative flex items-center justify-center">
										<!-- Central brain icon -->
										<div
											class="bg-primary-100 text-primary-600 relative z-10 flex h-16 w-16 items-center justify-center rounded-full"
										>
											<IconBrain class="h-8 w-8" />
										</div>

										<!-- Connected nodes around it -->
										<div
											class="absolute -top-6 -left-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconDatabase class="h-4 w-4" />
										</div>
										<div
											class="absolute -top-6 -right-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconNetwork class="h-4 w-4" />
										</div>
										<div
											class="absolute bottom-2 -left-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconGitBranch class="h-4 w-4" />
										</div>
										<div
											class="absolute -right-12 bottom-2 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											<IconShield class="h-4 w-4" />
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
											<IconEye class="h-8 w-8" />
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
									<!-- Prevention Flow Visualization -->
									<div class="relative flex items-center justify-center space-x-8">
										<!-- Step 1: Healthy -->
										<div class="flex flex-col items-center space-y-2">
											<div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
												<IconCheck class="h-6 w-6" />
											</div>
											<span class="text-xs font-medium text-green-600">Healthy</span>
										</div>

										<!-- Arrow 1 -->
										<div class="h-px w-6 bg-gray-300"></div>

										<!-- Step 2: Attention needed -->
										<div class="flex flex-col items-center space-y-2">
											<div class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
												<IconAlertTriangle class="h-6 w-6" />
											</div>
											<span class="text-xs font-medium text-orange-600">Attention needed</span>
										</div>

										<!-- Arrow 2 -->
										<div class="h-px w-6 bg-gray-300"></div>

										<!-- Step 3: Prevented -->
										<div class="flex flex-col items-center space-y-2">
											<div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
												<IconCheck class="h-6 w-6" />
											</div>
											<span class="text-xs font-medium text-green-600">Prevented</span>
										</div>
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
