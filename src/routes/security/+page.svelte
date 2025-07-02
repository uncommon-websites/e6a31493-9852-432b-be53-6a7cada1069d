<script lang="ts">
	import AnimateText from '$lib/components/animation/AnimateText.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	// State for the whitepaper form
	let email = $state('');
	let company = $state('');
	let isSubmitting = $state(false);
	let formSubmitted = $state(false);

	// FAQ state
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	async function handleWhitepaperDownload() {
		if (!email || !company) return;
		
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		// In a real implementation, this would trigger the PDF download
		// For now, we'll just show a success message
		formSubmitted = true;
		isSubmitting = false;
		
		// Reset form after 3 seconds
		setTimeout(() => {
			formSubmitted = false;
			email = '';
			company = '';
		}, 3000);
	}

	const faqs = [
		{
			question: "How does Sentra comply with SOC-2?",
			answer: "Sentra maintains SOC 2 Type I compliance and is currently undergoing SOC 2 Type II certification. Our controls cover security, availability, processing integrity, confidentiality, and privacy. We undergo annual third-party audits to ensure continuous compliance with these rigorous standards."
		},
		{
			question: "What level of access does Sentra need to connect key systems?",
			answer: "Sentra operates with minimal, read-only access to your systems. We only access public channels in communication tools like Slack, meeting metadata (not recordings), and project management data. We never access private messages, personal files, or sensitive documents without explicit permission."
		},
		{
			question: "Does Sentra conduct penetration testing?",
			answer: "Yes, Sentra undergoes comprehensive penetration testing by independent security firms at least annually. We also conduct continuous automated security scans and vulnerability assessments to ensure our infrastructure remains secure against emerging threats."
		},
		{
			question: "How does Sentra use AI within the product?",
			answer: "Sentra uses AI to analyze organizational patterns and detect potential misalignment issues. All AI processing happens within our secure, compliant infrastructure. We never train our models on your specific data, and all insights are generated using privacy-preserving techniques that protect individual privacy."
		},
		{
			question: "How does Sentra comply with GDPR?",
			answer: "Sentra is fully GDPR compliant. We implement data minimization principles, provide clear consent mechanisms, enable data portability, and honor all data subject rights including the right to erasure. Our privacy-by-design approach ensures GDPR compliance is built into every aspect of our platform."
		},
		{
			question: "How does Sentra comply with CCPA?",
			answer: "Sentra complies with the California Consumer Privacy Act by providing transparent data collection practices, enabling users to know what personal information is collected, allowing deletion of personal information, and providing opt-out mechanisms for data sales (though we never sell personal data)."
		}
	];

	const subProcessors = [
		{
			name: "Amazon Web Services",
			description: "Sentra uses AWS for secure cloud hosting and database infrastructure."
		},
		{
			name: "OpenAI",
			description: "Sentra uses OpenAI's enterprise APIs for AI processing with enhanced security and privacy controls."
		},
		{
			name: "Anthropic",
			description: "Sentra uses Anthropic's Claude for additional AI capabilities with strict data handling agreements."
		},
		{
			name: "Stripe",
			description: "Sentra uses Stripe for secure payment processing and billing management."
		},
		{
			name: "Postmark",
			description: "Sentra uses Postmark for transactional email delivery and notifications."
		}
	];
</script>

<svelte:head>
	<title>Security & Trust Center - Sentra</title>
	<meta name="description" content="Learn about Sentra's commitment to data security, privacy, and compliance. SOC 2, GDPR, and CCPA certified." />
</svelte:head>

