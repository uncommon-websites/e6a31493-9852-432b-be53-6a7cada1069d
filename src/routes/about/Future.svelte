<script lang="ts">
	// Props
	type Props = {
		title: string;
		content: string;
		imageSrc?: string;
	};
	let { title, content, imageSrc }: Props = $props();
</script>

<section class="section-py" style="background-color: var(--color-background);">
	<div class="section-px mx-auto max-w-6xl">
		<div class="mx-auto max-w-4xl">
			<h2 class="text-title1 section-mb" style="color: var(--color-foreground);">{title}</h2>
			<div class="text-body" style="color: var(--color-muted-foreground); line-height: 1.7;">
				{@html content}
			</div>
		</div>
	</div>
</section>
