<script lang="ts">
	type Props = {
		name: string;
		class?: string;
		size?: number;
	};
	
	let { name, class: className = "", size = 24 }: Props = $props();
</script>

<svg 
	class={className} 
	width={size} 
	height={size} 
	viewBox="0 0 24 24" 
	fill="none" 
	stroke="currentColor" 
	stroke-width="2" 
	stroke-linecap="round" 
	stroke-linejoin="round"
>
	{#if name === "menu"}
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	{:else if name === "chevron-right"}
		<polyline points="9,18 15,12 9,6"></polyline>
	{:else if name === "chevron-down"}
		<polyline points="6,9 12,15 18,9"></polyline>
	{:else if name === "check"}
		<polyline points="20,6 9,17 4,12"></polyline>
	{:else if name === "x"}
		<line x1="18" y1="6" x2="6" y2="18"></line>
		<line x1="6" y1="6" x2="18" y2="18"></line>
	{:else if name === "clock"}
		<circle cx="12" cy="12" r="10"></circle>
		<polyline points="12,6 12,12 16,14"></polyline>
	{:else if name === "laptop"}
		<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
		<line x1="8" y1="21" x2="16" y2="21"></line>
		<line x1="12" y1="17" x2="12" y2="21"></line>
	{:else if name === "building"}
		<rect x="4" y="2" width="16" height="20" rx="1" ry="1"></rect>
		<rect x="9" y="9" width="6" height="6"></rect>
		<line x1="9" y1="1" x2="10" y2="1"></line>
		<line x1="14" y1="1" x2="15" y2="1"></line>
		<line x1="19" y1="1" x2="20" y2="1"></line>
		<line x1="4" y1="15" x2="6" y2="15"></line>
		<line x1="4" y1="19" x2="6" y2="19"></line>
		<line x1="18" y1="15" x2="20" y2="15"></line>
		<line x1="18" y1="19" x2="20" y2="19"></line>
	{:else if name === "arrow-up-right"}
		<line x1="7" y1="17" x2="17" y2="7"></line>
		<polyline points="7,7 17,7 17,17"></polyline>
	{:else if name === "briefcase"}
		<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
		<path d="m16,21v-5a2,2 0 0,0 -2,-2h-4a2,2 0 0,0 -2,2v5"></path>
	{:else if name === "users"}
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
		<circle cx="9" cy="7" r="4"></circle>
		<path d="m22,21v-2a4,4 0 0,0 -3,-3.87"></path>
		<path d="m16,3.13a4,4 0 0,1 0,7.75"></path>
	{:else if name === "heart"}
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
	{:else if name === "globe"}
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="2" y1="12" x2="22" y2="12"></line>
		<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
	{:else if name === "zap"}
		<polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
	{:else if name === "shield"}
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
	{:else if name === "settings"}
		<circle cx="12" cy="12" r="3"></circle>
		<path d="m12,1 1.27,2.418c.91.169 1.74.478 2.48.895l2.418-1.27.895,1.55-2.147,1.241c.26.737.26,1.53 0,2.267l2.147,1.241-.895,1.55-2.418-1.27c-.74.417-1.57.726-2.48.895l-1.27,2.418h-1.79l-1.27-2.418c-.91-.169-1.74-.478-2.48-.895l-2.418,1.27-.895-1.55 2.147-1.241c-.26-.737-.26-1.53 0-2.267l-2.147-1.241.895-1.55 2.418,1.27c.74-.417 1.57-.726 2.48-.895l1.27-2.418h1.79z"></path>
	{:else if name === "palette"}
		<circle cx="13.5" cy="6.5" r=".5"></circle>
		<circle cx="17.5" cy="10.5" r=".5"></circle>
		<circle cx="8.5" cy="7.5" r=".5"></circle>
		<circle cx="6.5" cy="12.5" r=".5"></circle>
		<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
	{:else if name === "target"}
		<circle cx="12" cy="12" r="10"></circle>
		<circle cx="12" cy="12" r="6"></circle>
		<circle cx="12" cy="12" r="2"></circle>
	{:else if name === "radar"}
		<circle cx="12" cy="12" r="10"></circle>
		<circle cx="12" cy="12" r="6"></circle>
		<circle cx="12" cy="12" r="2"></circle>
		<path d="m12,2 0,10"></path>
	{:else if name === "alert-triangle"}
		<path d="m21.73,18-8-14a2,2 0 0,0 -3.48,0l-8,14A2,2 0 0,0 4,21h16a2,2 0 0,0 1.73-3Z"></path>
		<line x1="12" y1="9" x2="12" y2="13"></line>
		<line x1="12" y1="17" x2="12.01" y2="17"></line>
	{/if}
</svg>