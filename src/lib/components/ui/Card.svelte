<script lang="ts">
	import type { ComponentType } from "svelte"

	interface Props {
		title?: string
		description?: string
		icon?: ComponentType
		iconClass?: string
		imageSrc?: string
		imageAspect?: "16/9" | "9/16"
		class?: string
	}

	let {
		title = "",
		description = "",
		icon,
		iconClass = "size-5 text-primary",
		imageSrc,
		imageAspect = "16/9",
		class: customClass = ""
	}: Props = $props()

	let Icon = $derived(icon)
</script>

<article
	class="bg-card hover:bg-sidebar-primary-foreground hover:text-primary-900 border-border flex flex-col rounded-(--radius) border p-4 px-5 text-pretty transition duration-300 ease-out lg:p-5 lg:px-6 {customClass}"
>
	{#if icon || imageSrc}
		<div class="mb-8">
			{#if icon && imageSrc}
				<div class="relative">
					<img
						src={imageSrc}
						alt={title}
						class="w-full object-cover {imageAspect === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}"
						style="border-radius: max(2px, calc(var(--radius) - 1rem));"
					/>
					<div
						class="absolute top-3 left-3 bg-white/90 p-1.5 backdrop-blur-sm"
						style="border-radius: max(2px, calc(var(--radius) - 1.25rem));"
					>
						<Icon
							class="size-4 {iconClass.includes('text-')
								? iconClass.split(' ').find((c) => c.startsWith('text-'))
								: 'text-primary'}"
						/>
					</div>
				</div>
			{:else if Icon}
				<Icon class={iconClass} />
			{:else if imageSrc}
				<img
					src={imageSrc}
					alt={title}
					class="w-full object-cover {imageAspect === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}"
					style="border-radius: max(2px, calc(var(--radius) - 1rem));"
				/>
			{/if}
		</div>
	{/if}

	<div class:mt-auto={icon || imageSrc}>
		<h3 class="text-title3 mb-2">
			{title}
		</h3>
		<p class="text-body max-w-prose opacity-60">{description}</p>
	</div>
</article>
