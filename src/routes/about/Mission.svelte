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

<section class="py-16 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
				{#if subtitle}
					<p class="text-lg text-gray-600">{subtitle}</p>
				{/if}
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				{#each bets as bet}
					<div class="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
						<h3 class="text-xl font-semibold text-gray-900 mb-3">{bet.title}</h3>
						<p class="text-gray-600 leading-relaxed">{bet.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>