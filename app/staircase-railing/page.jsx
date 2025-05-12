import FooterSupportBanner from "@/components/FooterSupportBanner";
import KnowOurWorkSection from "@/components/KnowOurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "../../components/Navbar";
import PageBanner from "@/components/PageBanner";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductSection from "@/components/ProductSection";
import { Lightbulb, Crown, BarChart3 } from "lucide-react"

export default function SR() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `We are a Staircase Glass Railing Dealers in Noida. In Noida, there are dealers who sell glass railings for staircases. These railings are made of toughened glass than regular glasses. We helped and secured with steel frames and bolts on the floor. If we are hit, the glass may crack but will not shatter or come loose.
A staircase glass railing is a system that uses round stainless steel cylinders called standoffs to secure the glass panels. The standoffs fasten the panels to the vertical surface of the stairs and floors. We make Staircase Glass Railings in Noida. We are a company specializing in the design and installation of strong oak mono-stringer staircases with glass board railings and oak handrails. Our Stalemate glass railing system utilizes round stainless steel deadlocks to secure the glass boards.
The glass panels are pre-drilled and levelled, and the deadlocks securely fasten them to the vertical structure of the staircase and floor. This frameless railing system requires minimal visible hardware. Please note that the decision to use this system should be made during the design phase to ensure adequate support for the glass.
Glass railings are used on balconies, terraces, and staircases to provide a look of safety and appeal. We are particularly safe for children as we lack gaps that could pose a risk. Glass railings offer a sleek and secure solution to barrier requirements.
Glass railings enhance safety and bring brightness to interior spaces. We absorb, refract, and transmit natural light, making rooms look more open. Glass is easy to maintain and creates a pleasing open-concept aesthetic in any setting.`,
    }


    const productData = {
        title: "STAIRCASE RAILING",
        subtitle:
            "StarGlass is a Staircase Glass Railing manufacturer in Noida.  Staircase glass railings and balustrades are made with tempered or toughened glass for enhanced safety and durability. We make this type of glass undergoes controlled thermal or all treatments and helps to increase the strength of regular glass.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/Staircases-30.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "Glass is a brilliant material to use in your home, as it can also provide you with a lot of new designs and possibilities to enhance the look and features of the building, as well as the office area, is some of the most used architectural features of a building to make it with the help of glass.",
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
                url: "staircase-railing",
                title: "Staircase Railing",
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
                    image="/images/Staircases-Header.webp"
                    title="Staircases Railing"
                    pageName="Staircases Railing"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/Staircases-37.webp' />



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