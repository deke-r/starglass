import GlassDealerSection from "../components/GlassDealerSection";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Glass  Company | Glass Dealer in Noida, Delhi, and Gurgaon",
  description: "StarGlass is the leading glass dealer in Noida, Delhi, and Gurgaon. tinted, toughened, beveled, exterior, lacquered, bend, stained, etching. Call us at 9319412012",
};

export default function Page() {
  return (
    <>
      <div className="banner-top">
        <Carousel />
        <div className="video-overlay"></div>
        <Navbar />
      </div>


      <GlassDealerSection title='Glass Dealer in Noida, Delhi, Gurgaon' content='StarGlass is the leading glass dealer in Noida, Delhi, and Gurgaon. We offer various glass services. We provide tinted and reflective glass, toughened glass, beveled glass, exterior glass, staircase railing, lacquered glass, bend glass, stained glass, etching glass, decorative mirrors, glass blocks, and designer glass. These glasses are commonly used in modern construction for visually appealing doors, windows, partitions, curtain walls, and other applications.

At Glass Solutions, we specialize in repairing and repainting curtain walls, window walls, doors, and windows. Our expertise ensures that we can restore and blend any system to its original factory specifications, even for large construction projects.

With decades of experience, we take pride in finding efficient and cost-saving solutions for our clients. Acting as a mediator between installers, General Contractors, Architects, and Owners, we specialize in the commercial real estate sector. We create stunning spaces in luxury condos and retail parks, aiming for positive, eco-friendly, and functional investments that delight our clients.' />


      <div className="container cb mb-4">
        <div className="row">
          <div className="col-12">


            <div className="container py-3 cb-internal">
              <h1 className="f_50 fw-bold">09 +</h1>
              <p>YEARS EXPERIENCE</p>
              <h3>GET TO KNOW HOW WE SHAPE DREAMS<br /> WITH STUNNING GLASS CREATIONS</h3>  <br />
              <h4 className="f_18 fw-semibold">We are a Glass company in Noida. Choose StarGlass Company for all your glass needs. With 20+ years of knowledge, we excel at preparing trade glass solutions for homes and businesses. Our focus on quality, innovation, and customer satisfaction makes us stand out. At StarGlass Company, we prioritize precision and excellence. Our skilled craftsmen use avant technology to create glass products that surpass your expectations. From custom shower enclosures to energy-efficient windows, elegant mirrors, and intricate glass tabletops, we can bring your vision to reality. We use eco-friendly materials, affordable prices, and excellent service for a smooth project. Choose StarGlass Company for exceptional quality, eco-conscious practices, and a commitment to your satisfaction. Join our happy clientele who have participated in the polish and durability of our glass solutions. Let us bring your visions to life with the brilliance of glass.
                <br />
                Contact us to discover the premier choice for all your glass needs.
              </h4>
              <br />
              <Link href='/about' className="rounded-pill bg-b btn text-light f_15 px-3 py-2 fw-semibold"> Know More About Us</Link>
            </div>
          </div>
        </div>
      </div>



      <ServicesSection/>
      <TestimonialsSection/>
    
      

    </>
  );
}