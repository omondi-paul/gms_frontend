import trainers from "@/data/trainers";
import Image from "next/image";
import React from "react";



const SingleTrainerCta = ({id}) => {

  const data = trainers.filter((elm) => elm.id == id)[0] || trainers[0];



  const trainerData = {
    name: data.name,
    company: "Modern House Real Estate",
    reviews: "5.0 • 49 Reviews",
    phone1: "+848 032 03 01",
    phone2: "+848 032 03 01",
    social: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-linkedin-in", link: "#" },
    ],
  };
  return (
    <>
      <div className="trainer-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            style={{borderRadius:'50%',objectFit:'cover'}}
            src={data.image}
            alt="trainers"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0">{trainerData.name}</h2>
          <p className="fz15">
            Company trainer at <b>{trainerData.company}</b>
          </p>
          <div className="trainer-meta mb15 d-md-flex align-items-center">
            <a className="text fz15 pe-2 bdrr1" href="#">
              <i className="fas fa-star fz10 review-color2 pr10" />
              {trainerData.reviews}
            </a>
            <a className="text fz15 pe-2 ps-2 bdrr1" href="#">
              <i className="flaticon-call pe-1" />
              {trainerData.phone1}
            </a>
            <a className="text fz15 ps-2" href="#">
              <i className="flaticon-smartphone pe-1" />
              {trainerData.phone2}
            </a>
          </div>
          <div className="trainer-social">
            {trainerData.social.map((socialItem, index) => (
              <a key={index} className="mr20" href={socialItem.link}>
                <i className={socialItem.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTrainerCta;
