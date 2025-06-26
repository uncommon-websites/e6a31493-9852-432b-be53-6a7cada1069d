<script lang="ts">
	import Mission from './Mission.svelte';
	import Future from './Future.svelte';
	import AIEvolution from './AIEvolution.svelte';

	// Mission data
	const missionData = {
		title: "Our mission",
		subtitle: "Three big bets on what will win in the age of AI powered work",
		bets: [
			{
				title: "Human-like interfaces",
				description: "AI should communicate and interact with us naturally, not force us to adapt to rigid systems and dashboards."
			},
			{
				title: "Autonomous, unsupervised work",
				description: "The future belongs to AI that can work independently towards continuous goals without constant human oversight."
			},
			{
				title: "Privacy first",
				description: "Building trust through transparency and rejecting surveillance culture in favor of empowering human autonomy."
			}
		]
	};

	// Future vision data
	const futureData = {
		title: "Sentra's evolution",
		content: `
			<p class="section-mb-sm">In our current V1 form, we focus on nailing the mirroring and piecing together of tribal communication across your organization.</p>
			
			<p class="section-mb-sm">In V2, Sentra will automate away more busywork. We're building the autopilot for work, for everyone in the company. This involves integrating with all knowledge connectors like Google Drive and adding more proactive, autonomous features.</p>
			
			<p class="section-mb-sm">Imagine Sentra extracting relevant documents for your review when you mention sending materials in a meeting. Or having Sentra attend certain meetings for you, developing its own voice while keeping you in the zone without missing anything important.</p>
			
			<p class="section-mb-sm">Sentra becomes your ally during performance reviews, helping you make your case by understanding contributions beyond code—how you spoke up in meetings and discussions. It's designed to help everyone, not judge them.</p>
			
			<p>Ultimately, Sentra becomes the cultural human glue that maintains startup ethos while companies scale. Run a large company at the speed of a small company.</p>
		`
	};

	// AI Evolution levels data
	const aiLevelsData = {
		title: "Where we think AI is headed",
		levels: [
			{
				level: "L0",
				name: "Generic co-pilots",
				description: "Chat-style LLMs like ChatGPT, Gemini, and Co-Pilot that provide basic assistance.",
				roi: "Saves seconds of cognitive friction through faster recall and fewer context switches",
				scope: "Enhances the speed of a single person's work",
				involvement: "Human creates prompts and reviews outputs",
				examples: "ChatGPT, Gemini, GitHub Copilot"
			},
			{
				level: "L1",
				name: "Task agents",
				description: "Automate specific narrow tasks with defined parameters and workflows.",
				roi: "Saves minutes from common, repetitive tasks",
				scope: "Reduces the total load of a single person's work",
				involvement: "Instructions defined by humans, outputs reviewed",
				examples: "Superhuman AI email drafting, Cursor code completion"
			},
			{
				level: "L2",
				name: "Role agents",
				description: "Automate workflows and seek to partially replace specific roles on the org chart.",
				roi: "Saves hours of labor through workflow automation",
				scope: "Can impact up to a whole team's work",
				involvement: "Workflow defined by humans, outputs still reviewed",
				examples: "Devin autonomous SWE, Parloa call center agents, Fireflies note-taking"
			},
			{
				level: "L3",
				name: "Goal agents (current Sentra)",
				description: "Work towards continuous business mandates like alignment, compliance, and satisfaction. This is a new class of AI that Sentra is first to define.",
				roi: "Work towards unbounded metrics with ongoing outcomes, removing need for audits",
				scope: "Impacts the whole organization, not just tasks or teams",
				involvement: "Goals come pre-defined, actions autonomously initiated, outputs reviewed",
				examples: "Sentra's organizational alignment, continuous compliance monitoring"
			},
			{
				level: "L4",
				name: "High autonomy goal agents",
				description: "Humans no longer in the decision-making loop. AI directly resolves issues without human review.",
				roi: "Complete automation of organizational processes",
				scope: "Full organizational impact with autonomous decision-making",
				involvement: "No human review required for standard operations",
				examples: "Future Sentra resolving misalignment directly, autonomous HR processes"
			},
			{
				level: "L5",
				name: "Full automation (AGI)",
				description: "AI independently manages complex tasks across large contexts without any human intervention.",
				roi: "Complete organizational autonomy",
				scope: "Entire company operations",
				involvement: "Zero human oversight required",
				examples: "AI CEOs, autonomous corporate legal counsel, complete operational oversight"
			}
		]
	};

	// Team data
	const teamData = {
		title: "Who we are",
		subtitle: "The team building the future of organizational intelligence",
		founders: [
			{
				name: "Jae Gwan Park",
				role: "Co-founder, CEO",
				bio: "AI engineer, MIT research, international AI hackathon winner, previous ecommerce founder"
			},
			{
				name: "Andrey Starenky", 
				role: "Co-founder, CTO",
				bio: "AI infrastructure at IBM WatsonX, defense contracting, previous mobile app founder (acquired)"
			},
			{
				name: "Ashwin Gopinath",
				role: "Co-founder, Advisor", 
				bio: "MIT professor, Caltech & Google X alum, successful biotech founder (acquired)"
			}
		],
		advisors: [
			{
				name: "Lakshmi Sankar",
				role: "Advisor",
				bio: "Former VP Google, former Chief of Staff Twitter"
			},
			{
				name: "Sanjay Jha",
				role: "Advisor",
				bio: "Former COO Qualcomm, former CEO Motorola"
			}
		],
		supporters: [
			{
				name: "Anne Lee Skates",
				role: "Parable VC",
				bio: "Former Andreessen Horowitz"
			},
			{
				name: "Shaad Khan", 
				role: "Seven Story Capital",
				bio: ""
			},
			{
				name: "Alex Yang",
				role: "Principal PM Microsoft",
				bio: ""
			}
		]
	};
