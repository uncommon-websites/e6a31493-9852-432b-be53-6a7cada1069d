<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/', { replaceState: true });
	});
</script>

<!-- This page has been removed. Redirecting to home page... -->
