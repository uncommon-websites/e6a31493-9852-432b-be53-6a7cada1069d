/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string
	href?: string
	image?: string
	target?: string
	showInNav?: boolean
	showInFooter?: boolean

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string
		description?: string
		target?: string
		showInNav?: boolean
		showInFooter?: boolean
	})[]
}

export const cta = {
	label: "Hire Sentra",
	href: "/"
}

export const navigation: NavItem[] = [
	{
		label: "Company",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "About",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Manifesto",
				href: "/manifesto",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Private Deployments",
				href: "/private-deployments",
				showInNav: true,
				showInFooter: true
			}
		]
	}
	// {
	// 	label: "Legal",
	// 	showInNav: false,
	// 	showInFooter: true,
	// 	children: [
	// 		{
	// 			label: "Privacy policy",
	// 			href: "/legal/privacy",
	// 			showInNav: false,
	// 			showInFooter: true
	// 		},
	// 		{
	// 			label: "Terms of service",
	// 			href: "/legal/terms",
	// 			showInNav: false,
	// 			showInFooter: true
	// 		}
	// 	]
	// }
	// {
	// 	label: "More",
	// 	showInNav: false,
	// 	showInFooter: true,
	// 	children: [
	// 		{
	// 			label: "Privacy",
	// 			href: "/legal/privacy",
	// 			showInNav: false,
	// 			showInFooter: true
	// 		},
	// 		{
	// 			label: "Terms",
	// 			href: "/legal/terms",
	// 			showInNav: false,
	// 			showInFooter: true
	// 		}
	// 		// Social media might be handled differently, not typically a nav item
	// 	]
	// }
]
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
