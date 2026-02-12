"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ name: "Home", href: "#hero" },
	{ name: "Features", href: "#features" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-background/80 backdrop-blur-xl border-b border-border/50"
					: "bg-transparent"
			}`}
		>
			<nav className="container mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<motion.a
					href="#hero"
					className="flex items-center gap-3 group"
					whileHover={{ scale: 1.02 }}
				>
					<div className="w-10 h-10 bg-primary/10 border border-primary/30 overflow-hidden flex items-center justify-center group-hover:bg-primary/20 transition-colors">
						<Image
							src="/logo.jpg"
							alt="Handy logo"
							width={40}
							height={40}
							priority
							className="h-10 w-10 object-cover"
						/>
					</div>
					<span className="font-display font-bold text-xl text-foreground">
						Handy
					</span>
				</motion.a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-muted-foreground hover:text-foreground transition-colors animated-underline font-medium"
						>
							{link.name}
						</a>
					))}
					<a href="#contact">
						<Button variant="glow" size="sm">
							Get Started
						</Button>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden p-2 text-foreground"
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
					>
						<div className="container mx-auto px-6 py-6 flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
								>
									{link.name}
								</a>
							))}
							<Button variant="glow" className="mt-2">
								Get Started
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};
