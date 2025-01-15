import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import { EmployerItems } from "../utils/Items";


function EmployerLayout() {
  return (
    <>
      <div className="">
        <div className="flex flex-1">
          <div className="flex-none">
            <SideBar items={EmployerItems} />
          </div>
          <main className="flex-1  bg-gray-50 overflow-y-scroll h-screen dark:bg-[#1B2431] dark:text-white ">
            <div className="flex-none mb-5 bg-white">
              <Header />
            </div>
            <div className="p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default EmployerLayout;
