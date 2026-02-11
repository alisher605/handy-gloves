"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const faqs = [
	{
		question: "Who is Handy designed for?",
		answer:
			"Handy is designed for individuals with motor impairments, including those with cerebral palsy, post-stroke paralysis, muscular dystrophy, and other conditions that limit hand movement. It enables digital device control with minimal physical effort.",
	},
	{
		question: "How does the tremor filtering work?",
		answer:
			"We use a modified Hidden Markov Model (HMM) to analyze movement patterns in real-time. The AI distinguishes between intentional gestures and involuntary tremors, smoothing out unwanted movements to prevent false triggers while preserving intended actions.",
	},
	{
		question: "Is Handy compatible with my device?",
		answer:
			"Handy connects via Bluetooth and Wi-Fi, making it compatible with Windows, macOS, Linux, iOS, and Android devices. It emulates standard HID input (mouse/keyboard) for universal compatibility.",
	},
	{
		question: "How long does the battery last?",
		answer:
			"The rechargeable Li-ion battery provides 12+ hours of continuous use on a single charge. A full recharge takes approximately 2 hours via USB-C.",
	},
	{
		question: "Can Handy be customized for my specific needs?",
		answer:
			"Absolutely! Handy includes a calibration system that adapts to your unique movement patterns. The sensitivity, gesture mappings, and response thresholds can all be personalized through our companion app.",
	},
	{
		question: "What is the price and availability?",
		answer:
			"Handy is currently in prototype phase. The target retail price is around PKR 75,000 (approximately $250 USD), making it significantly more affordable than alternatives costing $16,000+. Join our waitlist for pre-order updates.",
	},
];

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			if (formRef.current) {
				const response = await emailjs.sendForm(
					"service_1bpa2yf",
					"template_uqmopxk",
					formRef.current,
					"XmCvWE5a8-e2SOh0Z",
				);

				if (response.status === 200) {
					toast.success(
						"Message sent successfully! We'll get back to you soon.",
						{ duration: 4000 },
					);
					setFormData({
						name: "",
						email: "",
						phone: "",
						subject: "",
						message: "",
					});
				}
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error("Failed to send message. Please try again.", {
				duration: 5000,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="section-padding relative overflow-hidden">
			{/* Background Effects */}
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full opacity-20"
				style={{ background: "var(--gradient-glow)" }}
			/>

			<div className="container mx-auto relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
						Get in Touch
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
						Let's <span className="text-gradient">Connect</span>
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Have questions about Handy? Want to partner with us or invest? We'd
						love to hear from you.
					</p>
				</motion.div>

				{/* Form + FAQs Grid */}
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="glass-card p-8">
							<h3 className="font-display font-bold text-2xl mb-6">
								Send Us a Message
							</h3>
							<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
								<div className="grid sm:grid-cols-2 gap-6">
									<div className="space-y-2">
										<Label htmlFor="name">Name</Label>
										<Input
											id="name"
											name="name"
											placeholder="Your name"
											value={formData.name}
											onChange={handleChange}
											required
											className="bg-muted/50 border-border/50 focus:border-primary"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="you@example.com"
											value={formData.email}
											onChange={handleChange}
											required
											autoComplete="email"
											className="bg-muted/50 border-border/50 focus:border-primary"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">Phone</Label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="+1 (555) 000-0000"
											value={formData.phone}
											onChange={handleChange}
											autoComplete="tel"
											className="bg-muted/50 border-border/50 focus:border-primary"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input
										id="subject"
										name="subject"
										placeholder="How can we help?"
										value={formData.subject}
										onChange={handleChange}
										required
										className="bg-muted/50 border-border/50 focus:border-primary"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Tell us more about your inquiry..."
										rows={5}
										value={formData.message}
										onChange={handleChange}
										required
										className="bg-muted/50 border-border/50 focus:border-primary resize-none"
									/>
								</div>

								<Button
									type="submit"
									variant="glow"
									size="lg"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										"Sending..."
									) : (
										<>
											Send Message
											<Send className="w-4 h-4 ml-2" />
										</>
									)}
								</Button>
							</form>
						</div>
					</motion.div>

					{/* FAQs */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="glass-card p-8">
							<h3 className="font-display font-bold text-2xl mb-6">
								Frequently Asked Questions
							</h3>
							<Accordion type="single" collapsible className="space-y-4">
								{faqs.map((faq, index) => (
									<AccordionItem
										key={index}
										value={`item-${index}`}
										className="border-b border-border/50 last:border-0"
									>
										<AccordionTrigger className="text-left hover:no-underline py-4 text-foreground font-medium">
											{faq.question}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
											{faq.answer}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
