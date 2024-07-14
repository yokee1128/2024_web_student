import { Chip } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import SchoolInfo from "../atom/SchoolInfo";
import SideMenus from "../atom/SideMenus";

const Layout = () => {
  return (
      <div className="w-1/5 h-full flex flex-col bg-gray-50 m-4">
        <div className="w-full h-1/2 flex flex-col gap-4 p-4">
          <span className="h-1/4 text-4xl content-center text-center">
            OO SCHOOL
          </span>
          <SideMenus/>
        </div>
        <SchoolInfo />
        <Outlet />
      </div>
  );
};

export default Layout;
