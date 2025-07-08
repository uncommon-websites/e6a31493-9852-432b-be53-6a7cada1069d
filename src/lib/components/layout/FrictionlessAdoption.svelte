<script lang="ts">
	import { onMount } from "svelte";
	import SectionHeader from "./SectionHeader.svelte";

	let timelineContainer: HTMLElement = $state()!;
	let observerRef: IntersectionObserver;

	// Timeline data - extracted from HowItWorks_enhanced.svelte
	const steps = [
		{
			id: 1,
			title: "Add Sentra to platforms your company uses",
			description:
				"Connect Sentra to your existing tools like Slack, Teams, Zoom, Google Meet, and Google Calendar to start building organizational awareness.",
			badges: ["Leaders"],
			visual: "platform-selection"
		},
		{
			id: 2,
			title: "Share your calendars",
			description:
				"Allow Sentra to access team calendars to understand meeting patterns and organizational rhythms.",
			badges: ["Leaders"],
			visual: "calendar-sharing"
		},
		{
			id: 3,
			title: "Get briefed for every upcoming event",
			description:
				"Receive intelligent pre-meeting briefings with relevant context, user research, and personalized agendas based on participants and recent work.",
			badges: ["Everyone"],
			visual: "meeting-briefing"
		},
		{
			id: 4,
			title: "Never forget what you said you'd do",
			description:
				"Sentra automatically tracks commitments made in meetings and conversations, creating actionable TODO items and sending timely reminders.",
			badges: ["Everyone"],
			visual: "todo-tracking"
		},
		{
			id: 5,
			title: "Remember who your company's already met",
			description:
				"Get context about previous interactions with external contacts, including past meetings, NDAs, and relationship history.",
			badges: ["Everyone"],
			visual: "contact-history"
		},
		{
			id: 6,
			title: "Get alerted of key information you need to be aware of",
			description:
				"Stay informed about important decisions, deadline changes, and organizational updates, even from meetings you couldn't attend.",
			badges: ["Everyone"],
			visual: "key-alerts"
		},
		{
			id: 7,
			title: "Ask about the history of your org, with company memory",
			description:
				"Access a timeline of decisions, understand the reasoning behind project choices, and explore the evolution of your organization's thinking.",
			badges: ["Everyone"],
			visual: "company-memory"
		},
		{
			id: 8,
			title: "Sentra checks in with everyone",
			description:
				"Regular one-on-one conversations with Sentra help maintain alignment and surface potential issues before they become problems.",
			badges: ["Everyone"],
			visual: "check-ins"
		}
	];

	// State for active step
	let activeStep = $state(1);

	// Get current step
	let currentStep = $derived(steps.find((step) => step.id === activeStep) || steps[0]);

	function selectStep(stepId: number) {
		activeStep = stepId;
	}

	// Intersection observer for timeline animations and scaling
	onMount(() => {
		if (!timelineContainer) return;

		observerRef = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const card = entry.target.querySelector(".timeline-content");
					const visual = entry.target.querySelector(".visual-placeholder");
					if (entry.isIntersecting) {
						entry.target.classList.remove("opacity-0", "translate-y-8");
						entry.target.classList.add("opacity-100", "translate-y-0");
						visual?.classList.add("scale-105");
						// Scale to 100% when in center of screen
						if (entry.intersectionRatio > 0.7) {
							card?.classList.remove("scale-75");
							card?.classList.add("scale-100");
						} else {
							card?.classList.remove("scale-100");
							card?.classList.add("scale-75");
						}
					} else {
						card?.classList.remove("scale-100");
						card?.classList.add("scale-75");
						visual?.classList.remove("scale-105");
					}
				});
			},
			{
				threshold: [0.3, 0.7, 1.0],
				rootMargin: "-20% 0px -20% 0px"
			}
		);

		// Observe all timeline items
		const timelineItems = timelineContainer.querySelectorAll(".timeline-item");
		timelineItems.forEach((item) => observerRef.observe(item));

		return () => {
			observerRef?.disconnect();
		};
	});
</script>

<section class="bg-white">
	<div class="section-px section-py container-sm mx-auto">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="Frictionless adoption"
				subtitle="It's not another piece of software, but like another entity in the company"
			/>
		</div>

		<!-- Main Content Grid -->
		<div class="container-sm mx-auto">
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
										src={`/generated/${currentStep.visual}.png`}
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
