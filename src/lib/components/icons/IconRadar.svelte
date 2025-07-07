<script lang="ts">
	let { class: className = "", ...props } = $props();
</script>

<svg 
	class={className} 
	fill="none" 
	stroke="currentColor" 
	viewBox="0 0 24 24" 
	{...props}
>
	<circle cx="12" cy="12" r="10" stroke-width="2"/>
	<circle cx="12" cy="12" r="6" stroke-width="2"/>
	<circle cx="12" cy="12" r="2" stroke-width="2"/>
	<path d="m12 2 0 10" stroke-width="2"/>
</svg>