export const metadata = {
    title: 'Glass Block Dealer, Manufacturer & Suppliers in Delhi NCR | StarGlass',
    description:
      'StarGlass is the best etching glass dealer in Delhi NCR, Noida, Gurgaon. We provide custom designs & quality with artistry. Call us at 9319412012.',
    alternates: {
      canonical: 'https://starglass.in/glass-block',
    },
    openGraph: {
      title: 'Glass Block Dealer, Manufacturer & Suppliers in Delhi NCR | StarGlass',
      description:
        'StarGlass is the best etching glass dealer in Delhi NCR, Noida, Gurgaon. We provide custom designs & quality with artistry. Call us at 9319412012.',
      url: 'https://starglass.in/glass-block',
      siteName: 'StarGlass',
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Glass Block Dealer, Manufacturer & Suppliers in Delhi NCR | StarGlass',
      description:
        'StarGlass is the best etching glass dealer in Delhi NCR, Noida, Gurgaon. We provide custom designs & quality with artistry. Call us at 9319412012.',
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

export default function GLB() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `

StarGlass is the Glass Block Manufacturer in Delhi NCR, Noida, Gurgaon. Glass blocks provides natural light and enhance architectural beauty, combining function and aesthetics in building designs. It's important to note that hollow glass blocks are not load-bearing unless specified. These blocks are manufactured in two separate halves, which are pressed together and annealed while the glass is still in a molten state. This process creates sturdy and visually appealing glass wall blocks.
The security of glass block windows varies based on your type. Standard glass blocks can be broken, but it requires breaking each block individually. Wire reinforcing is present, but it's not a significant deterrent. Metal straps secure glass block windows to the wall and offer better security, especially for larger windows. Solid glass block windows are very tough to break and are sometimes called "bulletproof." It can withstand multiple handgun shots and is comparable to the glass used in bank windows. It is resistance to high-power military rounds is unclear but is believed to be similar to bank window glass.

StarGlass provides the top Glass Block in Delhi NCR, Noida, Gurgaon. Choose glass partitions for abundant natural light, reducing reliance on artificial lighting and creating a cheerful, productive atmosphere. Enjoy a brighter, more inviting space that enhances mood and productivity. Opt for a bright, you can welcoming environment with us.

Opt for our glass blocks to ensure privacy without sacrificing natural light in your homes and offices. Our various designs let you choose how much privacy you want in your project, tailoring it to your needs. Choose us for versatile solutions that balance aesthetics and seclusion, meeting your unique needs effortlessly.



                                

                            
`,
    }


    const productData = {
        title: "GLASS BLOCK",
        subtitle:
            "Glass block, or glass brick, is a transparent building material for walls and partitions, offering both aesthetics and privacy in architectural design.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/glass-block2.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "StarGlass is the Glass Block Dealers in Delhi NCR, Noida, Gurgaon. The  Glass block replaces regular windows for privacy in bathrooms and as decorative walls in halls. It offers privacy without offering light.",
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
                    image="/images/glass-block-Header.webp"
                    title="Glass Block"
                    pageName="Glass Block"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/glass-block1.webp' />



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