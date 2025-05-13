"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import axios from "axios"
import "../styles/contact.css"

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()

  useEffect(() => {
    document.querySelector(".contact-info-area")?.classList.add("animate-fade-in-left")
    document.querySelector(".contact-from")?.classList.add("animate-fade-in-right")

    document.querySelectorAll(".single-contact-info").forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animate-fade-in-up")
      }, 300 + index * 200)
    })
  }, [])

  const onSubmit = async (data) => {
    try {
      // Send form data to your backend endpoint
      const res = await axios.post("/api/contact-form-data", data)
      console.log("Form submitted successfully:", res.data)

      reset()
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <div className="container-fluid">
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="contact-info-area">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-desc">
                  Star Glass, since its inception in 2014 has developed a reputation as one stop solution for all Glass Needs.
                </p>
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-info-icon"><MapPin /></div>
                    <div className="contact-info-content">
                      <p>Plot No -281(F), Udyog kendra-1 Ecotech-3, Greater Noida- 201306.</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-info-icon"><Phone /></div>
                    <div className="contact-info-content"><p>+91-9319412012</p></div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-info-icon"><Mail /></div>
                    <div className="contact-info-content">
                      <p><a href="mailto:info@starglass.in">info@starglass.in</a></p>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src="/images/Star Glass Logo.webp"
                      alt="Star Glass"
                      width={200}
                      height={100}
                      className="img-fluid contact-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6">
              <div className="pl-85 form-container">
                <div className="contact-from w-100 contact-shadow">
                  {isSubmitSuccessful && (
                    <div className="alert alert-success">Your message has been sent successfully!</div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "error" : ""}
                      />
                      {errors.name && <span className="error-message">{errors.name.message}</span>}
                    </div>

                    <div className="form-group">
                      <input
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Email is invalid"
                          }
                        })}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>

                    <div className="form-group">
                      <input
                        placeholder="Phone Number"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: "Invalid phone number"
                          }
                        })}
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                    </div>

                    <div className="form-group">
                      <input
                        placeholder="Subject"
                        {...register("subject", { required: "Subject is required" })}
                        className={errors.subject ? "error" : ""}
                      />
                      {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                    </div>

                    <div className="form-group">
                      <textarea
                        placeholder="Your message"
                        {...register("message", { required: "Message is required" })}
                        className={errors.message ? "error" : ""}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className={`submit ${isSubmitting ? "submitting" : ""}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Loading..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
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
