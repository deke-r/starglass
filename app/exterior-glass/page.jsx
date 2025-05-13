export const metadata = {
    title: 'Exterior Glass Dealers in Delhi NCR, Noida, Gurgaon | StarGlass',
    description:
      'Looking for the top Exterior Glass Dealers in Delhi NCR, Noida, Gurgaon? StarGlass is the best at selling glass for the outside of buildings. Call us at 9319412012.',
    alternates: {
      canonical: 'https://starglass.in/exterior-glass',
    },
    openGraph: {
      title: 'Exterior Glass Dealers in Delhi NCR, Noida, Gurgaon | StarGlass',
      description:
        'Looking for the top Exterior Glass Dealers in Delhi NCR, Noida, Gurgaon? StarGlass is the best at selling glass for the outside of buildings. Call us at 9319412012.',
      url: 'https://starglass.in/exterior-glass',
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
      title: 'Exterior Glass Dealers in Delhi NCR, Noida, Gurgaon | StarGlass',
      description:
        'Looking for the top Exterior Glass Dealers in Delhi NCR, Noida, Gurgaon? StarGlass is the best at selling glass for the outside of buildings. Call us at 9319412012.',
      images: ['/images/Star Glass Logo.webp'],
    },
  }
  


import FooterSupportBanner from "@/components/FooterSupportBanner";
import KnowOurWorkSection from "@/components/KnowOurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "../../components/Navbar";
import PageBanner from "@/components/PageBanner";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import { Lightbulb, Crown, BarChart3 } from "lucide-react"

export default function EG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `We are an Exterior Glass dealer in Noida. Exterior glass for commercial buildings and retail storefronts needs to offer both excellent performance and attractive aesthetics. Architects and designers have a range of glass options for facades, allowing them to optimise performance in areas such as thermal control, solar control, security, colour, and overall design, ensuring the building makes a visually appealing and functional statement.
At StarGlass, we specialize in providing expert guidance in choosing the right glass for architectural projects. When selecting glass, several variables should be considered and prioritized. These include performance factors such as thermal and solar control, security, acoustic insulation, and durability. Creativity is also important, as glass can enhance the entire design of a place.
We collaborate with architects and designers to align aesthetics and functionality. Through research on glass products and properties, we help clients make informed decisions, aiming for outstanding results that meet and surpass their expectations.
We provide top Exterior Glass in Noida. StarGlass offers exterior residential glass walls that offer a significant health benefit by allowing unobstructed natural light to flow into the interior of the building. This abundant natural light can positively impact mood, enhance productivity, and provide a sense of openness and connection to the outdoors, contributing to a healthier and more enjoyable living environment.`,
    }


    const productData = {
        title: "EXTERIOR GLASS",
        subtitle:
            "StarGlass is an exterior Glass manufacturer in Noida. Interior glazing refers to using glass elements, like windows and doors, within a building's structure. It allows for the installation of glass components from inside the building. This term is not limited to windows alone but includes any glass part of a building's facade.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/Exterior-30.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "Similarly, Glass serves various purposes in building structures, ranging from windows and doors to facades and conservatories. One might not pay much attention to this aspect unless involved in property design or construction. Let's explore the significance of glass in building design and renovation.",
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
                url: "exterior-glass",
                title: "Exterior Glass",
            },
            {
                url: "beveled-glass",
                title: "Beveled Glass",
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
                url: "staircase-railing",
                title: "Staircase Railing",
            },
            {
                url: "lacquered-glass",
                title: "Lacquered Glass",
            },
        ],
    }


    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/images/Exterior-Header.webp"
                    title="Exterior Glassworks"
                    pageName="Exterior Glassworks"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/etching-glass1.webp' />



            <TestimonialsSection />
            <KnowOurWorkSection
                backgroundColor="#174EC1"
                imageSrc="/images/Rectangle-25.webp"
                heading="WANTS TO KNOW OUR WORK ?"
                description={`At Glass Solutions, we bring decades of expertise to Specialty Painting and repairs. We've established trust with top Developers, Contractors, and Curtainwall professionals worldwide. We deliver quality, punctuality, and competitive pricing.\n\nOur experience spans public sector projects, including new construction and renovations. We're fully insured and qualified for Government Projects. Your go-to choice for dependable, skilled solutions.`}
                exploreLink="/about-us"
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