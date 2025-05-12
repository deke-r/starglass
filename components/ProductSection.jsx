"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"



export default function ProductSection({
  title,
  subtitle,
  description,
  imageSrc,
  features,
  links,
  solutionsTitle,
  solutionsDescription,
}) {
  const animatedRef = useRef(false)

  useEffect(() => {
    if (animatedRef.current) return

    // Simple animation for the title
    const animateTitle = () => {
      const titleElement = document.querySelector(".text-animate-1 h1")
      if (titleElement) {
        titleElement.classList.add("animated")
        animatedRef.current = true
      }
    }

    // Animate when the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(animateTitle, 300)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.querySelector(".con-tinted")
    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="container con-tinted ptb-50">
      <div className="row">
        <div className="col-lg-7 col-md-6 col-sm-6 col-12">
          <div className="slider-text-3">
            <div className="slider-img slider-img-position">
              <img src={imageSrc} alt={title}  className="img-fluid" />
            </div>
            <h1 className="text-animate-1">
              <span>{title}</span>
            </h1>
            <p className="text-animate-1">
              <span>{subtitle}</span>
            </p>
          </div>
          <div className="about-text">
            <div className="section-title-2">
              <h2>{solutionsTitle}</h2>
            </div>
            <p>{solutionsDescription}</p>
          </div>
          <div className="d-flex">
          {features.map((feature, index) => (
  <div key={index} className="about-feature text-center mb-30">
    {feature.icon}
    <h5>{feature.title}</h5>
  </div>
))}

          </div>
        </div>

        <div className="col-lg-5 col-md-6 col-sm-6 col-12">
          <div className="services-list">
            {links.map((link, index) => (
              <li key={index} className={index === 0 ? "services" : ""}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </div>

          {/* Description text instead of contact form */}
          <div className="service-description mt-4 p-4 bg-light rounded">
            <h4>Why Choose Our Glass Solutions?</h4>
            <p>{description}</p>
            <div className="mt-3">
              <a href="#" className="btn bg-b text-light">
                Learn More About Starglass
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
