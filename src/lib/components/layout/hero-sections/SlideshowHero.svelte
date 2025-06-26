<script lang="ts">
	import { scroll, animate } from "motion";
	import { onMount } from "svelte";

	let heroContainer: HTMLElement;
	let slide1Heading: HTMLElement;
	let slide2Heading: HTMLElement;
	let slide2Subtext: HTMLElement;

	// onMount(() => {
	// 	if (typeof window !== "undefined" && heroContainer && slide1Heading && slide2Heading) {
	// 		// Set initial state - first slide visible, second slide hidden
	// 		slide1Heading.style.opacity = "1";
	// 		slide1Heading.style.transform = "translate(-50%, -50%) translate3d(0, 0px, 0)";
	// 		slide2Heading.style.opacity = "0";
	// 		slide2Heading.style.transform = "translate(-50%, -50%) translate3d(0, 50px, 0)";
	// 		if (slide2Subtext) {
	// 			slide2Subtext.style.opacity = "0";
	// 			slide2Subtext.style.transform = "translate(-50%, -50%) translate3d(0, 30px, 0)";
	// 		}

	// 		// Track scroll progress for the entire hero section
	// 		const heroAnimation = scroll(
	// 			(progress) => {
	// 				// Use requestAnimationFrame for smoother animations
	// 				requestAnimationFrame(() => {
	// 					// Slide 1 animations (fade out from 0 to 0.35 progress)
	// 					if (slide1Heading) {
	// 						const slide1Progress = Math.min(progress * 2.85, 1);
	// 						// Smooth fade out with better easing
	// 						const headingOpacity = Math.max(0, 1 - Math.pow(slide1Progress, 1.5) * 1.1);
	// 						const headingY = -25 * Math.pow(slide1Progress, 0.8); // Gentler slide up
	// 						slide1Heading.style.opacity = headingOpacity.toString();
	// 						slide1Heading.style.transform = `translate(-50%, -50%) translate3d(0, ${headingY}px, 0)`;
	// 					}

	// 					// Slide 2 animations (fade in from 0.15 to 0.5 progress - fully visible by center)
	// 					if (slide2Heading && slide2Subtext) {
	// 						const slide2Progress = Math.max(0, Math.min(1, (progress - 0.15) / 0.35));

	// 						// Heading animation with smoother easing
	// 						const headingOpacity = Math.min(1, Math.pow(slide2Progress, 0.6) * 1.2);
	// 						const headingY = 40 * Math.pow(1 - slide2Progress, 1.2);
	// 						slide2Heading.style.opacity = headingOpacity.toString();
	// 						slide2Heading.style.transform = `translate(-50%, -50%) translate3d(0, ${headingY}px, 0)`;

	// 						// Subtext animation with slight delay and smoother motion
	// 						const subtextDelay = 0.1;
	// 						const subtextProgress = Math.max(0, slide2Progress - subtextDelay);
	// 						const subtextOpacity = Math.max(0, Math.min(1, Math.pow(subtextProgress, 0.5) * 1.1));
	// 						const subtextY = 25 * Math.pow(1 - subtextProgress, 1.1);
	// 						slide2Subtext.style.opacity = subtextOpacity.toString();
	// 						slide2Subtext.style.transform = `translate(-50%, -50%) translate3d(0, ${subtextY}px, 0)`;
	// 					}

	// 					// Update current slide state based on scroll progress
	// 					currentSlide = progress < 0.35 ? 0 : 1;
	// 				});
	// 			},
	// 			{
	// 				target: heroContainer,
	// 				offset: ["start start", "end start"]
	// 			}
	// 		);

	// 		return () => {
	// 			heroAnimation();
	// 		};
	// 	}
	// });

	onMount(() => {
		const items = [...heroContainer.querySelectorAll("[data-item]")];
		console.log(items);
		items.forEach((item) => {
			scroll(
				animate(item, {
					opacity: [0, 1],
					y: ["1em", 0, 0, "-1em"]
				}),
				{
					target: heroContainer,
					// container: heroContainer,
					offset: ["start end", "end end", "start start", "end start"]
				}
			);
		});

		// Animate gallery horizontally during vertical scroll
		// scroll(
		// 	animate(items, {
		// 		transform: ["none", `translateY(-${items.length - 1}00vh)`]
		// 	}),
		// 	{
		// 		// target: document.querySelector(".img-group-container")
		// 	}
		// );
	});
</script>

<section
	data-hero
	bind:this={heroContainer}
	class="relative grid h-[100dvh] place-items-center overflow-hidden bg-gray-50 text-center"
>
	<div class="py-1/2 grid min-h-screen w-full place-content-center place-items-center gap-[25%]">
		<!-- <div
			class="background-pattern absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		></div>
		<div class="background-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> -->

		<!-- Text content that animates in and out -->
		<div data-item class="sticky top-0 left-0">
			<h1 class="text-display text-balance" bind:this={slide1Heading}>
				When teams scale rapidly, everyone ends up on different pages of the same book.
			</h1>
		</div>

		<div data-item class="sticky top-0 left-0 grid gap-4">
			<h1 bind:this={slide2Heading} class="text-display text-balance">
				Sentra keeps everyone <span class="highlight">aligned</span>.
			</h1>

			<p bind:this={slide2Subtext} class="text-title2 text-emphasis-medium">
				A proactive teammate that doesn't let you down.
			</p>

			<!-- Background animations for second text -->
			<div class="pulse-rings absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div class="pulse-ring" style="--delay: 0s;"></div>
				<div class="pulse-ring" style="--delay: 0.5s;"></div>
				<div class="pulse-ring" style="--delay: 1s;"></div>
			</div>

			<div class="floating-elements absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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

	/* Mobile adjustments */
	@media (max-width: 768px) {
		.hero-content {
			padding: 0 1.5rem;
		}

		.slide-1-text {
			font-size: clamp(2rem, 8vw, 3rem);
		}

		.big-text {
			font-size: clamp(2.5rem, 8vw, 4rem);
			margin-bottom: 1rem;
		}

		.small-text {
			font-size: clamp(1.125rem, 4vw, 1.5rem);
		}

		.background-glow {
			width: 400px;
			height: 400px;
		}

		.pulse-ring {
			width: 150px;
			height: 150px;
		}

		.float-element {
			width: 3px;
			height: 3px;
		}
	}

	/* Smooth scrolling for better experience */
	@media (prefers-reduced-motion: no-preference) {
		.slideshow-hero {
			scroll-behavior: smooth;
		}
	}
</style>
