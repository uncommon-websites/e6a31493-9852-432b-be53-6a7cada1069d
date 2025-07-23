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

	// Expanded notification data for infinite scrolling
	const notifications = [
		{
			title: "Goal alignment detected",
			subtitle: "Marketing & Sales teams synchronized",
			time: "2m ago",
			type: "success"
		},
		{
			title: "Potential friction identified",
			subtitle: "Engineering sprint planning needs attention",
			time: "5m ago",
			type: "warning"
		},
		{
			title: "Team pulse check",
			subtitle: "Weekly alignment score: 94%",
			time: "1h ago",
			type: "info"
		},
		{
			title: "Cross-team dependency resolved",
			subtitle: "Product & Engineering roadmap aligned",
			time: "3m ago",
			type: "success"
		},
		{
			title: "Communication gap detected",
			subtitle: "Design handoff requires clarification",
			time: "8m ago",
			type: "warning"
		},
		{
			title: "Milestone achievement",
			subtitle: "Q4 OKRs tracking at 98% completion",
			time: "15m ago",
			type: "success"
		},
		{
			title: "Resource allocation alert",
			subtitle: "DevOps bandwidth may impact delivery",
			time: "22m ago",
			type: "warning"
		},
		{
			title: "Team velocity update",
			subtitle: "Sprint velocity increased by 23%",
			time: "35m ago",
			type: "info"
		},
		{
			title: "Stakeholder alignment confirmed",
			subtitle: "Leadership consensus on feature priority",
			time: "45m ago",
			type: "success"
		},
		{
			title: "Knowledge gap identified",
			subtitle: "New hire onboarding optimization needed",
			time: "1h ago",
			type: "info"
		}
	]
</script>

<div class="bg-background relative overflow-hidden" {...rest}>
	<header class="section-px relative z-20 mx-auto max-w-6xl py-12 pt-24">
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

					<!-- Infinite scrolling notification cards -->
					<div class="relative z-10 w-full max-w-sm">
						<div class="notification-scroll-container h-[500px] overflow-hidden">
							<div class="notification-scroll-content space-y-4">
								{#each [...notifications, ...notifications] as notification, index}
									<div
										class={[
											"rounded-lg border border-white/20 bg-white/95 p-4 backdrop-blur-sm",
											"transform transition-all duration-500 ease-out",
											"hover:scale-105 hover:bg-white/100"
										]}
										data-enter
									>
										<div class="flex items-start justify-between gap-3">
											<div class="min-w-0 flex-1">
												<div class="mb-1 flex items-center gap-2">
													<div
														class={[
															"h-2 w-2 rounded-full",
															notification.type === "success"
																? "bg-green-500"
																: notification.type === "warning"
																	? "bg-yellow-500"
																	: "bg-blue-500"
														]}
													></div>
													<h3 class="truncate text-sm font-medium text-gray-900">
														{notification.title}
													</h3>
												</div>
												<p class="text-xs leading-relaxed text-gray-600">
													{notification.subtitle}
												</p>
											</div>
											<span class="text-xs whitespace-nowrap text-gray-500">
												{notification.time}
											</span>
										</div>
									</div>
								{/each}
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

	@keyframes infiniteScroll {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	[data-enter] {
		animation: slideInUp 0.6s ease-out forwards;
	}

	.notification-scroll-container {
		mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black 10%,
			black 90%,
			transparent 100%
		);
	}

	.notification-scroll-content {
		animation: infiniteScroll 30s linear infinite;
	}

	.notification-scroll-content:hover {
		animation-play-state: paused;
	}
</style>
