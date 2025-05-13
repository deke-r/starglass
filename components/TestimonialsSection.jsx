import Image from "next/image"

const TestimonialsSection = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="testimonial-area ptb-30">
            <div className="container">
              <div className="section-title-3 mb-40">
                <span>Testimonials</span>
                <h2>Clients Say</h2>
              </div>

              {/* Using a simpler approach with div elements instead of Carousel.Item */}
              <div id="testimonialCarousel" className="carousel slide testimonial-active-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-6 box animate fadeInLeft three">
                        <div className="sin-testimonial3">
                          <div className="client3-content">
                            <p>
                              "Exceptional quality, prompt delivery, and excellent customer service. Highly
                              recommended!"
                            </p>
                          </div>
                          <div className="client3-info">
                            <img src="/images/client-3.webp" alt="Client" width={60} height={60} />
                            <h5>Anet Growswood</h5>
                            <span>Customer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 box animate fadeInRight four">
                        <img
                          src="/images/Rectangle-20.webp"
                          alt="Testimonial"
                          className="img-fluid"
                          width={500}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="sin-testimonial3">
                          <div className="client3-content">
                            <p>
                              "Innovative designs, durable products, and competitive pricing. A top choice for glass
                              solutions."
                            </p>
                          </div>
                          <div className="client3-info">
                            <img src="/images/client-4.webp" alt="Client" width={60} height={60} />
                            <h5>Anet Growswood</h5>
                            <span>Customer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/images/Rectangle-20.webp"
                          alt="Testimonial"
                          className="img-fluid"
                          width={500}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="sin-testimonial3">
                          <div className="client3-content">
                            <p>
                              "Cutting-edge technology, precision craftsmanship, and eco-friendly practices. A standout
                              in the industry."
                            </p>
                          </div>
                          <div className="client3-info">
                            <img src="/images/client-3.webp" alt="Client" width={60} height={60} />
                            <h5>Anet Growswood</h5>
                            <span>Customer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/images/Rectangle-20.webp"
                          alt="Testimonial"
                          className="img-fluid"
                          width={500}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
