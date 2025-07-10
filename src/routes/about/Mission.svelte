<script lang="ts">
	// Props
	type Props = {
		title: string
		subtitle?: string
		bets: Array<{
			title: string
			description: string
		}>
	}
	let { title, subtitle, bets }: Props = $props()
</script>

<section class="section-py" style="background-color: var(--color-muted);">
	<div class="section-px mx-auto max-w-6xl">
		<div class="section-mb text-center">
			<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">{title}</h2>
			{#if subtitle}
				<p class="text-headline" style="color: var(--color-muted-foreground);">{subtitle}</p>
			{/if}
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each bets as bet}
				<div
					class="section-py section-px"
					style="
						background-color: var(--color-background); 
						border-radius: var(--radius-lg); 
						border: 1px solid var(--color-border);
						transition: border-color 0.2s ease;
					"
					role="article"
					onmouseenter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
					onmouseleave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
				>
					<h3 class="text-title3 section-mb-sm" style="color: var(--color-foreground);">
						{bet.title}
					</h3>
					<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.6;">
						{bet.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
