<!--
@component NotificationLoop

A component that loops through notifications with smooth transitions.
Displays organizational intelligence alerts in a clean, centered format.
-->

<script lang="ts">
	import { onMount } from 'svelte';

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

	let currentIndex = $state(0);
	let isVisible = $state(true);

	onMount(() => {
		const interval = setInterval(() => {
			isVisible = false;
			
			setTimeout(() => {
				currentIndex = (currentIndex + 1) % notifications.length;
				isVisible = true;
			}, 300);
		}, 3000);

		return () => clearInterval(interval);
	});

	let currentNotification = $derived(notifications[currentIndex]);
</script>

<div class="flex items-center justify-center min-h-[400px] p-8">
	<div 
		class="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg max-w-md w-full p-6 transition-all duration-300 ease-in-out"
		class:opacity-100={isVisible}
		class:opacity-0={!isVisible}
		class:scale-100={isVisible}
		class:scale-95={!isVisible}
	>
		<div class="flex items-start gap-4">
			<div class="text-2xl flex-shrink-0 mt-1">
				{currentNotification.icon}
			</div>
			
			<div class="flex-1 min-w-0">
				<div class="flex items-center justify-between gap-2 mb-2">
					<h3 class="font-semibold text-gray-900 text-sm truncate">
						{currentNotification.title}
					</h3>
					<span class="text-xs text-gray-500 flex-shrink-0">
						{currentNotification.time}
					</span>
				</div>
				
				<p class="text-sm text-gray-600 leading-relaxed">
					{currentNotification.description}
				</p>
			</div>
		</div>
		
		<!-- Progress indicator -->
		<div class="mt-4 flex gap-1">
			{#each notifications as _, index}
				<div 
					class="h-1 flex-1 rounded-full transition-all duration-300"
					class:bg-blue-500={index === currentIndex}
					class:bg-gray-200={index !== currentIndex}
				></div>
			{/each}
		</div>
	</div>
</div>