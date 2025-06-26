<script lang="ts">
	import Mission from './Mission.svelte';
	import Future from './Future.svelte';
	import StakeholderGrid from '$lib/components/layout/StakeholderGrid.svelte';

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

	// Team data for StakeholderGrid
	const teamMembers = [
		{
			name: "Jae Gwan Park",
			position: "Co-founder, CEO",
			image: "/generated/image-a-professional-headshot-of-a-ceo-capture.webp"
		},
		{
			name: "Andrey Starenky", 
			position: "Co-founder, CTO",
			image: "/generated/image-a-professional-headshot-of-a-cto-capture.webp"
		},
		{
			name: "Ashwin Gopinath",
			position: "Co-founder, Advisor",
			image: "/generated/image-a-professional-headshot-of-an-advisor-pr.webp"
		}
	];

	// Advisors data for StakeholderGrid
	const advisors = [
		{
			name: "Lakshmi Sankar",
			position: "Advisor, fmr VP Google, fmr CoS Twitter",
			image: "/generated/image-a-professional-headshot-of-a-female-exec.webp"
		},
		{
			name: "Sanjay Jha",
			position: "Advisor, fmr COO Qualcomm, fmr CEO Motorola",
			image: "/generated/image-a-professional-headshot-of-a-male-execut.webp"
		}
	];

	// Early supporters data for StakeholderGrid
	const supporters = [
		{
			name: "Anne Lee Skates",
			position: "Parable VC, fmr A16Z",
			image: "/generated/image-a-professional-headshot-of-a-female-inve.webp"
		},
		{
			name: "Shaad Khan", 
			position: "Seven Story Capital",
			image: "/generated/image-a-professional-headshot-of-a-male-invest.webp"
		},
		{
			name: "Alex Yang",
			position: "Principal PM MSFT",
			image: "/generated/image-a-professional-headshot-of-a-tech-execut.webp"
		}
	];
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

	<!-- AI Evolution Section - Simple Text Only -->
	<section class="section-py" style="background-color: var(--color-muted);">
		<div class="container-sm section-px mx-auto">
			<div class="text-center section-mb">
				<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">Where we think AI is headed</h2>
				<p class="text-headline" style="color: var(--color-muted-foreground);">The evolution from basic assistance to autonomous organizational intelligence</p>
			</div>

			<div class="prose prose-lg mx-auto" style="color: var(--color-foreground);">
				<p>We believe AI will evolve through distinct levels of capability and autonomy. Starting from basic chat assistants like ChatGPT that save seconds of cognitive friction, moving through task agents that automate specific workflows, to role agents that can replace entire functions.</p>
				
				<p>Sentra represents the next evolution: goal agents that work towards continuous business mandates like alignment, compliance, and satisfaction. This is a new class of AI that impacts the whole organization, not just individual tasks or teams.</p>
				
				<p>Eventually, we envision high autonomy goal agents where humans are no longer in the decision-making loop, and ultimately full automation where AI independently manages complex organizational tasks without any human intervention.</p>
				
				<p>We're building towards this future, starting with organizational alignment as the foundation for autonomous organizational intelligence.</p>
			</div>
		</div>
	</section>

	<!-- Team Section using StakeholderGrid -->
	<StakeholderGrid 
		title="Who we are" 
		subtitle="The team building the future of organizational intelligence"
		stakeholders={teamMembers}
		stakeholderType="team"
	/>

	<!-- Advisors Section using StakeholderGrid -->
	<StakeholderGrid 
		title="Advisors" 
		subtitle="Management experts and enterprise leaders guiding our mission"
		stakeholders={advisors}
		stakeholderType="investor"
	/>

	<!-- Early Supporters Section using StakeholderGrid -->
	<StakeholderGrid 
		title="Our earliest supporters" 
		subtitle="Investors and partners who believe in our vision"
		stakeholders={supporters}
		stakeholderType="investor"
	/>
</main>
