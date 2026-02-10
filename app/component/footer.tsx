"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

const socialLinks = [
	{
		icon: Instagram,
		href: "https://www.instagram.com/handy.glove/",
		label: "Instagrm",
	},
	{ icon: Mail, href: "handy.wearables@gmail.com", label: "Email" },
];

const footerLinks = [
	{
		title: "Product",
		links: ["Features", "Specifications", "Pricing", "Roadmap"],
	},
];

export const Footer = () => {
	return (
		<footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
			<div className="container mx-auto px-6 py-16">
				<div className="flex flex-row justify-evenly md:justify-between">
					{/* Brand Column */}
					<div className="flex flex-col gap-4">
						<motion.a
							href="#hero"
							className="flex items-center gap-3"
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
						<p className="text-sm text-muted-foreground">
							Empowering independence through accessible assistive technology.
							Made with love in Pakistan.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h4 className="font-display font-semibold text-foreground mb-4">
							Socials
						</h4>
						<div className="flex flex-row gap-2">
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
