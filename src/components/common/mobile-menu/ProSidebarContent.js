import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const path = usePathname();  

  const mobileMenuItems = [
    { label: "Home", path: "/" },           
    { label: "Dashboard", path: "/dashboard" }, 
  ];

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => (
          item.path ? ( 
            <MenuItem
              key={index}
              component={
                <Link
                  className={item.path === path ? "active" : ""}
                  href={item.path}
                />
              }
            >
              {item.label}
            </MenuItem>
          ) : null 
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
