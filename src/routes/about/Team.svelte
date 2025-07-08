<script lang="ts">
	type Props = {
		title: string;
		subtitle?: string;
		founders: Array<{
			name: string;
			role: string;
			bio: string;
		}>;
		advisors: Array<{
			name: string;
			role: string;
			bio: string;
		}>;
		supporters: Array<{
			name: string;
			role: string;
			bio: string;
		}>;
	};
	let { title, subtitle, founders, advisors, supporters }: Props = $props();
</script>

<section class="section-py" style="background-color: var(--color-background);">
	<div class="section-px mx-auto max-w-6xl">
		<div class="section-mb text-center">
			<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">{title}</h2>
			{#if subtitle}
				<p class="text-headline" style="color: var(--color-muted-foreground);">{subtitle}</p>
			{/if}
		</div>

		<!-- Founders -->
		<div class="section-mb">
			<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">Founders</h3>
			<div class="grid gap-6 md:grid-cols-3">
				{#each founders as founder}
					<div
						class="section-py section-px text-center"
						style="
							background-color: var(--color-card); 
							border-radius: var(--radius-lg); 
							border: 1px solid var(--color-border);
							transition: border-color 0.2s ease;
						"
						role="button"
						tabindex="0"
						onmouseenter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
						onmouseleave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
					>
						<h4 class="text-title3 section-mb-sm" style="color: var(--color-foreground);">
							{founder.name}
						</h4>
						<p class="text-callout section-mb-sm" style="color: var(--color-primary);">
							{founder.role}
						</p>
						<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.6;">
							{founder.bio}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Advisors -->
		<div class="section-mb">
			<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">Advisors</h3>
			<div class="grid gap-6 md:grid-cols-2">
				{#each advisors as advisor}
					<div
						class="section-py section-px"
						style="
							background-color: var(--color-card); 
							border-radius: var(--radius-lg); 
							border: 1px solid var(--color-border);
							transition: border-color 0.2s ease;
						"
						role="button"
						tabindex="0"
						onmouseenter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
						onmouseleave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
					>
						<h4 class="text-headline section-mb-sm" style="color: var(--color-foreground);">
							{advisor.name}
						</h4>
						<p class="text-callout section-mb-sm" style="color: var(--color-primary);">
							{advisor.role}
						</p>
						<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.6;">
							{advisor.bio}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Early Supporters -->
		<div>
			<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">
				Our earliest supporters
			</h3>
			<div class="grid gap-6 md:grid-cols-3">
				{#each supporters as supporter}
					<div
						class="section-py section-px"
						style="
							background-color: var(--color-card); 
							border-radius: var(--radius-lg); 
							border: 1px solid var(--color-border);
							transition: border-color 0.2s ease;
						"
						role="button"
						tabindex="0"
						onmouseenter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
						onmouseleave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
					>
						<h4 class="text-headline section-mb-sm" style="color: var(--color-foreground);">
							{supporter.name}
						</h4>
						<p class="text-callout" style="color: var(--color-primary);">{supporter.role}</p>
						{#if supporter.bio}
							<p
								class="text-body section-mt-sm"
								style="color: var(--color-muted-foreground); line-height: 1.6;"
							>
								{supporter.bio}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
