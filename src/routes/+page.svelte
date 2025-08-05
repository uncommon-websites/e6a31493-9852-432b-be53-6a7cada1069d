<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte"
	import CallToAction from "$lib/components/layout/CallToAction.svelte"
	import SlideshowHero from "$lib/components/layout/hero-sections/SlideshowHero.svelte"
	import SplitHero from "$lib/components/layout/hero-sections/SplitHero.svelte"
	import Security from "$lib/components/layout/Security.svelte"
	import FrictionlessAdoption from "$lib/components/layout/FrictionlessAdoption.svelte"
	import ImmediateValue from "$lib/components/layout/ImmediateValue.svelte"
	import Benefits from "$lib/components/layout/Benefits.svelte"
	import MarqueeBanner from "$lib/components/ui/MarqueeBanner.svelte"
	import ScrollStorytelling from "$lib/components/sections/ScrollStorytelling.svelte"
</script>

<SplitHero
	title="Teams Move Faster with Sentra"
	subtitle="Sentra is your AI teammate that listens, learns, and alerts you when your company drifts — before you even notice. It creates a memory of your company's institutional knowledge, memorializing and documenting details everyone forgets."
/>

<Summary
	title="What we do"
	text="Sentra is building an AI teammate that improves alignment across an organization by proactively sensing when problems may occur and allowing leaders to intervene to intercept them."
/>
<ScrollStorytelling />

<ImmediateValue />
<FrictionlessAdoption />
<MarqueeBanner />
<Benefits />
<Security />
<CallToAction />
