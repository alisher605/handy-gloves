"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hand, Wifi, Zap, Brain, Shield, Gauge } from "lucide-react";
import productGlove from "@/public/assets/product-glove.jpg";

const features = [
	{
		icon: Hand,
		title: "Minimal Movement Control",
		description:
			"Responds to subtle gestures and twitches, perfect for users with limited mobility.",
	},
	{
		icon: Wifi,
		title: "Wireless Connectivity",
		description:
			"Built-in Wi-Fi and Bluetooth for seamless connection to any device.",
	},
	{
		icon: Zap,
		title: "Ultra-Low Latency",
		description:
			"10ms response time ensures instant, natural-feeling digital control.",
	},
	{
		icon: Brain,
		title: "AI Tremor Filtering",
		description:
			"Hidden Markov model smooths involuntary tremors to prevent false triggers.",
	},
	{
		icon: Shield,
		title: "Personalized Calibration",
		description:
			"Adapts to each user's unique movement patterns for maximum accuracy.",
	},
	{
		icon: Gauge,
		title: "All-Day Battery",
		description:
			"Rechargeable Li-ion battery provides 12+ hours of continuous use.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

export const Features = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="features" className="section-padding relative overflow-hidden">
			{/* Background */}
			<div
				className="absolute top-0 right-0 w-125 h-125 rounded-full opacity-20"
				style={{ background: "var(--gradient-accent-glow)" }}
			/>

			<div className="container mx-auto relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-20"
				>
					<span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
						Features
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
						Technology That{" "}
						<span className="text-gradient-accent">Empowers</span>
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Every aspect of Handy is engineered with accessibility and
						independence in mind. From sensor accuracy to comfortable design.
					</p>
				</motion.div>

				{/* Features Grid with Image */}
				<div className="grid lg:grid-cols-3 gap-8 items-center">
					{/* Left Features */}
					<motion.div
						ref={ref}
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="space-y-6"
					>
						{features.slice(0, 3).map((feature) => (
							<motion.div
								key={feature.title}
								variants={itemVariants}
								className="glass-card p-6 hover-lift"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
										<feature.icon className="w-6 h-6 text-primary" />
									</div>
									<div>
										<h3 className="font-display font-semibold text-lg mb-2">
											{feature.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Center Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative hidden lg:block"
					>
						<div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-90" />
						<Image
							src={productGlove}
							alt="Handy Glove Features"
							className="relative z-10 w-full h-auto rounded-3xl"
						/>
					</motion.div>

					{/* Right Features */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="space-y-6"
					>
						{features.slice(3, 6).map((feature) => (
							<motion.div
								key={feature.title}
								variants={itemVariants}
								className="glass-card p-6 hover-lift"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
										<feature.icon className="w-6 h-6 text-accent" />
									</div>
									<div>
										<h3 className="font-display font-semibold text-lg mb-2">
											{feature.title}
										</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
