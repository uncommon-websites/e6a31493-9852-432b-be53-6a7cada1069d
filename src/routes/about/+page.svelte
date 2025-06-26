<script lang="ts">
	import Summary from "$lib/components/layout/Summary.svelte";
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";

	// Our Mission content
	const missionContent = `Our three big bets on what will win in the age of AI powered work:

Human-human like interfaces that feel natural and conversational, not robotic or transactional. We believe the future of work tools lies in systems that understand context, nuance, and the human elements that make organizations thrive.

Autonomous, unsupervised work that operates intelligently in the background. Rather than requiring constant human oversight, truly powerful AI systems should work independently while maintaining alignment with organizational goals and values.

Privacy first approaches that build trust rather than erode it. We reject surveillance culture entirely, focusing instead on aggregate insights that protect individual autonomy while strengthening collective understanding.`;

	// Sentra's Future content
	const futureContent = `In our current V1 form, there is significant emphasis on nailing the mirroring and piecing together of tribal communication patterns. Sentra learns how your organization communicates, identifies gaps, and surfaces potential misalignments before they become problems.

In V2, we will make Sentra capable of automating away more busywork. We are building the autopilot for work, designed for everyone in the company. This involves Sentra integrating with all the knowledge connectors of your organization: Google Drive, Slack, project management tools, and more, with increasingly proactive and autonomous features.

The types of tasks we imagine Sentra handling include scenarios like this: if you mention in a meeting that you plan to send someone specific documents, Sentra could autonomously extract the relevant pieces and prepare them for your review, allowing you to simply approve and send rather than doing the manual work yourself.

Sentra could even take certain meetings for you as it develops its own voice and understanding of your communication style. This allows you to stay in the zone while not missing anything important from critical discussions.

During meetings, Sentra could automatically fetch relevant information about topics being discussed and send it to you via direct message, or even contribute directly to the conversation when appropriate.

Sentra can become any employee's ally during performance reviews, helping them articulate their contributions to the company beyond just code or deliverables—things like how they spoke up during meetings, facilitated discussions, or supported team dynamics. It helps everyone make their case rather than being the judge, fundamentally changing the psychological relationship with AI from something performative to something genuinely supportive.

From there, Sentra could naturally evolve into a performance coach. If you have goals around improving certain skillsets or becoming a better communicator, it could help you work towards company objectives alongside your personal professional development.

Ultimately, Sentra becomes the cultural human glue that maintains startup ethos while companies scale. Our vision: "Run a large company at the speed of a small company."`;

	// AI Evolution content
	const aiEvolutionContent = `**L0: Generic co-pilots.** These include chat-style LLMs like ChatGPT, Gemini, and Co-Pilot.
• ROI: Saves seconds of cognitive friction through faster recall and lookup, eliminating tab-hopping and documentation searches while reducing mental context switches.
• Direct impact scope: Enhances the speed of a single person's work.
• Human involvement: A human creates the prompt and reviews the output.

**L1: Task agents.** They automate specific narrow tasks, like Superhuman AI for drafting emails or code auto-completion in Cursor.
• ROI: Save minutes from common tasks that humans typically perform.
• Direct impact scope: Reduces the total workload of a single person.
• Human involvement: Instructions are still defined by humans, and outputs are still reviewed.

**L2: Role agents.** These agents automate workflows and seek to replace (at least partially) a seat on the org chart long term. Examples include Devin for autonomous software engineering, Parloa for call center operations, and Fireflies for note-taking.
• ROI: These save hours of labor.
• Direct impact scope: Can impact up to a whole team's work.
• Human involvement: The workflow is defined by humans, and outputs are still reviewed.

**L3: Goal agents (current Sentra).** This is a new class of AI that we are among the first to define. These agents work towards continuous business mandates. For example, alignment is a continuous goal in any business, as are maintaining security compliance, eliminating busywork, and ensuring employee satisfaction.
• ROI: L3 agents work towards unbounded metrics, promising ongoing outcomes like "always compliant," "team never misaligned," or "everyone is satisfied" rather than discrete deliverables. They eliminate the need for traditional audits.
• Direct impact scope: Impacts the whole organization, not just a single task, person, or team.
• Human involvement: Goals come pre-defined and actions are autonomously initiated. Outputs like recommendations and alerts are still reviewed.

To work towards continuous goals that affect entire organizations, L3 agents need a stateful, immutable, org-wide understanding of what's happening—a memory—to do their job effectively. Sentra must be among the first L3 AI systems because we solve the data fragmentation, human incentives, and accuracy problems that other systems struggle with. All other L3 agents would rely on Sentra's high-resolution understanding of organizational dynamics.

**L4: High autonomy goal agents (future Sentra).** The key jump from L3 to L4 occurs when humans are no longer in the loop for decision-making processes. With L4, humans no longer need to review outputs, and the agent directly "resolves" issues. For example, future Sentra could resolve misalignment by contacting individuals directly to address miscommunications, without requiring manager or leader intervention.

**L5: Full automation (AGI).** AI that independently manages complex tasks across large contexts without human intervention or oversight. Our future vision includes AI CEOs managing strategic decision-making, autonomous corporate legal counsel, and complete operational oversight without human review. It would run entire companies independently.

We see clear parallels to the SAE standards for self-driving car autonomy levels. In the context of autonomous vehicles, the company that first reaches the next level typically dominates the entire market, because its existence dramatically reduces the value and demand for technology at previous levels. Products stuck in previous eras quickly become commoditized.

Similarly, the first company to create an L3 AI will dominate the market. All existing "AI Employee" companies are currently building at L2 or below, horizontally expanding across countless verticals with "AI tutors," "AI market researchers," "AI software engineers," and similar role-specific tools.

We firmly believe we are among the first companies to make the great leap forward from L2 to L3. This is largely why Sentra can provide what were previously L0-L2 products—like note-taking, enterprise search, and busywork drafting—as trivially commoditized features within a much more powerful system.

The challenge of leaping from L2 to L3 isn't solely a technology hurdle around robust memory systems. The adoption of L3 agents marks the first time a single AI has direct impact on entire organizations at once, requiring careful consideration of cooperation mechanisms and human incentives.

This psychological barrier becomes even more significant in the L3 to L4 transition, since entire labor divisions will likely flatten or be fully replaced by AI. An L4 agent continually optimizing for "employee satisfaction" and "legal compliance" will likely eliminate the need for traditional HR departments.`;

	// Team data
	const teamMembers = [
		{
			name: "Jae Gwan Park",
			position: "Co-founder, CEO",
			description:
				"AI engineer, MIT research, international AI hackathon winner, previous ecommerce founder",
			image: "/generated/image-a-professional-headshot-of-a-ceo-capture.webp"
		},
		{
			name: "Andrey Starenky",
			position: "Co-founder, CTO",
			description:
				"AI infrastructure at IBM WatsonX, defense contracting, previous mobile app founder (acquired)",
			image: "/generated/image-a-professional-headshot-of-a-cto-capture.webp"
		},
		{
			name: "Ashwin Gopinath",
			position: "Co-founder, Advisor",
			description: "MIT professor, Caltech & Google X alum, successful biotech founder (acquired)",
			image: "/generated/image-a-professional-headshot-of-an-advisor-pr.webp"
		}
	];

	// Advisors data
	const advisors = [
		{
			name: "Lakshmi Sankar",
			position: "Advisor",
			description: "Former VP Google, former Chief of Staff Twitter",
			image: "/generated/image-a-professional-headshot-of-a-female-exec.webp"
		},
		{
			name: "Sanjay Jha",
			position: "Advisor",
			description: "Former COO Qualcomm, former CEO Motorola",
			image: "/generated/image-a-professional-headshot-of-a-male-execut.webp"
		}
	];

	// Early supporters data
	const supporters = [
		{
			name: "Anne Lee Skates",
			position: "Parable VC",
			description: "Former A16Z",
			image: "/generated/image-a-professional-headshot-of-a-female-inve.webp"
		},
		{
			name: "Shaad Khan",
			position: "Seven Story Capital",
			description: "Investment Partner",
			image: "/generated/image-a-professional-headshot-of-a-male-invest.webp"
		},
		{
			name: "Alex Yang",
			position: "Principal PM",
			description: "Microsoft",
			image: "/generated/image-a-professional-headshot-of-a-tech-execut.webp"
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
		subtitle="How we see the AI space evolving, how Sentra will evolve, and the team making it happen."
		imageSrc="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	/>

	<!-- Our Mission Section -->
	<section class="section-py" style="background-color: var(--color-background);">
		<div class="container-sm section-px mx-auto">
			<h2 class="text-title1 section-mb" style="color: var(--color-foreground);">Our mission</h2>
			<div class="prose prose-lg" style="color: var(--color-foreground); max-width: none;">
				<p
					style="color: var(--color-muted-foreground); font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;"
				>
					Our three big bets on what will win in the age of AI powered work:
				</p>

				<div style="margin-bottom: 2rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						Human-like interfaces that feel natural
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						We believe the future of work tools lies in systems that understand context, nuance, and
						the human elements that make organizations thrive. No more robotic or transactional
						interactions.
					</p>
				</div>

				<div style="margin-bottom: 2rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						Autonomous, unsupervised work
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						Rather than requiring constant human oversight, truly powerful AI systems should work
						independently while maintaining alignment with organizational goals and values.
					</p>
				</div>

				<div style="margin-bottom: 0;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						Privacy first approaches
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						We reject surveillance culture entirely, focusing instead on aggregate insights that
						protect individual autonomy while strengthening collective understanding.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<StakeholderGrid
		title="Who we are"
		subtitle="The team building the future of organizational intelligence"
		stakeholders={teamMembers}
		stakeholderType="team"
	/>

	<!-- Sentra's Future Section -->
	<section class="section-py" style="background-color: var(--color-muted);">
		<div class="container-sm section-px mx-auto">
			<h2 class="text-title1 section-mb" style="color: var(--color-foreground);">
				Sentra's future
			</h2>
			<div class="prose prose-lg" style="color: var(--color-foreground); max-width: none;">
				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						V1: Understanding organizational communication
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						In our current form, there is significant emphasis on nailing the mirroring and piecing
						together of tribal communication patterns. Sentra learns how your organization
						communicates, identifies gaps, and surfaces potential misalignments before they become
						problems.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						V2: The autopilot for work
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1.5rem;">
						We will make Sentra capable of automating away more busywork. We are building the
						autopilot for work, designed for everyone in the company. This involves Sentra
						integrating with all the knowledge connectors of your organization: Google Drive, Slack,
						project management tools, and more.
					</p>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						Imagine mentioning in a meeting that you plan to send someone specific documents. Sentra
						could autonomously extract the relevant pieces and prepare them for your review,
						allowing you to simply approve and send rather than doing the manual work yourself.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						Beyond automation: Your AI ally
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1.5rem;">
						Sentra could even take certain meetings for you as it develops its own voice and
						understanding of your communication style. This allows you to stay in the zone while not
						missing anything important from critical discussions.
					</p>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						During performance reviews, Sentra can become any employee's ally, helping them
						articulate their contributions beyond just deliverables—things like how they spoke up
						during meetings, facilitated discussions, or supported team dynamics. It helps everyone
						make their case rather than being the judge.
					</p>
				</div>

				<div style="margin-bottom: 0;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						The ultimate vision
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						Ultimately, Sentra becomes the cultural human glue that maintains startup ethos while
						companies scale. Our vision: "Run a large company at the speed of a small company."
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Advisors Section -->
	<StakeholderGrid
		title="Advisors"
		subtitle="Management experts and enterprise leaders guiding our mission"
		stakeholders={advisors}
		stakeholderType="team"
	/>

	<!-- Where AI is Headed Section -->
	<section class="section-py" style="background-color: var(--color-background);">
		<div class="container-sm section-px mx-auto">
			<h2 class="text-title1 section-mb" style="color: var(--color-foreground);">
				Where we think AI is headed
			</h2>
			<div class="prose prose-lg" style="color: var(--color-foreground); max-width: none;">
				<p
					style="color: var(--color-muted-foreground); font-size: 1.125rem; line-height: 1.7; margin-bottom: 2.5rem;"
				>
					The evolution from co-pilots to autonomous organizational intelligence follows a clear
					progression. We see clear parallels to the SAE standards for self-driving car autonomy
					levels.
				</p>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						L0: Generic co-pilots
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1rem;">
						These include chat-style LLMs like ChatGPT, Gemini, and Co-Pilot. They save seconds of
						cognitive friction through faster recall and lookup, eliminating tab-hopping and
						documentation searches.
					</p>
					<p
						style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0; font-style: italic;"
					>
						Impact: Enhances the speed of a single person's work.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						L1: Task agents
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1rem;">
						They automate specific narrow tasks, like Superhuman AI for drafting emails or code
						auto-completion in Cursor. They save minutes from common tasks that humans typically
						perform.
					</p>
					<p
						style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0; font-style: italic;"
					>
						Impact: Reduces the total workload of a single person.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						L2: Role agents
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1rem;">
						These agents automate workflows and seek to replace (at least partially) a seat on the
						org chart long term. Examples include Devin for autonomous software engineering and
						Fireflies for note-taking.
					</p>
					<p
						style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0; font-style: italic;"
					>
						Impact: Can impact up to a whole team's work.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						L3: Goal agents (current Sentra)
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1rem;">
						This is a new class of AI that we are among the first to define. These agents work
						towards continuous business mandates like maintaining alignment, security compliance,
						eliminating busywork, and ensuring employee satisfaction.
					</p>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 1rem;">
						L3 agents work towards unbounded metrics, promising ongoing outcomes like "always
						compliant," "team never misaligned," or "everyone is satisfied" rather than discrete
						deliverables.
					</p>
					<p
						style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0; font-style: italic;"
					>
						Impact: Affects the whole organization, not just a single task, person, or team.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						L4: High autonomy goal agents (future Sentra)
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						The key jump from L3 to L4 occurs when humans are no longer in the loop for
						decision-making processes. Future Sentra could resolve misalignment by contacting
						individuals directly to address miscommunications, without requiring manager
						intervention.
					</p>
				</div>

				<div style="margin-bottom: 2.5rem;">
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						L5: Full automation (AGI)
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						AI that independently manages complex tasks across large contexts without human
						intervention. Our future vision includes AI CEOs managing strategic decision-making,
						autonomous corporate legal counsel, and complete operational oversight.
					</p>
				</div>

				<div
					style="padding: 2rem; background-color: var(--color-muted); border-radius: var(--radius-lg); margin-bottom: 0;"
				>
					<h3
						style="color: var(--color-foreground); font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;"
					>
						Why L3 is the breakthrough
					</h3>
					<p style="color: var(--color-muted-foreground); line-height: 1.7; margin-bottom: 0;">
						We firmly believe we are among the first companies to make the great leap forward from
						L2 to L3. The first company to create an L3 AI will dominate the market, because its
						existence dramatically reduces the value and demand for technology at previous levels.
						All existing "AI Employee" companies are currently building at L2 or below.
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- Early Supporters Section -->
	<StakeholderGrid
		title="Our earliest supporters"
		subtitle="Investors and partners who believe in our vision"
		stakeholders={supporters}
		stakeholderType="team"
	/>
</main>
