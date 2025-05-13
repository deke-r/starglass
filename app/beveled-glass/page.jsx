export const metadata = {
    title: 'Beveled Glass Dealers & Traders in Delhi NCR, Noida, Gurgaon | StarGlass',
    description:
      'StarGlass is among the top Beveled Glass Dealers and traders in Delhi NCR, Noida, and Gurgaon. Make your space look better with fancy glasswork. Call us at 9319412012.',
    alternates: {
      canonical: 'https://starglass.in/beveled-glass',
    },
    openGraph: {
      title: 'Beveled Glass Dealers & Traders in Delhi NCR, Noida, Gurgaon | StarGlass',
      description:
        'StarGlass is among the top Beveled Glass Dealers and traders in Delhi NCR, Noida, and Gurgaon. Make your space look better with fancy glasswork. Call us at 9319412012.',
      url: 'https://starglass.in/beveled-glass',
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
      title: 'Beveled Glass Dealers & Traders in Delhi NCR, Noida, Gurgaon | StarGlass',
      description:
        'StarGlass is among the top Beveled Glass Dealers and traders in Delhi NCR, Noida, and Gurgaon. Make your space look better with fancy glasswork. Call us at 9319412012.',
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

export default function BVG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `StarGlass, a renowned glass company, brought innovation to Noida's architecture and design scene with bevel glass. This elegant beveled glass, celebrated for its refined angles and polished edges, became a hallmark of residential architecture.
StarGlass's bevelled glass production, while impressive, doesn't necessitate the high level of craftsmanship we possess. The initial steps involve the use of rotating stone or textured metal wheels, along with a sand and water slurry, to expertly shape each glass piece's edges. Our unique glass-making process takes it a step further by incorporating finer sand and polishing materials like lighting stone and ironic oxide. This meticulous approach ensures a flawless, brilliant finish that sets our glass apart in the world of design and architecture.
In Noida, we supply exceptional beveled glass. Our process has evolved with the use of plastic-based deburring wheels, ensuring modern precision. This contemporary approach results in unique, beautiful glass that adds substantial value to any property. The efficiency and accuracy of these state-of-the-art wheels guarantee impeccably smooth surfaces, elevating both refraction and the overall visual appeal of our bevelled glass products.
Our Noida-based bevelled glass services embrace modernity, employing plastic-based deburring wheels for precision and efficiency, creating beautiful glass that adds significant property value through enhanced visual appeal.
Choose us for your bevelled glass needs, as we offer an impeccable fusion of strength, sophistication, and opulent aesthetics. We excel in quality with advanced computerized beveling machines for precision. Our artisans hand-select and seal each piece, ensuring unrivalled excellence and setting us apart in craftsmanship.
Our beveled glass is carefully crafted to perfectly fit door or window openings, demanding finesse in its manufacturing. While it comes at a premium compared to regular float glass, it justifies its worth. The bevelled edge refracts light beautifully, casting a mesmerizing rainbow effect that elevates any space. Furthermore, its polished edges enhance safety by reducing the risk of injury. Trust us to provide the finest beveled glass, adding an exquisite touch of elegance and functionality to your surroundings.`,
    }


    const productData = {
        title: "BEVELED GLASS",
        subtitle:
            "Bevelled glass has angled edges that create a colourful and prism-like effect. It adds style and visual interest to windows, mirrors, and doors. adding style and uniqueness to interior decor.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/Rectangle 30.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "StarGlass is among the top Beveled Glass Dealers and traders in Delhi NCR, Noida, and Gurgaon. When it comes to renovating your home, choosing doors and windows may not sound exciting, but there are many options to consider. One interesting choice is beveled glass, which adds a touch of charm to your project elegantly without any problematic way",
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
                url: "exterior-glass",
                title: "Exterior Glass",
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
                    image="/images/Beveled-Header.webp"
                    title="Beveled Glass"
                    pageName="Beveled Glass"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/Rectangle-37.webp' />



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