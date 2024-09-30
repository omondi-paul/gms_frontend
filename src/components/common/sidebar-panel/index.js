import MenuItems from "./MenuItems";

const SidebarPanel = () => {
  return (
    <div className="rightside-hidden-bar">
      <div className="hsidebar-header">
        <div
          className="sidebar-close-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <span className="far fa-times"></span>
        </div>
        <h4 className="title">Welcome to Our GMS</h4>
      </div>
      {/* End header */}

      <div className="hsidebar-content">
        <div className="hiddenbar_navbar_content">
          <div className="hiddenbar_navbar_menu">
            <MenuItems />
          </div>
          {/* End .hiddenbar_navbar_menu */}

         
        </div>
      </div>
    </div>
  );
};

export default SidebarPanel;
