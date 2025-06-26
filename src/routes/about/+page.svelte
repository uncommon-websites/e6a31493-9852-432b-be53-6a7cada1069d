<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Mission from "./Mission.svelte";
	import Future from "./Future.svelte";
	import AIEvolution from "./AIEvolution.svelte";

	// Constants
	const missionBets = [
		{
			title: "Human-like interfaces",
			description: "AI that communicates naturally, understanding context and nuance like a human colleague would."
		},
		{
			title: "Autonomous, unsupervised work",
			description: "Systems that operate independently, making decisions and taking action without constant human oversight."
		},
		{
			title: "Privacy first",
			description: "Building trust through transparency, rejecting surveillance culture, and protecting individual autonomy."
		}
	];

	const futureContent = `
		<p class="mb-6">In our current V1 form, Sentra focuses on mirroring and piecing together tribal communication across your organization. We're building the foundation of organizational understanding.</p>
		
		<p class="mb-6">In V2, Sentra will evolve into the autopilot for work, automating away busywork for everyone in the company. This involves integrating with all knowledge connectors—Google Drive, Slack, project management tools—and developing more proactive, autonomous features.</p>
		
		<p class="mb-6">Imagine Sentra autonomously extracting relevant documents for your review when you mention sending them in a meeting. Or Sentra taking certain meetings for you, developing its own voice while keeping you informed of important developments.</p>
		
		<p class="mb-6">Sentra becomes your ally during performance reviews, helping you articulate contributions beyond code—how you spoke up in meetings, influenced decisions, and contributed to company culture. It's not judging; it's advocating.</p>
		
		<p>Ultimately, Sentra becomes the cultural glue that maintains startup agility as companies scale. Run a large company at the speed of a small company.</p>
	`;

	const aiLevels = [
		{
			level: "L0",
			name: "Generic Co-pilots",
			description: "Chat-style LLMs that provide instant access to information and reduce cognitive friction.",
			roi: "Saves seconds of cognitive friction through faster recall and fewer context switches.",
			scope: "Enhances the speed of a single person's work.",
			involvement: "Human creates prompts and reviews outputs.",
			examples: "ChatGPT, Gemini, GitHub Copilot"
		},
		{
			level: "L1",
			name: "Task Agents",
			description: "Specialized agents that automate specific, narrow tasks with human-defined instructions.",
			roi: "Saves minutes from common tasks that humans regularly perform.",
			scope: "Reduces the total load of a single person's work.",
			involvement: "Instructions defined by humans, outputs still reviewed.",
			examples: "Superhuman AI email drafting, Cursor code completion"
		},
		{
			level: "L2",
			name: "Role Agents",
			description: "Workflow automation agents that seek to partially replace specific roles on the org chart.",
			roi: "Saves hours of labor through comprehensive workflow automation.",
			scope: "Can impact up to a whole team's work.",
			involvement: "Workflow defined by humans, outputs still reviewed.",
			examples: "Devin/Codex (autonomous SWE), Parloa (call center), Fireflies (note-taking)"
		},
		{
			level: "L3",
			name: "Goal Agents (Current Sentra)",
			description: "A new class of AI working towards continuous business mandates that affect the entire organization.",
			roi: "Works towards unbounded metrics, promising ongoing outcomes like 'always aligned' or 'never non-compliant'.",
			scope: "Impacts the whole organization, not just tasks, people, or teams.",
			involvement: "Goals come pre-defined, actions autonomously initiated, outputs reviewed.",
			examples: "Sentra (organizational alignment), future compliance agents, security monitoring"
		},
		{
			level: "L4",
			name: "High Autonomy Goal Agents (Future Sentra)",
			description: "Agents that operate without human review, directly resolving issues and making decisions.",
			roi: "Eliminates human bottlenecks in decision-making processes.",
			scope: "Full organizational impact with autonomous resolution.",
			involvement: "Humans no longer in the decision-making loop.",
			examples: "Future Sentra resolving misalignment directly, autonomous HR interventions"
		},
		{
			level: "L5",
			name: "Full Automation (AGI)",
			description: "Complete autonomous management of complex tasks across large contexts without human intervention.",
			roi: "Runs entire business functions independently.",
			scope: "Complete operational oversight without human review.",
			involvement: "No human intervention required.",
			examples: "AI CEOs, autonomous legal counsel, complete operational management"
		}
	];

	const teamMembers = [
		{
			name: "Jae Gwan Park",
			position: "Co-founder & CEO",
			bio: "AI engineer, MIT research, international AI hackathon winner, previous ecommerce founder.",
			image: "/generated/image-a-diverse-group-of-business-professional.webp"
		},
		{
			name: "Andrey Starenky",
			position: "Co-founder & CTO",
			bio: "AI infrastructure at IBM WatsonX, defense contracting, previous mobile app founder (acquired).",
			image: "/generated/image-a-diverse-group-of-business-professional.webp"
		},
		{
			name: "Ashwin Gopinath",
			position: "Co-founder & Advisor",
			bio: "MIT professor, Caltech & Google X alum, successful biotech founder (acquired).",
			image: "/generated/image-a-diverse-group-of-business-professional.webp"
		},
		{
			name: "Lakshmi Sankar",
			position: "Advisor",
			bio: "Former VP Google, former Chief of Staff Twitter.",
			image: "/generated/image-a-diverse-group-of-business-professional.webp"
		},
		{
			name: "Sanjay Jha",
			position: "Advisor",
			bio: "Former COO Qualcomm, former CEO Motorola.",
			image: "/generated/image-a-diverse-group-of-business-professional.webp"
		}
	];

	const supporters = [
		{
			name: "Anne Lee Skates",
			position: "Parable VC, former A16Z"
		},
		{
			name: "Shaad Khan",
			position: "Seven Story Capital"
		},
		{
			name: "Alex Yang",
			position: "Principal PM Microsoft"
		}
	];
</script>

<SecondaryHero
	title="Building the future of work"
	subtitle="Where AI empowers humans, never surveils them"
	imageSrc="/generated/image-a-professional-team-meeting-in-a-modern-.webp"
/>

<!-- Mission Section -->
<Mission
	title="Our mission"
	subtitle="Three big bets on what will win in the age of AI-powered work"
	bets={missionBets}
/>

<!-- Future Section -->
<Future
	title="Sentra's future"
	content={futureContent}
	imageSrc="/generated/image-a-scene-depicting-human-collaboration-in.webp"
/>

<!-- AI Evolution Section -->
<AIEvolution
	title="Where we think AI is headed"
	levels={aiLevels}
/>

<!-- Team Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Who we are"
	subtitle="The team building the future of organizational intelligence"
	stakeholders={teamMembers}
/>

<!-- Supporters Section -->
<section class="py-16 md:py-24 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our earliest supporters</h2>
			<p class="text-lg text-gray-600 mb-12">Backed by industry leaders who believe in our vision</p>
			
			<div class="grid md:grid-cols-3 gap-8">
				{#each supporters as supporter}
					<div class="bg-white rounded-xl p-6 border border-gray-100">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">{supporter.name}</h3>
						<p class="text-gray-600">{supporter.position}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<CallToAction
	title="Ready to transform your organization?"
	subtitle="Join the future of work"
	description="Experience how Sentra can help your team stay aligned, reduce busywork, and scale with confidence."
/>
