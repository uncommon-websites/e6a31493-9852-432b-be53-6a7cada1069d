<script lang="ts">
	import AnimateText from "$lib/components/animation/AnimateText.svelte"
	import Button from "$lib/components/ui/Button.svelte"

	// Contact form state
	let firstName = $state("")
	let lastName = $state("")
	let email = $state("")
	let company = $state("")
	let phone = $state("")
	let employees = $state("")
	let message = $state("")
	let isSubmitting = $state(false)
	let formSubmitted = $state(false)

	// Smooth scroll to contact form
	function scrollToContact() {
		const contactSection = document.getElementById("contact-form")
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" })
		}
	}

	// Handle contact form submission
	async function handleContactSubmit() {
		if (!firstName || !lastName || !email || !company) return

		isSubmitting = true

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500))

		formSubmitted = true
		isSubmitting = false

		// Reset form after 3 seconds
		setTimeout(() => {
			formSubmitted = false
			firstName = ""
			lastName = ""
			email = ""
			company = ""
			phone = ""
			employees = ""
			message = ""
		}, 3000)
	}

	// Handle whitepaper download
	async function handleWhitepaperDownload() {
		if (!email || !company) return

		isSubmitting = true

		// Simulate download preparation
		await new Promise((resolve) => setTimeout(resolve, 1500))

		// Simulate file download
		const link = document.createElement("a")
		link.href = "/static/sentra-security-whitepaper.pdf"
		link.download = "sentra-security-whitepaper.pdf"
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)

		formSubmitted = true
		isSubmitting = false

		// Reset form after 3 seconds
		setTimeout(() => {
			formSubmitted = false
			email = ""
			company = ""
		}, 3000)
	}

	// Sub-processors data
	const subProcessors = [
		{
			name: "Amazon Web Services (AWS)",
			description: "Cloud infrastructure and hosting services"
		},
		{
			name: "Stripe",
			description: "Payment processing and billing services"
		},
		{
			name: "SendGrid",
			description: "Email delivery and communication services"
		},
		{
			name: "Mixpanel",
			description: "Analytics and user behavior tracking"
		}
	]

	// Resources data
	const resources = [
		{
			title: "Information Security Policy",
			description: "Comprehensive overview of our security practices and procedures",
			buttonText: "Download PDF",
			buttonAction: "download"
		},
		{
			title: "SOC-2 Type I Report",
			description: "Independent audit report of our security controls",
			buttonText: "Request Access",
			buttonAction: "request"
		},
		{
			title: "SOC-2 Type II In-Progress Letter",
			description: "Documentation of our ongoing Type II certification process",
			buttonText: "Download PDF",
			buttonAction: "download"
		},
		{
			title: "Most Recent Pentest Report",
			description: "Latest penetration testing results and remediation status",
			buttonText: "Request Access",
			buttonAction: "request"
		}
	]

	// FAQ data and state
	let openFaq = $state<number | null>(null)

	const faqs = [
		{
			question: "How does Sentra protect my company data?",
			answer:
				"Sentra uses enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), operates on AWS secure infrastructure, and follows strict data isolation practices. All data is encrypted and access is logged and monitored."
		},
		{
			question: "Is Sentra SOC 2 compliant?",
			answer:
				"Yes, Sentra has completed SOC 2 Type I certification and is currently undergoing SOC 2 Type II certification. We maintain comprehensive security controls and undergo regular third-party audits."
		},
		{
			question: "Can I deploy Sentra in my own private cloud?",
			answer:
				"Yes, Sentra offers private deployment options for organizations with specific security requirements. Contact our sales team to discuss your private deployment needs and configuration options."
		},
		{
			question: "What data does Sentra access?",
			answer:
				"Sentra only accesses the data you explicitly grant permission to, such as public Slack channels, calendar events, and project management tools. We never access private messages or sensitive documents without explicit authorization."
		},
		{
			question: "How long is data retained?",
			answer:
				"Data retention periods are configurable based on your organization's needs and compliance requirements. By default, we retain operational data for 90 days and can accommodate longer or shorter retention periods as needed."
		},
		{
			question: "Can I delete my data?",
			answer:
				"Yes, you have full control over your data. You can request data deletion at any time, and we will permanently remove all associated data within 30 days of your request."
		}
	]

	// Toggle FAQ function
	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index
	}
