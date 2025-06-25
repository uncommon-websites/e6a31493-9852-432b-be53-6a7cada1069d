<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	const props: HTMLAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="" {...props}>
	<!-- Sentra Logo - Modern geometric design representing connection and alignment -->
	<g fill="currentColor">
		<!-- Central connecting node -->
		<circle cx="16" cy="16" r="3" />
		
		<!-- Network nodes representing organizational connections -->
		<circle cx="8" cy="8" r="2.5" />
		<circle cx="24" cy="8" r="2.5" />
		<circle cx="8" cy="24" r="2.5" />
		<circle cx="24" cy="24" r="2.5" />
		
		<!-- Connection lines showing alignment -->
		<path d="M10.5 10.5L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		<path d="M21.5 10.5L19 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		<path d="M10.5 21.5L13 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		<path d="M21.5 21.5L19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		
		<!-- Pulse/signal indicators -->
		<circle cx="6" cy="16" r="1.5" opacity="0.6" />
		<circle cx="26" cy="16" r="1.5" opacity="0.6" />
		<circle cx="16" cy="6" r="1.5" opacity="0.6" />
		<circle cx="16" cy="26" r="1.5" opacity="0.6" />
	</g>
</svg>
