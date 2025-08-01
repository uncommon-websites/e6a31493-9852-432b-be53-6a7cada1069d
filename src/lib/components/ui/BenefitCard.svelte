<script lang="ts">
	// Icons
	import IconBrain from "~icons/lucide/brain"
	import IconEye from "~icons/lucide/eye"
	import IconTarget from "~icons/lucide/target"
	import IconRadar from "~icons/lucide/radar"
	import IconAlertTriangle from "~icons/lucide/alert-triangle"
	import IconDatabase from "~icons/lucide/database"
	import IconNetwork from "~icons/lucide/network"
	import IconShield from "~icons/lucide/shield"
	import IconUsers from "~icons/lucide/users"
	import IconCalendarX from "~icons/lucide/calendar-x"
	import IconTrendingUp from "~icons/lucide/trending-up"
	import IconZap from "~icons/lucide/zap"
	import IconCalendar from "~icons/lucide/calendar"
	import IconGithub from "~icons/lucide/github"
	import IconClipboardList from "~icons/lucide/clipboard-list"
	import IconFileText from "~icons/lucide/file-text"
	import IconMessageSquare from "~icons/lucide/message-square"
	import IconBookOpen from "~icons/lucide/book-open"
	import IconRocket from "~icons/lucide/rocket"
	import IconMail from "~icons/lucide/mail"
	// DataAggregationAnimation component removed - using SVG instead

	type Props = {
		title: string
		description: string
		visualization:
			| "visibility"
			| "misalignment"
			| "culture"
			| "meetings"
			| "onboarding"
			| "future"
			| "memory"
			| "vision"
			| "detection"
			| "knowledge_assembly"
			| "strategic_compass"
			| "early_warning"
		class?: string
	}

	const sources = {
		'memory': 'uploaded/unified-knowledge.svg',
		'alignment': 'uploaded/alignment.svg',
		'preferences': 'uploaded/action-log.svg'
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
		<img src="{src}" alt="">

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
