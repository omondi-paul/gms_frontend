import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import RegistrationForm from "@/components/pages/faq/RegistrationForm";

const register = () => {
  return (
    <>
      <DefaultHeader />
      <MobileMenu />
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Register as a Member</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-faq pb90 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-content">
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <RegistrationForm />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
      <CallToActions />
    </>
  );
};

export default register;
