import { pageItems } from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (pathname.includes("/home")) {
      setTopMenu("home");
    } else if (pathname.includes("/pages")) {
      setTopMenu("pages");
    }
  }, [pathname]);

  const handleActive = (link) => {
    return link.split("/")[1] === pathname.split("/")[1] ? "menuActive" : "";
  };

  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu === "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </a>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu === "pages" ? "title menuActive" : "title"}>
            Pages
          </span>
        </a>
        <ul className="sub-menu">
          {pageItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MainMenu;
