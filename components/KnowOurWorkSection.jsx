import Image from "next/image";
import Link from "next/link";

const KnowOurWorkSection = ({
  backgroundColor = "#174EC1",
  imageSrc = "/assets/img/Rectangle-25.png",
  heading = "WANTS TO KNOW OUR WORK ?",
  description = `At Glass Solutions, we bring decades of expertise to Specialty Painting and repairs. We've established trust with top Developers, Contractors, and Curtainwall professionals worldwide. We deliver quality, punctuality, and competitive pricing. 

Our experience spans public sector projects, including new construction and renovations. We're fully insured and qualified for Government Projects. Your go-to choice for dependable, skilled solutions.`,
  exploreLink = "/about-us",
  exploreText = "EXPLORE",
}) => {
  return (
    <div className="container my-4" style={{ background: backgroundColor }}>
      <div className="row">
        <div className="col-md-3 p-0">
          <Image
            src={imageSrc}
            alt="Work Preview"
            width={500}
            height={500}
            className="img-fluid w-100"
          />
        </div>
        <div className="col-md-9 d-flex align-items-center">
          <div className="p-4 text-light">
            <h1>{heading}</h1>
            <p style={{ whiteSpace: "pre-line" }}>{description}</p>
            <Link href={exploreLink} className="btn btn-light mt-3 rounded-0 fw-semibold">
              {exploreText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowOurWorkSection;