<main class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="section-px section-py">
		<div class="container mx-auto max-w-4xl text-center">
			<h1 class="text-display mb-6">
				<AnimateText text="Sentra Trust Center" />
			</h1>
			<p class="text-title3 text-muted-foreground mb-8 max-w-2xl mx-auto">
				Sentra is committed to protecting the data of our customers and employees. We began laying our security and compliance foundations from our earliest days.
			</p>
		</div>
	</section>

	<!-- Certifications Section -->
	<section class="section-px section-py-sm">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-12">
				<h2 class="text-title2 mb-4">Certifications</h2>
				<p class="text-body text-muted-foreground max-w-3xl mx-auto">
					Sentra adheres to industry-standard compliance frameworks, including SOC 2 Type I, GDPR, and CCPA. This ensures that our internal controls and processes meet and exceed industry practices in security & reliability.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
				<div class="bg-card border border-border rounded-(--radius-lg) p-8 text-center">
					<div class="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center">
						<svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
						</svg>
					</div>
					<h3 class="text-headline font-medium mb-2">SOC 2 Type I</h3>
					<p class="text-caption text-muted-foreground mb-4">Currently in observation for Type II certification</p>
					<Button variant="outline" size="sm">
						View Details
					</Button>
				</div>
				
				<div class="bg-card border border-border rounded-(--radius-lg) p-8 text-center">
					<div class="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center">
						<svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
						</svg>
					</div>
					<h3 class="text-headline font-medium mb-2">GDPR</h3>
					<p class="text-caption text-muted-foreground mb-4">Full compliance with European data protection regulations</p>
					<Button variant="outline" size="sm">
						View Details
					</Button>
				</div>
				
				<div class="bg-card border border-border rounded-(--radius-lg) p-8 text-center">
					<div class="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center">
						<svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
						</svg>
					</div>
					<h3 class="text-headline font-medium mb-2">CCPA</h3>
					<p class="text-caption text-muted-foreground mb-4">California Consumer Privacy Act compliant</p>
					<Button variant="outline" size="sm">
						View Details
					</Button>
				</div>
			</div>
		</div>
	</section>

	<!-- Resources Section -->
	<section class="section-px section-py-sm bg-card">
		<div class="container mx-auto max-w-4xl">
			<div class="text-center mb-12">
				<h2 class="text-title2 mb-4">Resources</h2>
				<p class="text-body text-muted-foreground">
					Access our security documentation and compliance reports
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				<div class="bg-background border border-border rounded-(--radius-lg) p-6">
					<h3 class="text-headline font-medium mb-2">Information Security Policy</h3>
					<p class="text-caption text-muted-foreground mb-4">Comprehensive overview of our security practices and procedures</p>
					<Button variant="outline" size="sm">Download PDF</Button>
				</div>
				
				<div class="bg-background border border-border rounded-(--radius-lg) p-6">
					<h3 class="text-headline font-medium mb-2">SOC-2 Type I Report</h3>
					<p class="text-caption text-muted-foreground mb-4">Independent audit report of our security controls</p>
					<Button variant="outline" size="sm">Request Access</Button>
				</div>
				
				<div class="bg-background border border-border rounded-(--radius-lg) p-6">
					<h3 class="text-headline font-medium mb-2">SOC-2 Type II In-Progress Letter</h3>
					<p class="text-caption text-muted-foreground mb-4">Documentation of our ongoing Type II certification process</p>
					<Button variant="outline" size="sm">Download PDF</Button>
				</div>
				
				<div class="bg-background border border-border rounded-(--radius-lg) p-6">
					<h3 class="text-headline font-medium mb-2">Most Recent Pentest Report</h3>
					<p class="text-caption text-muted-foreground mb-4">Latest penetration testing results and remediation status</p>
					<Button variant="outline" size="sm">Request Access</Button>
				</div>
			</div>

			<!-- Whitepaper Download Form -->
			<div class="bg-background border border-border rounded-(--radius-lg) p-8">
				<div class="text-center mb-6">
					<h3 class="text-title3 mb-2">Security at Sentra</h3>
					<p class="text-body text-muted-foreground">Download our comprehensive security whitepaper</p>
				</div>
				
				{#if formSubmitted}
					<div class="text-center py-8">
						<div class="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
							<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<h4 class="text-headline font-medium mb-2">Download Started</h4>
						<p class="text-caption text-muted-foreground">Your security whitepaper download should begin shortly.</p>
					</div>
				{:else}
					<form class="max-w-md mx-auto space-y-4" on:submit|preventDefault={handleWhitepaperDownload}>
						<div>
							<label for="email" class="block text-caption font-medium mb-2">Work Email</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								required
								class="w-full px-4 py-3 border border-border rounded-(--radius-md) bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
								placeholder="you@company.com"
							/>
						</div>
						
						<div>
							<label for="company" class="block text-caption font-medium mb-2">Company</label>
							<input
								id="company"
								type="text"
								bind:value={company}
								required
								class="w-full px-4 py-3 border border-border rounded-(--radius-md) bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
								placeholder="Your Company"
							/>
						</div>
						
						<Button 
							type="submit" 
							class="w-full" 
							disabled={isSubmitting || !email || !company}
						>
							{#if isSubmitting}
								<svg class="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Preparing Download...
							{:else}
								Download Whitepaper
							{/if}
						</Button>
					</form>
				{/if}
			</div>
		</div>
	</section>

	<!-- Security Practices Section -->
	<section class="section-px section-py">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-12">
				<h2 class="text-title2 mb-4">Security is fundamental to our culture and process</h2>
				<p class="text-body text-muted-foreground max-w-3xl mx-auto">
					The way we build incorporates security measures from the outset, ensuring that our products, procedures, and practices surpass industry standards.
				</p>
			</div>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div class="space-y-8">
					<div>
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
								</svg>
							</div>
							<div>
								<h3 class="text-headline font-medium mb-2">Encryption protects your data</h3>
								<p class="text-body text-muted-foreground">
									We implement cutting-edge encryption protocols to safeguard your information. Our infrastructure uses AES-256 at rest and TLS 1.3 in transit to encrypt and safeguard your data.
								</p>
							</div>
						</div>
					</div>
					
					<div>
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
								</svg>
							</div>
							<div>
								<h3 class="text-headline font-medium mb-2">Secure cloud infrastructure</h3>
								<p class="text-body text-muted-foreground">
									Sentra operates on AWS' industry-leading cloud platform, benefiting from years of security enhancements to guarantee optimal performance, resilience, and rapid deployment.
								</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="space-y-8">
					<div>
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<h3 class="text-headline font-medium mb-2">Continuous monitoring and testing</h3>
								<p class="text-body text-muted-foreground">
									Sentra's infrastructure is continuously monitored using industry-leading intrusion detection systems. Security consultants conduct penetration testing at least every year, and our internal team conducts automated scans weekly.
								</p>
							</div>
						</div>
					</div>
					
					<div>
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center flex-shrink-0">
								<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<div>
								<h3 class="text-headline font-medium mb-2">Security-focused workforce</h3>
								<p class="text-body text-muted-foreground">
									Sentra fosters a robust security-focused environment, equipping all staff members with necessary training, resources, and tools to operate securely. Every employee adheres to strict confidentiality protocols.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Sub-processors Section -->
	<section class="section-px section-py-sm bg-card">
		<div class="container mx-auto max-w-4xl">
			<div class="text-center mb-12">
				<h2 class="text-title2 mb-4">Sub-processors</h2>
				<p class="text-body text-muted-foreground">
					Trusted partners that help us deliver secure and reliable service
				</p>
			</div>
			
			<div class="space-y-4">
				{#each subProcessors as processor}
					<div class="bg-background border border-border rounded-(--radius-lg) p-6">
						<div class="flex items-center justify-between">
							<div>
								<h3 class="text-headline font-medium mb-1">{processor.name}</h3>
								<p class="text-caption text-muted-foreground">{processor.description}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="section-px section-py">
		<div class="container mx-auto max-w-4xl">
			<div class="text-center mb-12">
				<h2 class="text-title2 mb-4">Frequently Asked Questions</h2>
				<p class="text-body text-muted-foreground">
					Common questions about Sentra's security and compliance practices
				</p>
			</div>
			
			<div class="space-y-4">
				{#each faqs as faq, index}
					<div class="bg-card border border-border rounded-(--radius-lg) overflow-hidden">
						<button
							class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-card-hover transition-colors"
							on:click={() => toggleFaq(index)}
						>
							<span class="text-headline font-medium">{faq.question}</span>
							<svg 
								class={['w-5 h-5 text-muted-foreground transition-transform', openFaq === index ? 'rotate-180' : '']}
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						
						{#if openFaq === index}
							<div class="px-6 pb-4">
								<p class="text-body text-muted-foreground">{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="section-px section-py-sm bg-card">
		<div class="container mx-auto max-w-2xl text-center">
			<h2 class="text-title3 mb-4">Questions about our security practices?</h2>
			<p class="text-body text-muted-foreground mb-6">
				Our security team is here to help. Reach out with any questions about our compliance, security measures, or data protection practices.
			</p>
			<Button>
				Contact Security Team
			</Button>
		</div>
	</section>
</main>