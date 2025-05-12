  export default function HowItWorksSection({ title, description,bgImage }) {
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      };
    return (
      <>
       <section className="how-work-head" style={sectionStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </section>
  
        <section>
          <div className="container" style={{ borderBottom: "1px solid #ccc", marginBottom: "40px" }}>
            <div className="row">
              <div className="col-md-12 how-work-p">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  