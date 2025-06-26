<script lang="ts">
	let currentSlide = $state(0);
	let isScrolling = $state(false);
	let heroContainer: HTMLElement;
	let hasCompletedSlideshow = $state(false);
	let isInSlideshow = $state(true);

	function handleScroll(event: WheelEvent) {
		if (!isInSlideshow) return;
		
		event.preventDefault();
		
		if (isScrolling) return;
		
		isScrolling = true;
		
		if (event.deltaY > 0) {
			// Scrolling down
			if (currentSlide < 1) {
				currentSlide++;
			} else {
				// On last slide, exit slideshow
				isInSlideshow = false;
				hasCompletedSlideshow = true;
				document.body.style.overflow = 'auto';
			}
		} else {
			// Scrolling up
			if (currentSlide > 0) {
				currentSlide--;
			}
		}
		
		setTimeout(() => {
			isScrolling = false;
		}, 800);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isInSlideshow) return;
		
		if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
			event.preventDefault();
			if (currentSlide < 1 && !isScrolling) {
				isScrolling = true;
				currentSlide++;
				setTimeout(() => { isScrolling = false; }, 800);
			}
		} else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
			event.preventDefault();
			if (currentSlide > 0 && !isScrolling) {
				isScrolling = true;
				currentSlide--;
				setTimeout(() => { isScrolling = false; }, 800);
			}
		} else if (event.key === 'Escape') {
			isInSlideshow = false;
			hasCompletedSlideshow = true;
			document.body.style.overflow = 'auto';
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			// Disable scrolling initially
			document.body.style.overflow = 'hidden';
			
			// Add event listeners
			window.addEventListener('wheel', handleScroll, { passive: false });
			window.addEventListener('keydown', handleKeydown);
			
			return () => {
				window.removeEventListener('wheel', handleScroll);
				window.removeEventListener('keydown', handleKeydown);
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
			<h1 class="text-balance">When teams scale rapidly, everyone ends up on different pages of the same book</h1>
		</div>
	</div>

	<!-- Slide 2: Solution -->
	<div 
		class="slide slide-2"
		class:active={currentSlide === 1}
		class:enter={currentSlide >= 1}
	>
		<div class="slide-content">
			<h1 class="big-text text-balance">Sentra keeps everyone <span style="color: var(--color-primary-400)">aligned</span></h1>
			<p class="small-text text-pretty">A proactive teammate that doesn't let you down</p>
		</div>
	</div>

	<!-- Navigation indicators -->
	<div class="slide-nav">
		<button 
			class="nav-dot" 
			class:active={currentSlide === 0}
			onclick={() => { if (!isScrolling) { currentSlide = 0; } }}
			aria-label="Go to slide 1"
		></button>
		<button 
			class="nav-dot" 
			class:active={currentSlide === 1}
			onclick={() => { if (!isScrolling) { currentSlide = 1; } }}
			aria-label="Go to slide 2"
		></button>
	</div>

	<!-- Scroll indicator -->
	{#if isInSlideshow}
		<div class="scroll-indicator">
			{#if currentSlide === 0}
				<div class="scroll-arrow">↓</div>
				<span class="text-pretty">Scroll to continue</span>
			{:else if currentSlide === 1}
				<div class="scroll-controls">
					<div class="scroll-arrow up">↑</div>
					<span class="text-pretty">Scroll up or down</span>
					<div class="scroll-arrow">↓</div>
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	.slideshow-hero {
		position: relative;
		height: 100vh;
		background: linear-gradient(135deg, #000 0%, #111 100%);
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

	.slide-nav {
		position: absolute;
		right: 2rem;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		z-index: 10;
	}

	.nav-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.3);
		background: transparent;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.nav-dot:hover {
		border-color: rgba(255, 255, 255, 0.6);
		transform: scale(1.1);
	}

	.nav-dot.active {
		background: var(--color-primary-400);
		border-color: var(--color-primary-400);
		box-shadow: 0 0 12px color-mix(in oklch, var(--color-primary-400), transparent 60%);
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

	.scroll-controls {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.scroll-arrow {
		font-size: 1.5rem;
		animation: bounce 2s infinite;
	}

	.scroll-arrow.up {
		animation: bounceUp 2s infinite;
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

	@keyframes bounceUp {
		0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
		40% { transform: translateY(10px); }
		60% { transform: translateY(5px); }
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

		.slide-nav {
			right: 1rem;
		}

		.nav-dot {
			width: 10px;
			height: 10px;
		}
	}
</style>