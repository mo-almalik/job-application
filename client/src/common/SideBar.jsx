import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SideBar({ items }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-full shadow-lg md:hidden"
      >
        {isSidebarOpen ? 'X' : '+'}
      </button>

      
      <div
        className={`fixed top-0 right-0 h-full bg-white  z-40 transition-all duration-300 transform ${
          isSidebarOpen ? 'translate-x-0 w-[250px]' : 'translate-x-full w-0 hidden'
        } md:relative md:translate-x-0 md:w-[250px] md:block`}
      >
        <div className="h-[60px] border-b-[1px] flex items-center px-5 font-bold text-lg">
          انطلاق
        </div>
        <div className="px-5 mt-3">
          <nav>
            <ul className="flex flex-col space-y-3 mt-5">
              {items.map((item, index) => (
                <li key={index}>
                  <NavLink
                  end={item.path === ''}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex p-3 text-sm items-center gap-x-3 font-medium rounded-md transition-all duration-200 ${
                        isActive
                          ? 'bg-primary-50 text-primary'
                          : 'text-gray-500 hover:bg-primary-50 hover:text-primary'
                      }`
                    }
                  >
                    {item.icon}
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

   
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}

export default SideBar;
