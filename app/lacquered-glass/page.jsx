import FooterSupportBanner from "@/components/FooterSupportBanner";
import KnowOurWorkSection from "@/components/KnowOurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "../../components/Navbar";
import PageBanner from "@/components/PageBanner";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import { Lightbulb, Crown, BarChart3 } from "lucide-react"

export default function TRG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `StarGlass is a Lacquered Glass dealer in Delhi NCR, Noida, Gurgaon. Similarly, our lacquered glass manufacturing process ensures proper bonding and a smooth finish. The back-painted technique gives it an opaque, coloured appearance, enhancing the aesthetic brilliance of homes and offices. While commonly used for stylish interiors, glass can help you now be processed and acquire durable properties of offer both beauty and longevity.
We are a Lacquered Glass Dealers in Delhi NCR, Noida, Gurgaon. StarGlass helps make these Lacquered glass highly sustainable and we help to maintain clean environmental surroundings. Our back-painted glass manufacturing process adheres to strict regulations for formaldehyde and VOC control, prioritizing environmental conservation."Lacquered glass is fully recyclable, aligning with our sustainability commitment." Choose us for eco-friendly and compliant solutions.
StarGlass provides the Lacquered Glass in Delhi NCR, Noida, Gurgaon. Choose us for your frosted glass needs because we offer a wide range of benefits. Our exterior windows provide privacy without sacrificing natural light. Our decorative elements feature intricate designs and patterns, adding uniqueness to any space. Whether it's treated or manufactured as frosted glass, our products enhance aesthetics, privacy, and lighting in various settings. Trust us to deliver quality installing solutions that will help you meet your design and architectural requirements. Experience the difference with our reliable and versatile frosted glass options.`,
    }


    const productData = {
        title: "LACQUERED GLASS",
        subtitle:
            "Lacquered glass, or back-painted glass, is a decorative glass with a coloured coating on one surface. The coating is made of durable lacquer and baked in an oven.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/Lacquered-30.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "StarGlass is a lacquered glass manufacturer in Delhi NCR, Noida, Gurgaon. lacquered glass, which can be your solution for your place that helps to make or back-painted glass, features a colored, oven-baked, and durable coating on one side, providing opacity and aesthetic appeal.",
            features: [
                {
                  icon: <Lightbulb size={32} />,
                  title: "Innovative Ideas",
                },
                {
                  icon: <Crown size={32} />,
                  title: "Pixel Perfect Design",
                },
                {
                  icon: <BarChart3 size={32} />,
                  title: "Successful Strategy",
                },
              ],
        links: [
            {
                url: "lacquered-glass",
                title: "Lacquered Glass",
            },
            {
                url: "tinted-reflective-glass",
                title: "Tinted & Reflective Glass",
            },
            {
                url: "toughened-glass",
                title: "Toughened Glass",
            },
            {
                url: "beveled-glass",
                title: "Beveled Glass",
            },
            {
                url: "exterior-glass",
                title: "Exterior Glass",
            },
            {
                url: "staircase-railing",
                title: "Staircase Railing",
            },
       
        ],
    }


    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/images/Lacquered-Header.webp"
                    title="Lacquered Glass"
                    pageName="Lacquered Glass"
                />
                <Navbar />
            </div>



            <ProductSection
                title={productData.title}
                subtitle={productData.subtitle}
                description={productData.description}
                imageSrc={productData.imageSrc}
                features={productData.features}
                links={productData.links}
                solutionsTitle={productData.solutionsTitle}
                solutionsDescription={productData.solutionsDescription}
            />


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/Lacquered-37.webp' />



            <TestimonialsSection />
            <KnowOurWorkSection
                backgroundColor="#174EC1"
                imageSrc="/images/Rectangle-25.webp"
                heading="WANTS TO KNOW OUR WORK ?"
                description={`At Glass Solutions, we bring decades of expertise to Specialty Painting and repairs. We've established trust with top Developers, Contractors, and Curtainwall professionals worldwide. We deliver quality, punctuality, and competitive pricing.\n\nOur experience spans public sector projects, including new construction and renovations. We're fully insured and qualified for Government Projects. Your go-to choice for dependable, skilled solutions.`}
                exploreLink="/portfolio"
                exploreText="EXPLORE"
            />

            <FooterSupportBanner
                text="Always Ready to Help You 24/7"
                className="footer-top border-bottom-1 bg-light py-4"
                textAlign="text-center"
                headingTag="h2"
            />

        </>
    );
}