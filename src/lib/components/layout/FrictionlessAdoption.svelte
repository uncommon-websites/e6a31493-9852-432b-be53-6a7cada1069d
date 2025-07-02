<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// State for active step
	let activeStep = $state(1);

	// Step data
	const steps = [
		{
			id: 1,
			title: "Connect to your calendar",
			description: "Sentra becomes a great notetaker, unifying context across all meetings to your company data. Pre/post meeting briefs that don't invade your inbox or sore your eyes.",
			image: "/generated/image-a-group-of-colleagues-engaged-in-a-refle.webp"
		},
		{
			id: 2,
			title: "Add to your workspace (slack/etc)",
			description: "Add Sentra to channels that it should know about. You are in full control of sharing data.",
			image: "/generated/image-a-group-of-colleagues-engaged-in-a-refle.webp"
		},
		{
			id: 3,
			title: "Contextualized work coach",
			description: "Sentra periodically asks to do quick 1:1s. Helps people organize their work, keep track of their priorities/TODOs, and",
			image: "/generated/image-a-professional-coaching-session-between-.webp"
		},
		{
			id: 4,
			title: "Working in the background",
			description: "Zero supervision required/no setup time, truly autonomous. agentic.",
			image: "/generated/image-an-individual-working-alone-in-a-serene-.webp"
		}
	];

	// Get current step
	let currentStep = $derived(steps.find(step => step.id === activeStep) || steps[0]);

	function selectStep(stepId: number) {
		activeStep = stepId;
	}
</script>

<section class="bg-white">
	<div class="section-px section-py container mx-auto">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="Frictionless adoption"
				subtitle="It's not another piece of software, but like another entity in the company"
			/>
		</div>

		<!-- Main Content Grid -->
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
				<!-- Left Side - Step Navigation -->
				<div class="space-y-6">
					{#each steps as step, index}
						<button
							onclick={() => selectStep(step.id)}
							class={[
								"group w-full text-left transition-all duration-300 ease-out",
								"rounded-2xl border-2 p-6",
								activeStep === step.id 
									? "border-primary bg-primary/5" 
									: "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
							]}
						>
							<div class="flex items-start gap-4">
								<!-- Step Number -->
								<div class={[
									"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300",
									activeStep === step.id 
										? "bg-primary text-white" 
										: "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
								]}>
									{String(index + 1).padStart(2, '0')}
								</div>
								
								<!-- Step Content -->
								<div class="flex-1 min-w-0">
									<h3 class={[
										"text-lg font-semibold transition-colors duration-300",
										activeStep === step.id 
											? "text-primary" 
											: "text-gray-900 group-hover:text-gray-700"
									]}>
										{step.title}
									</h3>
									<p class={[
										"mt-2 text-sm leading-relaxed transition-colors duration-300",
										activeStep === step.id 
											? "text-gray-700" 
											: "text-gray-600"
									]}>
										{step.description}
									</p>
								</div>
							</div>
						</button>
					{/each}
				</div>

				<!-- Right Side - Visual Content -->
				<div class="flex items-center justify-center">
					<div class="relative w-full max-w-lg">
						<!-- Main Visual Container -->
						<div class="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
							<div class="aspect-video w-full">
								{#key activeStep}
									<img
										src={currentStep.image}
										alt={currentStep.title}
										class="h-full w-full object-cover transition-all duration-500 ease-out"
									/>
								{/key}
							</div>
							
							<!-- Overlay Content -->
							<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							
							<!-- Step Indicator -->
							<div class="absolute bottom-6 left-6 right-6">
								<div class="rounded-xl bg-white/90 p-4 backdrop-blur-sm">
									<div class="flex items-center gap-3">
										<div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
											{activeStep}
										</div>
										<span class="text-sm font-medium text-gray-900">
											{currentStep.title}
										</span>
									</div>
								</div>
							</div>
						</div>

						<!-- Progress Dots -->
						<div class="mt-6 flex justify-center gap-2">
							{#each steps as step}
								<button
									onclick={() => selectStep(step.id)}
									class={[
										"h-2 w-2 rounded-full transition-all duration-300",
										activeStep === step.id 
											? "bg-primary w-8" 
											: "bg-gray-300 hover:bg-gray-400"
									]}
								></button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>