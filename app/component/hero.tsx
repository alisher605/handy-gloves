"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGlove from "@/public/assets/hero-glove.jpg";
import Image from "next/image";

export const Hero = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
		>
			{/* Background Effects */}
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<div
				className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full opacity-40"
				style={{ background: "var(--gradient-glow)" }}
			/>
			<div
				className="absolute bottom-0 right-0 w-150 h-150 rounded-full opacity-30"
				style={{ background: "var(--gradient-accent-glow)" }}
			/>

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-center lg:text-left"
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
						>
							<Sparkles className="w-4 h-4 text-primary" />
							<span className="text-sm font-medium text-primary">
								Assistive Technology Reimagined
							</span>
						</motion.div>

						{/* Heading */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
							Control Your <span className="text-gradient">Digital World</span>{" "}
							<br className="hidden sm:block" />
							With a Gesture
						</h1>

						{/* Description */}
						<p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
							Handy is a revolutionary ESP32-powered assistive glove that
							translates minimal hand movements into precise digital control.
							Empowering independence for individuals with motor impairments.
						</p>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<a href="#contact">
								<Button variant="glow" size="lg" className="group">
									Pre-Order Now
									<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</a>
						</div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
						>
							{[
								{ value: "10ms", label: "Latency" },
								{ value: "12h+", label: "Battery Life" },
								{ value: "99%", label: "Accuracy" },
							].map((stat) => (
								<div key={stat.label} className="text-center lg:text-left">
									<div className="text-2xl md:text-3xl font-display font-bold text-gradient">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground">
										{stat.label}
									</div>
								</div>
							))}
						</motion.div>
					</motion.div>

					{/* Right Content - Product Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative"
					>
						<div className="relative">
							{/* Glow Effect */}
							<div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />

							{/* Main Image */}
							<motion.div
								className="relative z-10 float-animation"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.5 }}
							>
								<Image
									src={heroGlove}
									alt="Handy Assistive Glove"
									className="w-full h-auto rounded-3xl shadow-2xl"
								/>

								{/* Floating Cards */}
								<motion.div
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 1 }}
									className="absolute -left-4 top-1/4 glass-card px-4 py-3"
								>
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
										<span className="text-sm font-medium">ESP32-S3 Active</span>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 1.2 }}
									className="absolute -right-4 bottom-1/4 glass-card px-4 py-3"
								>
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
										<span className="text-sm font-medium">
											Gesture Detected
										</span>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<div className="flex flex-col items-center gap-2 text-muted-foreground">
					<span className="text-xs uppercase tracking-widest">Scroll</span>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
					>
						<div className="w-1.5 h-3 rounded-full bg-primary" />
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};
