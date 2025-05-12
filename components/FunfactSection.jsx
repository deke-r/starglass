"use client"

import { useEffect, useRef } from "react"
import { Trophy, MessageSquare, Settings, ThumbsUp } from "lucide-react"

export default function FunfactSection() {
  const countersInitialized = useRef(false)

  useEffect(() => {
    if (countersInitialized.current) return

    // Function to animate the counter
    const animateCounter = (element, target) => {
      let count = 0
      const duration = 2000 // Total animation duration (in milliseconds)
      const increment = target / (duration / 16) // Calculate increment to reach target in 2 seconds

      const timer = setInterval(() => {
        count += increment
        if (count >= target) {
          element.textContent = target.toString() // Set final value when animation ends
          clearInterval(timer)
        } else {
          element.textContent = Math.floor(count).toString() // Update value during animation
        }
      }, 16) // Update every 16ms (approximately 60fps)
    }

    // Intersection Observer to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersInitialized.current) {
            const counters = document.querySelectorAll(".count")
            counters.forEach((counter) => {
              const target = parseInt(counter.dataset.target || "0", 10)
              animateCounter(counter, target) // Trigger animation for each counter
            })
            countersInitialized.current = true // Prevent further animations after initial trigger
            observer.disconnect() // Stop observing once the section is in view
          }
        })
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    )

    // Start observing the section
    const section = document.querySelector(".funfact-area")
    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect() // Clean up observer when component unmounts
    }
  }, [])

  return (
    <div className="funfact-area pt-120 pb-90 gray-bg-4">
      <div className="container">
        <div className="row">
          {[
            { icon: <Trophy size={32} />, target: 372, label: "Completed Project" },
            { icon: <MessageSquare size={32} />, target: 220, label: "Positive Feedbacks" },
            { icon: <Settings size={32} />, target: 1741, label: "Excellent Customer Service" },
            { icon: <ThumbsUp size={32} />, target: 5000, label: "Happy Clients" },
          ].map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div className="single-count text-center mb-30">
                <div className="count-icon mb-2 text-light">{item.icon}</div>
                <div className="count-title">
                  <h2 className="count" data-target={item.target}>{item.target}</h2>
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
