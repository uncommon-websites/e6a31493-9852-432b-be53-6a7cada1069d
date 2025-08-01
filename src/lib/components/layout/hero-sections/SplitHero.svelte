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
	import Logo from "$lib/components/Logo.svelte"

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

	// Conversation-style cards matching inspiration image
	const conversations = [
		{
			role: "VP of Product",
			request: "10min before every meeting, send me a brief with context on who/what/why",
			response: "Before every meeting, I'll send you a debrief with the right info."
		},
		{
			role: "Employee going on vacation",
			request: "I'm on vacation for 2 weeks. Keep track of all stuff that moves, take my meetings for me, and debrief me once I'm back.",
			response: "I will keep things running and debrief you once you're back."
		},
		{
			role: "Account Executive",
			request: "Track client communications and flag any potential issues before they escalate",
			response: "I'll monitor all client touchpoints and alert you to potential concerns."
		}
	]

	// Animation state
	let currentIndex = $state(0)
	let showResponse = $state(false)

	// Auto-advance conversation
	$effect(() => {
		const interval = setInterval(() => {
			if (!showResponse) {
				// Show response after 1.5s
				showResponse = true
			} else {
				// Move to next conversation after 5s total
				showResponse = false
				currentIndex = (currentIndex + 1) % conversations.length
			}
		}, showResponse ? 3500 : 1500) // 1.5s for response, 3.5s more for next item

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

			<!-- Right side - Conversation cards -->
			<div class="relative" data-enter>
				<!-- Clean background matching inspiration -->
				<div class="relative rounded-2xl bg-card p-8 lg:p-12 min-h-[500px] max-h-full flex items-center">
					<!-- Animated conversation cards -->
					<div class="space-y-3 w-full">
						<!-- User request card -->
						<div 
							class={[
								"bg-background rounded-lg p-6 border border-border transition-all duration-500",
								"animate-fadeInUp"
							]}
							key={currentIndex}
						>
							<h3 class="text-sm text-foreground mb-3 font-medium">
								{conversations[currentIndex].role}
							</h3>
							<div class="border-l-2 border-border pl-4">
								<p class="text-xs text-muted-foreground">
									{conversations[currentIndex].request}
								</p>
							</div>
						</div>

						<!-- AI response card -->
						{#if showResponse}
							<div 
								class={[
									"bg-background rounded-lg p-4 border border-border ml-8 transition-all duration-500",
									"animate-fadeInUp"
								]}
							>
								<div class="flex items-start gap-3">
									<div class="text-primary mt-0.5">
										<Logo class="w-4 h-4" />
									</div>
									<p class="text-xs text-foreground font-medium">
										{conversations[currentIndex].response}
									</p>
								</div>
							</div>
						{/if}
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

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(15px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-15px);
		}
	}

	[data-enter] {
		animation: slideInUp 0.6s ease-out forwards;
	}

	.animate-fadeInUp {
		animation: fadeInUp 0.4s ease-out forwards;
	}

	.animate-fadeOut {
		animation: fadeOut 0.3s ease-out forwards;
	}
</style>
