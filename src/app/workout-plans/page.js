import React from "react";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import WorkOutFiltering from "@/components/workout_plans/WorkOutFiltering";

const GridFull3Col = () => {
  return (
    <>
      <DefaultHeader />
      <MobileMenu />
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Workout Plans</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Our Programs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkOutFiltering />
    </>
  );
};

export default GridFull3Col;
