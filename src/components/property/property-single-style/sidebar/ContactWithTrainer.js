import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactWithTrainer = () => {
  return (
    <>
      <div className="trainer-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src="/images/team/trainer-1.png" // Update the image source as needed
            alt="trainer-avatar"
          />
        </div>
        <div className="single-content ml20 ml0-xs">
          <h6 className="title mb-1">Arlene McCoy</h6>
          <div className="trainer-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-call pe-1" />
              (920) 012-3421
            </a>
            <span className="text fz15 mx-2">|</span>
            <a className="text fz15" href="#">
              <i className="flaticon-envelope pe-1" />
              arlene.mccoy@example.com
            </a>
          </div>
          <Link
            href="/trainer-profile/3"
            className="text-decoration-underline fw600"
          >
            View Profile
          </Link>
        </div>
      </div>

      <div className="d-grid">
        <Link href="/contact-trainer/3" className="ud-btn btn-white2">
          Contact Trainer
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
    </>
  );
};

export default ContactWithTrainer;
