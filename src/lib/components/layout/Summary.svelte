<!--
@component
    Use this component to showcase the main #1 benefit of a product or service in a clear and concise manner.

    Usage:
    ```html
    <Summary
      title="A clear value proposition"
      text="This component showcases your most important benefit with a smooth animation effect as users scroll"
    />
    ```

    Props:
    - `title`: A summary hint about the benefit (sentence case)
    - `text`: Main benefit statement, concise and impactful
-->

<script lang="ts">
	// Components
	import ScrollText from "./sub/ScrollText.svelte"

	// Props
	const {
		title,
		text,
		...rest
	}: {
		title?: string
		text: string
		[key: string]: unknown
	} = $props()
</script>

<div
	class="section-my section-px relative mx-auto flex max-w-7xl flex-col items-start gap-8 text-pretty lg:grid xl:flex-row"
	class:lg:grid-cols-[1fr_2fr]={!!title}
	{...rest}
>
	{#if title}
		<p class="text-emphasis-dim">{title}</p>
	{/if}

	<ScrollText {text} class="text-title1 relative mx-auto max-w-7xl" />
</div>
