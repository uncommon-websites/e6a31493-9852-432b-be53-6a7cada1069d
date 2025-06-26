<script lang="ts">
	import { onMount } from 'svelte';
	import SectionHeader from './SectionHeader.svelte';
	import Button from '../ui/Button.svelte';

	// State for tab switching
	let activeTab = $state('organizations');
	let timelineContainer: HTMLElement;
	let observerRef: IntersectionObserver;

	// Timeline data for organizations
	const organizationSteps = [
		{
			id: 1,
			title: "Add Sentra to platforms your company use",
			description: "Connect Sentra to your existing tools like Slack, Teams, Zoom, Google Meet, and Google Calendar to start building organizational awareness.",
			badges: ["Leaders"],
			visual: "platform-selection"
		},
		{
			id: 2,
			title: "Share your calendars",
			description: "Allow Sentra to access team calendars to understand meeting patterns and organizational rhythms.",
			badges: ["Leaders"],
			visual: "calendar-sharing"
		},
		{
			id: 3,
			title: "Get briefed for every upcoming event",
			description: "Receive intelligent pre-meeting briefings with relevant context, user research, and personalized agendas based on participants and recent work.",
			badges: ["Everyone"],
			visual: "meeting-briefing"
		},
		{
			id: 4,
			title: "Never forget what you said you'd do",
			description: "Sentra automatically tracks commitments made in meetings and conversations, creating actionable TODO items and sending timely reminders.",
			badges: ["Everyone"],
			visual: "todo-tracking"
		},
		{
			id: 5,
			title: "Remember who your company's already met",
			description: "Get context about previous interactions with external contacts, including past meetings, NDAs, and relationship history.",
			badges: ["Everyone"],
			visual: "contact-history"
		},
		{
			id: 6,
			title: "Get alerted of key information you need to be aware of",
			description: "Stay informed about important decisions, deadline changes, and organizational updates, even from meetings you couldn't attend.",
			badges: ["Everyone"],
			visual: "key-alerts"
		},
		{
			id: 7,
			title: "Ask about the history of your org, with company memory",
			description: "Access a timeline of decisions, understand the reasoning behind project choices, and explore the evolution of your organization's thinking.",
			badges: ["Everyone"],
			visual: "company-memory"
		},
		{
			id: 8,
			title: "Sentra checks in with everyone",
			description: "Regular one-on-one conversations with Sentra help maintain alignment and surface potential issues before they become problems.",
			badges: ["Everyone"],
			visual: "check-ins"
		}
	];

	// Timeline data for individuals
	const individualSteps = [
		{
			id: 1,
			title: "Connect your calendar, and get a dedicated phone number for Sentra",
			description: "Set up your personal connection to Sentra through calendar integration and direct communication access.",
			badges: ["You"],
			visual: "personal-setup"
		},
		{
			id: 2,
			title: "Get briefed for every upcoming event",
			description: "Receive personalized meeting briefings based on your conversation history and relationships with participants.",
			badges: ["You"],
			visual: "personal-briefing"
		},
		{
			id: 3,
			title: "Never forget what you said you'd do",
			description: "Sentra tracks your commitments and sends proactive text reminders to help you stay on top of your responsibilities.",
			badges: ["You"],
			visual: "personal-todos"
		},
		{
			id: 4,
			title: "Tell Sentra the personal goals you're chasing",
			description: "Share your objectives and aspirations so Sentra can help align your daily activities with your bigger picture goals.",
			badges: ["You"],
			visual: "goal-setting"
		},
		{
			id: 5,
			title: "Sentra will call you to guide you through daily reflections",
			description: "Regular reflection calls help you process your day, celebrate wins, and plan for continuous improvement.",
			badges: ["You"],
			visual: "daily-reflections"
		}
	];

	// Get current steps based on active tab
	let currentSteps = $derived(activeTab === 'organizations' ? organizationSteps : individualSteps);

	// Handle tab switching
	function switchTab(tab: string) {
		activeTab = tab;
	}

	// Intersection observer for timeline animations
	onMount(() => {
		if (typeof window !== 'undefined') {
			observerRef = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('animate-in');
						}
					});
				},
				{
					threshold: 0.3,
					rootMargin: '-10% 0px -10% 0px'
				}
			);

			// Observe all timeline items
			const timelineItems = timelineContainer?.querySelectorAll('.timeline-item');
			timelineItems?.forEach((item) => observerRef.observe(item));
		}

		return () => {
			observerRef?.disconnect();
		};
	});
