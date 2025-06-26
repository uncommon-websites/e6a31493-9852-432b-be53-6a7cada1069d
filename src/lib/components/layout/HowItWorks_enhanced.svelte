<script lang="ts">
	import { onMount } from "svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import Button from "../ui/Button.svelte";

	// State for tab switching
	let activeTab = $state("organizations");
	let timelineContainer: HTMLElement;
	let observerRef: IntersectionObserver;

	// Timeline data for organizations
	const organizationSteps = [
		{
			id: 1,
			title: "Add Sentra to platforms your company use",
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

	// Timeline data for individuals
	const individualSteps = [
		{
			id: 1,
			title: "Connect your calendar, and get a dedicated phone number for Sentra",
			description:
				"Set up your personal connection to Sentra through calendar integration and direct communication access.",
			badges: ["You"],
			visual: "personal-setup"
		},
		{
			id: 2,
			title: "Get briefed for every upcoming event",
			description:
				"Receive personalized meeting briefings based on your conversation history and relationships with participants.",
			badges: ["You"],
			visual: "personal-briefing"
		},
		{
			id: 3,
			title: "Never forget what you said you'd do",
			description:
				"Sentra tracks your commitments and sends proactive text reminders to help you stay on top of your responsibilities.",
			badges: ["You"],
			visual: "personal-todos"
		},
		{
			id: 4,
			title: "Tell Sentra the personal goals you're chasing",
			description:
				"Share your objectives and aspirations so Sentra can help align your daily activities with your bigger picture goals.",
			badges: ["You"],
			visual: "goal-setting"
		},
		{
			id: 5,
			title: "Sentra will call you to guide you through daily reflections",
			description:
				"Regular reflection calls help you process your day, celebrate wins, and plan for continuous improvement.",
			badges: ["You"],
			visual: "daily-reflections"
		}
	];

	// Get current steps based on active tab
	let currentSteps = $derived(activeTab === "organizations" ? organizationSteps : individualSteps);

	// Handle tab switching
	function switchTab(tab: string) {
		activeTab = tab;
	}

	// Intersection observer for timeline animations and scaling
	onMount(() => {
		if (typeof window !== "undefined") {
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
			const timelineItems = timelineContainer?.querySelectorAll(".timeline-item");
			timelineItems?.forEach((item) => observerRef.observe(item));
		}

		return () => {
			observerRef?.disconnect();
		};
	});
</script>

<section class="bg-gray-50">
	<div class="section-px section-py container mx-auto">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="What it's like to work with Sentra (test)"
				subtitle="Keeping everything together"
			/>
		</div>

		<!-- Tab Navigation -->
		<div class="mb-8 flex justify-center">
			<div class="bg-muted inline-flex items-center gap-0.5 rounded-full p-0.5">
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {activeTab ===
					'organizations'
						? 'bg-background text-foreground shadow-sm'
						: 'text-muted-foreground hover:text-foreground'}"
					onclick={() => switchTab("organizations")}
				>
					For organizations
				</button>
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {activeTab ===
					'individuals'
						? 'bg-background text-foreground shadow-sm'
						: 'text-muted-foreground hover:text-foreground'}"
					onclick={() => switchTab("individuals")}
				>
					For individuals
				</button>
			</div>
		</div>

		<!-- Timeline Container -->
		<div
			class="relative mx-auto max-w-prose py-4 text-balance md:py-8"
			bind:this={timelineContainer}
		>
			{#each currentSteps as step, index (step.id)}
				<div
					class="timeline-item relative mb-24 translate-y-8 opacity-0 transition-all duration-500 ease-out"
					data-step={step.id}
				>
					{#if index > 0}
						<div class="relative mx-auto mb-12 h-20 w-px bg-gray-300"></div>
					{/if}

					<!-- Heading and badges above the card -->
					<div class="mx-auto mb-10 grid max-w-xl gap-1 text-center">
						<h1 class="text-title1 text-foreground mx-auto mb-6 !font-medium">
							{step.title}
						</h1>
						<!-- <p class="text-body text-emphasis-medium">{step.description}</p> -->
						<div class="flex flex-wrap justify-center gap-3">
							{#each step.badges as badge}
								<span
									class="bg-muted text-muted-foreground rounded-full px-4 py-1.5 text-sm font-medium tracking-wide"
									>{badge}</span
								>
							{/each}
						</div>
					</div>

					<div
						class="border-border timeline-content bg-whitetext-center relative mx-auto max-w-prose scale-90 transform rounded-3xl border bg-white transition-all duration-750 ease-out"
					>
						<div class="mx-auto w-full flex-shrink-0">
							<div
								class="section-py section-px visual-placeholder flex h-full w-full items-center justify-center rounded-lg transition-transform duration-300 ease-out {step.visual}"
							>
								<div class="flex h-[90%] w-[90%] flex-col items-center justify-center">
									{#if step.visual === "platform-selection"}
										<div class="grid w-full grid-cols-2 gap-2">
											<div
												class="bg-primary border-primary text-primary-foreground flex items-center justify-center gap-1 rounded-sm border px-3 py-2 text-center text-sm font-medium"
											>
												Slack
											</div>
											<div
												class="bg-primary border-primary text-primary-foreground flex items-center justify-center gap-1 rounded-sm border px-3 py-2 text-center text-sm font-medium"
											>
												Teams
											</div>
											<div
												class="bg-background border-border text-muted-foreground flex items-center justify-center gap-1 rounded-sm border px-3 py-2 text-center text-sm font-medium"
											>
												Zoom
											</div>
											<div
												class="bg-primary border-primary text-primary-foreground flex items-center justify-center gap-1 rounded-sm border px-3 py-2 text-center text-sm font-medium"
											>
												Google Meet
											</div>
											<div
												class="bg-background border-border text-muted-foreground flex items-center justify-center gap-1 rounded-sm border px-3 py-2 text-center text-sm font-medium"
											>
												Calendar
											</div>
											<div
												class="bg-primary border-primary text-primary-foreground flex items-center justify-center gap-1 rounded-sm border px-3 py-2 text-center text-sm font-medium"
											>
												Gmail
											</div>
										</div>
									{:else if step.visual === "calendar-sharing"}
										<img
											src="/generated/image-a-modern-office-space-with-a-blend-of-sl.webp"
											alt="Modern office workspace"
											class="h-full w-full rounded-lg object-cover"
										/>
									{:else if step.visual === "meeting-briefing"}
										<div class="bg-background border-border w-full rounded-lg border p-4">
											<div class="mb-2 flex items-center justify-between">
												<span class="text-caption font-medium">Meeting Brief</span>
												<span class="text-footnote">9:30 AM</span>
											</div>
											<div class="space-y-1">
												<p><strong>User research review with Sarah</strong></p>
												<p>Last discussed: Q4 roadmap priorities</p>
												<p>Participants: You, Sarah, Mike</p>
												<div class="mt-2 flex gap-2">
													<span
														class="bg-muted text-muted-foreground rounded-lg px-2 py-0.5 text-xs font-medium"
														>Research</span
													>
													<span
														class="bg-muted text-muted-foreground rounded-lg px-2 py-0.5 text-xs font-medium"
														>Planning</span
													>
												</div>
											</div>
										</div>
									{:else if step.visual === "personal-briefing"}
										<img
											src="/generated/image-a-business-professional-sitting-at-a-des.webp"
											alt="Professional reviewing documents"
											class="h-full w-full rounded-lg object-cover"
										/>
									{:else if step.visual === "todo-tracking" || step.visual === "personal-todos"}
										<div class="w-full">
											<div class="bg-background border-border mb-2 rounded-lg border p-4">
												<span class="text-caption mb-1 block font-medium"
													>Follow up with client by Friday</span
												>
												<span class="text-footnote">From: Team standup</span>
											</div>
											<div
												class="bg-secondary border-border text-secondary-foreground rounded-lg border p-2 text-center"
											>
												<span class="text-footnote">Reminder: Due tomorrow</span>
											</div>
										</div>
									{:else if step.visual === "contact-history"}
										<div class="bg-background border-border w-full rounded-lg border p-4">
											<div class="mb-2 flex items-center justify-between">
												<span class="text-caption font-medium">AstraZeneca Meeting</span>
												<span class="text-footnote">1 month ago</span>
											</div>
											<div class="space-y-1">
												<p class="text-caption">NDA signed</p>
												<p class="text-caption">Partnership discussion</p>
												<p class="text-caption">Contact: Jae Park</p>
											</div>
										</div>
									{:else if step.visual === "key-alerts"}
										<div class="bg-background border-border w-full rounded-lg border p-4">
											<div class="mb-2 flex items-center gap-2">
												<span class="text-caption font-medium">Deadline moved to next Friday</span>
											</div>
											<div class="text-footnote italic">
												From: Leadership meeting (you weren't invited)
											</div>
										</div>
									{:else if step.visual === "company-memory"}
										<div class="w-full">
											<div class="border-border flex items-center justify-between border-b py-2">
												<span class="text-footnote">3 months ago</span>
												<span class="text-caption font-medium">Project X initiated</span>
											</div>
											<div class="border-border flex items-center justify-between border-b py-2">
												<span class="text-footnote">2 months ago</span>
												<span class="text-caption font-medium">Architecture decision</span>
											</div>
											<div class="flex items-center justify-between py-2">
												<span class="text-footnote">1 month ago</span>
												<span class="text-caption font-medium">Scope refinement</span>
											</div>
										</div>
									{:else if step.visual === "check-ins"}
										<img
											src="/generated/image-a-diverse-group-of-professionals-in-a-so.webp"
											alt="Team collaboration"
											class="h-full w-full rounded-lg object-cover"
										/>
									{:else if step.visual === "personal-setup"}
										<div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
											<div
												class="bg-background border-border flex min-w-[120px] flex-col items-center gap-2 rounded-lg border p-4"
											>
												<span class="text-caption font-medium">Calendar Connected</span>
											</div>
											<div
												class="text-muted-foreground rotate-90 transform text-2xl md:rotate-0 md:transform-none"
											>
												→
											</div>
											<div
												class="bg-background border-border flex min-w-[120px] flex-col items-center gap-2 rounded-lg border p-4"
											>
												<span class="text-caption font-medium">Direct Line: (555) 123-4567</span>
											</div>
										</div>
									{:else if step.visual === "goal-setting"}
										<img
											src="/generated/image-an-individual-sitting-quietly-in-a-home-.webp"
											alt="Personal goal planning"
											class="h-full w-full rounded-lg object-cover"
										/>
									{:else if step.visual === "daily-reflections"}
										<img
											src="/generated/image-a-person-sitting-at-a-wooden-table-surro.webp"
											alt="Daily reflection"
											class="h-full w-full rounded-lg object-cover"
										/>
									{:else}
										<div class="text-center">
											<div class="text-caption text-emphasis-medium">{step.title}</div>
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA Section -->
		<div class="bg-card mt-16 rounded-lg p-8 text-center">
			{#if activeTab === "organizations"}
				<div>
					<h2 class="text-title2 text-foreground mb-4">Catch misalignment before it costs you</h2>
					<p class="text-body text-emphasis-medium mx-auto mb-8 max-w-2xl">
						Sentra is your AI teammate that listens, learns, and alerts you when your company drifts
						— before you even notice.
					</p>
					<div class="mx-auto my-8 max-w-lg text-left">
						<div
							class="mb-2 flex items-center gap-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4"
						>
							<div class="flex-1">
								<span class="text-foreground mb-1 block font-semibold"
									>Sarah waiting on approvals</span
								>
								<span class="text-muted-foreground text-sm"
									>Budget increase for cloud resources</span
								>
							</div>
							<span class="text-muted-foreground text-xs">3d ago</span>
						</div>
						<div
							class="mb-2 flex items-center gap-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4"
						>
							<div class="flex-1">
								<span class="text-foreground mb-1 block font-semibold"
									>Redundant work in progress</span
								>
								<span class="text-muted-foreground text-sm"
									>Two teams implementing the same user settings flow separately</span
								>
							</div>
							<span class="text-muted-foreground text-xs">15m ago</span>
						</div>
						<div
							class="mb-2 flex items-center gap-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4"
						>
							<div class="flex-1">
								<span class="text-foreground mb-1 block font-semibold">Team velocity dropping</span>
								<span class="text-muted-foreground text-sm"
									>Frontend team missed sprint goals 2x in a row</span
								>
							</div>
							<span class="text-muted-foreground text-xs">15m ago</span>
						</div>
					</div>
					<Button variant="primary" size="lg">Hire Sentra today</Button>
				</div>
			{:else}
				<div>
					<h2 class="text-title2 text-foreground mb-4">Organize your life towards your goals</h2>
					<p class="text-body text-emphasis-medium mx-auto mb-8 max-w-2xl">
						Let Sentra provide a sense of order to your busy life, helping you stay aligned with
						what matters most.
					</p>
					<div class="my-8 flex flex-col items-center justify-center gap-4 md:flex-row">
						<div
							class="bg-muted border-border text-muted-foreground rounded-full border px-4 py-2 text-sm"
						>
							Launch side project
						</div>
						<div
							class="bg-muted border-border text-muted-foreground rounded-full border px-4 py-2 text-sm"
						>
							Read 12 books this year
						</div>
						<div
							class="bg-muted border-border text-muted-foreground rounded-full border px-4 py-2 text-sm"
						>
							Exercise 3x per week
						</div>
						<div
							class="bg-primary text-primary-foreground flex h-15 w-15 items-center justify-center rounded-full text-lg font-semibold"
						>
							AI
						</div>
					</div>
					<Button variant="primary" size="lg">Hire Sentra today</Button>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Responsive styles are now handled by Tailwind classes -->
