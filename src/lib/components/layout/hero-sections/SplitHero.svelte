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

	let {
		title,
		subtitle,
		callsToAction = [cta],
		...rest
	}: Props = $props();

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
	<header class="section-px container mx-auto relative z-20 min-h-[80vh] py-12 pt-24">
		<!-- Background glow -->
		<div class="absolute inset-0 z-0">
			<div class="absolute inset-0 bg-gradient-radial from-primary-500/10 via-primary-600/5 to-transparent"></div>
		</div>
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full relative z-10">
			<!-- Left side - Text content -->
			<div class="grid gap-8" data-enter-container>
				<div class="grid gap-6">
					<h1 class="text-display text-foreground" data-enter>
						<AnimateText text={title} />
					</h1>
					
					<p class="text-headline text-muted-foreground max-w-[50ch]" data-enter>
						{subtitle}
					</p>
				</div>

				<div class="flex flex-col sm:flex-row gap-4" data-enter>
					<Button
						href={cta.href}
						size="lg"
						variant="primary"
						class="w-full sm:w-auto"
					>
						{cta.label}
					</Button>
				</div>
			</div>

			<!-- Right side - Notification block -->
			<div class="relative" data-enter>
				<!-- Gradient background block -->
				<div class="relative rounded-2xl p-8 lg:p-12 min-h-[500px] flex items-center justify-center">
					<!-- Gradient background -->
					<div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/80 via-primary-500/70 to-primary-600/80"></div>
					
					<!-- Notification cards container -->
					<div class="relative z-10 w-full max-w-sm space-y-4">
						{#each notifications as notification, index}
							<div 
								class={[
									"bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/20",
									"transform transition-all duration-500 ease-out",
									"hover:bg-white/100 hover:scale-105"
								]}
								style="animation-delay: {index * 200}ms"
								data-enter
							>
								<div class="flex items-start justify-between gap-3">
									<div class="flex-1 min-w-0">
										<div class="flex items-center gap-2 mb-1">
											<div class={[
												"w-2 h-2 rounded-full",
												notification.type === 'success' ? 'bg-green-500' :
												notification.type === 'warning' ? 'bg-yellow-500' :
												'bg-blue-500'
											]}></div>
											<h3 class="text-sm font-medium text-gray-900 truncate">
												{notification.title}
											</h3>
										</div>
										<p class="text-xs text-gray-600 leading-relaxed">
											{notification.subtitle}
										</p>
									</div>
									<span class="text-xs text-gray-500 whitespace-nowrap">
										{notification.time}
									</span>
								</div>
							</div>
						{/each}

						<!-- Add source card like in inspiration -->
						<div class="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-white/20 mt-6">
							<div class="flex items-center justify-between">
								<h4 class="text-sm font-medium text-gray-700 mb-3">Sources</h4>
							</div>
							<button class="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
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
					'https://logo.clearbit.com/microsoft.com',
					'https://logo.clearbit.com/notion.so',
					'https://logo.clearbit.com/figma.com',
					'https://logo.clearbit.com/airtable.com',
					'https://logo.clearbit.com/linear.app',
					'https://logo.clearbit.com/slack.com'
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