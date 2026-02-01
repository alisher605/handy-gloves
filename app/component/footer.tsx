"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
	{ icon: Twitter, href: "#", label: "Twitter" },
	{ icon: Linkedin, href: "#", label: "LinkedIn" },
	{ icon: Github, href: "#", label: "GitHub" },
	{ icon: Mail, href: "mailto:hello@handy.tech", label: "Email" },
];

const footerLinks = [
	{
		title: "Product",
		links: ["Features", "Specifications", "Pricing", "Roadmap"],
	},
	{
		title: "Company",
		links: ["About", "Team", "Careers", "Press"],
	},
	{
		title: "Resources",
		links: ["Documentation", "API", "Support", "Community"],
	},
	{
		title: "Legal",
		links: ["Privacy", "Terms", "License", "Accessibility"],
	},
];

export const Footer = () => {
	return (
		<footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
			<div className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-1">
						<motion.a
							href="#hero"
							className="flex items-center gap-2 group mb-4"
							whileHover={{ scale: 1.02 }}
						>
							<div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
								<span className="text-primary font-display font-bold text-lg">
									H
								</span>
							</div>
							<span className="font-display font-bold text-xl text-foreground">
								Handy
							</span>
						</motion.a>
						<p className="text-sm text-muted-foreground mb-6 leading-relaxed">
							Empowering independence through accessible assistive technology.
							Made with love in Pakistan.
						</p>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									aria-label={social.label}
									className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
								>
									<social.icon className="w-5 h-5" />
								</a>
							))}
						</div>
					</div>

					{/* Link Columns */}
					{footerLinks.map((column) => (
						<div key={column.title}>
							<h4 className="font-display font-semibold text-foreground mb-4">
								{column.title}
							</h4>
							<ul className="space-y-3">
								{column.links.map((link) => (
									<li key={link}>
										<a
											href="#"
											className="text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Handy Project. All rights reserved.
					</p>
					<p className="text-sm text-muted-foreground flex items-center gap-1">
						Made with <Heart className="w-4 h-4 text-primary" /> for
						accessibility
					</p>
				</div>
			</div>
		</footer>
	);
};
