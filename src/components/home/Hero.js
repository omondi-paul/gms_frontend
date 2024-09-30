"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper"; 
import "swiper/swiper-bundle.css";
import Link from 'next/link';

const Hero = () => {
  const sliderItems = [
    {
      image: "/images/home/background1.jpg",
      title: (
        <>
          Achieve Your Best <br className="d-none d-lg-block" />
          Self Today!
        </>
      ),
      description:
        "Join our community and start your journey towards a healthier lifestyle.",
      location: "Available Worldwide",
      duration: "Duration: 30 mins",
      calories: "Calories Burned: 300",
      equipment: "Equipment Needed: None",
      price: "$19.99",
    },
    {
      image: "/images/home/background2.jpg",
      title: (
        <>
          Transform Your Body <br className="d-none d-lg-block" />
          With Expert Guidance!
        </>
      ),
      description:
        "Sign up for personalized training plans and nutritional advice.",
      location: "Join Us Online",
      duration: "Duration: 30 mins",
      calories: "Calories Burned: 300",
      equipment: "Equipment Needed: None",
      price: "$29.99",
    },
  ];

  return (
    <div className="hero-large-home9">
      <div className="rounded-arrow arrow-with-border d-flex flex-column d-position">
        <button className="hero9-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        <button className="hero9-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
      </div>

      <Swiper
        direction="vertical" 
        spaceBetween={0}
        slidesPerView={1}
        speed={1000} 
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        navigation={{
          nextEl: ".hero9-next__active",
          prevEl: ".hero9-prev__active",
        }}
        className="hero_9"
        style={{ height: "90vh" }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item" style={{ height: "100%" }}>
              <div
                className="slider-slide-item no-overlay"
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "100%",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-xl-5 mb20-md">
                      <h3 className="banner-title">{item.title}</h3>
                      <p className="banner-text text-white ff-heading">
                        {item.description}
                      </p>
                      <div className="slider-btn-block">
                        <Link
                          href="/join"
                          className="ud-btn banner-btn fw500 btn-thm mt10 mt0-xs"
                        >
                          Join Now
                          <i className="fal fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-sm-6 col-xl-4 offset-xl-3">
                      <div className="listing-style1 at-home9-hero banner-content">
                        <div className="list-content">
                          <div className="list-price bgc-thm">
                            {item.price} / <span>mo</span>
                          </div>
                          <h6 className="list-title">
                            <a href="page-property-single-v1.html">
                              {item.title}
                            </a>
                          </h6>
                          <p className="list-text">{item.location}</p>
                          <div className="list-meta d-flex align-items-center">
                            <span>{item.duration}</span>
                            <span>{item.calories}</span>
                            <span>{item.equipment}</span>
                          </div>
                          <hr className="mt-2 mb-2" />
                          <div className="list-meta2 d-flex justify-content-between align-items-center">
                            <span className="for-what">For Everyone</span>
                            <div className="icons d-flex align-items-center">
                              <a href="#">
                                <span className="flaticon-fullscreen" />
                              </a>
                              <a href="#">
                                <span className="flaticon-new-tab" />
                              </a>
                              <a href="#">
                                <span className="flaticon-like" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
