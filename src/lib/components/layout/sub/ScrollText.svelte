<!--
@component
    Use this component to show text that animates in as users scroll

    Usage:
    ```html
    <ScrollText
      text="This component showcases your most important benefit with a smooth animation effect as users scroll"
    />
    ```

    Props:
    - `title`: A summary hint about the benefit (sentence case)
    - `text`: Main benefit statement, concise and impactful
    - `centered`: Boolean indicating whether the summary should be centered
-->

<script lang="ts">
	// Utils
	import { inView, animate, stagger } from "motion"
	import { onMount } from "svelte"

	// Props
	const {
		text,
		class: classes = ""
	}: {
		text: string
		class?: string
	} = $props()

	// State
	let words = $derived(text.split(" "))
	let containerElement: HTMLDivElement

	onMount(() => {
		if (!containerElement) return
		if (window.self !== window.top) return

		// Get all word elements as an array
		const wordElements = Array.from(containerElement.querySelectorAll(".word"))

		inView(
			containerElement,
			() => {
				animate(
					wordElements,
					{
						opacity: [0, 1],
						transform: ["translateY(1em)", "translateY(0)"],
						filter: ["blur(12px)", "blur(0px)"]
					},
					{
						delay: stagger(0.015),
						ease: "easeInOut",
						duration: 0.8
					}
				)
			},
			{ margin: "0px 0px -50% 0px" }
		)
	})
</script>

<div bind:this={containerElement} class={classes}>
	<span class="inline-block">
		{#each words as word}
			<span>
				<span class="word relative inline-block opacity-0 transition duration-150 ease-out"
					>{word}</span
				>{" "}
			</span>
		{/each}
	</span>
</div>
