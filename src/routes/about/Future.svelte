<script lang="ts">
	// Props
	type Props = {
		title: string;
		content: string;
		imageSrc?: string;
	};
	let { title, content, imageSrc }: Props = $props();
</script>

<section class="py-16 md:py-24 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
					<div class="prose prose-lg text-gray-600">
						{@html content}
					</div>
				</div>
				{#if imageSrc}
					<div class="order-first lg:order-last">
						<img 
							src={imageSrc} 
							alt="Sentra's future vision"
							class="w-full h-auto rounded-xl shadow-lg"
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>