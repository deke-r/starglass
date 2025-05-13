export const metadata = {
    title: 'About us | Toughened, Stained, Bend Glass - Starglass',
    description:
      'Learn about StarGlass – a trusted name in the glass industry offering toughened, stained, bend, lacquered, and decorative glass solutions across Noida, Delhi, and Gurgaon.',
    alternates: {
      canonical: 'https://starglass.in/about-us',
    },
    openGraph: {
      title: 'About us | Toughened, Stained, Bend Glass - Starglass',
      description:
        'Learn about StarGlass – a trusted name in the glass industry offering toughened, stained, bend, lacquered, and decorative glass solutions across Noida, Delhi, and Gurgaon.',
      url: 'https://starglass.in/about-us',
      siteName: 'StarGlass',
      type: 'website',
      locale: 'en_IN',
      images: [
        {
          url: '/images/Star Glass Logo.webp',
          alt: 'StarGlass Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About us | Toughened, Stained, Bend Glass - Starglass',
      description:
        'Learn about StarGlass – a trusted name in the glass industry offering toughened, stained, bend, lacquered, and decorative glass solutions across Noida, Delhi, and Gurgaon.',
      images: ['/images/Star Glass Logo.webp'],
    },
  }
  



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