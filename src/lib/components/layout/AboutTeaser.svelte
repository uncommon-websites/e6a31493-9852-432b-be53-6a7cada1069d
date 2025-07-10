<!--
@component AboutTeaser
A minimalist teaser for the about page.
-->
<script lang="ts">
	// Types
	type TeamMember = {
		name: string
		role: string
		image: string
	}

	// Components
	import Button from "../ui/Button.svelte"
	import ScrollText from "./sub/ScrollText.svelte"

	// State
	let sectionRef: HTMLElement

	let props = $props()

	// Data
	const teamMember: TeamMember = {
		name: "Jae Park",
		role: "Co-founder & CEO",
		image: "https://pbs.twimg.com/profile_images/1918915681229152256/RuRjBmDu_400x400.jpg"
	}
</script>

<section bind:this={sectionRef} {...props}>
	<div class="section-px section-py mx-auto max-w-6xl">
		<div class="relative mx-auto grid max-w-2xl place-items-center gap-16">
			<ScrollText
				class="text-title1 text-center"
				text={`"We're building the first AI teammate that improves alignment across organizations, proactively sensing when problems may occur and allowing leaders to intervene before they become costly misalignments"`}
			/>

			<!-- Team Member & CTA Section -->
			<div class="grid items-center gap-8 dark:border-gray-800">
				<div class="flex items-center justify-start gap-4">
					<img
						src={teamMember.image}
						alt={teamMember.name}
						class="size-12 rounded-full object-cover"
					/>
					<div>
						<div class="text-callout">{teamMember.name}</div>
						<div class="text-caption text-emphasis-low">{teamMember.role}</div>
					</div>
					<Button href="/careers" variant="secondary" size="sm" class="ml-8">Learn more</Button>
				</div>
			</div>
		</div>
	</div>
</section>
