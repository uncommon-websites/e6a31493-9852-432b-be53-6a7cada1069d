<!--
    @component
    A security and privacy section component that displays compliance information and trust indicators.

    Usage:
    ```html
    <Security />
    ```

    Props:
    - `title`: The main heading text (string)
    - `description`: Detailed information about security and compliance (string)
    - `linkHref`: URL to security/trust center page (string)
    - `linkLabel`: Label for the security center link (string)
-->

<script lang="ts">
	// Components
	import AnimateText from "../animation/AnimateText.svelte"
	import Button from "../ui/Button.svelte"

	// Props
	const {
		title = "Ultimate data security, control, and sovereignty",
		...rest
	}: {
		title?: string
	} = $props()

	// Compliance data
	const complianceItems = [
		{
			name: "SOC2 II",
			status: "In Observation",
			logoUrl: "https://trust.delve.co/new-compliance-logos/SOC2_Type2.svg"
		},
		{
			name: "GDPR",
			status: "Compliant",
			logoUrl: "https://trust.delve.co/new-compliance-logos/GDPR.svg"
		},
		{
			name: "ISO 27001",
			status: "Pending",
			logoUrl: "https://trust.delve.co/new-compliance-logos/ISO_27001.svg"
		}
	]
</script>

<div class="" {...rest}>
	<section class="section-px section-py-sm mx-auto max-w-6xl">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-title2 mb-12">
				<AnimateText text={title} />
			</h2>

			<!-- Simplified compliance indicators -->
			<div class="mb-16">
				<div class="flex items-center justify-center gap-12 md:gap-16">
					{#each complianceItems as item}
						<div class="flex flex-col items-center gap-3">
							<img 
								src={item.logoUrl} 
								alt={item.name}
								class="h-8 w-auto saturate-0 opacity-60"
							/>
							<div class="text-center">
								<p class="text-caption font-medium text-foreground">{item.name}</p>
								<p class="text-caption text-muted-foreground">{item.status}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Content sections with better spacing -->
			<div class="grid gap-12 text-left md:grid-cols-2">
				<div class="space-y-4">
					<h3 class="text-headline font-medium">Enterprise-grade security</h3>
					<p class="text-body text-muted-foreground leading-relaxed">
						Your data security is our top priority. Sentra maintains SOC2 Type 1 compliance and is
						currently in observation for SOC2 Type 2. We adhere to ISO standards and GDPR
						regulations, ensuring the highest levels of data protection and privacy.
					</p>
				</div>

				<div class="space-y-4">
					<h3 class="text-headline font-medium">Private deployments</h3>
					<p class="text-body text-muted-foreground leading-relaxed">
						For organizations with sensitive data requirements, we offer dedicated isolated VPC or
						on-premise air-gapped deployments. Your data never leaves your infrastructure while
						still providing the full power of Sentra's organizational intelligence.
					</p>
					<div class="pt-2">
						<a
							href="/private-deployments"
							class="text-primary hover:text-primary/80 text-body inline-flex items-center gap-1 font-medium transition-colors duration-200"
						>
							Learn more
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
