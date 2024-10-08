// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import {
  BiHomeAlt,
  BiUser,
  BiListUl
} from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiWallet } from "react-icons/pi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import Home from "../Home";
import Dashboard from "../Home";
import Pembayaran from "../Pembayaran";
import DataPembayaran from "../DataPembayaran";
import Keuangan from "../Keuangan";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <BiHomeAlt /> },
    { name: "Pembayaran", icon: <BiListUl /> },
    { name: "Data Siswa", icon: <BiListUl /> },
    { name: "Contacts", icon: <BiUser /> },
    { name: "Keuangan", icon: <PiWallet /> },
    { name: "Pengaturan", icon: <IoSettingsOutline /> },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Home":
        return <Home />;
      case "Dashboard":
        return <Dashboard />;
      case "Pembayaran":
        return <Pembayaran />;
      case "Data Siswa":
        return <DataPembayaran />;
      case "Contacts":
        return <div>Contacts Content</div>;
      case "Keuangan":
        return <Keuangan />;
    }
  };

  return (
    <div className="flex">
      <div className="h-screen border-r border-gray-200 w-64 px-9 space-y-24">
        {/* Logo Section */}
        <div className="flex flex-row items-center pt-8">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <div className="ml-3 text-gray-700">Infaq Shodaqoh</div>
        </div>

        {/* Menu Section */}
        <div className="space-y-24">
          <div>
            <div className="mb-4 text-blue-600">Menu</div>
            <ul className="space-y-7">
              {menu.map((val, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (val.name === "Pengaturan") {
                      setIsSettingsOpen(!isSettingsOpen); // Only toggle dropdown for Pengaturan
                    } else {
                      setActiveMenu(val.name);
                      setIsSettingsOpen(false); // Close Pengaturan dropdown if another menu is clicked
                    }
                  }}
                  className={`flex flex-row items-center text-gray-600 cursor-pointer px-4 py-2 rounded-lg ${
                    activeMenu === val.name ? "bg-blue-100 text-blue-600" : ""
                  }`}
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                  {val.name === "Pengaturan" && (
                    <div className="ml-auto">
                      {isSettingsOpen ? <MdExpandLess /> : <MdExpandMore />}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Pengaturan Dropdown with Card */}
            {isSettingsOpen && (
              <div className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="text-gray-700 font-semibold mb-2">Admin Profile</div>
                <div className="text-gray-600">
                  <p><span className="font-medium">Name:</span> John Doe</p>
                  <p><span className="font-medium">Email:</span> admin@example.com</p>
                </div>
                <button className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 bg-white">{renderContent()}</div>
    </div>
  );
}