</script>

<section class="how-it-works-section">
	<div class="section-px section-py container mx-auto">
		<SectionHeader 
			title="What it's like to work with Sentra" 
			subtitle="Keeping everything together"
		/>

		<!-- Tab Navigation -->
		<div class="tab-navigation">
			<button 
				class="tab-button {activeTab === 'organizations' ? 'active' : ''}"
				onclick={() => switchTab('organizations')}
			>
				For organizations
			</button>
			<button 
				class="tab-button {activeTab === 'individuals' ? 'active' : ''}"
				onclick={() => switchTab('individuals')}
			>
				For individuals
			</button>
		</div>

		<!-- Timeline Container -->
		<div class="timeline-container" bind:this={timelineContainer}>
			{#each currentSteps as step, index (step.id)}
				<div class="timeline-item" data-step={step.id}>
					<div class="timeline-content">
						<div class="step-number">{index + 1}</div>
						<div class="step-details">
							<h3 class="step-title">{step.title}</h3>
							<p class="step-description">{step.description}</p>
							<div class="step-badges">
								{#each step.badges as badge}
									<span class="badge">{badge}</span>
								{/each}
							</div>
						</div>
						<div class="step-visual">
							<div class="visual-placeholder {step.visual}">
								<div class="visual-content">
									{#if step.visual === 'platform-selection'}
										<div class="platform-grid">
											<div class="platform-item selected">Slack</div>
											<div class="platform-item selected">Teams</div>
											<div class="platform-item">Zoom</div>
											<div class="platform-item selected">Google Meet</div>
											<div class="platform-item">Calendar</div>
											<div class="platform-item selected">Gmail</div>
										</div>
									{:else if step.visual === 'meeting-briefing'}
										<div class="briefing-card">
											<div class="briefing-header">
												<span class="briefing-title">📋 Meeting Brief</span>
												<span class="briefing-time">9:30 AM</span>
											</div>
											<div class="briefing-content">
												<p>User research review with Sarah</p>
												<p>Last discussed: Q4 roadmap priorities</p>
											</div>
										</div>
									{:else if step.visual === 'todo-tracking'}
										<div class="todo-card">
											<div class="todo-item">
												<span class="todo-text">✅ Follow up with client by Friday</span>
												<span class="todo-source">From: Team standup</span>
											</div>
											<div class="reminder-notification">
												<span>📱 Reminder: Due tomorrow</span>
											</div>
										</div>
									{:else if step.visual === 'company-memory'}
										<div class="memory-timeline">
											<div class="memory-item">
												<span class="memory-date">3 months ago</span>
												<span class="memory-event">🚀 Project X initiated</span>
											</div>
											<div class="memory-item">
												<span class="memory-date">2 months ago</span>
												<span class="memory-event">🏗️ Architecture decision</span>
											</div>
											<div class="memory-item">
												<span class="memory-date">1 month ago</span>
												<span class="memory-event">🎯 Scope refinement</span>
											</div>
										</div>
									{:else}
										<div class="generic-visual">
											<div class="visual-icon">📊</div>
											<div class="visual-text">{step.title}</div>
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
		<div class="cta-section">
			{#if activeTab === 'organizations'}
				<div class="org-cta">
					<h2>Catch misalignment before it costs you</h2>
					<p>Sentra is your AI teammate that listens, learns, and alerts you when your company drifts — before you even notice.</p>
					<div class="notification-demo">
						<div class="notification-item urgent">
							<span class="notification-icon">⚠️</span>
							<div class="notification-content">
								<span class="notification-title">Sarah waiting on approvals</span>
								<span class="notification-subtitle">Budget increase for cloud resources</span>
							</div>
							<span class="notification-time">3d ago</span>
						</div>
						<div class="notification-item warning">
							<span class="notification-icon">🔄</span>
							<div class="notification-content">
								<span class="notification-title">Redundant work in progress</span>
								<span class="notification-subtitle">Two teams implementing the same user settings flow separately</span>
							</div>
							<span class="notification-time">15m ago</span>
						</div>
						<div class="notification-item info">
							<span class="notification-icon">📉</span>
							<div class="notification-content">
								<span class="notification-title">Team velocity dropping</span>
								<span class="notification-subtitle">Frontend team missed sprint goals 2x in a row</span>
							</div>
							<span class="notification-time">15m ago</span>
						</div>
					</div>
					<Button variant="primary" size="lg">Hire Sentra today</Button>
				</div>
			{:else}
				<div class="individual-cta">
					<h2>Organize your life towards your goals</h2>
					<p>Let Sentra provide a sense of order to your busy life, helping you stay aligned with what matters most.</p>
					<div class="life-organization-visual">
						<div class="goal-item">🎯 Launch side project</div>
						<div class="goal-item">📚 Read 12 books this year</div>
						<div class="goal-item">💪 Exercise 3x per week</div>
						<div class="sentra-icon">🤖</div>
					</div>
					<Button variant="primary" size="lg">Hire Sentra today</Button>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.how-it-works-section {
		background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
		position: relative;
	}

	.tab-navigation {
		display: flex;
		justify-content: center;
		margin: 3rem 0;
		gap: 0;
		background: white;
		border-radius: 12px;
		padding: 6px;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
	}

	.tab-button {
		flex: 1;
		padding: 12px 24px;
		border: none;
		background: transparent;
		border-radius: 8px;
		font-weight: 500;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.3s ease;
		color: #64748b;
	}

	.tab-button.active {
		background: #1e293b;
		color: white;
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
	}

	.tab-button:hover:not(.active) {
		background: #f1f5f9;
		color: #1e293b;
	}

	.timeline-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 0;
	}

	.timeline-item {
		margin-bottom: 4rem;
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
		grid-template-columns: auto 1fr auto;
		gap: 2rem;
		align-items: center;
		background: white;
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		position: relative;
	}

	.step-number {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.step-details {
		min-width: 0;
	}

	.step-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}

	.step-description {
		color: #64748b;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.step-badges {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		background: #e2e8f0;
		color: #475569;
		padding: 4px 12px;
		border-radius: 20px;
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
		background: #f8fafc;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #e2e8f0;
		transition: transform 0.3s ease;
	}

	.timeline-item.animate-in .visual-placeholder {
		transform: scale(1.05);
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
		background: #f1f5f9;
		border: 2px solid #e2e8f0;
		border-radius: 8px;
		padding: 8px 12px;
		text-align: center;
		font-size: 0.85rem;
		font-weight: 500;
		color: #64748b;
	}

	.platform-item.selected {
		background: #dbeafe;
		border-color: #3b82f6;
		color: #1e40af;
	}

	/* Meeting Briefing Visual */
	.briefing-card {
		background: white;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
		width: 100%;
	}

	.briefing-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.briefing-title {
		font-weight: 600;
		color: #1e293b;
	}

	.briefing-time {
		color: #64748b;
		font-size: 0.85rem;
	}

	.briefing-content p {
		margin: 0.25rem 0;
		color: #475569;
		font-size: 0.9rem;
	}

	/* TODO Tracking Visual */
	.todo-card {
		width: 100%;
	}

	.todo-item {
		background: white;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 0.5rem;
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
	}

	.todo-text {
		display: block;
		font-weight: 500;
		color: #1e293b;
		margin-bottom: 0.25rem;
	}

	.todo-source {
		font-size: 0.8rem;
		color: #64748b;
	}

	.reminder-notification {
		background: #fef3c7;
		border: 1px solid #f59e0b;
		border-radius: 8px;
		padding: 0.5rem;
		text-align: center;
		font-size: 0.85rem;
		color: #92400e;
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
		border-bottom: 1px solid #e2e8f0;
	}

	.memory-item:last-child {
		border-bottom: none;
	}

	.memory-date {
		font-size: 0.8rem;
		color: #64748b;
	}

	.memory-event {
		font-weight: 500;
		color: #1e293b;
	}

	/* Step Images */
	.step-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}

	/* Contact Card Visual */
	.contact-card {
		background: white;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
		width: 100%;
	}

	.contact-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.contact-name {
		font-weight: 600;
		color: #1e293b;
	}

	.contact-date {
		color: #64748b;
		font-size: 0.85rem;
	}

	.contact-details p {
		margin: 0.25rem 0;
		color: #475569;
		font-size: 0.9rem;
	}

	/* Alert Card Visual */
	.alert-card {
		background: white;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
		width: 100%;
	}

	.alert-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.alert-icon {
		font-size: 1.2rem;
	}

	.alert-text {
		font-weight: 500;
		color: #1e293b;
	}

	.alert-source {
		font-size: 0.8rem;
		color: #64748b;
		font-style: italic;
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
		background: white;
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
		min-width: 120px;
	}

	.setup-icon {
		font-size: 1.5rem;
	}

	.setup-arrow {
		font-size: 1.5rem;
		color: #64748b;
	}

	/* Platform Icon */
	.platform-icon {
		margin-right: 0.5rem;
	}

	/* Briefing Tags */
	.briefing-tags {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		background: #e2e8f0;
		color: #475569;
		padding: 2px 8px;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 500;
	}

	/* Generic Visual */
	.generic-visual {
		text-align: center;
	}

	.visual-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.visual-text {
		font-size: 0.9rem;
		color: #64748b;
		font-weight: 500;
	}

	/* CTA Section */
	.cta-section {
		margin-top: 4rem;
		padding: 3rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		text-align: center;
	}

	.cta-section h2 {
		font-size: 2rem;
		font-weight: 700;
		color: #1e293b;
		margin-bottom: 1rem;
	}

	.cta-section p {
		font-size: 1.1rem;
		color: #64748b;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
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
		background: #f8fafc;
		border-radius: 12px;
		margin-bottom: 0.5rem;
		border-left: 4px solid #e2e8f0;
	}

	.notification-item.urgent {
		border-left-color: #ef4444;
		background: #fef2f2;
	}

	.notification-item.warning {
		border-left-color: #f59e0b;
		background: #fffbeb;
	}

	.notification-item.info {
		border-left-color: #3b82f6;
		background: #eff6ff;
	}

	.notification-icon {
		font-size: 1.2rem;
	}

	.notification-content {
		flex: 1;
	}

	.notification-title {
		display: block;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 0.25rem;
	}

	.notification-subtitle {
		font-size: 0.9rem;
		color: #64748b;
	}

	.notification-time {
		font-size: 0.8rem;
		color: #94a3b8;
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
		background: #f1f5f9;
		border: 2px solid #e2e8f0;
		border-radius: 20px;
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
		color: #475569;
	}

	.sentra-icon {
		font-size: 2rem;
		background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
		border-radius: 50%;
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
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

		.tab-navigation {
			max-width: 300px;
		}

		.tab-button {
			padding: 10px 16px;
			font-size: 0.9rem;
		}

		.cta-section {
			padding: 2rem 1rem;
		}

		.cta-section h2 {
			font-size: 1.5rem;
		}

		.life-organization-visual {
			flex-direction: column;
			align-items: center;
		}
	}
</style>