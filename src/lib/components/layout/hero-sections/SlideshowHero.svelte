<script lang="ts">
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import { scroll, animate } from "motion";
	import { onMount } from "svelte";

	let heroContainer: HTMLElement;
	let slide1Heading: HTMLElement;
	let slide2Heading: HTMLElement;
	let slide2Subtext: HTMLElement;
	onMount(() => {
		const items = [...heroContainer.querySelectorAll("[data-item]")];
		console.log(items);

		// First slide: visible initially, exits completely before second appears
		scroll(
			animate(items[0], {
				opacity: [1, 0]
			}),
			{
				target: heroContainer,
				offset: ["start start", "80% start"]
			}
		);

		// Second slide: enters only after first has exited
		scroll(
			animate(items[1], {
				opacity: [0, 1]
			}),
			{
				// target: heroContainer,
				offset: ["start start", "80% start"]
				// offset: ["start center", "center center"]
			}
		);
	});
</script>

<section
	data-hero
	bind:this={heroContainer}
	class="relative h-[200vh] overflow-hidden bg-gray-50 text-center"
>
	<div class="debug grid h-full w-full items-center justify-center">
		<!-- First slide - centered and sticky -->
		<div data-item class="mx-auto w-full max-w-4xl px-8">
			<h1 class="text-display text-balance" bind:this={slide1Heading}>
				<AnimateText
					text="When teams scale rapidly, everyone ends up on different pages of the same book."
				/>
			</h1>
		</div>

		<!-- Second slide - centered and sticky -->
		<div data-item class="mx-auto w-full max-w-4xl px-8 opacity-0">
			<div class="grid gap-4">
				<h1 bind:this={slide2Heading} class="text-display text-balance">
					<AnimateText text="Sentra keeps everyone aligned." />
				</h1>

				<p bind:this={slide2Subtext} class="text-title2 text-emphasis-medium">
					A proactive teammate that doesn't let you down.
				</p>
			</div>

			<!-- Background animations for second text -->
			<div class="pulse-rings absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div class="pulse-ring" style="--delay: 0s;"></div>
				<div class="pulse-ring" style="--delay: 0.5s;"></div>
				<div class="pulse-ring" style="--delay: 1s;"></div>
			</div>

			<div
				class="floating-elements pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				<div class="float-element" style="--delay: 0s; --x: -20%; --y: -30%;"></div>
				<div class="float-element" style="--delay: 1s; --x: 80%; --y: -10%;"></div>
				<div class="float-element" style="--delay: 2s; --x: -10%; --y: 70%;"></div>
				<div class="float-element" style="--delay: 3s; --x: 90%; --y: 80%;"></div>
			</div>
		</div>
	</div>
</section>

<style>
	/* .slideshow-hero {
		height: 200vh;
		background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 255, 1) 0%,
			rgba(249, 250, 251, 0.8) 70%
		);
		color: #111827;
		position: relative;
	} */

	.hero-content {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: sticky;
		top: 0;
		overflow: visible;
		text-align: center;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
		z-index: 2;
		backdrop-filter: blur(0.5px);
		-webkit-backdrop-filter: blur(0.5px);
	}

	/* Text Styles */
	/* .slide-1-text {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 600;
		line-height: 1.2;
		margin: 0;
		letter-spacing: -0.02em;
		color: #1f2937;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		max-width: 900px;
	} */

	.background-pattern {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image:
			radial-gradient(circle at 20% 30%, rgba(17, 24, 39, 0.04) 1px, transparent 1px),
			radial-gradient(circle at 80% 70%, rgba(17, 24, 39, 0.04) 1px, transparent 1px),
			radial-gradient(circle at 40% 80%, rgba(17, 24, 39, 0.03) 1px, transparent 1px);
		background-size:
			100px 100px,
			150px 150px,
			80px 80px;
		animation: patternFloat 20s ease-in-out infinite;
		z-index: 1;
	}

	.floating-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.float-element {
		position: absolute;
		width: 4px;
		height: 4px;
		background: rgba(17, 24, 39, 0.15);
		border-radius: 50%;
		left: var(--x);
		top: var(--y);
		animation: float 6s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	/* .big-text {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 700;
		line-height: 1.1;
		margin: 0 0 1.5rem 0;
		letter-spacing: -0.03em;
		color: #111827;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		max-width: 900px;
	} */

	.highlight {
		color: var(--color-primary-400);
		position: relative;
		display: inline-block;
	}
	/* 
	.small-text {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		font-weight: 400;
		margin: 0;
		letter-spacing: -0.01em;
		color: #4b5563;
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		max-width: 800px;
	} */

	.slide-2-text {
		opacity: 0;
	}

	.background-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
		transform: translate(-50%, -50%);
		animation: pulse 4s ease-in-out infinite;
		z-index: 1;
	}

	.pulse-rings {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.pulse-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200px;
		height: 200px;
		border: 1px solid rgba(139, 92, 246, 0.2);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		animation: pulseRing 3s ease-out infinite;
		animation-delay: var(--delay);
	}

	/* Scroll-linked text animations */
	.slide-text {
		transition:
			opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1),
			transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
		will-change: opacity, transform;
		backface-visibility: hidden;
		-webkit-font-smoothing: antialiased;
		transform-origin: center center;
	}

	/* Animations */

	@keyframes patternFloat {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(180deg);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) scale(1);
			opacity: 0.15;
		}
		50% {
			transform: translateY(-20px) scale(1.2);
			opacity: 0.4;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.08;
		}
		50% {
			transform: translate(-50%, -50%) scale(1.1);
			opacity: 0.15;
		}
	}

	@keyframes pulseRing {
		0% {
			transform: translate(-50%, -50%) scale(0.5);
			opacity: 1;
		}
		100% {
			transform: translate(-50%, -50%) scale(2);
			opacity: 0;
		}
	}
</style>
