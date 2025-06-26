<script lang="ts">
	// Props
	type Props = {
		title: string;
		levels: Array<{
			level: string;
			name: string;
			description: string;
			roi: string;
			scope: string;
			involvement: string;
			examples?: string;
		}>;
	};
	let { title, levels }: Props = $props();
</script>

<section class="py-16 md:py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
				<p class="text-lg text-gray-600 max-w-3xl mx-auto">
					Understanding the evolution of AI from basic co-pilots to full autonomy, and where Sentra fits in this landscape.
				</p>
			</div>
			
			<div class="space-y-8">
				{#each levels as level, index}
					<div class="bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
						<div class="flex flex-col lg:flex-row lg:items-start gap-6">
							<div class="flex-shrink-0">
								<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
									{level.level}
								</div>
							</div>
							
							<div class="flex-1">
								<h3 class="text-2xl font-bold text-gray-900 mb-2">{level.name}</h3>
								<p class="text-gray-600 mb-4 leading-relaxed">{level.description}</p>
								
								<div class="grid md:grid-cols-3 gap-4 text-sm">
									<div>
										<span class="font-semibold text-gray-900">ROI:</span>
										<p class="text-gray-600 mt-1">{level.roi}</p>
									</div>
									<div>
										<span class="font-semibold text-gray-900">Impact Scope:</span>
										<p class="text-gray-600 mt-1">{level.scope}</p>
									</div>
									<div>
										<span class="font-semibold text-gray-900">Human Involvement:</span>
										<p class="text-gray-600 mt-1">{level.involvement}</p>
									</div>
								</div>
								
								{#if level.examples}
									<div class="mt-4 pt-4 border-t border-gray-100">
										<span class="font-semibold text-gray-900 text-sm">Examples:</span>
										<p class="text-gray-600 text-sm mt-1">{level.examples}</p>
									</div>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<div class="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
				<h3 class="text-xl font-bold text-gray-900 mb-4">Why L3 Changes Everything</h3>
				<p class="text-gray-600 leading-relaxed">
					The leap from L2 to L3 represents a fundamental shift in AI capabilities. While L0-L2 agents enhance individual productivity, 
					L3 agents like Sentra impact entire organizations by working towards continuous business mandates. This requires not just 
					advanced technology, but careful consideration of human incentives and organizational dynamics.
				</p>
			</div>
		</div>
	</div>
</section>