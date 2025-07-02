<script lang="ts">
	import CompactTeam from "$lib/components/layout/CompactTeam.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Team data with placeholder URLs
	const teamMembers = [
		{
			name: "Jae Gwan Park",
			position: "Co-founder, CEO",
			description:
				"AI engineer, MIT research, international AI hackathon winner, previous ecommerce founder",
			image: "https://placehold.net/avatar.svg"
		},
		{
			name: "Andrey Starenky",
			position: "Co-founder, CTO",
			description:
				"AI infrastructure at IBM WatsonX, defense contracting, previous mobile app founder (acquired)",
			image: "https://placehold.net/avatar.svg"
		},
		{
			name: "Ashwin Gopinath",
			position: "Co-founder, Advisor",
			description: "MIT professor, Caltech & Google X alum, successful biotech founder (acquired)",
			image: "https://placehold.net/avatar.svg"
		}
	];

	// Advisors data with placeholder URLs
	const advisors = [
		{
			name: "Lakshmi Sankar",
			position: "Advisor",
			description: "Former VP Google, former Chief of Staff Twitter",
			image: "https://placehold.net/avatar.svg"
		},
		{
			name: "Sanjay Jha",
			position: "Advisor",
			description: "Former COO Qualcomm, former CEO Motorola",
			image: "https://placehold.net/avatar.svg"
		}
	];

	// Early supporters data with placeholder URLs
	const supporters = [
		{
			name: "Anne Lee Skates",
			position: "Parable VC",
			description: "Former A16Z",
			image: "https://placehold.net/avatar.svg"
		},
		{
			name: "Shaad Khan",
			position: "Seven Story Capital",
			description: "Investment Partner",
			image: "https://placehold.net/avatar.svg"
		},
		{
			name: "Alex Yang",
			position: "Principal PM",
			description: "Microsoft",
			image: "https://placehold.net/avatar.svg"
		}
	];
</script>

<svelte:head>
	<title>About - Sentra</title>
	<meta
		name="description"
		content="Learn about Sentra's mission to build the first AI teammate that improves organizational alignment through autonomous intelligence."
	/>
</svelte:head>

<main>
	<!-- Hero Section -->
	<SecondaryHero
		title="Building the future of organizational intelligence"
		subtitle="Intelligent alignment for growing teams."
		imageSrc="https://images.unsplash.com/photo-1750658659691-1f7b2bd37337?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>

	<!-- Team Section -->
	<CompactTeam
		title="Who we are"
		subtitle="The team building the future of organizational intelligence"
		members={teamMembers}
	/>

	<!-- The Future of Autonomous Enterprise - Unified Essay -->
	<section
		class="section-py section-px container mx-auto"
		style="background-color: var(--color-background);"
	>
		<div class="max-w-prose">
			<h2 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">
				The future of autonomous enterprise
			</h2>
			<p class="text-headline section-mb" style="color: var(--color-muted-foreground);">
				We are building toward a world where organizations self-heal, self-reflect, and maintain
				perfect alignment as they scale. This is the journey from reactive management to autonomous
				organizational intelligence.
			</p>

			<div class="space-y-8">
				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						The evolution of AI in the workplace follows a clear progression, much like the SAE
						standards for autonomous vehicles. We see five distinct levels, each representing a
						fundamental shift in how technology integrates with human organizations.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						<strong>L0 and L1</strong> represent the current state: generic co-pilots and task
						agents that save seconds and minutes respectively. These tools enhance individual
						productivity but require constant human oversight. <strong>L2 role agents</strong> begin
						to automate entire workflows, potentially replacing specific roles but still operating within
						human-defined parameters.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						<strong>L3 is where Sentra operates today</strong> - the first goal agents working toward
						continuous business mandates. Unlike discrete task completion, we work toward unbounded metrics:
						"team never misaligned," "always compliant," "everyone satisfied." This requires a stateful,
						immutable understanding of organizational dynamics that no other system possesses.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						In our current form, Sentra mirrors and pieces together tribal communication patterns,
						learning how your organization communicates and identifying gaps before they become
						problems. We participate in meetings, read public channels, and digest project
						management tools to create a real-time map of your company's alignment.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						The next evolution brings <strong>L4 autonomy</strong>, where humans are no longer in
						the decision-making loop. Future Sentra will resolve misalignment by directly contacting
						individuals, autonomously extracting and preparing documents when mentioned in meetings,
						and even taking certain meetings while you stay in the zone. It becomes every employee's
						ally during performance reviews, helping articulate contributions beyond deliverables.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						<strong>L5 represents full automation</strong> - AI CEOs managing strategic decisions, autonomous
						corporate legal counsel, complete operational oversight without human review. This is the
						ultimate vision of organizations that run themselves.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						What makes this progression inevitable is the same dynamic we see in autonomous
						vehicles: the first company to reach the next level dominates the entire market.
						Products stuck in previous eras become commoditized. We firmly believe we are among the
						first to make the great leap from L2 to L3, which is why Sentra can provide what were
						previously L0-L2 products as trivially commoditized features within a much more powerful
						system.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						The challenge isn't solely technological. L3 adoption marks the first time a single AI
						has direct impact on entire organizations at once, requiring careful consideration of
						cooperation mechanisms and human incentives. The psychological barrier becomes even more
						significant in the L3 to L4 transition, as entire labor divisions will likely flatten or
						be replaced.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						Ultimately, Sentra becomes the cultural human glue that maintains startup ethos while
						companies scale. Our vision is simple yet profound: <strong
							>"Run a large company at the speed of a small company."</strong
						> This is the future of autonomous enterprise - organizations that think, learn, and evolve
						as coherent entities while empowering every individual within them.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Advisors Section -->
	<CompactTeam
		title="Advisors"
		subtitle="Management experts and enterprise leaders guiding our mission"
		members={advisors}
	/>

	<!-- Early Supporters Section -->
	<CompactTeam
		title="Our earliest supporters"
		subtitle="Investors and partners who believe in our vision"
		members={supporters}
	/>
</main>

<CallToAction />
