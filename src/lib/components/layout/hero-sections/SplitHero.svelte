<!--
    @component
    Split layout hero with text on left and colored notification block on right.
    Inspired by modern AI/SaaS landing pages.

    Usage:
    ```html
    <SplitHero
      title="Scale companies effectively with Sentra"
      subtitle="Your AI teammate that improves alignment across your organization"
      callsToAction={[
        { href: "/contact", label: "Join private beta" },
        { href: "#how-it-works", label: "See how it works" }
      ]}
    />
    ```
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte"
	import Button from "$lib/components/ui/Button.svelte"
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte"

	// Constants
	import { cta } from "$lib/navigation"

	// Types
	type Props = {
		title: string
		subtitle: string
		callsToAction?: Array<{
			href: string
			label: string
		}>
	}

	let { title, subtitle, callsToAction = [cta], ...rest }: Props = $props()

	title = "Teams Move Faster with Sentra  "

	// Role-based notification cards for stack animation
	const notifications = [
		{
			role: "VP of Product",
			request: "10min before every meeting, send me a brief with context on who/what/why",
			icon: "💼"
		},
		{
			role: "Engineering Manager",
			request: "Alert me when cross-team dependencies might cause sprint delays",
			icon: "⚙️"
		},
		{
			role: "Head of Sales",
			request: "Keep me updated on product roadmap changes that affect customer commitments",
			icon: "📈"
		},
		{
			role: "Design Lead",
			request: "Notify me when design decisions need stakeholder alignment",
			icon: "🎨"
		},
		{
			role: "CEO",
			request: "Weekly pulse on team alignment and potential friction points",
			icon: "🎯"
		},
		{
			role: "Marketing Director",
			request: "Flag when product messaging doesn't align with actual capabilities",
			icon: "📢"
		}
	]

	// Animation state
	let currentIndex = $state(0)
	let isAnimating = $state(false)

	// 5-second interval animation
	$effect(() => {
		const interval = setInterval(() => {
			isAnimating = true
			setTimeout(() => {
				currentIndex = (currentIndex + 1) % notifications.length
				isAnimating = false
			}, 300) // Animation duration
		}, 5000)

		return () => clearInterval(interval)
	})
</script>

<div class="bg-background relative overflow-hidden" {...rest}>
	<header class="section-px relative z-20 mx-auto max-w-7xl py-12 pt-24">
		<!-- Background glow -->
		<div class="absolute inset-0 z-0">
			<div
				class="bg-gradient-radial from-primary-500/10 via-primary-600/5 absolute inset-0 to-transparent"
			></div>
		</div>
		<div class="relative z-10 grid h-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Left side - Text content -->
			<div class="grid gap-8" data-enter-container>
				<div class="grid gap-6">
					<h1 class="text-display text-foreground text-balance" data-enter>
						<AnimateText text={title} />
					</h1>

					<p class="text-headline text-muted-foreground max-w-[50ch]" data-enter>
						{subtitle}
					</p>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row" data-enter>
					<Button href={cta.href} size="lg" variant="primary" class="w-full sm:w-auto">
						{cta.label}
					</Button>
				</div>
			</div>

			<!-- Right side - Notification block -->
			<div class="relative" data-enter>
				<!-- Gradient background block -->
				<div
					class="relative flex min-h-[500px] items-center justify-center rounded-2xl p-8 lg:p-12"
				>
					<!-- Gradient background -->
					<div
						class="from-primary-700 to-primary-400 absolute inset-0 rounded-2xl bg-radial from-40%"
					></div>

					<!-- Stacked notification cards -->
					<div class="relative z-10 w-full max-w-sm">
						<div class="card-stack-container relative h-[400px]">
							{#each notifications as notification, index}
								{@const isVisible = index >= currentIndex && index < currentIndex + 3}
								{@const stackIndex = index - currentIndex}
								<div
									class={[
										"card-item absolute inset-x-0 rounded-xl bg-white p-6 shadow-sm border border-gray-100",
										"transition-all duration-300 ease-out",
										isVisible ? "opacity-100" : "opacity-0",
										isAnimating ? "animate-slide" : ""
									]}
									style={`
										transform: translateY(${stackIndex * 20}px) scale(${1 - stackIndex * 0.05});
										z-index: ${10 - stackIndex};
									`}
								>
									<div class="flex items-start gap-4">
										<div class="text-2xl">{notification.icon}</div>
										<div class="min-w-0 flex-1">
											<h3 class="text-sm font-semibold text-gray-900 mb-2">
												{notification.role}
											</h3>
											<p class="text-sm text-gray-600 leading-relaxed">
												{notification.request}
											</p>
										</div>
									</div>
								</div>
							{/each}
							
							<!-- Response card (always visible at bottom) -->
							<div 
								class="absolute inset-x-0 bottom-0 rounded-xl bg-blue-50 border border-blue-200 p-4"
								style="transform: translateY(80px); z-index: 1;"
							>
								<div class="flex items-center gap-3">
									<div class="text-blue-600">
										<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
									</div>
									<p class="text-sm font-medium text-blue-900">
										On every meeting, I'll send you a debrief
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Logo scroller at bottom of hero -->
		<div class="mt-16 lg:mt-20">
			<LogoScroller
				label="Shaped and backed by former leaders of:"
				logoUrls={[
					"https://cdn.brandfetch.io/google.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/microsoft.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/twitter.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/qualcomm.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/instacart.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/motorola.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
				]}
			/>
		</div>
	</header>
</div>

<style>
	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideStack {
		0% {
			transform: translateY(0) scale(1);
		}
		50% {
			transform: translateY(-10px) scale(0.98);
		}
		100% {
			transform: translateY(0) scale(1);
		}
	}

	[data-enter] {
		animation: slideInUp 0.6s ease-out forwards;
	}

	.card-stack-container {
		perspective: 1000px;
	}

	.card-item {
		transform-origin: center top;
	}

	.animate-slide {
		animation: slideStack 0.3s ease-out;
	}

	.card-item:hover {
		transform: translateY(var(--stack-offset, 0)) scale(var(--stack-scale, 1)) translateZ(10px) !important;
		transition: all 0.2s ease-out;
	}
</style>
