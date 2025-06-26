<!--
    @component
    Bold hero banner with eye-catching text and strong call-to-action. NEVER use title case.

    Usage:
    ```html
    <Hero
      title="Bold Claim"
      subtitle="Quick Value"
      imageSrc="/hero.jpg"
      callsToAction={[
        {
          href: "/start",
          label: "Go"
        },
        {
          href: "/learn",
          label: "More"
        }
      ]}
    />
    ```

    Props:
    - `title`: Main headline (string)
    - `subtitle`: Supporting text (string)
    - `imageSrc`: Hero image URL (string)
    - `callsToAction`: CTA buttons array (max two: primary, secondary)
-->

<script lang="ts">
	import { onMount } from 'svelte';
	
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";

	type Notification = {
		icon: string;
		title: string;
		time: string;
		description: string;
	};

	const notifications: Notification[] = [
		{
			icon: '🎯',
			title: 'Goal drift detected',
			time: '3m ago',
			description: 'Ops team priorities misaligned with OKRs for Q2'
		},
		{
			icon: '😶‍🌫️',
			title: 'Silent resignation detected',
			time: 'Just now',
			description: "Ashley hasn't updated progress or attended standups in 9 days"
		},
		{
			icon: '🧃',
			title: 'VP still thinks launch is next week',
			time: 'Now',
			description: 'Jane shared outdated go-live timeline in all-hands'
		},
		{
			icon: '⛔',
			title: 'Jamie facing blocker',
			time: '1m ago',
			description: 'PR #4: Authentication flow needs review by senior'
		},
		{
			icon: '💰',
			title: 'Sarah waiting on approvals',
			time: '3d ago',
			description: 'Budget increase for cloud resources'
		},
		{
			icon: '♻️',
			title: 'Redundant work in progress',
			time: '15m ago',
			description: 'Two teams implementing the same user settings flow separately'
		},
		{
			icon: '📉',
			title: 'Team velocity dropping',
			time: '15m ago',
			description: 'Frontend team missed sprint goals 2x in a row'
		},
		{
			icon: '📝',
			title: 'Project cancelled memo missed',
			time: '1h ago',
			description: 'John still working on the old marketing campaign'
		}
	];

	let visibleNotifications = $state<Array<{ notification: Notification; id: number; isLeaving: boolean }>>([]);
	let notificationId = $state(0);
	let currentIndex = $state(0);

	onMount(() => {
		// Add first notification immediately
		visibleNotifications.push({
			notification: notifications[currentIndex],
			id: notificationId++,
			isLeaving: false
		});
		currentIndex = (currentIndex + 1) % notifications.length;

		const interval = setInterval(() => {
			// Mark oldest notification as leaving if we have 3 or more
			if (visibleNotifications.length >= 3) {
				visibleNotifications[0].isLeaving = true;
				
				// Remove it after animation
				setTimeout(() => {
					visibleNotifications = visibleNotifications.slice(1);
				}, 300);
			}

			// Add new notification
			setTimeout(() => {
				visibleNotifications.push({
					notification: notifications[currentIndex],
					id: notificationId++,
					isLeaving: false
				});
				currentIndex = (currentIndex + 1) % notifications.length;
			}, visibleNotifications.length >= 3 ? 300 : 0);
		}, 2500);

		return () => clearInterval(interval);
	});

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Hero+image";
	}

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		imageSrc?: string;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		imageSrc,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();
</script>

<div class="bg-background relative overflow-hidden" {...rest}>
	<!-- Background glow - all the way in the background -->
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0 bg-gradient-radial from-primary-500/20 via-primary-600/10 to-transparent"></div>
	</div>
	
	{#if imageSrc}
		<div class="absolute inset-0 z-10" data-enter>
			<img
				src={imageSrc}
				alt="Customer"
				class="size-full object-cover"
				onerror={handleImageError}
			/>
		</div>
	{/if}

	<header
		class={[
			"section-px container mx-auto grid items-center gap-16 gap-y-9 py-12 pt-24 text-balance relative z-20 min-h-[70vh]",
			centered ? "place-items-center text-center" : " xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-6" class:max-w-prose={centered}>
			<h1 class="text-display w-full text-white drop-shadow-lg" data-enter>
				<span class="block"><AnimateText text={title} /></span>
				{#if !centered}
					<span class="text-emphasis-dim block"><AnimateText text={subtitle} /></span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class={[
						"text-white/90 text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out drop-shadow-md"
						// isTitleComplete ? "opacity-100" : "translate-y-2 opacity-0 blur-sm"
					]}
				>
					{subtitle}
				</p>
			{/if}
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-4" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden">{cta.label}</Button
					>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden">{cta.label}</Button
					>
				{/each}
			</div>
		{/if}
	</header>

	<!-- iOS-style notification stack - centered over image -->
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden xl:block z-30">
		<div class="relative">
			{#each visibleNotifications as { notification, id, isLeaving }, index (id)}
				<div 
					class="absolute left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg w-80 p-4 transition-all duration-300 ease-out"
					style:transform="translateY({index * 8}px) scale({1 - index * 0.02})"
					style:z-index={100 - index}
					class:opacity-100={!isLeaving}
					class:opacity-0={isLeaving}
					class:translate-y-full={isLeaving}
				>
					<div class="flex items-start gap-3">
						<div class="text-lg flex-shrink-0 mt-0.5">
							{notification.icon}
						</div>
						
						<div class="flex-1 min-w-0">
							<div class="flex items-center justify-between gap-2 mb-1">
								<h3 class="font-semibold text-gray-900 text-sm truncate">
									{notification.title}
								</h3>
								<span class="text-xs text-gray-500 flex-shrink-0">
									{notification.time}
								</span>
							</div>
							
							<p class="text-xs text-gray-600 leading-relaxed line-clamp-2">
								{notification.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
