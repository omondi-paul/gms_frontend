import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import RegistrationMobileNav from "@/components/common/RegistrationMobileNav";
import AddPropertyTabContent from "@/components/property/dashboard/dashboard-add-property";

export const metadata = {
  title: "Dashboard Add Property || Homez - Real Estate NextJS Template",
};

const DashboardAddProperty = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-md">
          {/* <SidebarDashboard /> */}
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content property-page bgc-f7">
              <div className="row pb40 d-block d-lg-none">
                <div className="col-lg-12">
                  <RegistrationMobileNav />
                </div>
              </div>

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Add New Property</h2>
                    <p className="text">We are glad to see you again!</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 overflow-hidden position-relative">
                    <div className="navtab-style1">
                      <AddPropertyTabContent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAddProperty;
