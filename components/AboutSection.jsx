import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="about-area pt-120 pb-120">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="about-us-wrap mr-20 d-flex">
              <div className="about-img-1">
                <Image
                  src="/images/Rectangle-40.webp"
                  alt="About Us"
                  className="img-fluid mt-100"
                  width={300}
                  height={400}
                />
              </div>
              <div>
                <Image
                  src="/images/Rectangle-41.webp"
                  alt="About Us"
                  className="img-fluid"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="tools-content ml-20">
              <h2>Welcome To Star Glass</h2>
              <p className="peragraph-blog">
                STAR Glass, since its inception in 2014 has developed a reputation as one stop solution for all Glass
                Needs. Based in Delhi, but with commissions that span the country, we have delivered 1000+ projects be
                it in Residential or Commercial Segment.
              </p>
              <p>
                STAR Glass is especially interested in projects that have unique aspect to them and are dedicated to
                providing sustainable and creative structural solutions to complicated problems. Explore their full
                Glass Solutions Portfolio to see how they put their design philosophy into practice.
              </p>
              <a className="text-light">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
