<script lang="ts">
	// Props
	type Props = {
		title: string
		levels: Array<{
			level: string
			name: string
			description: string
			roi: string
			scope: string
			involvement: string
			examples?: string
		}>
	}
	let { title, levels }: Props = $props()
</script>

<section class="section-py" style="background-color: var(--color-muted);">
	<div class="section-px mx-auto max-w-7xl">
		<div class="section-mb text-center">
			<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">{title}</h2>
			<p
				class="text-headline"
				style="color: var(--color-muted-foreground); max-width: 48rem; margin-left: auto; margin-right: auto;"
			>
				Understanding the evolution of AI from basic co-pilots to full autonomy, and where Sentra
				fits in this landscape.
			</p>
		</div>

		<div class="space-y-6">
			{#each levels as level, index}
				<div
					class="section-py section-px"
					style="
						background-color: var(--color-background); 
						border-radius: var(--radius-lg); 
						border: 1px solid var(--color-border);
						transition: all 0.3s ease;
					"
					role="article"
					onmouseenter={(e) => {
						e.currentTarget.style.borderColor = "var(--color-primary)"
						e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
					}}
					onmouseleave={(e) => {
						e.currentTarget.style.borderColor = "var(--color-border)"
						e.currentTarget.style.boxShadow = "none"
					}}
				>
					<div class="flex flex-col gap-6 lg:flex-row lg:items-start">
						<div class="flex-shrink-0">
							<div
								class="text-headline flex h-16 w-16 items-center justify-center font-bold text-white"
								style="
									background: linear-gradient(135deg, var(--color-primary), var(--color-chart-1)); 
									border-radius: var(--radius-lg);
								"
							>
								{level.level}
							</div>
						</div>

						<div class="flex-1">
							<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">
								{level.name}
							</h3>
							<p
								class="text-body section-mb-sm"
								style="color: var(--color-muted-foreground); line-height: 1.6;"
							>
								{level.description}
							</p>

							<div class="grid gap-4 md:grid-cols-3">
								<div>
									<span class="text-callout font-semibold" style="color: var(--color-foreground);"
										>ROI:</span
									>
									<p
										class="text-caption section-mt-sm"
										style="color: var(--color-muted-foreground);"
									>
										{level.roi}
									</p>
								</div>
								<div>
									<span class="text-callout font-semibold" style="color: var(--color-foreground);"
										>Impact Scope:</span
									>
									<p
										class="text-caption section-mt-sm"
										style="color: var(--color-muted-foreground);"
									>
										{level.scope}
									</p>
								</div>
								<div>
									<span class="text-callout font-semibold" style="color: var(--color-foreground);"
										>Human Involvement:</span
									>
									<p
										class="text-caption section-mt-sm"
										style="color: var(--color-muted-foreground);"
									>
										{level.involvement}
									</p>
								</div>
							</div>

							{#if level.examples}
								<div
									class="section-mt-sm section-pt-sm"
									style="border-top: 1px solid var(--color-border);"
								>
									<span class="text-callout font-semibold" style="color: var(--color-foreground);"
										>Examples:</span
									>
									<p
										class="text-caption section-mt-sm"
										style="color: var(--color-muted-foreground);"
									>
										{level.examples}
									</p>
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div
			class="section-mt section-py section-px"
			style="
				background: linear-gradient(135deg, var(--color-card), var(--color-muted)); 
				border-radius: var(--radius-lg);
			"
		>
			<h3 class="text-title3 section-mb-sm" style="color: var(--color-foreground);">
				Why L3 changes everything
			</h3>
			<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.6;">
				The leap from L2 to L3 represents a fundamental shift in AI capabilities. While L0-L2 agents
				enhance individual productivity, L3 agents like Sentra impact entire organizations by
				working towards continuous business mandates. This requires not just advanced technology,
				but careful consideration of human incentives and organizational dynamics.
			</p>
		</div>
	</div>
</section>
