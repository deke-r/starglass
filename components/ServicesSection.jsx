"use client"
import Image from "next/image"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap";
import '../styles/services.css';




const services = [
  {
    title: "Reflective Glass",
    description: "Glass with color or reflective coating for privacy.",
    link: "tinted-reflective-glass",
  },
  {
    title: "Toughened Glass",
    description: "Heat-treated glass for increased strength and safety.",
    link: "toughened-glass",
  },
  {
    title: "Beveled Glass",
    description: "Glass with angled edges for decorative purposes.",
    link: "beveled-glass",
  },
  {
    title: "Exterior Glass",
    description: "Glass designed for outdoor applications and durability.",
    link: "exterior-glass",
  },
  {
    title: "Staircase Railing",
    description: "Glass used in stair railings for safety and aesthetics.",
    link: "staircase-railing",
  },
  {
    title: "Lacquered Glass",
    description: "Glass with a protective colored coating.",
    link: "lacquered-glass",
  },
  {
    title: "Bend Glass",
    description: "Curved glass used for unique architectural designs.",
    link: "bend-glass",
  },
  {
    title: "Stained Glass",
    description: "Colored glass pieces assembled into artistic patterns.",
    link: "stained-glass",
  },
  {
    title: "Etching Glass",
    description: "Glass with designs created by removing material.",
    link: "etching-glass",
  },
  {
    title: "Decorative Mirror",
    description: "A mirror with decorative elements or unique framing.",
    link: "decorative-mirror",
  },
  {
    title: "Glass Block",
    description: "Hollow glass bricks used for light and privacy control",
    link: "glass-block",
  },
  {
    title: "Designer Glass",
    description: "Custom-designed glass for unique aesthetic purposes.",
    link: "designer-glass",
  },
]

export default function ServicesSection() {
  return (
    <div className="container-services ptb-50">
      <Container>
        <Row>
          <h1 className="services-heading">Our Services</h1>
          <Col md={9}>
            {/* First row of services */}
            <Row>
              {services.slice(0, 4).map((service, index) => (
                <Col md={3} key={`row1-${index}`}>
                  <Link href={service.link} className="card1">
                    <h3>{service.title}</h3>
                    <p className="small">{service.description}</p>
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>

            {/* Second row of services */}
            <Row>
              {services.slice(4, 8).map((service, index) => (
                <Col md={3} key={`row2-${index}`}>
                  <Link href={service.link} className="card1">
                    <h3>{service.title}</h3>
                    <p className="small">{service.description}</p>
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>

            {/* Third row of services */}
            <Row>
              {services.slice(8, 12).map((service, index) => (
                <Col md={3} key={`row3-${index}`}>
                  <Link href={service.link} className="card1">
                    <h3>{service.title}</h3>
                    <p className="small">{service.description}</p>
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={3} className="animate fadeInRight four">
            <Image
              src="/images/Rectangle-5.webp"
              alt="Services"
              className="img-fluid"
              width={300}
              height={600}
              style={{ height: "100%", width: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
