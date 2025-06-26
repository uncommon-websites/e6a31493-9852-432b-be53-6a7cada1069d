<script lang="ts">
	import Story from './Story.svelte';
	import StakeholderGrid from '$lib/components/layout/StakeholderGrid.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	// About story paragraphs
	const storyParagraphs = [
		"Sentra was born from a simple question: what if your organization had an always-on teammate—not a dashboard, not a tracker, but an active participant in the company who noticed misalignment before you felt its effects?",
		
		"We were second-time founders, AI engineers, systems thinkers working in fast-moving startups. We'd seen speed turn into silos. Growing teams that suddenly didn't know if they were still heading in the same direction. Great leadership losing visibility not because they weren't paying attention—but because nobody can be everywhere at once.",
		
		"We noticed something: high-performing teams aren't always the best at documenting what's going wrong. By the time the weekly sync rolls around, real issues have slipped. Politics creep in. Morale drops. Whole quarters go sideways because warning signs go unnoticed for just a few weeks.",
		
		"So we asked: what if misalignment could be visible the moment it starts? What if risk wasn't something you found out after the fact? What if technology supported trust, rather than replaced it?",
		
		"That's why we're building Sentra—the first AI teammate whose job is to improve alignment across your organization. It participates like an employee would: it reads public messages, attends core meetings, digests the canon of your tooling. And then, quietly, it illuminates where sync begins to break. Where incentives diverge. Where realities don't match meeting updates. It surfaces issues—not to shame individuals, but to show leaders where they can step in early.",
		
		"Alignment isn't about more process or performance measurement. It's about shared clarity. And we believe software can strengthen that, without surveillance or friction.",
		
		"Sentra is the foundation of a new company operating system—one built on active listening, continuous reflection, and human-centered AI. Less overhead. More insight. And a clearer path forward, even as everything moves fast."
	];

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
				The first AI teammate, designed for alignment
			</h1>
			<p class="text-title3 section-mb" style="color: var(--color-muted-foreground); max-width: 48rem; margin-left: auto; margin-right: auto;">
				We're building the future of organizational intelligence—starting with the question of how technology can strengthen trust, not replace it.
			</p>
		</div>
	</section>

	<!-- Company Story Section -->
	<Story paragraphs={storyParagraphs} />

	<!-- Visual Break -->
	<section class="section-py" style="background-color: var(--color-muted);">
		<div class="container-sm section-px mx-auto">
			<div class="relative overflow-hidden" style="border-radius: var(--radius-lg);">
				<img 
					src="/generated/image-a-diverse-group-of-professionals-engaged.webp" 
					alt="Team collaboration in modern office space"
					class="w-full h-auto"
					style="aspect-ratio: 16/9; object-fit: cover;"
				/>
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

<!-- Footer -->
<Footer />