</script>

<svelte:head>
	<title>Private Deployments - Sentra</title>
	<meta
		name="description"
		content="Deploy Sentra privately for ultimate security and data sovereignty. Completely private, fully customizable organizational intelligence."
	/>
</svelte:head>

<main class="bg-background min-h-screen">
	<!-- Section 1: Hero Section -->
	<section class="section-px section-py">
		<div class="section-px mx-auto max-w-6xl">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
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
						<Button size="lg" onclick={scrollToContact}>Talk to Sales</Button>
					</div>
				</div>

				<!-- Right column - Security graphic -->
				<div class="relative">
					<!-- Custom SVG illustration -->
					<div
						class="bg-gradient-to-br from-primary/5 to-primary/10 flex h-96 w-full items-center justify-center"
						style="border-radius: var(--radius-lg);"
					>
						<svg
							viewBox="0 0 400 300"
							class="h-full w-full max-h-80"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<!-- Database 1 (top left) -->
							<g transform="translate(60, 60)">
								<ellipse cx="30" cy="10" rx="25" ry="8" fill="currentColor" class="text-primary/20" />
								<rect x="5" y="10" width="50" height="30" fill="currentColor" class="text-primary/20" />
								<ellipse cx="30" cy="40" rx="25" ry="8" fill="currentColor" class="text-primary/30" />
								<ellipse cx="30" cy="20" rx="25" ry="8" fill="currentColor" class="text-primary/25" />
								<ellipse cx="30" cy="30" rx="25" ry="8" fill="currentColor" class="text-primary/25" />
								<!-- Database icon -->
								<svg x="20" y="15" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
									<ellipse cx="12" cy="5" rx="9" ry="3"/>
									<path d="m3 5 0 14c0 3 4 3 9 3s9 0 9-3V5"/>
									<path d="m3 12c0 3 4 3 9 3s9 0 9-3"/>
								</svg>
							</g>

							<!-- Database 2 (top right) -->
							<g transform="translate(280, 60)">
								<ellipse cx="30" cy="10" rx="25" ry="8" fill="currentColor" class="text-primary/20" />
								<rect x="5" y="10" width="50" height="30" fill="currentColor" class="text-primary/20" />
								<ellipse cx="30" cy="40" rx="25" ry="8" fill="currentColor" class="text-primary/30" />
								<ellipse cx="30" cy="20" rx="25" ry="8" fill="currentColor" class="text-primary/25" />
								<ellipse cx="30" cy="30" rx="25" ry="8" fill="currentColor" class="text-primary/25" />
								<!-- Database icon -->
								<svg x="20" y="15" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
									<ellipse cx="12" cy="5" rx="9" ry="3"/>
									<path d="m3 5 0 14c0 3 4 3 9 3s9 0 9-3V5"/>
									<path d="m3 12c0 3 4 3 9 3s9 0 9-3"/>
								</svg>
							</g>

							<!-- Database 3 (bottom center) -->
							<g transform="translate(170, 180)">
								<ellipse cx="30" cy="10" rx="25" ry="8" fill="currentColor" class="text-primary/20" />
								<rect x="5" y="10" width="50" height="30" fill="currentColor" class="text-primary/20" />
								<ellipse cx="30" cy="40" rx="25" ry="8" fill="currentColor" class="text-primary/30" />
								<ellipse cx="30" cy="20" rx="25" ry="8" fill="currentColor" class="text-primary/25" />
								<ellipse cx="30" cy="30" rx="25" ry="8" fill="currentColor" class="text-primary/25" />
								<!-- Database icon -->
								<svg x="20" y="15" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
									<ellipse cx="12" cy="5" rx="9" ry="3"/>
									<path d="m3 5 0 14c0 3 4 3 9 3s9 0 9-3V5"/>
									<path d="m3 12c0 3 4 3 9 3s9 0 9-3"/>
								</svg>
							</g>

							<!-- Central Lock -->
							<g transform="translate(180, 120)">
								<circle cx="20" cy="20" r="30" fill="currentColor" class="text-primary/10" />
								<circle cx="20" cy="20" r="25" fill="currentColor" class="text-primary/5" />
								<!-- Lock icon -->
								<svg x="8" y="8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-primary">
									<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
									<path d="m7 11V7a5 5 0 0 1 10 0v4"/>
								</svg>
							</g>

							<!-- Dotted lines connecting databases to lock -->
							<!-- Database 1 to Lock -->
							<path
								d="M 120 90 Q 150 105 180 140"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="4,4"
								fill="none"
								class="text-primary/40"
							/>

							<!-- Database 2 to Lock -->
							<path
								d="M 280 90 Q 250 105 220 140"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="4,4"
								fill="none"
								class="text-primary/40"
							/>

							<!-- Database 3 to Lock -->
							<path
								d="M 200 180 Q 200 165 200 150"
								stroke="currentColor"
								stroke-width="2"
								stroke-dasharray="4,4"
								fill="none"
								class="text-primary/40"
							/>
						</svg>
					</div>

					<!-- Overlay security elements -->
					<div
						class="from-primary/20 absolute inset-0 bg-gradient-to-t to-transparent"
						style="border-radius: var(--radius-lg);"
					></div>
				
				</div>
			</div>
		</div>
	</section>

	<!-- Section 2: Organizational Intelligence -->
	<section class="section-px section-py">
		<div class="section-px mx-auto max-w-6xl">
			<div class="mb-16">
				<h2 class="text-title1 mb-6">
					Sentra's Organizational Intelligence <br />
					<span class="text-muted-foreground">without exposure risks</span>
				</h2>
				<h3 class="text-title3 text-muted-foreground max-w-4xl">
					Keep all your data within your own private environment for maximum security and
					compliance.
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<!-- Completely private -->
				<div class="space-y-6">
					<div
						class="flex size-8 items-center justify-center"
						style="border-radius: var(--radius-lg);"
					>
						<svg
							class="text-primary-900 h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
					<h3 class="text-title3 font-medium">Completely private</h3>
					<p class="text-body text-muted-foreground">
						All of Sentra's memories and interactions occur within your secure infrastructure. Your
						sensitive company data never leaves your dedicated systems.
					</p>
				</div>

				<!-- Fully customizable -->
				<div class="space-y-6">
					<div
						class="flex size-8 items-center justify-center"
						style="border-radius: var(--radius-lg);"
					>
						<svg
							class="text-primary-900 h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="text-title3 font-medium">Fully customizable</h3>
					<p class="text-body text-muted-foreground">
						Customize the level of privacy with a dedicated solutions engineer. Scale and configure
						Sentra to your organization's exact needs and preferences.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Resources Section -->
	<section class="section-px section-py-sm bg-muted">
		<div class="section-px mx-auto max-w-4xl max-w-6xl">
			<div class="mb-12">
				<h2 class="text-title2 mb-4">Resources</h2>
				<p class="text-body text-muted-foreground">
					Access our security documentation and compliance reports
				</p>
			</div>

			<div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each resources as resource}
					<div class="bg-background space-y-4 p-6" style="border-radius: var(--radius-lg);">
						<h3 class="text-headline font-medium">{resource.title}</h3>
						<p class="text-caption text-muted-foreground">
							{resource.description}
						</p>
						<Button variant="secondary" size="sm">{resource.buttonText}</Button>
					</div>
				{/each}
			</div>

			<!-- Whitepaper Download Form -->
			<div class="space-y-6">
				<div>
					<h3 class="text-title3 mb-2">Security at Sentra</h3>
					<p class="text-body text-muted-foreground">
						Download our comprehensive security whitepaper
					</p>
				</div>

				{#if formSubmitted}
					<div class="py-8 text-center">
						<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
							<svg
								class="text-primary-900 h-8 w-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<h4 class="text-headline mb-2 font-medium">Download Started</h4>
						<p class="text-caption text-muted-foreground">
							Your security whitepaper download should begin shortly.
						</p>
					</div>
				{:else}
					<form
						class="mx-auto max-w-md space-y-4"
						onsubmit={(e) => {
							e.preventDefault()
							handleWhitepaperDownload()
						}}
					>
						<div>
							<label for="email" class="text-caption mb-2 block font-medium">Work Email</label>
							<input
								id="email"
								type="email"
								bind:value={email}
								required
								class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
								style="border-radius: var(--radius-md);"
								placeholder="you@company.com"
							/>
						</div>

						<div>
							<label for="company" class="text-caption mb-2 block font-medium">Company</label>
							<input
								id="company"
								type="text"
								bind:value={company}
								required
								class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
								style="border-radius: var(--radius-md);"
								placeholder="Your Company"
							/>
						</div>

						<Button type="submit" class="w-full" disabled={isSubmitting || !email || !company}>
							{#if isSubmitting}
								<svg class="mr-3 -ml-1 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
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
	<!-- <section class="section-px section-py">
		<div class="max-w-6xl section-px mx-auto max-w-6xl">
			<div class="mb-12">
				<h2 class="text-title2 mb-4">Security is fundamental to our culture and process</h2>
				<p class="text-body text-muted-foreground max-w-3xl">
					The way we build incorporates security measures from the outset, ensuring that our
					products, procedures, and practices surpass industry standards.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<div class="space-y-8">
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center"
							style="border-radius: var(--radius-lg);"
						>
							<svg
								class="text-primary-900 h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-headline mb-2 font-medium">Encryption protects your data</h3>
							<p class="text-body text-muted-foreground">
								We implement cutting-edge encryption protocols to safeguard your information. Our
								infrastructure uses AES-256 at rest and TLS 1.3 in transit to encrypt and safeguard
								your data.
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center"
							style="border-radius: var(--radius-lg);"
						>
							<svg
								class="text-primary-900 h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-headline mb-2 font-medium">Secure cloud infrastructure</h3>
							<p class="text-body text-muted-foreground">
								Sentra operates on AWS' industry-leading cloud platform, benefiting from years of
								security enhancements to guarantee optimal performance, resilience, and rapid
								deployment.
							</p>
						</div>
					</div>
				</div>

				<div class="space-y-8">
					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center"
							style="border-radius: var(--radius-lg);"
						>
							<svg
								class="text-primary-900 h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-headline mb-2 font-medium">Continuous monitoring and testing</h3>
							<p class="text-body text-muted-foreground">
								Sentra's infrastructure is continuously monitored using industry-leading intrusion
								detection systems. Security consultants conduct penetration testing at least every
								year, and our internal team conducts automated scans weekly.
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center"
							style="border-radius: var(--radius-lg);"
						>
							<svg
								class="text-primary-900 h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-headline mb-2 font-medium">Security-focused workforce</h3>
							<p class="text-body text-muted-foreground">
								Sentra fosters a robust security-focused environment, equipping all staff members
								with necessary training, resources, and tools to operate securely. Every employee
								adheres to strict confidentiality protocols.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<!-- Sub-processors Section -->
	<!-- <section class="section-px section-py-sm">
		<div class="max-w-6xl section-px mx-auto max-w-4xl">
			<div class="mb-12">
				<h2 class="text-title2 mb-4">Sub-processors</h2>
				<p class="text-body text-muted-foreground">
					Trusted partners that help us deliver secure and reliable service
				</p>
			</div>

			<div class="space-y-8">
				{#each subProcessors as processor}
					<div>
						<h3 class="text-headline mb-1 font-medium">{processor.name}</h3>
						<p class="text-caption text-muted-foreground">{processor.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section> -->

	<!-- FAQ Section -->
	<section class="section-px section-py hidden">
		<div class="section-px mx-auto max-w-4xl max-w-6xl">
			<div class="mb-12">
				<h2 class="text-title2 mb-4">Frequently Asked Questions</h2>
				<p class="text-body text-muted-foreground">
					Common questions about Sentra's security and compliance practices
				</p>
			</div>

			<div class="space-y-6">
				{#each faqs as faq, index}
					<div class="border-border border-b pb-6">
						<button
							class="flex w-full items-center justify-between text-left transition-colors"
							onclick={() => toggleFaq(index)}
						>
							<span class="text-headline font-medium">{faq.question}</span>
							<svg
								class={[
									"text-muted-foreground ml-4 h-5 w-5 flex-shrink-0 transition-transform",
									openFaq === index ? "rotate-180" : ""
								]}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						{#if openFaq === index}
							<div class="mt-4">
								<p class="text-body text-muted-foreground">{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Form Section -->
	<section id="contact-form" class="section-px section-py">
		<div class="section-px mx-auto max-w-2xl max-w-6xl">
			<div class="mb-8">
				<h2 class="text-title2 mb-4">Talk to Sales</h2>
				<p class="text-body text-muted-foreground">
					Ready to deploy Sentra privately? Get in touch with our sales team to discuss your
					specific requirements and security needs.
				</p>
			</div>

			{#if formSubmitted}
				<div class="py-8 text-center">
					<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
						<svg
							class="text-primary-900 h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h3 class="text-title3 mb-2">Thank you for your interest!</h3>
					<p class="text-body text-muted-foreground">
						Our sales team will be in touch within 24 hours to discuss your private deployment
						needs.
					</p>
				</div>
			{:else}
				<form
					class="space-y-6"
					onsubmit={(e) => {
						e.preventDefault()
						handleContactSubmit()
					}}
				>
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div>
							<label for="firstName" class="text-caption mb-2 block font-medium">First Name</label>
							<input
								id="firstName"
								type="text"
								bind:value={firstName}
								required
								class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
								style="border-radius: var(--radius-md);"
								placeholder="John"
							/>
						</div>

						<div>
							<label for="lastName" class="text-caption mb-2 block font-medium">Last Name</label>
							<input
								id="lastName"
								type="text"
								bind:value={lastName}
								required
								class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
								style="border-radius: var(--radius-md);"
								placeholder="Doe"
							/>
						</div>
					</div>

					<div>
						<label for="contactEmail" class="text-caption mb-2 block font-medium">Work Email</label>
						<input
							id="contactEmail"
							type="email"
							bind:value={email}
							required
							class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
							style="border-radius: var(--radius-md);"
							placeholder="john@company.com"
						/>
					</div>

					<div>
						<label for="contactCompany" class="text-caption mb-2 block font-medium">Company</label>
						<input
							id="contactCompany"
							type="text"
							bind:value={company}
							required
							class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
							style="border-radius: var(--radius-md);"
							placeholder="Your Company"
						/>
					</div>

					<div>
						<label for="phone" class="text-caption mb-2 block font-medium">Phone (Optional)</label>
						<input
							id="phone"
							type="tel"
							bind:value={phone}
							class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
							style="border-radius: var(--radius-md);"
							placeholder="+1 (555) 123-4567"
						/>
					</div>

					<div>
						<label for="employees" class="text-caption mb-2 block font-medium">Company Size</label>
						<select
							id="employees"
							bind:value={employees}
							class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
							style="border-radius: var(--radius-md);"
						>
							<option value="">Select company size</option>
							<option value="1-10">1-10 employees</option>
							<option value="11-50">11-50 employees</option>
							<option value="51-200">51-200 employees</option>
							<option value="201-1000">201-1000 employees</option>
							<option value="1000+">1000+ employees</option>
						</select>
					</div>

					<div>
						<label for="message" class="text-caption mb-2 block font-medium"
							>Message (Optional)</label
						>
						<textarea
							id="message"
							bind:value={message}
							rows="4"
							class="border-border bg-background focus:ring-primary/20 focus:border-primary w-full resize-none border px-4 py-3 transition-colors focus:ring-2 focus:outline-none"
							style="border-radius: var(--radius-md);"
							placeholder="Tell us about your specific security requirements or any questions you have about private deployments..."
						></textarea>
					</div>

					<Button
						type="submit"
						size="lg"
						class="w-full"
						disabled={isSubmitting || !firstName || !lastName || !email || !company}
					>
						{#if isSubmitting}
							<svg class="mr-3 -ml-1 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Sending Message...
						{:else}
							Get Started with Private Deployment
						{/if}
					</Button>
				</form>
			{/if}
		</div>
	</section>

	<!-- Contact Section -->
	<section class="section-px section-py-sm">
		<div class="section-px mx-auto max-w-2xl max-w-6xl">
			<h2 class="text-title3 mb-4">Questions about our security practices?</h2>
			<p class="text-body text-muted-foreground mb-6">
				Our security team is here to help. Reach out with any questions about our compliance,
				security measures, or data protection practices.
			</p>
			<Button>Contact Security Team</Button>
		</div>
	</section>
</main>
