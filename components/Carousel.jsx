'use client';

import '../styles/carousel.css';
import Link from 'next/link';

const slides = [
  {
    src: '/images/22.webp',
    title: 'Transform Your Space with Glass Brilliance',
    desc: 'Experience cutting-edge glass solutions that blend aesthetics with performance for modern architecture.',
    position: 'left', // left-aligned caption
  },
  {
    src: '/images/Rectangle-1.webp',
    title: 'Precision in Every Pane',
    desc: 'Delivering bespoke glass designs for commercial, residential, and industrial excellence.',
    position: 'right', // right-aligned caption
  },
];

const getPositionStyle = (position) => {
  const baseStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    padding: '40px 60px',
    maxWidth: '800px',
    borderRadius: '10px',
    zIndex:100
  };

  if (position === 'left') {
    return {
      ...baseStyle,
      left: '100px',
      right: 'auto',
      textAlign: 'left',
      alignItems: 'flex-start',
    };
  } else if (position === 'right') {
    return {
      ...baseStyle,
      right: '60px',
      left: 'auto',
      textAlign: 'left',
      alignItems: 'flex-start',
    };
  }
  return baseStyle;
};

const Carousel = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
          data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              data-bs-interval="4000"
              key={index}
              style={{ position: 'relative' }}
            >
              <img
                src={slide.src}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{
                  height: '100vh',
                  objectFit: 'cover',
                }}
              />

              <div
                className="carousel-caption d-flex flex-column"
                style={getPositionStyle(slide.position)}
              >
                <h1 className="carousel-text-title text-uppercase text-light fw-semibold" style={{ zIndex: 2 }}>
                  {slide.title}
                </h1>
                <p
                  className="carousel-text-desc text-uppercase text-light fw-semibold"
                  style={{ zIndex: 2 }}
                >
                  {slide.desc}
                </p>
                <Link href="/contact" className="text-decoration-none">
                  <div
                    className="carousel-text-button btn rounded-pill text-light mt-3"
                    style={{
                      border: '2px solid #174EC1',
                      zIndex: 2,
                      padding: '12px 40px',
                    }}
                  >
                    Get Started With StarGlass
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={{ zIndex: 2 }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={{ zIndex: 2 }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
