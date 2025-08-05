<script lang="ts">
	type Props = {
		id?: string
		type?: "text" | "email" | "tel" | "password"
		value?: string
		placeholder?: string
		required?: boolean
		label?: string
		class?: string
	}

	let {
		id,
		type = "text",
		value = $bindable(""),
		placeholder,
		required = false,
		label,
		class: classes = ""
	}: Props = $props()
</script>

<div class="space-y-2">
	{#if label}
		<label for={id} class="text-caption block font-medium">{label}</label>
	{/if}
	<input
		{id}
		{type}
		bind:value
		{placeholder}
		{required}
		class={[
			"border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none",
			classes
		]}
		style="border-radius: var(--radius-lg);"
	/>
</div>
