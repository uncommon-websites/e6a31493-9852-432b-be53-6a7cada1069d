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
		<div class="bg-card border-border rounded-(--radius-lg) border p-8 text-center">
			<h2 class="text-title2 mb-6">
				<AnimateText text={title} />
			</h2>
			
			<div class="container-xs mx-auto space-y-4">
				<p class="text-body text-emphasis-low">
					{description}
				</p>
				
				<p class="text-body text-emphasis-low">
					{onPremText}
				</p>
				
				<div class="pt-4">
					<a 
						href={linkHref}
						class="text-primary hover:text-primary/80 text-body font-medium transition-colors duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						{linkLabel} →
					</a>
				</div>
			</div>
		</div>
	</section>
</div>