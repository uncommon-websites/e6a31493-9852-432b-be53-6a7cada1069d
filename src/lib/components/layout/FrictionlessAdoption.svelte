<script lang="ts">
	import { onMount } from "svelte"
	import SectionHeader from "./SectionHeader.svelte"

	let timelineContainer: HTMLElement = $state()!
	let observerRef: IntersectionObserver

	// Feature cards data for frictionless adoption
	const steps = [
		{
			id: 1,
			title: "Share your calendar",
			description:
				"Sentra attends your meetings to capture context, decisions, and commitments — without clogging up your inbox. Get pre-meeting briefs powered by company memory.",
			visual: "image-a-group-of-professionals-gathered-in-a-s"
		},
		{
			id: 2,
			title: "Add to your workspace",
			description:
				"Sentra lives where you already live. No licensing, no installations, no context switching. Unifies workspace activity with meetings.",
			visual: "image-a-cozy-workspace-where-a-team-collaborat"
		},
		{
			id: 3,
			title: "Sentra introduces herself",
			description:
				"Sentra introduces herself to everyone on the team, guiding each person individually and adjusting to their workflows.",
			visual: "image-two-colleagues-introducing-themselves-in"
		},
		{
			id: 4,
			title: "Starts building memory from day one",
			description: "Sentra quietly gets to work in the background to build company memory.",
			visual: "image-a-serene-home-office-setup-where-an-indi"
		}
	]

	// State for active step
	let activeStep = $state(1)

	// Get current step
	let currentStep = $derived(steps.find((step) => step.id === activeStep) || steps[0])

	function selectStep(stepId: number) {
		activeStep = stepId
	}

	// Intersection observer for timeline animations and scaling
	onMount(() => {
		if (!timelineContainer) return

		observerRef = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const card = entry.target.querySelector(".timeline-content")
					const visual = entry.target.querySelector(".visual-placeholder")
					if (entry.isIntersecting) {
						entry.target.classList.remove("opacity-0", "translate-y-8")
						entry.target.classList.add("opacity-100", "translate-y-0")
						visual?.classList.add("scale-105")
						// Scale to 100% when in center of screen
						if (entry.intersectionRatio > 0.7) {
							card?.classList.remove("scale-75")
							card?.classList.add("scale-100")
						} else {
							card?.classList.remove("scale-100")
							card?.classList.add("scale-75")
						}
					} else {
						card?.classList.remove("scale-100")
						card?.classList.add("scale-75")
						visual?.classList.remove("scale-105")
					}
				})
			},
			{
				threshold: [0.3, 0.7, 1.0],
				rootMargin: "-20% 0px -20% 0px"
			}
		)

		// Observe all timeline items
		const timelineItems = timelineContainer.querySelectorAll(".timeline-item")
		timelineItems.forEach((item) => observerRef.observe(item))

		return () => {
			observerRef?.disconnect()
		}
	})
</script>

<section class="bg-white">
	<div class="section-px section-py mx-auto max-w-6xl">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="Frictionless adoption"
				subtitle="Simple self-service onboarding. Setup takes less than 4 minutes."
			/>
		</div>

		<!-- Main Content Grid -->
		<div class="mx-auto max-w-6xl">
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
						<div class="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
							<div class="aspect-square w-full">
								{#key activeStep}
									<img
										src={`/generated/${currentStep.visual}.webp`}
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
									aria-label="Go to step {step.id}: {step.title}"
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
