import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

function Sidebar() {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden md:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppe</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
