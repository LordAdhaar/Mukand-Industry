import { Link } from 'react-router-dom';

const LinkGroup = ({ title, links }) => (
	<div>
		<h3 className="text-sm font-semibold text-gray-500 font-['Archivo'] leading-tight">
			{title}
		</h3>
		<ul className="mt-4 space-y-3">
			{links.map((link) => (
				<li key={link.name}>
					{link.href.startsWith('/') ? (
						<Link
							to={link.href}
							className="text-base text-gray-600 hover:text-gray-900 font-semibold font-['Source_Sans_3'] leading-normal inline-flex items-center gap-2"
						>
							{link.name}
							{link.new && (
								<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-2xl text-xs font-medium font-['Archivo'] mix-blend-multiply">
									New
								</span>
							)}
						</Link>
					) : (
						<a
							href={link.href}
							className="text-base text-gray-600 hover:text-gray-900 font-semibold font-['Source_Sans_3'] leading-normal inline-flex items-center gap-2"
						>
							{link.name}
							{link.new && (
								<span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-2xl text-xs font-medium font-['Archivo'] mix-blend-multiply">
									New
								</span>
							)}
						</a>
					)}
				</li>
			))}
		</ul>
	</div>
);

const XIcon = (props) => (
	<svg
		aria-hidden="true"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const LinkedInIcon = (props) => (
	<svg
		aria-hidden="true"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
	</svg>
);

const FacebookIcon = (props) => (
	<svg
		aria-hidden="true"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
	</svg>
);

const Footer = () => {
	const footerLinks = {
		product: [
			{ name: 'Laminated Rolls', href: '#' },
			{ name: 'Stretch Films', href: '#' },
			{ name: 'Paper Cores', href: '#', new: true },
			{ name: 'Download Brochure', href: '#' },
		],
		company: [
			{ name: 'About us', href: '#' },
			{ name: 'Leadership', href: '#' },
			{ name: 'Careers', href: '#' },
			{ name: 'News', href: '#' },
		],
		resources: [
			{ name: 'Factory Tour', href: '#' },
			{ name: 'Client Testimonials', href: '#' },
			{ name: 'FAQs', href: '/faq' },
			{ name: 'Contact Us', href: '/contact' },
		],
		certifications: [
			{ name: 'ISO 9001', href: '#' },
			{ name: 'BIS Approved', href: '#' },
			{ name: 'MSME Registered', href: '#' },
			{ name: 'GST Verified', href: '#' },
		],
	};

	const socialLinks = [
		{
			name: 'X',
			href: '#',
			icon: (props) => <XIcon {...props} />,
		},
		{
			name: 'LinkedIn',
			href: '#',
			icon: (props) => <LinkedInIcon {...props} />,
		},
		{
			name: 'Facebook',
			href: '#',
			icon: (props) => <FacebookIcon {...props} />,
		},
	];

	return (
		<footer className="bg-neutral-50 pt-16 pb-12">
			<div className="space-y-16">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
						<div className="col-span-1 md:col-span-3 lg:col-span-1">
							<Link to="/">
								<span className="text-slate-950 text-2xl font-bold font-['Space_Grotesk'] leading-normal">Mukund Industries</span>
							</Link>
							<p className="mt-8 text-gray-600 text-base font-normal font-['Source_Sans_3'] leading-normal">
								Packaging engineered for performance, trusted for over 20 years.
							</p>
						</div>
						<div className="col-span-1 md:col-span-3 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
							<LinkGroup title="Product" links={footerLinks.product} />
							<LinkGroup title="Company" links={footerLinks.company} />
							<LinkGroup title="Resources" links={footerLinks.resources} />
							<LinkGroup
								title="Certifications"
								links={footerLinks.certifications}
							/>
						</div>
					</div>
				</div>

				{/* Sub Footer Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-8">
						<p className="text-base text-gray-500 font-normal font-['Archivo'] leading-normal text-center sm:text-left">
							© 2025 Mukand Industries Pvt. Ltd. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									className="text-zinc-400 hover:text-zinc-500"
								>
									<span className="sr-only">{social.name}</span>
									<social.icon className="w-6 h-6" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
