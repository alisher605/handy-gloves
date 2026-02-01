import { Navbar } from "@/app/component/navBar";
import { Hero } from "@/app/component/hero";
import { Features } from "@/app/component/features";
import { Specs } from "@/app/component/specs";
import { Contact } from "@/app/component/contact";
import { Footer } from "@/app/component/footer";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main>
				<Hero />
				<Features />
				<Specs />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
