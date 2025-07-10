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
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte"
	import Button from "$lib/components/ui/Button.svelte"

	// Constants
	import { cta } from "$lib/navigation"

	// Removed notification functionality as requested

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Hero+image"
	}

	// Types
	type Props = {
		centered?: boolean
		title: string
		subtitle: string
		imageSrc?: string
		callsToAction?: Array<{
			href: string
			label: string
		}> // A maximum of two calls to action, with the first one being primary and the second one being secondary
	}

	let {
		title,
		subtitle,
		imageSrc,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props()
</script>

<div class="bg-background relative overflow-hidden" {...rest}>
	<!-- Background glow - all the way in the background -->
	<div class="absolute inset-0 z-0">
		<div
			class="bg-gradient-radial from-primary-500/20 via-primary-600/10 absolute inset-0 to-transparent"
		></div>
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
			"section-px relative z-20 container mx-auto grid min-h-[70vh] items-center gap-16 gap-y-9 py-12 pt-24 text-balance",
			centered ? "place-items-center text-center" : " xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-6" class:max-w-prose={centered}>
			<h1 class="text-display text-foreground w-full" data-enter>
				<span class="block"><AnimateText text={title} /></span>
				{#if !centered}
					<span class="text-emphasis-dim block"><AnimateText text={subtitle} /></span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class={[
						"text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out"
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
</div>
