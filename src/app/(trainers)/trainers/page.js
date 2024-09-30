import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import FilteringTrainer from "@/components/property/FilteringTrainer";
import React from "react";


const Trainers = () => {
  return (
    <>
      <DefaultHeader />
      <MobileMenu />
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Trainers</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilteringTrainer/>
    </>
  );
};

export default Trainers;
