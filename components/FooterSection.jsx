import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Pinterest  } from "react-bootstrap-icons"
import '../styles/footer.css';

const FooterSection = () => {
  return (
    <footer className="footer-area theme-bg clear-fix">
      <div className="container">
        <div className="footer-middle pt-65">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-7">
              <div className="footer-widget mb-40">
                <Image src="/images/Star Glass Logo.webp" alt="Star Glass Logo" width={200} height={40} />
                <p className="mt-4 fw-semibold">
                  Starglass specializes in expert glass manufacturing, crafting high-quality products with precision,
                  durability, and a touch of elegance for your needs.
                </p>
                <div className="social-icons mt-4">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link href="https://www.facebook.com/people/StarGlass/100095301203665/" className="social-icon">
                        <Facebook className="social-icon-inner facebook-icon" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://www.instagram.com/starglassindia/" className="social-icon">
                        <Instagram className="social-icon-inner instagram-icon" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://x.com/StarGlass356522" className="social-icon">
                        <Twitter className="social-icon-inner twitter-icon" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://www.linkedin.com/company/starglassindia" className="social-icon">
                        <Linkedin className="social-icon-inner linkedin-icon" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://in.pinterest.com/starglassofficial/" className="social-icon">
                        <Pinterest  className="social-icon-inner youtube-icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-5">
              <div className="footer-widget mb-40">
                <div className="footer-title mb-20">
                  <h4 className="fw-semibold">Get In Touch</h4>
                </div>
                <div className="footer-cont-info">
                  <div className="single-footer-cont-info">
                    <div className="cont-info-icon">
                      <i className="ti-mobile" style={{ color: "black", fontSize: "20px" }}></i>
                    </div>
                    <div className="cont-info-content">
                      <p style={{ color: "black" }}>+91-9319412012</p>
                    </div>
                  </div>
                  <div className="single-footer-cont-info">
                    <div className="cont-info-icon">
                      <i className="ti-email" style={{ color: "black", fontSize: "20px" }}></i>
                    </div>
                    <div className="cont-info-content">
                      <p style={{ color: "black" }}>
                        <a style={{ color: "black" }} href="mailto:info@starglass.in">
                          info@starglass.in
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-footer-cont-info">
                    <div className="cont-info-icon">
                      <i className="ti-location-pin" style={{ color: "black", fontSize: "20px" }}></i>
                    </div>
                    <div className="cont-info-content">
                      <p style={{ color: "black" }}>
                        Plot No -281(F), Udyog kendra-1 Ecotech-3, Greater Noida- 201306.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-7">
              <div className="footer-widget mb-40">
                <div className="footer-title mb-20">
                  <h4 className="fw-semibold">Quick Link</h4>
                </div>
                <div className="faq-accordion element-mrg">
                  <div className="panel-group" id="accordion">
                    <ul className="list-unstyled">
                      <li className="mt-2">
                        <Link href="/about-us" style={{ color: "black", textDecoration: "none" }}>
                          About Us
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="" style={{ color: "black", textDecoration: "none" }}>
                          Services
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="" style={{ color: "black", textDecoration: "none" }}>
                          Blog
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="" style={{ color: "black", textDecoration: "none" }}>
                          Pricing
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/contact" style={{ color: "black", textDecoration: "none" }}>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-7">
              <div className="footer-widget mb-40">
                <div className="footer-title mb-20">
                  <h4 className="fw-semibold">Services</h4>
                </div>
                <div className="faq-accordion element-mrg">
                  <div className="panel-group" id="accordion">
                    <ul className="list-unstyled">
                      <li className="mt-2">
                        <Link href="/tinted-reflective-glass" style={{ color: "black", textDecoration: "none" }}>
                          Tinted &amp; Reflective Glass
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/toughened-glass" style={{ color: "black", textDecoration: "none" }}>
                          Toughened Glass
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/beveled-glass" style={{ color: "black", textDecoration: "none" }}>
                          Beveled Glass
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/exterior-glass" style={{ color: "black", textDecoration: "none" }}>
                          Exterior Glass
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/staircase-railing" style={{ color: "black", textDecoration: "none" }}>
                          Staircase Railing
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/lacquered-glass" style={{ color: "black", textDecoration: "none" }}>
                          Lacquered Glass
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25">
          <div className="row">
            <div className="col-12">
              <div className="copyright text-center">
                <p>
                  Copyright © <Link href="#">Starglass</Link>. All Right Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
