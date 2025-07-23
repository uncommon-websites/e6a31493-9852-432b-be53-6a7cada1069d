<script lang="ts">
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte"
	import CallToAction from "$lib/components/layout/CallToAction.svelte"
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

	<!-- Main Content Section -->
	<section class="section-py section-px mx-auto max-w-7xl">
		<div class="max-w-prose">
			<div class="space-y-8">
				<div>
					<p class="text-body">
						3 years ago when ChatGPT first released, we realized models were amnesic, and that a
						robust memory model would be the most impactful invention to supercharge AI. We started
						work at MIT which stemmed from an early chain of thought framework into a stateful
						memory structure used by an agent network. But even with robust models, we found that
						interfacing with AI via just text was incredibly limiting and unpleasant. When voice
						models crossed uncanny valley earlier in 2025, we realized there was a strong "why now"
						to build the ultimate AI employee.
					</p>
				</div>

				<div>
					<p class="text-body">
						Since 2022, AI in the workplace has followed a clear progression, much like the SAE
						standards for autonomous vehicles. We see several distinct levels, each representing a
						fundamental shift in how technology integrates with human organizations.
					</p>
				</div>

				<div>
					<p class="text-body">
						<strong>L1</strong> AI were the generic chatbots and task agents that help save seconds
						and minutes of a person's work. These tools enhance individual productivity but require
						constant human oversight. <strong>L2 role agents</strong> began to emerge in 2024 to automate
						entire workflows, potentially replacing specific roles but still operating within human-defined
						parameters.
					</p>
				</div>

				<div>
					<p class="text-body">
						<strong>L3 is where Sentra operates today</strong> - the first goal agents working toward
						continuous business mandates. Unlike discrete task completion, these work toward unbounded
						metrics: "team never misaligned," "always legally compliant," "employees happy." This autonomy
						requires a stateful, immutable understanding of organizational dynamics.
					</p>
				</div>

				<div>
					<p class="text-body">
						What makes this progression inevitable is the same dynamic we see in autonomous
						vehicles: the first company to reach the next level dominates the entire market.
						Products stuck in previous eras become quickly commoditized. Every car has cruise
						control nowadays. We firmly believe we are among the first to make the great leap from
						L2 to L3, which is why Sentra can provide what were previously L0-L2 products (meeting
						notetaking, knowledge search) as trivially commoditized features within a much more
						powerful system.
					</p>
				</div>

				<div>
					<p class="text-body">
						The challenge from L2 to L3 isn't solely technological. L3 adoption marks the first time
						a single AI has direct impact on the entire organization at once, requiring careful
						consideration of cooperation mechanisms and human incentives.
					</p>
				</div>

				<div>
					<p class="text-body">
						Sentra is part of us building towards a world where organizations self-heal,
						self-reflect, and maintain perfect alignment as they scale. We believe there are a
						unique set of problems within organizations that only AI can solve.
					</p>
				</div>

				<div>
					<p class="text-body">
						Our vision is simple yet profound: <strong
							>"Sentra will let a large company run at the speed of a small company."</strong
						> This is the future of autonomous enterprise - organizations that think, learn, and evolve
						with central AI employees who empower every individual within them.
					</p>
				</div>

				<div class="text-center">
					<p class="text-body">— Jae, Andrey, and Ashwin</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Press Inquiries Section -->
	<section
		class="section-py-sm section-px mx-auto max-w-7xl"
		style="background-color: var(--color-background);"
	>
		<div class=" max-w-prose">
			<h1 class="text-title1 mb-4">Press Inquiries</h1>
			<p class="text-body">
				Contact us at <a href="mailto:contact@sentra.app" class="underline">contact@sentra.app</a>
			</p>
		</div>
	</section>
</main>

<CallToAction />
