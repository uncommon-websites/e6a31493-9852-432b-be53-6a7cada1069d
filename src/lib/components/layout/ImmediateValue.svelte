<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// Icon components as inline SVGs
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	// USE THE RIGHT LUCIDE IMPORTS MAN CMON
	const IconBrain = () =>
		`<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`;
	const IconEye = () =>
		`<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
	const IconTarget = () =>
		`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
	const IconGitBranch = () =>
		`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m18 9a9 9 0 01-9 9"/></svg>`;
	const IconRadar = () =>
		`<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m13.4 2.1 4.5 4.5"/><circle cx="12" cy="12" r="10"/><path d="m8 12 4 4 4-4"/></svg>`;
	const IconAlertTriangle = () =>
		`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>`;
	const IconDatabase = () =>
		`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
	const IconNetwork = () =>
		`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="m5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`;
	const IconShield = () =>
		`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`;
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
	// USE THE LUCIDE IMPORTS, STOP MAKING SVGS
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
											{@html IconBrain()}
										</div>

										<!-- Connected nodes around it -->
										<div
											class="absolute -top-6 -left-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											{@html IconDatabase()}
										</div>
										<div
											class="absolute -top-6 -right-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											{@html IconNetwork()}
										</div>
										<div
											class="absolute bottom-2 -left-12 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											{@html IconGitBranch()}
										</div>
										<div
											class="absolute -right-12 bottom-2 flex h-6 w-6 items-center justify-center rounded-lg bg-gray-200 opacity-60"
										>
											{@html IconShield()}
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
											{@html IconEye()}
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
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-70" />
										</div>
										<div class="absolute -top-4 -right-4">
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-50" />
										</div>
										<div class="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
											<IconAlertTriangle class="h-5 w-5 text-orange-400 opacity-60" />
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
