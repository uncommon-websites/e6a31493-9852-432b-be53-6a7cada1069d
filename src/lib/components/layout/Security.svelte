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
	import AnimateText from "../animation/AnimateText.svelte";
	import Button from "../ui/Button.svelte";

	// Props
	const {
		title = "Ultimate data security, control, and sovereignty",
		...rest
	}: {
		title?: string;
	} = $props();

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
	];
</script>

<div class="" {...rest}>
	<section class="section-px section-py-sm mx-auto max-w-6xl">
		<div class="bg-card border-border rounded-(--radius-lg) border p-8">
			<div class="mx-auto max-w-prose">
				<h2 class="text-title2 mb-8 text-center">
					<AnimateText text={title} />
				</h2>

				<!-- Trust indicators with actual compliance logos -->
				<div class="border-border mb-8 flex justify-center border-b pb-6">
					<div class="grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
						{#each complianceItems as item}
							<div class="flex w-full flex-col items-center justify-center space-y-4">
								<div class="flex flex-col-reverse items-center justify-between gap-2">
									<div class="text-center">
										<p class="text-body font-medium">{item.name}</p>
										<p class="text-caption text-muted-foreground mt-1">{item.status}</p>
									</div>
									<img src={item.logoUrl} alt={item.name} />
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="space-y-6 text-left">
					<div>
						<h3 class="text-headline mb-3 font-medium">Enterprise-grade security</h3>
						<p class="text-body text-muted-foreground">
							Your data security is our top priority. Sentra maintains SOC2 Type 1 compliance and is
							currently in the observation for SOC2 Type 2. We adhere to ISO standards and GDPR
							regulations, ensuring the highest levels of data protection and privacy for your
							organization.
						</p>
						<div class="mt-4">
							<a
								href="https://trust.delve.co/sentra"
								class="text-primary hover:text-primary/80 text-body inline-flex items-center gap-1 font-medium transition-colors duration-200"
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
				</div>
			</div>
		</div>
	</section>
</div>
