export const metadata = {
    title: 'Toughened Glass Dealer in Delhi NCR, Noida, Gurgaon- StarGlass',
    description:
      'StarGlass is the leading toughened glass dealer in Noida - We provide high-quality glass solutions for residential and commercial needs. Call us at 9319412012.',
    alternates: {
      canonical: 'https://starglass.in/toughened-glass',
    },
    openGraph: {
      title: 'Toughened Glass Dealer in Delhi NCR, Noida, Gurgaon- StarGlass',
      description:
        'StarGlass is the leading toughened glass dealer in Noida - We provide high-quality glass solutions for residential and commercial needs. Call us at 9319412012.',
      url: 'https://starglass.in/toughened-glass',
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
      title: 'Toughened Glass Dealer in Delhi NCR, Noida, Gurgaon- StarGlass',
      description:
        'StarGlass is the leading toughened glass dealer in Noida - We provide high-quality glass solutions for residential and commercial needs. Call us at 9319412012.',
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

export default function TG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `Star Glass is a Toughened Glass in Noida. We are special in providing tough glass, which is strong and safe for construction. We make toughened glass by heating and cooling regular glass, making it four to five times stronger. It's super safe, breaking into small pieces to prevent injuries. By strengthing It can solidify heavy loads, impacts, and temperature changes without breaking, making it perfect for structural elements.
The quality for durability our toughened glass is resistant to scratches, weather conditions that work for UV radiation, and chemicals, ensuring longevity for performance. In thermal stability it can handle rapid temperature changes without breaking, making it suitable for areas with extreme climates. Following the energy efficiency of making the toughened glass helps our clients to improve thermal performance, reducing heating and cooling costs. It also helps in securing and providing a higher level of security and that helps combining with laminated. It helps reduce the noise between spaces, creating a calm environment.
At Star Glass, we offer toughened glass solutions that provide a crowd of benefits for your construction projects. With our focus on customers' projects and expertise in the field.
Firstly, our priority is to make design flexible by offering a good range of toughened glass options in a lot of shapes, sizes, and finishes. This allows you to create innovative and visually striking designs that meet your project requirements and architectural vision.
Choose us for reliable, strong, and safe toughened glass solutions that enhance safety, state-of-the-art energy efficiency, and durability. Trust our expertise for your construction needs!`,
    }


    const productData = {
        title: "TOUGHENED GLASS",
        subtitle:
            "Toughened glass, also known as tempered glass, is a type of safety glass that undergoes heat and treatment for increased strength, safety, and resistance to thermal stress and impact damage. It shatters into small, harmless pieces upon breakage",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/Rectangle-30.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "We make the Toughened glass stronger and stronger than regular glass. It's made by heating and cooling annealed glass. Use it instead of other materials for buildings. It's the toughest glass around. It can be used as a different to other building materials. It undergoes a thermal “toughening process”, which makes it stronger than any other glass.",
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
                    image="/images/Toughened-Header.webp"
                    title="Toughened Glass"
                    pageName="Toughened Glass"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/Toughened-37.webp' />



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