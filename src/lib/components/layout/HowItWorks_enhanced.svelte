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

	// Intersection observer for timeline animations
	onMount(() => {
		if (typeof window !== "undefined") {
			observerRef = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("animate-in");
						}
					});
				},
				{
					threshold: 0.3,
					rootMargin: "-10% 0px -10% 0px"
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

<section class="bg-muted">
	<div class="section-px section-py container mx-auto">
		<div class="mx-auto grid place-items-center text-center">
			<SectionHeader
				title="What it's like to work with Sentra"
				subtitle="Keeping everything together"
			/>
		</div>

		<!-- Tab Navigation -->
		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-muted p-0.5 gap-0.5">
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {activeTab === 'organizations' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}"
					onclick={() => switchTab("organizations")}
				>
					For organizations
				</button>
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {activeTab === 'individuals' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}"
					onclick={() => switchTab("individuals")}
				>
					For individuals
				</button>
			</div>
		</div>

		<!-- Timeline Container -->
		<div class="timeline-container" bind:this={timelineContainer}>
			{#each currentSteps as step, index (step.id)}
				<div class="timeline-item" data-step={step.id}>
					<div class="timeline-content">
						<div class="step-details">
							<h3 class="text-title3 text-foreground mb-2">{step.title}</h3>
							<p class="text-body text-emphasis-medium mb-4">{step.description}</p>
							<div class="step-badges">
								{#each step.badges as badge}
									<span class="badge">{badge}</span>
								{/each}
							</div>
						</div>
						<div class="step-visual">
							<div class="visual-placeholder {step.visual}">
								<div class="visual-content">
									{#if step.visual === "platform-selection"}
										<div class="platform-grid">
											<div class="platform-item selected">
												Slack
											</div>
											<div class="platform-item selected">
												Teams
											</div>
											<div class="platform-item">
												Zoom
											</div>
											<div class="platform-item selected">
												Google Meet
											</div>
											<div class="platform-item">
												Calendar
											</div>
											<div class="platform-item selected">
												Gmail
											</div>
										</div>
									{:else if step.visual === "calendar-sharing"}
										<img
											src="/generated/image-a-modern-office-space-with-a-blend-of-sl.webp"
											alt="Modern office workspace"
											class="step-image"
										/>
									{:else if step.visual === "meeting-briefing"}
										<div class="briefing-card">
											<div class="briefing-header">
												<span class="briefing-title text-caption font-medium">Meeting Brief</span>
												<span class="briefing-time text-footnote">9:30 AM</span>
											</div>
											<div class="briefing-content">
												<p><strong>User research review with Sarah</strong></p>
												<p>Last discussed: Q4 roadmap priorities</p>
												<p>Participants: You, Sarah, Mike</p>
												<div class="briefing-tags">
													<span class="tag">Research</span>
													<span class="tag">Planning</span>
												</div>
											</div>
										</div>
									{:else if step.visual === "personal-briefing"}
										<img
											src="/generated/image-a-business-professional-sitting-at-a-des.webp"
											alt="Professional reviewing documents"
											class="step-image"
										/>
									{:else if step.visual === "todo-tracking" || step.visual === "personal-todos"}
										<div class="todo-card">
											<div class="todo-item">
												<span class="todo-text text-caption font-medium">Follow up with client by Friday</span>
												<span class="todo-source text-footnote">From: Team standup</span>
											</div>
											<div class="reminder-notification">
												<span class="text-footnote">Reminder: Due tomorrow</span>
											</div>
										</div>
									{:else if step.visual === "contact-history"}
										<div class="contact-card">
											<div class="contact-header">
												<span class="contact-name text-caption font-medium">AstraZeneca Meeting</span>
												<span class="contact-date text-footnote">1 month ago</span>
											</div>
											<div class="contact-details">
												<p class="text-caption">NDA signed</p>
												<p class="text-caption">Partnership discussion</p>
												<p class="text-caption">Contact: Jae Park</p>
											</div>
										</div>
									{:else if step.visual === "key-alerts"}
										<div class="alert-card">
											<div class="alert-item">
												<span class="alert-text text-caption font-medium">Deadline moved to next Friday</span>
											</div>
											<div class="alert-source text-footnote">From: Leadership meeting (you weren't invited)</div>
										</div>
									{:else if step.visual === "company-memory"}
										<div class="memory-timeline">
											<div class="memory-item">
												<span class="memory-date text-footnote">3 months ago</span>
												<span class="memory-event text-caption font-medium">Project X initiated</span>
											</div>
											<div class="memory-item">
												<span class="memory-date text-footnote">2 months ago</span>
												<span class="memory-event text-caption font-medium">Architecture decision</span>
											</div>
											<div class="memory-item">
												<span class="memory-date text-footnote">1 month ago</span>
												<span class="memory-event text-caption font-medium">Scope refinement</span>
											</div>
										</div>
									{:else if step.visual === "check-ins"}
										<img
											src="/generated/image-a-diverse-group-of-professionals-in-a-so.webp"
											alt="Team collaboration"
											class="step-image"
										/>
									{:else if step.visual === "personal-setup"}
										<div class="setup-visual">
											<div class="setup-item">
												<span class="text-caption font-medium">Calendar Connected</span>
											</div>
											<div class="setup-arrow">→</div>
											<div class="setup-item">
												<span class="text-caption font-medium">Direct Line: (555) 123-4567</span>
											</div>
										</div>
									{:else if step.visual === "goal-setting"}
										<img
											src="/generated/image-an-individual-sitting-quietly-in-a-home-.webp"
											alt="Personal goal planning"
											class="step-image"
										/>
									{:else if step.visual === "daily-reflections"}
										<img
											src="/generated/image-a-person-sitting-at-a-wooden-table-surro.webp"
											alt="Daily reflection"
											class="step-image"
										/>
									{:else}
										<div class="generic-visual">
											<div class="visual-text text-caption text-emphasis-medium">{step.title}</div>
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
		<div class="section-mt bg-card rounded-lg p-8 text-center">
			{#if activeTab === "organizations"}
				<div class="org-cta">
					<h2 class="text-title2 text-foreground mb-4">Catch misalignment before it costs you</h2>
					<p class="text-body text-emphasis-medium mb-8 max-w-2xl mx-auto">
						Sentra is your AI teammate that listens, learns, and alerts you when your company drifts
						— before you even notice.
					</p>
					<div class="notification-demo">
						<div class="notification-item urgent">
							<div class="notification-content">
								<span class="notification-title">Sarah waiting on approvals</span>
								<span class="notification-subtitle">Budget increase for cloud resources</span>
							</div>
							<span class="notification-time">3d ago</span>
						</div>
						<div class="notification-item warning">
							<div class="notification-content">
								<span class="notification-title">Redundant work in progress</span>
								<span class="notification-subtitle"
									>Two teams implementing the same user settings flow separately</span
								>
							</div>
							<span class="notification-time">15m ago</span>
						</div>
						<div class="notification-item info">
							<div class="notification-content">
								<span class="notification-title">Team velocity dropping</span>
								<span class="notification-subtitle"
									>Frontend team missed sprint goals 2x in a row</span
								>
							</div>
							<span class="notification-time">15m ago</span>
						</div>
					</div>
					<Button variant="primary" size="lg">Hire Sentra today</Button>
				</div>
			{:else}
				<div class="individual-cta">
					<h2 class="text-title2 text-foreground mb-4">Organize your life towards your goals</h2>
					<p class="text-body text-emphasis-medium mb-8 max-w-2xl mx-auto">
						Let Sentra provide a sense of order to your busy life, helping you stay aligned with
						what matters most.
					</p>
					<div class="life-organization-visual">
						<div class="goal-item">Launch side project</div>
						<div class="goal-item">Read 12 books this year</div>
						<div class="goal-item">Exercise 3x per week</div>
						<div class="sentra-icon">AI</div>
					</div>
					<Button variant="primary" size="lg">Hire Sentra today</Button>
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="postcss">
	@reference '../../../app.css';

	.timeline-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 0;
	}

	.timeline-item {
		margin-bottom: 2rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.6s ease;
	}

	.timeline-item.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	.timeline-content {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2rem;
		align-items: center;
		background: var(--color-background);
		border-radius: var(--radius-lg);
		padding: 2rem;
		border: 1px solid var(--color-border);
		position: relative;
	}

	.step-details {
		min-width: 0;
	}

	.step-badges {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		background: var(--color-muted);
		color: var(--color-muted-foreground);
		padding: 4px 12px;
		border-radius: var(--radius-xl);
		font-size: 0.8rem;
		font-weight: 500;
	}

	.step-visual {
		width: 300px;
		height: 200px;
		flex-shrink: 0;
	}

	.visual-placeholder {
		width: 100%;
		height: 100%;
		background: var(--color-muted);
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--color-border);
		transition: transform 0.3s ease;
	}

	.timeline-item.animate-in .visual-placeholder {
		transform: scale(1.02);
	}

	.visual-content {
		width: 90%;
		height: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	/* Platform Selection Visual */
	.platform-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
		width: 100%;
	}

	.platform-item {
		background: var(--color-background);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		padding: 8px 12px;
		text-align: center;
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--color-muted-foreground);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}

	.platform-item.selected {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-primary-foreground);
	}

	/* Meeting Briefing Visual */
	.briefing-card {
		background: var(--color-background);
		border-radius: var(--radius);
		padding: 1rem;
		border: 1px solid var(--color-border);
		width: 100%;
	}

	.briefing-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.briefing-content p {
		margin: 0.25rem 0;
	}

	.briefing-tags {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		background: var(--color-muted);
		color: var(--color-muted-foreground);
		padding: 2px 8px;
		border-radius: var(--radius-lg);
		font-size: 0.75rem;
		font-weight: 500;
	}

	/* TODO Tracking Visual */
	.todo-card {
		width: 100%;
	}

	.todo-item {
		background: var(--color-background);
		border-radius: var(--radius);
		padding: 1rem;
		margin-bottom: 0.5rem;
		border: 1px solid var(--color-border);
	}

	.todo-text {
		display: block;
		margin-bottom: 0.25rem;
	}

	.reminder-notification {
		background: var(--color-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 0.5rem;
		text-align: center;
		color: var(--color-secondary-foreground);
	}

	/* Step Images */
	.step-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius);
	}

	/* Contact Card Visual */
	.contact-card {
		background: var(--color-background);
		border-radius: var(--radius);
		padding: 1rem;
		border: 1px solid var(--color-border);
		width: 100%;
	}

	.contact-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.contact-details p {
		margin: 0.25rem 0;
	}

	/* Alert Card Visual */
	.alert-card {
		background: var(--color-background);
		border-radius: var(--radius);
		padding: 1rem;
		border: 1px solid var(--color-border);
		width: 100%;
	}

	.alert-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.alert-source {
		font-style: italic;
	}

	/* Company Memory Visual */
	.memory-timeline {
		width: 100%;
	}

	.memory-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.memory-item:last-child {
		border-bottom: none;
	}

	/* Setup Visual */
	.setup-visual {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 100%;
		justify-content: center;
	}

	.setup-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		background: var(--color-background);
		border-radius: var(--radius);
		padding: 1rem;
		border: 1px solid var(--color-border);
		min-width: 120px;
	}

	.setup-arrow {
		font-size: 1.5rem;
		color: var(--color-muted-foreground);
	}

	/* Generic Visual */
	.generic-visual {
		text-align: center;
	}

	/* Notification Demo */
	.notification-demo {
		max-width: 500px;
		margin: 2rem auto;
		text-align: left;
	}

	.notification-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--color-muted);
		border-radius: var(--radius);
		margin-bottom: 0.5rem;
		border-left: 4px solid var(--color-border);
	}

	.notification-item.urgent {
		border-left-color: var(--color-destructive);
		background: color-mix(in oklch, var(--color-destructive), transparent 90%);
	}

	.notification-item.warning {
		border-left-color: var(--color-secondary);
		background: color-mix(in oklch, var(--color-secondary), transparent 90%);
	}

	.notification-item.info {
		border-left-color: var(--color-primary);
		background: color-mix(in oklch, var(--color-primary), transparent 90%);
	}

	.notification-content {
		flex: 1;
	}

	.notification-title {
		display: block;
		font-weight: 600;
		color: var(--color-foreground);
		margin-bottom: 0.25rem;
	}

	.notification-subtitle {
		font-size: 0.9rem;
		color: var(--color-muted-foreground);
	}

	.notification-time {
		font-size: 0.8rem;
		color: var(--color-muted-foreground);
	}

	/* Life Organization Visual */
	.life-organization-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin: 2rem 0;
		flex-wrap: wrap;
	}

	.goal-item {
		background: var(--color-muted);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
		color: var(--color-muted-foreground);
	}

	.sentra-icon {
		font-size: 1.2rem;
		background: var(--color-primary);
		color: var(--color-primary-foreground);
		border-radius: 50%;
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.timeline-content {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			text-align: center;
		}

		.step-visual {
			width: 100%;
			height: 150px;
		}

		.life-organization-visual {
			flex-direction: column;
			align-items: center;
		}

		.setup-visual {
			flex-direction: column;
			gap: 0.5rem;
		}

		.setup-arrow {
			transform: rotate(90deg);
		}
	}
</style>
