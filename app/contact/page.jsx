export const metadata = {
    title: 'Contact us | Toughened, Stained, Bend Glass - Starglass',
    description:
      'Get in touch with StarGlass for your glass requirements. We provide toughened, stained, bend, lacquered, and decorative glass solutions in Noida, Delhi, and Gurgaon.',
    alternates: {
      canonical: 'https://starglass.in/contact',
    },
    openGraph: {
      title: 'Contact us | Toughened, Stained, Bend Glass - Starglass',
      description:
        'Get in touch with StarGlass for your glass requirements. We provide toughened, stained, bend, lacquered, and decorative glass solutions in Noida, Delhi, and Gurgaon.',
      url: 'https://starglass.in/contact',
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
      title: 'Contact us | Toughened, Stained, Bend Glass - Starglass',
      description:
        'Get in touch with StarGlass for your glass requirements. We provide toughened, stained, bend, lacquered, and decorative glass solutions in Noida, Delhi, and Gurgaon.',
      images: ['/images/Star Glass Logo.webp'],
    },
  }
  



import PageBanner from "@/components/PageBanner";
import ContactSection from "../../components/ContactSection";
import Navbar from '../../components/Navbar';

export default function Contact() {
    return (
        <>
         <div className="banner-top h-auto">
                <PageBanner
                    image="/images/contact.webp"
                    title="Contact"
                    pageName="Contact"
                />
                <Navbar />
            </div>
        <ContactSection/>
        </>
    );
}