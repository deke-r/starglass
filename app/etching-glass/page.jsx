import FooterSupportBanner from "@/components/FooterSupportBanner";
import KnowOurWorkSection from "@/components/KnowOurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "../../components/Navbar";
import PageBanner from "@/components/PageBanner";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import { Lightbulb, Crown, BarChart3 } from "lucide-react"

export default function BG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `
StarGlass is an Etching Glass dealer in Delhi NCR, Noida, Gurgaon. We know the technique of decorating glass by creating patterns and images on its surface. To protect glass, apply a coating (e.g., wax) and use an etching tool for selective removal. This process reveals the underlying glass. That helps to protect the functionality of the etching 

Similarly, Etching glass is done by hand or with stencils. After the design is etched onto the glass, the protective layer is removed, revealing the decorative pattern.

We are service provider of Etching Glass in Delhi NCR, Noida, Gurgaon. As an Etching Glass Dealer, we specialize in providing high-quality glass etching supplies and services. We provide etching products like creams, stencils, and tools for personalized glass decoration. For beginners or pros, we offer all the essentials to begin etching with confidence and success.

Moreover, our services also include custom etching for signage, business logos, and personalized gifts. With our expertise and good quality products, we aim to make your glass etching experience enjoyable and ensure that you achieve beautiful and professional results.

We are an Etching Glass in suppliers Delhi NCR, Noida, Gurgaon. Etching glass is a popular choice for various reasons. Firstly, it adds elegance and sophistication, enhancing visual appeal.

Secondly, etching offers privacy, obscuring views while permitting light. This dual benefit elevates spaces Additionally, etched designs can be customized to suit individual preferences, allowing for unique and personalized creations. 

Moreover, Etched glass endures, remaining beautiful over time. It's versatile, enhancing windows, doors, mirrors, and decor. Count on its durability for lasting elegance in various settings.

In our section, We're different, thanks to dedication, skills, and enthusiasm. Rely on us for better service and trustworthy results in our section.

                            
`,
    }


    const productData = {
        title: "ETCHING GLASS",
        subtitle:
            "Etching of glass is a decorative technique that involves using a sharp  object to create a design on the surface of the glass.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/etching-glass1.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "StarGlass is an Etching Glass Manufacturer in Delhi NCR, Noida, Gurgaon. Glass etching solution, such as etching cream, swiftly crafts enduring frosted designs on glass, like windows or glassware. This process is both appealing and safe for daily use.",
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
                url: "etching-glass",
                title: "Etching Glass",
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
                    image="/images/etching-glass-Header.webp"
                    title="Etching Glass"
                    pageName="Etching Glass"
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