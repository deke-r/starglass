"use client";

import { useSpring, animated } from "@react-spring/web";
import { BadgeCheck, DollarSign, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const Stat = ({ icon, label, number, delay = 0 }) => {
  const [inView, setInView] = useState(false);

  const props = useSpring({
    from: { val: 0 },
    to: { val: inView ? number : 0 },
    config: { duration: 1000 },
    delay,
  });

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <div className="dedicated-logos text-center d-flex flex-column align-items-center">
      <div
        className="icon-circle d-flex align-items-center justify-content-center mb-2"
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
      >
        {icon}
      </div>
      <h3 className="text-white mb-0">{label}</h3>
      <animated.span style={{ color: "#fff", fontSize: 24, fontWeight: 600 }}>
        {props.val.to((val) => Math.floor(val))}
      </animated.span>
    </div>
  );
};

const DedicationSection = ({
  title = "Dedication through our work?",
  description = `Dedication, a vital aspect of worker engagement, signifies unwavering support and loyalty. In construction, dedicated employees are indispensable for a successful enterprise, alongside vigour and absorption. These three attributes drive excellence in our construction projects.`,
  image = "/images/Rectangle-20.webp",
  bgColor = "#174EC1",
}) => {
  return (
    <div className="container-fluid" style={{ background: bgColor }}>
      <div className="row">
        <div className="col-md-6 p-0">
          <img src={image} alt="Dedication visual" className="img-fluid w-100" />
        </div>
        <div className="col-md-6 py-5 px-4 d-flex align-items-center">
          <div className="dedicated text-white w-100">
            <h1 className="text-uppercase">{title}</h1>
            <p>{description}</p>
            <div className="d-flex justify-content-between mt-4 gap-3">
              <Stat icon={<BadgeCheck size={30} color="#174EC1" />} label="Professional" number={100} />
              <Stat icon={<DollarSign size={30} color="#174EC1" />} label="Low Prices" number={75} />
              <Stat icon={<Clock size={30} color="#174EC1" />} label="On Target" number={95} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicationSection;
