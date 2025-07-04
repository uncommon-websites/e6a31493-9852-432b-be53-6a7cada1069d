<script lang="ts">
	import { onMount } from "svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import Button from "../ui/Button.svelte";

	let timelineContainer: HTMLElement;
	let observerRef: IntersectionObserver;

	// Timeline data
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

	// No longer needed - removed individual steps and tab switching logic

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

<section class="bg-white">
	<div class="section-px section-py container mx-auto">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="What it's like to work with Sentra"
				subtitle="Keeping everything together"
			/>
		</div>
		<!-- Tab navigation removed - only showing organization content -->

		<!-- Timeline Container -->
		<div
			class="relative mx-auto max-w-prose py-4 text-balance md:py-8"
			bind:this={timelineContainer}
		>
			{#each steps as step, index (step.id)}
				<div
					class="timeline-item relative mb-12 translate-y-8 opacity-0 transition-all duration-500 ease-out"
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
						class="border-border timeline-content relative mx-auto max-w-prose scale-90 transform rounded-3xl border bg-gray-50 text-left transition-all duration-750 ease-out"
					>
						<div class="mx-auto w-full flex-shrink-0">
							<div
								class="section-py section-px visual-placeholder flex h-full w-full items-center justify-center rounded-lg transition-transform duration-300 ease-out {step.visual}"
							>
								<div class="flex h-[90%] w-[90%] flex-col items-center justify-center">
									{#if step.visual === "platform-selection"}
										<div class="w-full space-y-4">
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-3 flex items-center justify-between">
													<span class="text-caption font-medium">Platform Integration</span>
													<span
														class="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-medium"
														>6 connected</span
													>
												</div>
												<div class="grid grid-cols-2 gap-2">
													<div
														class="bg-primary border-primary text-primary-foreground flex items-center justify-start gap-1 rounded-sm border px-3 py-2 text-left text-sm font-medium"
													>
														<div class="h-2 w-2 rounded-full bg-green-400"></div>
														Slack
													</div>
													<div
														class="bg-primary border-primary text-primary-foreground flex items-center justify-start gap-1 rounded-sm border px-3 py-2 text-left text-sm font-medium"
													>
														<div class="h-2 w-2 rounded-full bg-green-400"></div>
														Teams
													</div>
													<div
														class="bg-background border-border text-muted-foreground flex items-center justify-start gap-1 rounded-sm border px-3 py-2 text-left text-sm font-medium"
													>
														<div class="h-2 w-2 rounded-full bg-gray-300"></div>
														Zoom
													</div>
													<div
														class="bg-primary border-primary text-primary-foreground flex items-center justify-start gap-1 rounded-sm border px-3 py-2 text-left text-sm font-medium"
													>
														<div class="h-2 w-2 rounded-full bg-green-400"></div>
														Google Meet
													</div>
													<div
														class="bg-background border-border text-muted-foreground flex items-center justify-start gap-1 rounded-sm border px-3 py-2 text-left text-sm font-medium"
													>
														<div class="h-2 w-2 rounded-full bg-gray-300"></div>
														Calendar
													</div>
													<div
														class="bg-primary border-primary text-primary-foreground flex items-center justify-start gap-1 rounded-sm border px-3 py-2 text-left text-sm font-medium"
													>
														<div class="h-2 w-2 rounded-full bg-green-400"></div>
														Gmail
													</div>
												</div>
											</div>
										</div>
									{:else if step.visual === "calendar-sharing"}
										<div class="w-full space-y-4">
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-3 flex items-center justify-between">
													<span class="text-caption font-medium">Team Calendar Access</span>
													<span
														class="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-medium"
														>8 calendars shared</span
													>
												</div>
												<div class="space-y-3">
													<div class="flex items-center justify-between">
														<div class="flex items-center gap-3">
															<div
																class="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium"
															>
																JP
															</div>
															<div>
																<p class="text-caption font-medium">Jae Park</p>
																<p class="text-footnote text-muted-foreground">CEO</p>
															</div>
														</div>
														<span
															class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
															>Full access</span
														>
													</div>
													<div class="flex items-center justify-between">
														<div class="flex items-center gap-3">
															<div
																class="bg-secondary text-secondary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium"
															>
																AS
															</div>
															<div>
																<p class="text-caption font-medium">Andrey Starenky</p>
																<p class="text-footnote text-muted-foreground">CTO</p>
															</div>
														</div>
														<span
															class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
															>Full access</span
														>
													</div>
													<div class="flex items-center justify-between">
														<div class="flex items-center gap-3">
															<div
																class="bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium"
															>
																AG
															</div>
															<div>
																<p class="text-caption font-medium">Ashwin Gopinath</p>
																<p class="text-footnote text-muted-foreground">Co-founder</p>
															</div>
														</div>
														<span
															class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
															>View only</span
														>
													</div>
												</div>
											</div>
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-3 flex items-center justify-between">
													<span class="text-caption font-medium">Calendar Insights</span>
													<span class="text-footnote text-muted-foreground">This week</span>
												</div>
												<div class="grid grid-cols-2 gap-3">
													<div class="text-left">
														<p class="text-title3 font-medium">24</p>
														<p class="text-footnote text-muted-foreground">Team meetings</p>
													</div>
													<div class="text-left">
														<p class="text-title3 font-medium">6h</p>
														<p class="text-footnote text-muted-foreground">Focus time</p>
													</div>
												</div>
											</div>
										</div>
									{:else if step.visual === "meeting-briefing"}
										<div class="bg-background border-border w-full rounded-lg border p-4">
											<div class="mb-2 flex items-center justify-between">
												<span class="text-headline font-medium">Meeting Brief</span>
												<span
													class="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium"
													>9:30 AM</span
												>
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
									{:else if step.visual === "todo-tracking"}
										<div class="w-full space-y-3">
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Follow up with client by Friday</span>
													<span
														class="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800"
														>Due tomorrow</span
													>
												</div>
												<div class="flex items-center justify-between">
													<span class="text-footnote text-muted-foreground">From: Team standup</span>
													<span class="text-footnote text-muted-foreground">High priority</span>
												</div>
											</div>
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Review Q4 budget proposal</span>
													<span
														class="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800"
														>Due next week</span
													>
												</div>
												<div class="flex items-center justify-between">
													<span class="text-footnote text-muted-foreground">From: Leadership meeting</span>
													<span class="text-footnote text-muted-foreground">Medium priority</span>
												</div>
											</div>
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Update security documentation</span>
													<span
														class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
														>Completed</span
													>
												</div>
												<div class="flex items-center justify-between">
													<span class="text-footnote text-muted-foreground">From: Security review</span>
													<span class="text-footnote text-muted-foreground">Low priority</span>
												</div>
											</div>
											<div class="bg-muted border-border rounded-lg border p-3 text-left">
												<span class="text-footnote text-muted-foreground">3 more tasks tracked automatically</span>
											</div>
										</div>
									{:else if step.visual === "contact-history"}
										<div class="w-full space-y-3">
											<div class="bg-background border-border rounded-lg border p-4">
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
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Microsoft Teams Call</span>
													<span class="text-footnote">2 weeks ago</span>
												</div>
												<div class="space-y-1">
													<p class="text-caption">Product demo completed</p>
													<p class="text-caption">Technical requirements discussed</p>
													<p class="text-caption">Contact: Sarah Chen</p>
												</div>
											</div>
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Google Workspace Integration</span>
													<span class="text-footnote">3 days ago</span>
												</div>
												<div class="space-y-1">
													<p class="text-caption">API access granted</p>
													<p class="text-caption">Security review passed</p>
													<p class="text-caption">Contact: Alex Rodriguez</p>
												</div>
											</div>
											<div class="bg-muted border-border rounded-lg border p-3 text-left">
												<span class="text-footnote text-muted-foreground">12 more contact interactions tracked</span>
											</div>
										</div>
									{:else if step.visual === "key-alerts"}
										<div class="w-full space-y-3">
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Deadline moved to next Friday</span
													>
													<span
														class="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800"
														>High Priority</span
													>
												</div>
												<div class="text-footnote italic">
													From: Leadership meeting (you weren't invited)
												</div>
											</div>
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium">Budget approved for Q1 hiring</span
													>
													<span
														class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
														>Decision Made</span
													>
												</div>
												<div class="text-footnote italic">From: Board meeting (confidential)</div>
											</div>
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-2 flex items-center justify-between">
													<span class="text-caption font-medium"
														>New security policy effective Monday</span
													>
													<span
														class="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
														>Policy Update</span
													>
												</div>
												<div class="text-footnote italic">From: Security team standup</div>
											</div>
										</div>
									{:else if step.visual === "company-memory"}
										<div class="w-full space-y-6">
											<!-- Timeline Item 1 -->
											<div class="relative flex items-start gap-4">
												<div class="relative flex flex-col items-center">
													<div class="bg-primary h-3 w-3 rounded-full"></div>
													<div class="bg-border mt-2 h-8 w-px"></div>
												</div>
												<div class="flex-1 pt-0">
													<div class="bg-background border-border rounded-lg border p-3">
														<div class="flex items-center justify-between">
															<span class="text-caption font-medium">Project X initiated</span>
															<span class="text-footnote text-muted-foreground">3 months ago</span>
														</div>
														<p class="text-footnote text-muted-foreground mt-1">Initial planning and team formation</p>
													</div>
												</div>
											</div>

											<!-- Timeline Item 2 -->
											<div class="relative flex items-start gap-4">
												<div class="relative flex flex-col items-center">
													<div class="bg-secondary h-3 w-3 rounded-full"></div>
													<div class="bg-border mt-2 h-8 w-px"></div>
												</div>
												<div class="flex-1 pt-0">
													<div class="bg-background border-border rounded-lg border p-3">
														<div class="flex items-center justify-between">
															<span class="text-caption font-medium">Architecture decision</span>
															<span class="text-footnote text-muted-foreground">2 months ago</span>
														</div>
														<p class="text-footnote text-muted-foreground mt-1">Technical stack and infrastructure choices</p>
													</div>
												</div>
											</div>

											<!-- Timeline Item 3 -->
											<div class="relative flex items-start gap-4">
												<div class="relative flex flex-col items-center">
													<div class="bg-muted h-3 w-3 rounded-full"></div>
												</div>
												<div class="flex-1 pt-0">
													<div class="bg-background border-border rounded-lg border p-3">
														<div class="flex items-center justify-between">
															<span class="text-caption font-medium">Scope refinement</span>
															<span class="text-footnote text-muted-foreground">1 month ago</span>
														</div>
														<p class="text-footnote text-muted-foreground mt-1">Feature prioritization and timeline adjustment</p>
													</div>
												</div>
											</div>
										</div>
									{:else if step.visual === "check-ins"}
										<div class="w-full space-y-4">
											<div class="bg-background border-border rounded-lg border p-4">
												<div class="mb-3 flex items-center justify-between">
													<span class="text-caption font-medium">Sentra Check-in</span>
													<span
														class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
														>Weekly</span
													>
												</div>
												<div class="space-y-3">
													<div class="flex items-start gap-3">
														<div
															class="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium"
														>
															S
														</div>
														<div class="flex-1">
															<p class="text-caption font-medium">
																How are you feeling about the Q4 roadmap progress?
															</p>
															<p class="text-footnote text-muted-foreground">
																Any blockers or concerns I should know about?
															</p>
														</div>
													</div>
													<div class="ml-11 space-y-2">
														<div class="bg-muted rounded-lg p-3">
															<p class="text-caption">
																Things are going well overall. The API integration is taking longer
																than expected though.
															</p>
														</div>
														<div class="flex gap-2">
															<button
																class="bg-primary text-primary-foreground rounded-lg px-3 py-1 text-xs font-medium"
																>Send update to team</button
															>
															<button
																class="bg-secondary text-secondary-foreground rounded-lg px-3 py-1 text-xs font-medium"
																>Schedule follow-up</button
															>
														</div>
													</div>
												</div>
											</div>
										</div>
										<!-- Individual-specific visuals removed -->
									{:else}
										<div class="text-left">
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
		<div class="mt-24 hidden">
			<div class="mx-auto max-w-4xl">
				<!-- Header Section -->
				<div class="mb-16 text-center">
					<h1 class="text-title1 text-foreground mx-auto mb-8 !font-medium">
						Catch misalignment before it costs you
					</h1>
					<p class="text-body text-emphasis-medium mx-auto max-w-3xl">
						Sentra is your AI teammate that listens, learns, and alerts you when your company drifts
						— before you even notice.
					</p>
				</div>

				<!-- Main CTA Card -->
				<div
					class="border-border relative mx-auto max-w-4xl transform rounded-3xl border bg-white transition-all duration-300 ease-out"
				>
					<div class="section-py section-px">
						<!-- Alert Examples -->
						<div class="mx-auto mb-12 max-w-2xl space-y-4">
							<div
								class="flex items-center gap-4 rounded-2xl border-l-4 border-red-500 bg-red-50 p-6"
							>
								<div class="flex-1">
									<span class="text-foreground mb-2 block text-lg !font-medium"
										>Sarah waiting on approvals</span
									>
									<span class="text-muted-foreground">Budget increase for cloud resources</span>
								</div>
								<span class="text-muted-foreground text-sm">3d ago</span>
							</div>
							<div
								class="flex items-center gap-4 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6"
							>
								<div class="flex-1">
									<span class="text-foreground mb-2 block text-lg !font-medium"
										>Redundant work in progress</span
									>
									<span class="text-muted-foreground"
										>Two teams implementing the same user settings flow separately</span
									>
								</div>
								<span class="text-muted-foreground text-sm">15m ago</span>
							</div>
							<div
								class="flex items-center gap-4 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6"
							>
								<div class="flex-1">
									<span class="text-foreground mb-2 block text-lg !font-medium"
										>Team velocity dropping</span
									>
									<span class="text-muted-foreground"
										>Frontend team missed sprint goals 2x in a row</span
									>
								</div>
								<span class="text-muted-foreground text-sm">15m ago</span>
							</div>
						</div>

						<!-- CTA Button -->
						<div class="text-center">
							<Button variant="primary" size="lg" class="px-8 py-4 text-xl !font-medium">
								Hire Sentra today
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Responsive styles are now handled by Tailwind classes -->
