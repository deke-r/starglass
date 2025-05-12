"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState([])

  const projects = [
    {
      id: 1,
      image: "/images/Rectangle-39.webp",
      title: "Tinted Glass Project",
      group: ["animal"],
    },
    {
      id: 2,
      image: "/images/Rectangle 46.webp",
      title: "Toughened Glass Project",
      group: ["city"],
    },
    {
      id: 3,
      image: "/images/Rectangle-40.webp",
      title: "Beveled Glass Project",
      group: ["nature"],
    },
    {
      id: 4,
      image: "/images/Rectangle-39.webp",
      title: "Tinted Glass Project 2",
      group: ["animal"],
    },
    {
      id: 5,
      image: "/images/Rectangle-41.webp",
      title: "Beveled Glass Project 2",
      group: ["nature"],
    },
  ]

  useEffect(() => {
    if (activeFilter === "all") {
      setVisibleProjects(projects)
    } else {
      setVisibleProjects(projects.filter((project) => project.group.includes(activeFilter)))
    }
  }, [activeFilter])

  return (
    <>
      <div className="container pt-50">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>WORK OF EXCELLENCE</p>
            <h1>RECENT PROJECTS</h1>
            <div className="services-list-about">
              <button className={activeFilter === "all" ? "active" : ""} onClick={() => setActiveFilter("all")}>
                All
              </button>
              <button className={activeFilter === "animal" ? "active" : ""} onClick={() => setActiveFilter("animal")}>
                Tinted &amp; Reflective Glass
              </button>
              <button className={activeFilter === "city" ? "active" : ""} onClick={() => setActiveFilter("city")}>
                Toughened Glass
              </button>
              <button className={activeFilter === "nature" ? "active" : ""} onClick={() => setActiveFilter("nature")}>
                Beveled Glass
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row my-shuffle-container">
          {visibleProjects.map((project) => (
            <div key={project.id} className="col-md-4 col-sm-6 picture-item mb-4">
              <div className="project-card position-relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "250px",
                    borderRadius: "8px",
                  }}
                />
                <div className="overlay fade-overlay d-flex flex-column justify-content-center align-items-center">
                  <p className="text-white fw-bold">{project.title}</p>
                  <a href="#" className="btn btn-light btn-sm mt-2">Know More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for overlay and fade */}
      <style jsx>{`
        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(23, 78, 193, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }

        .services-list-about button {
          margin: 0 5px;
          padding: 6px 12px;
          border: none;
          background: #f0f0f0;
          border-radius: 4px;
        }

        .services-list-about button.active {
          background: #174EC1;
          color: white;
        }
      `}</style>
    </>
  )
}
