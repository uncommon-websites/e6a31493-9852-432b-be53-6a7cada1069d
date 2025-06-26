<script lang="ts">
	// Props
	type Props = {
		title: string;
		subtitle?: string;
		bets: Array<{
			title: string;
			description: string;
		}>;
	};
	let { title, subtitle, bets }: Props = $props();
</script>

<section class="section-py" style="background-color: var(--color-muted);">
	<div class="container-sm section-px mx-auto">
		<div class="text-center section-mb">
			<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">{title}</h2>
			{#if subtitle}
				<p class="text-headline section-mb" style="color: var(--color-muted-foreground); max-width: 48rem; margin-left: auto; margin-right: auto;">{subtitle}</p>
			{/if}
		</div>
		
		<div class="prose prose-lg mx-auto" style="max-width: 42rem;">
			{#each bets as bet, index}
				<div class="section-mb" style="margin-bottom: {index === bets.length - 1 ? '0' : '3rem'};">
					<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground); font-weight: 600; letter-spacing: -0.02em;">
						{bet.title}
					</h3>
					<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.7; font-size: 1.125rem;">
						{bet.description}
					</p>
				</div>
			{/each}
		</div>
		
		<div class="section-mt text-center">
			<p class="text-body" style="color: var(--color-muted-foreground); font-style: italic; max-width: 36rem; margin-left: auto; margin-right: auto;">
				These principles guide every decision we make as we build the future of organizational intelligence.
			</p>
		</div>
	</div>
</section>