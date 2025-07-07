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
	<line x1="6" y1="3" x2="6" y2="15" stroke-width="2"/>
	<circle cx="18" cy="6" r="3" stroke-width="2"/>
	<circle cx="6" cy="18" r="3" stroke-width="2"/>
	<path d="m18 9a9 9 0 01-9 9" stroke-width="2"/>
</svg>