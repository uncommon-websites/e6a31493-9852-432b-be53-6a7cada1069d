<script lang="ts">
	type TeamMember = {
		name: string;
		position: string;
		description: string;
		image: string;
	};

	type Props = {
		title: string;
		subtitle?: string;
		members: TeamMember[];
	};

	let { title, subtitle, members }: Props = $props();
</script>

<section class="section-py section-px bg-background container mx-auto">
	<div class="mx-auto max-w-4xl">
		<div class="section-mb-sm text-center">
			<h2 class="text-title1 text-foreground mb-4">{title}</h2>
			{#if subtitle}
				<p class="text-headline text-muted-foreground">{subtitle}</p>
			{/if}
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each members as member}
				<div class="bg-card border-border flex items-center gap-4 rounded-lg border p-4">
					<img
						src={member.image}
						alt={member.name}
						class="h-12 w-12 flex-shrink-0 rounded-full object-cover"
					/>
					<div class="min-w-0">
						<h3 class="text-headline text-foreground truncate font-medium">
							{member.name}
						</h3>
						<p class="text-caption text-muted-foreground truncate">
							{member.position}
						</p>
						<p class="text-footnote text-muted-foreground mt-1 line-clamp-2">
							{member.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
