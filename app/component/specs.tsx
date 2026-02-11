"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Battery, Bluetooth, Activity, Weight, Clock } from "lucide-react";
import gloveInUse from "@/public/assets/glove-in-use.jpg";

const specs = [
	{
		icon: Cpu,
		label: "Processor",
		value: "ESP32-S3",
		detail: "Dual-core 240MHz",
	},
	{
		icon: Activity,
		label: "Motion Sensor",
		value: "MPU6050",
		detail: "6-axis IMU",
	},
	{
		icon: Bluetooth,
		label: "Connectivity",
		value: "Wi-Fi + BLE",
		detail: "802.11 b/g/n",
	},
	{
		icon: Battery,
		label: "Battery",
		value: "Li-ion 3.7V",
		detail: "12+ hours",
	},
	{
		icon: Weight,
		label: "Weight",
		value: "< 150g",
		detail: "Lightweight design",
	},
	{
		icon: Clock,
		label: "Response Time",
		value: "< 10ms",
		detail: "Ultra-low latency",
	},
];

const components = [
	{ name: "ESP32-S3 Module" },
	{ name: "MPU6050 IMU Sensor" },
	{ name: "Li-ion Battery + Charger" },
	{ name: "Flex Sensors (5x)" },
	{ name: "3D Printed Housing" },
	{ name: "Wiring & Connectors" },
];

export const Specs = () => {
	return (
		<section id="specs" className="section-padding relative overflow-hidden">
			{/* Background Effects */}
			<div
				className="absolute bottom-0 left-0 w-150 h-150 rounded-full opacity-20"
				style={{ background: "var(--gradient-glow)" }}
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
						Technical Specifications
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
						Built for <span className="text-gradient">Performance</span>
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Low-cost components engineered for maximum reliability and
						accessibility. Designed in Pakistan for the world.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
					{/* Specs Grid */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="grid grid-cols-2 gap-4">
							{specs.map((spec, index) => (
								<motion.div
									key={spec.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="glass-card p-5 hover-lift"
								>
									<div className="flex items-center gap-3 mb-3">
										<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
											<spec.icon className="w-5 h-5 text-primary" />
										</div>
										<span className="text-sm text-muted-foreground">
											{spec.label}
										</span>
									</div>
									<div className="font-display font-bold text-xl mb-1">
										{spec.value}
									</div>
									<div className="text-xs text-muted-foreground">
										{spec.detail}
									</div>
								</motion.div>
							))}
						</div>

						{/* Image Below Specs */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="mt-8 relative"
						>
							<div className="absolute inset-0 bg-primary/10 blur-2xl rounded-3xl" />
							<Image
								src={gloveInUse}
								alt="Handy in use"
								className="relative z-10 w-full h-auto rounded-2xl"
							/>
						</motion.div>
					</motion.div>

					{/* Components List */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="glass-card p-8">
							<h3 className="font-display font-bold text-2xl mb-6">
								Component Breakdown
							</h3>
							<div className="space-y-4">
								{components.map((component, index) => (
									<motion.div
										key={component.name}
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										className="py-3 border-b border-border/50 last:border-0"
									>
										<span className="text-foreground">{component.name}</span>
									</motion.div>
								))}
							</div>
						</div>

						{/* Key Differentiators */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="glass-card p-8 mt-6"
						>
							<h3 className="font-display font-bold text-xl mb-4">
								Why Handy is Different
							</h3>
							<ul className="space-y-3">
								{[
									"Affordable: 100x cheaper than alternatives like NeuroNode ($16,000+)",
									"Accessible: Designed for users in developing countries",
									"Adaptive: Personalized calibration for each user",
									"Open-source firmware for community contributions",
								].map((point, index) => (
									<li
										key={index}
										className="flex items-start gap-3 text-muted-foreground"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
										{point}
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
