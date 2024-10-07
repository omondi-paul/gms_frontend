import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");

  useEffect(() => {
    if (pathname.includes("/home")) {
      setTopMenu("home");
    }
    if (pathname.includes("/trainers")) {
      setTopMenu("trainers");
    }
  }, [pathname]);
  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <a className="list-item" href="#" onClick={() => (window.location.href = "/home")}>
          <span className={topMenu === "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </a>
      </li>

      <li className="megamenu_style dropitem">
        <a className="list-item" href="#" onClick={() => (window.location.href = "/trainers")}>
          <span className={topMenu === "trainers" ? "title menuActive" : "title"}>
            Trainers
          </span>
        </a>
      </li>


      <li className="megamenu_style dropitem">
        <a className="list-item" href="#" onClick={() => (window.location.href = "/workout-plans")}>
          <span className={topMenu === "workout-plans" ? "title menuActive" : "title"}>
            Workout Plans
          </span>
        </a>
      </li>
    </ul>
  );
};

export default MainMenu;
