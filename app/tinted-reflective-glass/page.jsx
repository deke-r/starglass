export const metadata = {
    title: 'Tinted and Reflective Glass Manufacturer in Noida, Delhi NCR, Gurgaon',
    description:
      'Starglass is the best tinted and reflective glass manufacturer in Noida. We\'re known for quality and style. Request a quote and call us at 9319412012.',
    alternates: {
      canonical: 'https://starglass.in/tinted-reflective-glass',
    },
    openGraph: {
      title: 'Tinted and Reflective Glass Manufacturer in Noida, Delhi NCR, Gurgaon',
      description:
        'Starglass is the best tinted and reflective glass manufacturer in Noida. We\'re known for quality and style. Request a quote and call us at 9319412012.',
      url: 'https://starglass.in/tinted-reflective-glass',
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
      title: 'Tinted and Reflective Glass Manufacturer in Noida, Delhi NCR, Gurgaon',
      description:
        'Starglass is the best tinted and reflective glass manufacturer in Noida. We\'re known for quality and style. Request a quote and call us at 9319412012.',
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

export default function TRG() {
    const howItWorksData = {
        title: "HOW IT WORKS",
        description: `We are a Tinted and Reflective Glass Manufacturer in Noida. Our offer with Tinted and
        reflective glass is a special type of glass that helps in various benefits for your
        windows. with tinted and reflective glass for enhanced privacy, reduced heat and
        glare, and improved energy efficiency. you can be assured of an easy experience.StarGlass provides the best Tinted and Reflective Glass service in Noida. We're
        Star Glass, experts in tinted and reflective glass for homes and businesses. We
        think about your privacy, saving energy, and your comfort. Trust us for good
        solutions that make a difference! Tinted glass is created by Star Glass during the
        glass manufacturing process. It also helps our clients to block harmful UV rays,
        protecting their furniture and interiors from fading.In addition, we offer good installation services, that ensure your tinted or
        reflective glass is installed correctly. Our team will work to understand and know
        your requirements and provide fruitful solutions that align with your budget.
        Upgrade your windows with our tinted and reflective glass solutions and enjoy your
        privacy, less heat and glare, improved energy efficiency, and a more comfortable
        living or working space. Contact us today for a piece of advice and experience that
        will help you to get the benefits of tinted and reflective glass for yourself!`,
    }


    const productData = {
        title: "TINTED & REFLECTIVE GLASS",
        subtitle:
            "Tinted and reflective glass is designed to compliment a building guard and improve solar performance. Upgrade your place with Tinted Glass on your windows.",
        description:
            "Our premium glass solutions offer enhanced privacy, energy efficiency, and aesthetic appeal. We provide customized solutions tailored to your specific requirements and budget constraints.",
        imageSrc: "/images/TINTED_REFLECTIVE_GLASS.webp",
        solutionsTitle: "OUR SOLUTIONS",
        solutionsDescription:
            "Tinted and Reflective Glass Manufacturer in Noida. If you are looking for bring-to-an-end solutions. Make the right choice of making and taking delivery of the product. Then you are at the right place. With our large suite of products and solutions.",
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
                    image="/images/tinted-head.webp"
                    title="Tinted & Reflective Glass"
                    pageName="Tinted & Reflective Glass"
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


            <HowItWorksSection title={howItWorksData.title} description={howItWorksData.description} bgImage='/images/how-work-head.webp' />



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