</script>

<svelte:head>
	<title>About - Sentra</title>
	<meta name="description" content="Learn about Sentra's mission to build the first AI teammate that improves organizational alignment through autonomous intelligence." />
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="section-py" style="background-color: var(--color-background);">
		<div class="container-sm section-px mx-auto text-center">
			<h1 class="text-display section-mb-sm" style="color: var(--color-foreground);">
				Building the future of work
			</h1>
			<p class="text-title3 section-mb" style="color: var(--color-muted-foreground); max-width: 48rem; margin-left: auto; margin-right: auto;">
				We're creating the first AI employee whose job is to improve alignment across organizations, 
				leading the evolution from reactive tools to proactive organizational intelligence.
			</p>
		</div>
	</section>

	<!-- Mission Section -->
	<Mission {...missionData} />

	<!-- Future Section -->
	<Future {...futureData} />

	<!-- AI Evolution Section -->
	<AIEvolution {...aiLevelsData} />

	<!-- Team Section -->
	<section class="section-py" style="background-color: var(--color-background);">
		<div class="container-sm section-px mx-auto">
			<div class="text-center section-mb">
				<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">{teamData.title}</h2>
				<p class="text-headline" style="color: var(--color-muted-foreground);">{teamData.subtitle}</p>
			</div>

			<!-- Founders -->
			<div class="section-mb">
				<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">Founders</h3>
				<div class="grid md:grid-cols-3 gap-6">
					{#each teamData.founders as founder}
						<div 
							class="section-py section-px text-center" 
							style="
								background-color: var(--color-card); 
								border-radius: var(--radius-lg); 
								border: 1px solid var(--color-border);
								transition: border-color 0.2s ease;
							"
							role="article"
							onmouseenter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
							onmouseleave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
						>
							<h4 class="text-title3 section-mb-sm" style="color: var(--color-foreground);">{founder.name}</h4>
							<p class="text-callout section-mb-sm" style="color: var(--color-primary);">{founder.role}</p>
							<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.6;">{founder.bio}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Advisors -->
			<div class="section-mb">
				<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">Advisors</h3>
				<div class="grid md:grid-cols-2 gap-6">
					{#each teamData.advisors as advisor}
						<div 
							class="section-py section-px" 
							style="
								background-color: var(--color-card); 
								border-radius: var(--radius-lg); 
								border: 1px solid var(--color-border);
								transition: border-color 0.2s ease;
							"
							role="article"
							onmouseenter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
							onmouseleave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
						>
							<h4 class="text-headline section-mb-sm" style="color: var(--color-foreground);">{advisor.name}</h4>
							<p class="text-callout section-mb-sm" style="color: var(--color-primary);">{advisor.role}</p>
							<p class="text-body" style="color: var(--color-muted-foreground); line-height: 1.6;">{advisor.bio}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Early Supporters -->
			<div>
				<h3 class="text-title2 section-mb-sm" style="color: var(--color-foreground);">Our earliest supporters</h3>
				<div class="grid md:grid-cols-3 gap-6">
					{#each teamData.supporters as supporter}
						<div 
							class="section-py section-px" 
							style="
								background-color: var(--color-card); 
								border-radius: var(--radius-lg); 
								border: 1px solid var(--color-border);
								transition: border-color 0.2s ease;
							"
							role="article"
							onmouseenter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
							onmouseleave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
						>
							<h4 class="text-headline section-mb-sm" style="color: var(--color-foreground);">{supporter.name}</h4>
							<p class="text-callout" style="color: var(--color-primary);">{supporter.role}</p>
							{#if supporter.bio}
								<p class="text-body section-mt-sm" style="color: var(--color-muted-foreground); line-height: 1.6;">{supporter.bio}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>
