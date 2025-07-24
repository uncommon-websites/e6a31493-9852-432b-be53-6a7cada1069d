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
	// Icons
	import IconLock from "~icons/lucide/lock"

	// Components
	import AnimateText from "../animation/AnimateText.svelte"

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

<div {...rest}>
	<section class="section-px section-py-sm mx-auto max-w-7xl">
		<div class="bg-card rounded-(--radius-lg) p-12">
			<div class="mx-auto">
				<div
					class="border-border mb-8 grid grid-cols-2 items-start justify-between gap-12 border-b pb-8"
				>
					<!-- Left column - Title -->
					<div>
						<h2 class="text-title2 flex items-baseline gap-3">
							<IconLock class="text-primary/80 h-6 w-6" />
							<AnimateText text={title} />
						</h2>
					</div>

					<!-- Right column - Compliance logos horizontal -->
					<div class="flex gap-12">
						{#each complianceItems as item}
							<div class="flex items-center gap-3">
								<img src={item.logoUrl} alt={item.name} class="h-12" />
								<div>
									<p class="text-body font-medium">{item.name}</p>
									<p class="text-caption text-muted-foreground">{item.status}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="grid gap-16 text-left lg:grid-cols-2">
					<div>
						<h3 class="text-headline mb-3 font-medium">Private deployments</h3>
						<p class="text-body text-muted-foreground">
							For organizations with sensitive data requirements, we offer dedicated isolated VPC or
							on-premise air-gapped deployments. This flexibility ensures your data never leaves
							your infrastructure while still providing the full power of Sentra's AI-driven
							organizational intelligence.
						</p>
						<div class="mt-4">
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

					<div>
						<h3 class="text-headline mb-3 font-medium">Enterprise-grade security</h3>
						<p class="text-body text-muted-foreground">
							Your data security is our top priority. Sentra maintains SOC2 Type 1 compliance and is
							currently in the observation for SOC2 Type 2. We adhere to ISO standards and GDPR
							regulations, ensuring the highest levels of data protection and privacy for your
							organization.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
