<script lang="ts">
	type Props = {
		text?: string
		onclick?: () => void
	}

	let { text = "Sentralize your team", onclick }: Props = $props()
</script>

<button
	class="bg-primary-100 text-primary-950 hover:bg-primary-200 w-full rotate-1 cursor-pointer overflow-hidden py-4 transition-colors duration-200"
	{onclick}
	type="button"
>
	<div class="marquee-container">
		<div class="marquee-content">
			{#each Array(20) as _, i}
				<span class="marquee-text type-title3 whitespace-nowrap">
					{text}
				</span>
			{/each}
		</div>
	</div>
</button>

<style>
	.marquee-container {
		display: flex;
		width: 100%;
	}

	.marquee-content {
		display: flex;
		animation: marquee 60s linear infinite;
		gap: 3rem;
	}

	.marquee-text {
		flex-shrink: 0;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Pause animation on hover for better UX */
	button:hover .marquee-content {
		animation-play-state: paused;
	}
</style>
