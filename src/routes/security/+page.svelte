<script lang="ts">
	import AnimateText from '$lib/components/animation/AnimateText.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	// Contact form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let company = $state('');
	let phone = $state('');
	let employees = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let formSubmitted = $state(false);

	// Smooth scroll to contact form
	function scrollToContact() {
		const contactSection = document.getElementById('contact-form');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Handle contact form submission
	async function handleContactSubmit() {
		if (!firstName || !lastName || !email || !company) return;
		
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		formSubmitted = true;
		isSubmitting = false;
		
		// Reset form after 3 seconds
		setTimeout(() => {
			formSubmitted = false;
			firstName = '';
			lastName = '';
			email = '';
			company = '';
			phone = '';
			employees = '';
			message = '';
		}, 3000);
	}

	// Handle whitepaper download
	async function handleWhitepaperDownload() {
		if (!email || !company) return;
		
		isSubmitting = true;
		
		// Simulate download preparation
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		formSubmitted = true;
		isSubmitting = false;
		
		// Reset form after 3 seconds
		setTimeout(() => {
			formSubmitted = false;
			email = '';
			company = '';
		}, 3000);
	}

	// Sub-processors data
	const subProcessors = [
		{
			name: "Amazon Web Services (AWS)",
			description: "Cloud infrastructure and hosting services"
		},
		{
			name: "OpenAI",
			description: "AI language model services for organizational intelligence"
		},
		{
			name: "Stripe",
			description: "Payment processing and billing services"
		},
		{
			name: "SendGrid",
			description: "Email delivery and communication services"
		}
	];

	// FAQ data and state
	let openFaq = $state<number | null>(null);
	
	const faqs = [
		{
			question: "How does Sentra protect my organization's data?",
			answer: "Sentra uses enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), operates on AWS's secure infrastructure, and implements strict access controls. For private deployments, all data remains within your own secure environment."
		},
		{
			question: "What compliance certifications does Sentra have?",
			answer: "Sentra is SOC-2 Type I certified and currently undergoing SOC-2 Type II certification. We also maintain compliance with GDPR, CCPA, and other relevant data protection regulations."
		},
		{
			question: "Can Sentra be deployed in my private cloud?",
			answer: "Yes, Sentra offers private deployment options that keep all data processing within your own secure infrastructure. This ensures complete data sovereignty and meets the strictest security requirements."
		},
		{
			question: "How often do you conduct security audits?",
			answer: "We conduct comprehensive penetration testing annually with third-party security firms, perform automated security scans weekly, and maintain continuous monitoring of our infrastructure 24/7."
		},
		{
			question: "What happens to my data if I stop using Sentra?",
			answer: "Upon contract termination, all customer data is securely deleted within 30 days according to our data retention policy. We provide data export options before deletion to ensure you retain access to your information."
		}
	];

	// Toggle FAQ function
	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	// Handle whitepaper download
	async function handleWhitepaperDownload() {
		if (!email || !company) return;
		
		isSubmitting = true;
		
		// Simulate download preparation
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		formSubmitted = true;
		isSubmitting = false;
		
		// Reset form after 3 seconds
		setTimeout(() => {
			formSubmitted = false;
			email = '';
			company = '';
		}, 3000);
	}

	// Sub-processors data
	const subProcessors = [
		{
			name: "Amazon Web Services (AWS)",
			description: "Cloud infrastructure and hosting services"
		},
		{
			name: "OpenAI",
			description: "AI language model services for organizational intelligence"
		},
		{
			name: "Stripe",
			description: "Payment processing and billing services"
		},
		{
			name: "SendGrid",
			description: "Email delivery and communication services"
		}
	];

	// FAQ data and state
	let openFaq = $state<number | null>(null);
	
	const faqs = [
		{
			question: "How does Sentra protect my organization's data?",
			answer: "Sentra uses enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), operates on AWS's secure infrastructure, and implements strict access controls. For private deployments, all data remains within your own secure environment."
		},
		{
			question: "What compliance certifications does Sentra have?",
			answer: "Sentra is SOC-2 Type I certified and currently undergoing SOC-2 Type II certification. We also maintain compliance with GDPR, CCPA, and other relevant data protection regulations."
		},
		{
			question: "Can Sentra be deployed in my private cloud?",
			answer: "Yes, Sentra offers private deployment options that keep all data processing within your own secure infrastructure. This ensures complete data sovereignty and meets the strictest security requirements."
		},
		{
			question: "How often do you conduct security audits?",
			answer: "We conduct comprehensive penetration testing annually with third-party security firms, perform automated security scans weekly, and maintain continuous monitoring of our infrastructure 24/7."
		},
		{
			question: "What happens to my data if I stop using Sentra?",
			answer: "Upon contract termination, all customer data is securely deleted within 30 days according to our data retention policy. We provide data export options before deletion to ensure you retain access to your information."
		}
	];

	// Toggle FAQ function
	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<svelte:head>
	<title>Private Deployments - Sentra</title>
	<meta name="description" content="Deploy Sentra privately for ultimate security and data sovereignty. Completely private, fully customizable organizational intelligence." />
</svelte:head>

<main class="min-h-screen bg-background">
	<!-- Section 1: Hero Section -->
	<section class="section-px section-py">
		<div class="container mx-auto max-w-6xl">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<!-- Left column - Text content -->
				<div class="space-y-8">
					<div class="space-y-6">
						<h1 class="text-display">
							<AnimateText text="Private Deployments" />
						</h1>
						<h2 class="text-title2 text-muted-foreground">
							Deploy Sentra privately for ultimate security and data sovereignty.
						</h2>
					</div>
					<div>
						<Button size="lg" onclick={scrollToContact}>
							Talk to Sales
						</Button>
					</div>
				</div>
				
				<!-- Right column - Security graphic -->
				<div class="relative">
					<img 
						src="/generated/image-a-professional-business-team-engaged-in-.webp" 
						alt="Secure cloud infrastructure protecting organizational data"
						class="w-full h-auto rounded-(--radius-lg)"
					/>
					<!-- Overlay security elements -->
					<div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-(--radius-lg)"></div>
					<div class="absolute bottom-4 left-4 right-4">
						<div class="bg-white/90 backdrop-blur-sm rounded-(--radius-md) p-4 border border-white/20">
							<div class="flex items-center gap-3">
								<div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<span class="text-sm font-medium text-gray-900">Secure deployment active</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Section 2: Organizational Intelligence -->
	<section class="section-px section-py bg-card">
		<div class="container mx-auto max-w-6xl">
			<div class="text-center mb-16">
				<h1 class="text-display mb-6">
					Sentra's Organizational Intelligence <br/>
					<span class="text-muted-foreground">without exposure risks</span>
				</h1>
				<h2 class="text-title3 text-muted-foreground max-w-4xl mx-auto">
					Keep all your data within your own private environment for maximum security and compliance.
				</h2>
			</div>
			
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<!-- Completely private card -->
				<div class="bg-background border border-border rounded-(--radius-lg) p-8">
					<div class="w-16 h-16 mb-6 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center">
						<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
					</div>
					<h3 class="text-title3 font-medium mb-4">Completely private</h3>
					<p class="text-body text-muted-foreground">
						All of Sentra's memories and interactions occur within your secure infrastructure. Your sensitive company data never leaves your dedicated systems.
					</p>
				</div>
				
				<!-- Fully customizable card -->
				<div class="bg-background border border-border rounded-(--radius-lg) p-8">
					<div class="w-16 h-16 mb-6 bg-primary/10 rounded-(--radius-lg) flex items-center justify-center">
						<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					</div>
					<h3 class="text-title3 font-medium mb-4">Fully customizable</h3>
					<p class="text-body text-muted-foreground">
						Customize the level of privacy with a dedicated solutions engineer. Scale and configure Sentra to your organization's exact needs and preferences.
					</p>
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
					<form class="max-w-md mx-auto space-y-4" onsubmit={(e) => { e.preventDefault(); handleWhitepaperDownload(); }}>
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
							onclick={() => toggleFaq(index)}
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