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

	// Props
	const {
		title = "Security and Privacy",
		description = "We care about your data. Sentra is SOC2 Type 1 compliant and currently in observation for Type 2 certification. We are also ISO and GDPR compliant, ensuring the highest standards of data protection and privacy.",
		onPremText = "For companies handling sensitive data, we offer on-premise deployments of Sentra to ensure your data never leaves your infrastructure.",
		linkHref = "/security",
		linkLabel = "Visit our Security & Trust Center",
		...rest
	}: {
		title?: string;
		description?: string;
		onPremText?: string;
		linkHref?: string;
		linkLabel?: string;
	} = $props();
</script>

<div class="" {...rest}>
	<section class="section-px section-py-sm container mx-auto">
		<div class="bg-card border-border rounded-(--radius-lg) border p-8">
			<div class="max-w-prose mx-auto">
				<h2 class="text-title2 mb-8 text-center">
					<AnimateText text={title} />
				</h2>
				
				<!-- Trust indicators with actual compliance logos -->
				<div class="flex flex-wrap items-center justify-center gap-6 mb-8 pb-6 border-b border-border">
					<div class="flex items-center gap-2">
						<img src="https://logo.clearbit.com/aicpa.org" alt="SOC2 Type 1" class="w-8 h-8 rounded" />
						<span class="text-caption font-medium">SOC2 Type 1</span>
					</div>
					<div class="flex items-center gap-2">
						<img src="https://logo.clearbit.com/aicpa.org" alt="SOC2 Type 2" class="w-8 h-8 rounded" />
						<span class="text-caption font-medium">SOC2 Type 2 (In Progress)</span>
					</div>
					<div class="flex items-center gap-2">
						<img src="https://logo.clearbit.com/iso.org" alt="ISO Compliant" class="w-8 h-8 rounded" />
						<span class="text-caption font-medium">ISO Compliant</span>
					</div>
					<div class="flex items-center gap-2">
						<img src="https://logo.clearbit.com/gdpr.eu" alt="GDPR Compliant" class="w-8 h-8 rounded" />
						<span class="text-caption font-medium">GDPR Compliant</span>
					</div>
				</div>
				
				<div class="space-y-6 text-left">
					<div>
						<h3 class="text-headline font-medium mb-3">Enterprise-grade security</h3>
						<p class="text-body text-muted-foreground">
							Your data security is our top priority. Sentra maintains SOC2 Type 1 compliance and is currently undergoing SOC2 Type 2 certification. We also adhere to ISO standards and GDPR regulations, ensuring the highest levels of data protection and privacy for your organization.
						</p>
					</div>
					
					<div>
						<h3 class="text-headline font-medium mb-3">On-premise deployment options</h3>
						<p class="text-body text-muted-foreground">
							For organizations with sensitive data requirements, we offer dedicated on-premise deployments. This ensures your data never leaves your infrastructure while still providing the full power of Sentra's AI-driven organizational intelligence.
						</p>
					</div>
					
					<div class="pt-2">
						<a 
							href={linkHref}
							class="text-primary hover:text-primary/80 text-body font-medium transition-colors duration-200 inline-flex items-center gap-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							{linkLabel} 
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>