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
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	// Types
	type Props = {
		title: string;
		subtitle: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>;
	};

	let { title, subtitle, callsToAction = [cta], ...rest }: Props = $props();

	// Notification data for the right side
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
		}
	];
</script>

<div class="bg-background relative overflow-hidden" {...rest}>
	<header class="section-px relative z-20 container mx-auto py-12 pt-24">
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

					<!-- Notification cards container -->
					<div class="relative z-10 w-full max-w-sm space-y-4">
						{#each notifications as notification, index}
							<div
								class={[
									"rounded-lg border border-white/20 bg-white/95 p-4 backdrop-blur-sm",
									"transform transition-all duration-500 ease-out",
									"hover:scale-105 hover:bg-white/100"
								]}
								style="animation-delay: {index * 200}ms"
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

						<!-- Add source card like in inspiration -->
						<div class="mt-6 rounded-lg border border-white/20 bg-white/90 p-6 backdrop-blur-sm">
							<div class="flex items-center justify-between">
								<h4 class="mb-3 text-sm font-medium text-gray-700">Sources</h4>
							</div>
							<button
								class="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-4 py-3 text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-600"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									></path>
								</svg>
								<span class="text-sm">Add source</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Logo scroller at bottom of hero -->
		<div class="mt-16 lg:mt-20">
			<LogoScroller
				label="Backed by industry leaders"
				logoUrls={[
					"https://cdn.brandfetch.io/microsoft.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/notion.so/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/figma.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/airtable.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/linear.app/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
					"https://cdn.brandfetch.io/slack.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
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

	[data-enter] {
		animation: slideInUp 0.6s ease-out forwards;
	}
</style>
