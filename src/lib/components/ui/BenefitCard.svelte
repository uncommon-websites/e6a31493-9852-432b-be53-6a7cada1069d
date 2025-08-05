<script lang="ts">
	type Props = {
		title: string
		description: string
		visualization: keyof typeof sources
		class?: string
	}

	const sources = {
		"unified-knowledge": "uploaded/unified-knowledge.svg",
		alignment: "uploaded/alignment.svg",
		preferences: "uploaded/action-log.svg",
		meetings: "uploaded/meetings.svg",
		onboarding: "uploaded/onboarding.svg",
		integrations: "uploaded/integrations.svg",
		reminders: "uploaded/reminders.svg",
		"always-working": "uploaded/always-working.svg",
		"assign-jobs": "uploaded/assign-jobs.svg",
		"where-you-are": "uploaded/where-you-are.svg",
		"misalignment-radar": "uploaded/misalignment-radar.svg",
		"memorized-institutional-knowledge": "uploaded/memorized-institutional-knowledge.svg",
		"founder-support": "uploaded/founder-support.svg"
	}

	let { title, description, visualization, class: customClass = "" }: Props = $props()
	let src = $derived(sources[visualization] ?? null)
</script>

<div class={["group flex", customClass]}>
	<!-- Card Container -->
	<div
		class="relative grid grid-rows-[auto_1fr] place-content-center justify-center overflow-hidden border border-gray-200 bg-white"
		style="border-radius: var(--radius-2xl);"
	>
		<!-- Visualization Container -->
		<img {src} alt="" class="mx-auto" />

		<!-- Content -->
		<div class="flex-1 space-y-6 p-10">
			<h3 class="text-title3 font-semibold text-gray-900">
				{title}
			</h3>

			<p class="text-callout leading-relaxed text-gray-600">
				{description}
			</p>
		</div>
	</div>
</div>
