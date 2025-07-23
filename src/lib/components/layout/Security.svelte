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
		<div class="bg-card border-border rounded-(--radius-lg) border overflow-hidden">
			<!-- Header Section -->
			<div class="px-12 pt-12 pb-8">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="text-title2 mb-4">
						<AnimateText text={title} />
					</h2>
				</div>
			</div>

			<!-- Trust Indicators -->
			<div class="px-12 pb-12">
				<div class="mx-auto max-w-4xl">
					<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
						{#each complianceItems as item}
							<div class="flex flex-col items-center text-center group">
								<div class="mb-6 transition-transform duration-300 group-hover:scale-105">
									<img 
										src={item.logoUrl} 
										alt={item.name}
										class="h-16 w-auto mx-auto"
									/>
								</div>
								<div class="space-y-1">
									<p class="text-body font-semibold">{item.name}</p>
									<p class="text-caption text-muted-foreground">{item.status}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Content Sections -->
			<div class="bg-muted/30 px-12 py-12">
				<div class="mx-auto max-w-4xl">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div class="space-y-6">
							<div class="space-y-4">
								<h3 class="text-title3 font-semibold">Enterprise-grade security</h3>
								<p class="text-body text-muted-foreground leading-relaxed">
									Your data security is our top priority. Sentra maintains SOC2 Type 1 compliance and is
									currently in the observation for SOC2 Type 2. We adhere to ISO standards and GDPR
									regulations, ensuring the highest levels of data protection and privacy for your
									organization.
								</p>
							</div>
							<div>
								<a
									href="https://trust.delve.co/sentra"
									class="text-primary hover:text-primary/80 text-body inline-flex items-center gap-2 font-medium transition-all duration-200 hover:gap-3"
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit our Security & Trust Center
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

						<div class="space-y-6">
							<div class="space-y-4">
								<h3 class="text-title3 font-semibold">Private deployments</h3>
								<p class="text-body text-muted-foreground leading-relaxed">
									For organizations with sensitive data requirements, we offer dedicated isolated VPC or
									on-premise air-gapped deployments. This flexibility ensures your data never leaves
									your infrastructure while still providing the full power of Sentra's AI-driven
									organizational intelligence.
								</p>
							</div>
							<div>
								<a
									href="/private-deployments"
									class="text-primary hover:text-primary/80 text-body inline-flex items-center gap-2 font-medium transition-all duration-200 hover:gap-3"
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
			</div>
		</div>
	</section>
</div>
