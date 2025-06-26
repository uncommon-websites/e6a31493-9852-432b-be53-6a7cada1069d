<script lang="ts">
	let currentSlide = $state(0);
	let isScrolling = $state(false);
	let heroContainer: HTMLElement;
	let hasCompletedSlideshow = $state(false);

	function handleScroll(event: WheelEvent) {
		if (hasCompletedSlideshow) return;
		
		event.preventDefault();
		
		if (isScrolling) return;
		
		if (event.deltaY > 0 && currentSlide < 1) {
			isScrolling = true;
			currentSlide++;
			
			setTimeout(() => {
				isScrolling = false;
				if (currentSlide === 1) {
					// Wait a moment then enable normal scrolling
					setTimeout(() => {
						hasCompletedSlideshow = true;
						document.body.style.overflow = 'auto';
					}, 1000);
				}
			}, 800);
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			// Disable scrolling initially
			document.body.style.overflow = 'hidden';
			
			// Add scroll listener
			window.addEventListener('wheel', handleScroll, { passive: false });
			
			return () => {
				window.removeEventListener('wheel', handleScroll);
				document.body.style.overflow = 'auto';
			};
		}
	});
</script>

<section 
	bind:this={heroContainer}
	class="slideshow-hero"
	class:completed={hasCompletedSlideshow}
>
	<!-- Slide 1: Problem -->
	<div 
		class="slide slide-1"
		class:active={currentSlide === 0}
		class:exit={currentSlide > 0}
	>
		<div class="slide-content">
			<h1>When teams scale rapidly, everyone ends up on different pages of the same book</h1>
		</div>
	</div>

	<!-- Slide 2: Solution -->
	<div 
		class="slide slide-2"
		class:active={currentSlide === 1}
		class:enter={currentSlide >= 1}
	>
		<div class="slide-content">
			<h1 class="big-text">Sentra keeps everyone aligned</h1>
			<p class="small-text">A proactive teammate that doesn't let you down</p>
		</div>
	</div>

	<!-- Scroll indicator (only show on first slide) -->
	{#if currentSlide === 0}
		<div class="scroll-indicator">
			<div class="scroll-arrow">↓</div>
			<span>Scroll to continue</span>
		</div>
	{/if}
</section>

<style>
	.slideshow-hero {
		position: relative;
		height: 100vh;
		background: #000;
		color: white;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: translateY(50px);
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slide.active {
		opacity: 1;
		transform: translateY(0);
	}

	.slide.exit {
		opacity: 0;
		transform: translateY(-50px);
	}

	.slide.enter {
		opacity: 1;
		transform: translateY(0);
	}

	.slide-content {
		text-align: center;
		max-width: 1000px;
		padding: 0 2rem;
	}

	.slide-1 h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 600;
		line-height: 1.2;
		margin: 0;
		letter-spacing: -0.02em;
	}

	.big-text {
		font-size: clamp(3rem, 6vw, 5rem);
		font-weight: 700;
		line-height: 1.1;
		margin: 0 0 1.5rem 0;
		letter-spacing: -0.03em;
	}

	.small-text {
		font-size: clamp(1.25rem, 2.5vw, 1.75rem);
		font-weight: 400;
		opacity: 0.8;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 3rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		opacity: 0.6;
		animation: pulse 2s infinite;
	}

	.scroll-arrow {
		font-size: 1.5rem;
		animation: bounce 2s infinite;
	}

	.scroll-indicator span {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.6; }
		50% { opacity: 1; }
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
		40% { transform: translateY(-10px); }
		60% { transform: translateY(-5px); }
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

		.scroll-indicator {
			bottom: 2rem;
		}
	}
</style>