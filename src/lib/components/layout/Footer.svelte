<script lang="ts">
	// Types
	import type { HTMLAttributes } from "svelte/elements"
	import { navigation } from "$lib/navigation"

	// Components
	import { CONFIG } from "$lib/content"
	import Signature from "./Signature.svelte"

	// Props
	const props: HTMLAttributes<HTMLElement> = $props()
</script>

<footer
	class="inset-x-0 bottom-0 -z-10 grid overflow-hidden"
	aria-labelledby="footer-heading"
	{...props}
>
	<div
		class="section-px relative z-10 mx-auto grid h-full max-w-6xl content-between items-start gap-16 gap-x-32 pt-10 lg:grid-cols-2 lg:gap-32"
	>
		<!-- Navigation sections with editorial styling -->
		<ul class="grid grid-cols-2 gap-8 gap-y-16 lg:grid-cols-3">
			{#each navigation
				.filter((item) => item.showInFooter !== false)
				.sort((a, b) => (b?.children?.length || 0) - (a?.children?.length || 0)) as section}
				<div class="text-muted-foreground inline-block transition-all duration-300 ease-out">
					<h3 class="text-caption text-xs" class:hidden={!section?.children}>
						{section.label}
					</h3>
					{#if section.children}
						<ul class="mt-4 flex flex-col gap-1.5">
							{#each section.children.filter((child) => child.showInFooter !== false) as item}
								<li>
									<a href={item.href} class="" target={item?.target || undefined}>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					{:else}
						<a href={section.href} class="" target={section?.target || undefined}>
							{section.label}
						</a>
					{/if}
				</div>
			{/each}
		</ul>

		<!-- Footer bottom section -->
		<div class="border-border text-muted-foreground col-span-full border-t py-6">
			<div class="grid grid-cols-2 items-start justify-between gap-4 gap-x-32 text-sm">
				<div>
					&copy; {CONFIG.companyName}
					{new Date().getFullYear()}
				</div>
				<div class="flex items-baseline justify-end gap-3 lg:justify-start">
					<div class="ml-auto hidden justify-self-end lg:block"><Signature /></div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	@reference '../../../app.css';

	a {
		@apply text-foreground inline-block underline decoration-transparent transition-all duration-300 ease-out;

		&:hover {
			@apply text-muted-foreground;
		}
	}
</style>
