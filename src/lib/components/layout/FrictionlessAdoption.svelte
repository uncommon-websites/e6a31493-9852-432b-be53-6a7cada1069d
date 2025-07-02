<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// State for active step
	let activeStep = $state(1);

	// Step data
	const steps = [
		{
			id: 1,
			title: "Connect your calendar",
			description:
				"Sentra attends your meetings to capture context, decisions, and commitments—without clogging up inboxes or chasing notes across tools.",
			image: "/generated/image-a-group-of-colleagues-engaged-in-a-refle.webp"
		},
		{
			id: 2,
			title: "Add your tools",
			description:
				"Connect Slack and your existing systems so Sentra can surface breaks in context—without ever surveilling individuals.",
			image: "/generated/image-a-group-of-colleagues-engaged-in-a-refle.webp"
		},
		{
			id: 3,
			title: "Stay ahead of misalignment",
			description:
				"Sentra checks in proactively when it spots drift, surfacing the signal leaders need to guide teams before friction spreads.",
			image: "/generated/image-a-professional-coaching-session-between-.webp"
		},
		{
			id: 4,
			title: "Quietly working in the background",
			description:
				"Sentra listens across the company in real time. No micro-tracking—just a second brain for your org that helps you course-correct early.",
			image: "/generated/image-an-individual-working-alone-in-a-serene-.webp"
		}
	];

	// Get current step
	let currentStep = $derived(steps.find((step) => step.id === activeStep) || steps[0]);

	function selectStep(stepId: number) {
		activeStep = stepId;
	}
</script>

<section class="bg-white">
	<div class="section-px section-py container mx-auto">
		<!-- <div class="mx-auto grid place-items-center text-center"> -->
		<SectionHeader
			title="Frictionless adoption"
			subtitle="It's not another piece of software, but like another entity in the company"
		/>
		<!-- </div> -->

		<!-- Main Content Grid -->
		<div class="container mx-auto">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
				<!-- Left Side - Step Navigation -->
				<div class="space-y-6">
					{#each steps as step, index}
						<button
							onclick={() => selectStep(step.id)}
							class={[
								"group w-full text-left transition-all duration-300 ease-out",
								"rounded-2xl p-6",
								activeStep === step.id ? "bg-primary-50" : "bg-white hover:bg-gray-50"
							]}
						>
							<div class="flex gap-4">
								<!-- Step Content with Dot aligned to heading -->
								<div class="min-w-0 flex-1">
									<div class="flex items-center gap-4">
										<!-- Step Dot aligned to heading -->
										<div
											class={[
												"flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
												activeStep === step.id
													? "bg-primary"
													: "bg-gray-200 group-hover:bg-gray-300"
											]}
										></div>
										<h3
											class={[
												"text-headline font-semibold transition-colors duration-300",
												activeStep === step.id
													? "text-primary"
													: "text-gray-900 group-hover:text-gray-700"
											]}
										>
											{step.title}
										</h3>
									</div>
									<p
										class={[
											"text-caption mt-2 ml-7 leading-relaxed transition-colors duration-300",
											activeStep === step.id ? "text-gray-700" : "text-gray-600"
										]}
									>
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
							<div class="aspect-square w-full">
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
							<div class="absolute right-6 bottom-6 left-6">
								<div class="rounded-xl bg-white/90 p-4 backdrop-blur-sm">
									<div class="flex items-center gap-3">
										<div
											class="bg-primary text-footnote flex h-6 w-6 items-center justify-center rounded-full font-bold text-white"
										>
											{activeStep}
										</div>
										<span class="text-caption font-medium text-gray-900">
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
										activeStep === step.id ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
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
