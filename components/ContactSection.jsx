"use client"



import { useState, useEffect } from "react"
import Image from "next/image"
import "../styles/contact.css"



export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  useEffect(() => {
    // Add animation classes when component mounts
    const contactInfo = document.querySelector(".contact-info-area")
    const contactForm = document.querySelector(".contact-from")

    if (contactInfo) {
      contactInfo.classList.add("animate-fade-in-left")
    }

    if (contactForm) {
      contactForm.classList.add("animate-fade-in-right")
    }

    // Animate contact info items sequentially
    const infoItems = document.querySelectorAll(".single-contact-info")
    infoItems.forEach((item, index) => {
      setTimeout(
        () => {
          item.classList.add("animate-fade-in-up")
        },
        300 + index * 200,
      )
    })
  }, [])

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone number is invalid"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = () => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async () => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      try {
        // In a real application, you would send the form data to your API here
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitStatus("success")

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } catch (error) {
        setSubmitStatus("error")

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="contact-area pt-15">
      <div className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="contact-info-area">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-desc">
                  Star Glass, since its inception in 2014 has developed a reputation as one stop solution for all Glass
                  Needs.
                </p>
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-info-icon">
                      <i className="ti-location-pin"></i>
                    </div>
                    <div className="contact-info-content">
                      <p>Plot No -281(F), Udyog kendra-1 Ecotech-3, Greater Noida- 201306.</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-info-icon">
                      <i className="ti-mobile"></i>
                    </div>
                    <div className="contact-info-content">
                      <p>+91-9319412012</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-info-icon">
                      <i className="ti-email"></i>
                    </div>
                    <div className="contact-info-content">
                      <p>
                        <a href="mailto:info@starglass.in">info@starglass.in</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-image-container">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Star Glass"
                      width={400}
                      height={300}
                      className="img-fluid contact-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="pl-85 form-container">
                <div className="contact-from contact-shadow">
                  {submitStatus === "success" && (
                    <div className="alert alert-success">
                      Your message has been sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="alert alert-danger">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}

                  <form id="company_form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "error" : ""}
                      />
                      {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "error" : ""}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      id="appoint"
                      className={`submit ${isSubmitting ? "submitting" : ""}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <span className="spinner"></span> : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.9036615756714!2d77.32156952918064!3d28.5813321765788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce450b69f04d5%3A0x7c6b67089fa03164!2s17%2C%20Block%20A%2C%20Sector%204%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1664537899083!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
