export const metadata = {
    title: 'Designer Glass Dealers in Delhi NCR, Noida, Gurgaon | StarGlass',
    description:
      'Looking for a Designer Glass manufacturer in Noida, Delhi NCR, Gurgaon? StarGlass provides the best possible services with quality. Call us at 9319412012 for quotes.',
    alternates: {
      canonical: 'https://starglass.in/designer-glass',
    },
    openGraph: {
      title: 'Designer Glass Dealers in Delhi NCR, Noida, Gurgaon | StarGlass',
      description:
        'Looking for a Designer Glass manufacturer in Noida, Delhi NCR, Gurgaon? StarGlass provides the best possible services with quality. Call us at 9319412012 for quotes.',
      url: 'https://starglass.in/designer-glass',
      siteName: 'StarGlass',
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Designer Glass Dealers in Delhi NCR, Noida, Gurgaon | StarGlass',
      description:
        'Looking for a Designer Glass manufacturer in Noida, Delhi NCR, Gurgaon? StarGlass provides the best possible services with quality. Call us at 9319412012 for quotes.',
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

export default function DG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `

StarGlass is a Designer Glass Dealers in Noida. Decorative glass enhances architecture and interior design. Coloured or stained glass adds colour and patterns, while textured or frosted glass provides privacy and unique lighting effects. It can be used for partitions, screens, doors, and windows, transforming spaces with visual appeal and functional beauty, by elevating your design with our versatile decorative glass solutions.

Skilled artisans or glass manufacturers can make decorative glass. We shape and manipulate designer glass using techniques like blowing, casting or slumping. Our artisans may use tools to cut, etch, or engrave patterns on the glass surface. In the case of jewellery, glass beads or pendants are often handcrafted and incorporated into designs.


Lighting fixtures and furniture with decorative glass are typically produced by specialized manufacturers or designers who combine glass with other materials like metal or wood. We make these products and sell them to retailers or designers to individuals or businesses seeking unique and stylish decorative pieces.



We are a service provider of Designer Glass in Noida. Choose us for designer glasses because we offer superior quality materials, a wide range of glass options, and reliable warranties. Our glasses are made to a higher standard, ensuring durability and style. With us, you can trust that you'll receive the best in terms of customer protection for your decorative needs.

Overall, we offer decorative glass that is a versatile and visually unique material that helps you to choose and can be used in a wide range of applications to increase the beauty and functionality of a space.


                            
`,
    }


    const productData = {
        title: "DESIGNER GLASS",
        subtitle:
            "StarGlass is a Designer Glass manufacturer in Noida. It is a decorative glass used as an insert in panels for doors and cabinets. It is used for decorative panels in doors and cabinets to create a framed appearance.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/designer-glass1.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "The Designer glass is a decorative insert in doors/cabinets for good solution devor. It helps to clear glass with slanted edges creating a framed design appearance.",
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
                url: "glass-block",
                title: "Glass Block",
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
                    image="/images/designer-glass-Header.webp"
                    title="Designer Glass"
                    pageName="Designer Glass"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/designer-glass2.webp' />



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