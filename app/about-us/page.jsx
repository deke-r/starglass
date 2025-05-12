import AboutSection from "@/components/AboutSection";
import FooterSupportBanner from "@/components/FooterSupportBanner";
import FunfactSection from "@/components/FunfactSection";
import PageBanner from "@/components/PageBanner";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "../../components/Navbar";

export default function AboutUs() {
    return (
        <>



            <div className="banner-top h-auto">
                <PageBanner
                    image="/images/Rectangle-39.webp"
                    title="About Us"
                    pageName="About"
                />
                <Navbar />
            </div>






            <AboutSection />
            <FunfactSection />
            <ProjectsSection />


            <TestimonialsSection />

            <FooterSupportBanner
                text="Always Ready to Help You 24/7"
                className="footer-top border-bottom-1 bg-light py-4"
                textAlign="text-center"
                headingTag="h2"
            />


        </>

    );
}