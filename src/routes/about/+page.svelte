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
		title="Autonomous Enterprise"
		subtitle="The future of organizational intelligence"
	/>
	<!-- Press Inquiries Section -->
	<section
		class="section-py section-px container-sm mx-auto"
		style="background-color: var(--color-background);"
	>
		<div class="mx-auto max-w-prose text-center">
			<h1 class="text-title1 section-mb-sm" style="color: var(--color-foreground);">
				Press Inquiries
			</h1>
			<p class="text-body" style="color: var(--color-muted-foreground);">
				Contact us at <a href="mailto:contact@sentra.app" style="color: var(--color-primary); text-decoration: underline;">contact@sentra.app</a>
			</p>
		</div>
	</section>

	<!-- Team Section -->
	<CompactTeam
		title="Who we are"
		subtitle="The team building the future of organizational intelligence"
		members={teamMembers}
	/>

	<!-- Company Story and Vision -->
	<section
		class="section-py section-px container-sm mx-auto"
		style="background-color: var(--color-background);"
	>
		<div class="mx-auto max-w-prose">
			<div class="space-y-8">
				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						3 years ago when ChatGPT first released, we realized models were amnesic, and that a robust memory model would be the most impactful invention to supercharge AI. We started work at MIT which stemmed from an early chain of thought framework into a stateful memory structure used by an agent network. But even with robust models, we found that interfacing with AI via just text was incredibly limiting and unpleasant. When voice models crossed uncanny valley earlier in 2025, we realized there was a strong "why now" to build the ultimate AI employee.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						Since 2022, AI in the workplace has followed a clear progression, much like the SAE standards for autonomous vehicles. We see several distinct levels, each representing a fundamental shift in how technology integrates with human organizations.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						<strong>L1</strong> AI were the generic chatbots and task agents that help save seconds and minutes of a person's work. These tools enhance individual productivity but require constant human oversight. <strong>L2 role agents</strong> began to emerge in 2024 to automate entire workflows, potentially replacing specific roles but still operating within human-defined parameters.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						<strong>L3 is where Sentra operates today</strong> - the first goal agents working toward continuous business mandates. Unlike discrete task completion, these work toward unbounded metrics: "team never misaligned," "always legally compliant," "employees happy." This autonomy requires a stateful, immutable understanding of organizational dynamics.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						What makes this progression inevitable is the same dynamic we see in autonomous vehicles: the first company to reach the next level dominates the entire market. Products stuck in previous eras become quickly commoditized. Every car has cruise control nowadays. We firmly believe we are among the first to make the great leap from L2 to L3, which is why Sentra can provide what were previously L0-L2 products (meeting notetaking, knowledge search) as trivially commoditized features within a much more powerful system.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						The challenge from L2 to L3 isn't solely technological. L3 adoption marks the first time a single AI has direct impact on the entire organization at once, requiring careful consideration of cooperation mechanisms and human incentives.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						Sentra is part of us building towards a world where organizations self-heal, self-reflect, and maintain perfect alignment as they scale. We believe there are a unique set of problems within organizations that only AI can solve.
					</p>
				</div>

				<div>
					<p class="text-body" style="color: var(--color-muted-foreground);">
						Our vision is simple yet profound: <strong>"Sentra will let a large company run at the speed of a small company."</strong> This is the future of autonomous enterprise - organizations that think, learn, and evolve with central AI employees who empower every individual within them.
					</p>
				</div>

				<div class="text-center">
					<p class="text-body" style="color: var(--color-muted-foreground);">
						- Jae, Andrey, and Ashwin
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
