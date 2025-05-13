export const metadata = {
    title: 'Decorative Mirror Dealers & Suppliers in Noida, Delhi, Gurgaon | StarGlass',
    description:
      'Get the best Decorative Mirror Dealers and suppliers in Noida, Delhi, and Gurgaon. StarGlass is one of the best in the market and provides quality service. Call us at 9319412012.',
    alternates: {
      canonical: 'https://starglass.in/decorative-mirror',
    },
    openGraph: {
      title: 'Decorative Mirror Dealers & Suppliers in Noida, Delhi, Gurgaon | StarGlass',
      description:
        'Get the best Decorative Mirror Dealers and suppliers in Noida, Delhi, and Gurgaon. StarGlass is one of the best in the market and provides quality service. Call us at 9319412012.',
      url: 'https://starglass.in/decorative-mirror',
      siteName: 'StarGlass',
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Decorative Mirror Dealers & Suppliers in Noida, Delhi, Gurgaon | StarGlass',
      description:
        'Get the best Decorative Mirror Dealers and suppliers in Noida, Delhi, and Gurgaon. StarGlass is one of the best in the market and provides quality service. Call us at 9319412012.',
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

export default function DM() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `StarGlass is the top Decorative Mirror Dealer in Noida. Decorative Mirror refers to specially crafted Mirror products created for their visual appeal rather than practical use. Various techniques are employed to produce aesthetically pleasing Mirror pieces, such as stained glass, glass fusing, glass etching, and glass painting. These methods involve manipulating the glass through colouring, layering, carving, or adding decorative elements. The result is beautiful Mirror objects that increase the visual look and all surroundings.
Decorative Mirror enhances the aesthetics of homes, buildings, and automobiles. Stained glass windows, frosted glass panels, and textured glass inserts add visual interest and elegance. Mirror screens with various patterns, textures, and colours serve as room dividers. Decorative mirrors with unique glass designs, etching, and beveling create stunning focal points. Glass tabletops, cabinet doors, and shelving can be adorned with patterns, textures, or colours to complement furniture design.  Glass screens with patterns, textures, or colours serve both functional and aesthetic purposes.
StarGlass is one of the best Decorative Glass Suppliers in Noida. Our glass is attractive, durable, and cost-effective compared to alternative materials. Its resilience is clear in its resistance to scratches, stains, corrosion, fading, impacts, fire, water, and diverse weather conditions, making it a durable and secure choice. Treatments like tempering, laminating, or coating can further enhance its resilience and longevity.
Decorative glass offers endless possibilities in shape, size, colour, and design. It effortlessly pairs with materials like metal, wood, and stone, yielding unique aesthetics. It transforms walls, windows, doors, and furniture, offering artistic versatility in partitions, railings, ceilings, floors, and installations.`,
    }


    const productData = {
        title: "DECORATIVE MIRROR",
        subtitle:
            "StarGlass is a Decorative Mirror Dealer in Noida. The mirror is a product made of special design glass that is used for aesthetic rather than functional purposes and is referred to as a &quot;decorative Mirror.&quot; In order to produce pieces of Mirror that are appealing to the eye.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/decorative-mirror1.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "StarGlass is a Decorative Mirror Dealer in Noida. It is involved in incorporating various methods, including stained glass, glass fusing, glass etching, and glass painting. It helps decorate glass ornaments that are frequently utilised in art, interior design, and architecture.",
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
                url: "decorative-mirror",
                title: "Decorative Mirror",
            },
            {
                url: "toughened-glass",
                title: "Toughened Glass",
            },
            {
                url: "tinted-reflective-glass",
                title: "Tinted & Reflective Glass",
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
                url: "lacquered-glass",
                title: "Lacquered Glass",
            },
        ],
    }


    return (
        <>
            <div className="banner-top h-auto">
                <PageBanner
                    image="/images/decorative-mirror-Header.webp"
                    title="Decorative Mirror"
                    pageName="Decorative Mirror"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/decorative-mirror2.webp' />



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