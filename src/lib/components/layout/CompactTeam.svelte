<script lang="ts">
	type TeamMember = {
		name: string
		position: string
		description: string
		image: string
	}

	type Props = {
		title: string
		subtitle?: string
		members: TeamMember[]
	}

	let { title, subtitle, members }: Props = $props()
</script>

<section class="section-py section-px container mx-auto" style="background-color: var(--color-background);">
	<div class="max-w-4xl mx-auto">
		<div class="text-center section-mb-sm">
			<h2 class="text-title1 mb-4" style="color: var(--color-foreground);">{title}</h2>
			{#if subtitle}
				<p class="text-headline" style="color: var(--color-muted-foreground);">{subtitle}</p>
			{/if}
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each members as member}
				<div class="flex items-center gap-4 p-4 rounded-lg" style="background-color: var(--color-card); border: 1px solid var(--color-border);">
					<img
						src={member.image}
						alt={member.name}
						class="w-12 h-12 rounded-full object-cover flex-shrink-0"
					/>
					<div class="min-w-0">
						<h3 class="text-headline font-medium truncate" style="color: var(--color-foreground);">
							{member.name}
						</h3>
						<p class="text-caption truncate" style="color: var(--color-muted-foreground);">
							{member.position}
						</p>
						<p class="text-footnote mt-1 line-clamp-2" style="color: var(--color-muted-foreground);">
							{member.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>