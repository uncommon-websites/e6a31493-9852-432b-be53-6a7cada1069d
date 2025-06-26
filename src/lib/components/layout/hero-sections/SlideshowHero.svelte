<script lang="ts">
	import { scroll, animate } from 'motion';
	
	let heroContainer: HTMLElement;
	let slide1Text: HTMLElement;
	let slide1Heading: HTMLElement;
	let slide2Text: HTMLElement;
	let slide2Heading: HTMLElement;
	let slide2Subtext: HTMLElement;
	let currentSlide = $state(0);

	$effect(() => {
		if (typeof window !== 'undefined' && heroContainer && slide1Heading && slide2Heading) {
			// Track scroll progress for the entire hero section
			const heroAnimation = scroll(
				(progress) => {
					// Use requestAnimationFrame for smoother animations
					requestAnimationFrame(() => {
						// Slide 1 animations (0 to 0.5 progress)
						if (slide1Heading) {
							const slide1Progress = Math.min(progress * 2, 1);
							const headingOpacity = Math.max(0, Math.min(1, slide1Progress * 1.2));
							const headingY = 50 * (1 - slide1Progress);
							slide1Heading.style.opacity = headingOpacity.toString();
							slide1Heading.style.transform = `translate3d(0, ${headingY}px, 0)`;
						}
						
						// Slide 2 animations (0.5 to 1 progress)
						if (slide2Heading && slide2Subtext) {
							const slide2Progress = Math.max(0, (progress - 0.5) * 2);
							
							// Heading animation
							const headingOpacity = Math.max(0, Math.min(1, slide2Progress * 1.2));
							const headingY = 50 * (1 - slide2Progress);
							slide2Heading.style.opacity = headingOpacity.toString();
							slide2Heading.style.transform = `translate3d(0, ${headingY}px, 0)`;
							
							// Subtext animation (delayed)
							const subtextOpacity = Math.max(0, Math.min(1, slide2Progress * 1.2 - 0.25));
							const subtextY = 30 * (1 - Math.max(0, slide2Progress - 0.2));
							slide2Subtext.style.opacity = subtextOpacity.toString();
							slide2Subtext.style.transform = `translate3d(0, ${subtextY}px, 0)`;
						}
						
						// Update current slide state based on scroll progress
						currentSlide = progress < 0.5 ? 0 : 1;
					});
				},
				{
					target: heroContainer,
					offset: ['start start', 'end start']
				}
			);

			return () => {
				heroAnimation();
			};
		}
	});
</script>

<section 
	bind:this={heroContainer}
	class="slideshow-hero"
>
	<!-- Slide 1: Problem -->
	<div 
		class="slide slide-1"
		data-slide="0"
		class:active={currentSlide === 0}
		bind:this={slide1Text}
	>
		<div class="slide-content">
			<div class="background-pattern"></div>
			<h1 class="text-balance slide-text" bind:this={slide1Heading}>When teams scale rapidly, everyone ends up on different pages of the same book</h1>
			<div class="floating-elements">
				<div class="float-element" style="--delay: 0s; --x: -20%; --y: -30%;"></div>
				<div class="float-element" style="--delay: 1s; --x: 80%; --y: -10%;"></div>
				<div class="float-element" style="--delay: 2s; --x: -10%; --y: 70%;"></div>
				<div class="float-element" style="--delay: 3s; --x: 90%; --y: 80%;"></div>
			</div>
		</div>
	</div>

	<!-- Slide 2: Solution -->
	<div 
		class="slide slide-2"
		data-slide="1"
		class:active={currentSlide === 1}
		bind:this={slide2Text}
	>
		<div class="slide-content">
			<div class="background-glow"></div>
			<h1 class="big-text text-balance slide-text" bind:this={slide2Heading}>Sentra keeps everyone <span class="highlight">aligned</span></h1>
			<p class="small-text text-pretty slide-text" bind:this={slide2Subtext}>A proactive teammate that doesn't let you down</p>
			<div class="pulse-rings">
				<div class="pulse-ring" style="--delay: 0s;"></div>
				<div class="pulse-ring" style="--delay: 0.5s;"></div>
				<div class="pulse-ring" style="--delay: 1s;"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.slideshow-hero {
		height: 200vh;
		background: linear-gradient(135deg, #000 0%, #111 50%, #000 100%);
		color: white;
		position: relative;
		scroll-snap-align: start;
	}

	.slide {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: sticky;
		top: 0;
		overflow: hidden;
	}

	.slide-content {
		text-align: center;
		max-width: 1000px;
		padding: 0 2rem;
		position: relative;
		z-index: 2;
	}

	/* Slide 1 Styles */
	.slide-1 {
		background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
	}

	.slide-1 h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 600;
		line-height: 1.2;
		margin: 0;
		letter-spacing: -0.02em;
	}

	.background-pattern {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: 
			radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
		background-size: 100px 100px, 150px 150px, 80px 80px;
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
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		left: var(--x);
		top: var(--y);
		animation: float 6s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	/* Slide 2 Styles */
	.slide-2 {
		background: radial-gradient(ellipse at center, rgba(var(--color-primary-400-rgb), 0.1) 0%, transparent 70%);
	}

	.big-text {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 700;
		line-height: 1.1;
		margin: 0 0 1.5rem 0;
		letter-spacing: -0.03em;
	}

	.highlight {
		color: var(--color-primary-400);
		position: relative;
		display: inline-block;
	}

	.highlight::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: var(--color-primary-400);
	}

	.small-text {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		font-weight: 400;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.background-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(var(--color-primary-400-rgb), 0.15) 0%, transparent 70%);
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
		border: 1px solid rgba(var(--color-primary-400-rgb), 0.3);
		border-radius: 50%;
		transform: translate(-50%, -50%);
		animation: pulseRing 3s ease-out infinite;
		animation-delay: var(--delay);
	}

	/* Scroll-linked text animations */
	.slide-text {
		opacity: 0;
		transform: translateY(40px);
		transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		will-change: opacity, transform;
	}

	/* Animations */

	@keyframes patternFloat {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(180deg); }
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
		50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
	}

	@keyframes pulse {
		0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
		50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.25; }
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
		.slide-content {
			padding: 0 1.5rem;
		}

		.slide-1 h1 {
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