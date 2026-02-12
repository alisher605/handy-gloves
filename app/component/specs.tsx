"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import gloveInUse from "@/public/assets/glove-in-use.jpg";

const differentiators = [
	"Affordable: 100x cheaper than alternatives like NeuroNode ($16,000+)",
	"Accessible: Designed for users in developing countries",
	"Adaptive: Personalized calibration for each user",
	"Open-source firmware for community contributions",
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
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="absolute inset-0 bg-primary/10 blur-2xl rounded-3xl" />
						<Image
							src={gloveInUse}
							alt="Handy in use"
							className="relative z-10 w-full h-auto rounded-2xl"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="glass-card p-8"
					>
						<h3 className="font-display font-bold text-2xl mb-6">
							Why Handy is Different
						</h3>
						<ul className="space-y-3">
							{differentiators.map((point, index) => (
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
				</div>
			</div>
		</section>
	);
};
