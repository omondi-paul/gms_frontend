import MobileMenu from "@/components/common/mobile-menu";
import WorkoutPlanDetails from "@/components/property/property-single-style/common/WorkoutPlanDetails";
import WorkOutPlanVideo from "@/components/property/property-single-style/common/WorkOutPlanVideo";
import WorkOutDescriptions from "@/components/property/property-single-style/common/WokOutDescriptions";
import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
import AllReviews from "@/components/property/property-single-style/common/reviews";
import ContactWithTrainer from "@/components/property/property-single-style/sidebar/ContactWithTrainer";
import WorkOutGallery from "@/components/single-v4/workout-gallery";
import DefaultHeader from "@/components/common/DefaultHeader";

const SingleV4 = ({params}) => {
  return (
    <>
     <DefaultHeader />
      <MobileMenu />
      <section className="pt20 pb60 bgc-white">
        <WorkOutGallery id={params.id} />
      </section>
      <section className="pt0 pb90 bgc-white">
        <div className="container">

          <div className="row wrap">
            <div className="col-lg-8">
            
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Workout Plan Description</h4>
                <WorkOutDescriptions />

                <h4 className="title fz17 mb30 mt50">Workout Plan Details</h4>
                <div className="row">
                  <WorkoutPlanDetails />
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                <h4 className="title fz17 mb30">Workout Video</h4>
                <div className="row">
                  <WorkOutPlanVideo />
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <AllReviews />
                </div>
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Leave A Review</h4>
                <div className="row">
                  <ReviewBoxForm />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="column">

                <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                  <div className="widget-wrapper mb-0">
                    <h6 className="title fz17 mb30">Contact A Trainer</h6>
                    <ContactWithTrainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleV4;
