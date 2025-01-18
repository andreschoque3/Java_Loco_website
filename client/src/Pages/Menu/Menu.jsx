import React, { useState,useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Menu.css";
import { useLocation } from "react-router-dom";

// Importing images
import tea1 from "./Images/tea-1.jpg";
import tea2 from "./Images/tea-2.png";
import tea3 from "./Images/tea-3.jpg";
import tea4 from "./Images/tea-4.jpg";

import coffee1 from "./Images/coffee-1.jpg";
import coffee2 from "./Images/coffee-2.jpg";
import coffee3 from "./Images/coffee-3.jpg";
import coffee4 from "./Images/coffee-4.jpeg";

import frappe1 from "./Images/frappe-1.jpg";
import frappe2 from "./Images/frappe-2.jpg";
import frappe3 from "./Images/frappe-3.jpg";
import frappe4 from "./Images/frappe-4.jpg";

import boba1 from "./Images/boba-1.jpg";
import boba2 from "./Images/boba-2.jpg";
import boba3 from "./Images/boba-3.jpg";
import boba4 from "./Images/boba-4.jpg";

import pastry1 from "./Images/pas-1.jpg";
import pastry2 from "./Images/pas-2.jpg";
import pastry3 from "./Images/pas-3.jpg";
import pastry4 from "./Images/pas-4.jpg";

import ghLogo from "./Images/gh-logo.png";
import ueLogo from "./Images/ue-logo.png";
import ddLogo from "./Images/dd-logo.jpg";

// Sample menu data
const menuData = [
  {
    section: "Tea",
    items: [
      { name: "Green Tea", image: tea1, calories: "0-2" },
      { name: "Black Tea", image: tea2, calories: "2-5" },
      { name: "Oolong Tea", image: tea3, calories: "4-15" },
      { name: "Chamomile Tea", image: tea4, calories: "1-3" },
    ],
  },
  {
    section: "Coffee",
    items: [
      { name: "Black Coffee", image: coffee1, calories: "2-5" },
      { name: "Latte", image: coffee2, calories: "170-220" },
      { name: "Cappuccino", image: coffee3, calories: "130-180" },
      { name: "Americano", image: coffee4, calories: "5-15" },
    ],
  },
  {
    section: "Frappe",
    items: [
      { name: "Mocha Frappe", image: frappe1, calories: "500-550" },
      { name: "Caramel Frappe", image: frappe2, calories: "480-530" },
      { name: "Vanilla Frappe", image: frappe3, calories: "450-500" },
      { name: "Chocolate Frappe", image: frappe4, calories: "510-560" },
    ],
  },
  {
    section: "Boba",
    items: [
      { name: "Classic Milk Tea", image: boba1, calories: "200-300" },
      { name: "Taro Milk Tea", image: boba2, calories: "250-350" },
      { name: "Matcha Milk Tea", image: boba3, calories: "350-400" },
      { name: "Brown Sugar Boba", image: boba4, calories: "420-480" },
    ],
  },
  {
    section: "Pastries",
    items: [
      { name: "Croissant", image: pastry1, calories: "260-300" },
      { name: "Muffin", image: pastry2, calories: "450-490" },
      { name: "Cookies", image: pastry3, calories: "300-450" },
      { name: "Macaroons", image: pastry4, calories: "330-380" },
    ],
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Tea");
  const location = useLocation();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    // Scroll to the top of the menu-section whenever the location changes
    if (location.hash === "#menu-section") {
      const element = document.getElementById("menu-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    document.title = 'Java Loco - Menu';
}, []);

  return (
    <div>
      {/* Header Section */}
      <div className="header-section">
        <div className="container">
          <Navbar />
          <div className="header-text">
            <h1>Check out our Menu</h1>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-section" id="menu-section">
        <div className="container">
          <h1>Menu</h1>

          {/* Tabs */}
          <div className="tab-titles">
            <ul>
              {menuData.map((section) => (
                <li
                  key={section.section}
                  className={`tab-links ${
                    activeTab === section.section ? "active-link" : ""
                  }`}
                  onClick={() => handleTabClick(section.section)}
                >
                  {section.section}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          {menuData.map(
            (section) =>
              activeTab === section.section && (
                <div
                  key={section.section}
                  className={`tab-contents ${
                    activeTab === section.section ? "active-tab" : ""
                  }`}
                  id={section.section}
                >
                  <div className="menu-body">
                    <div className="table-container">
                      <table>
                        <thead>
                          <tr>
                            <th>{section.section} Type</th>
                            <th></th>
                            <th className="cals">Calories</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <img
                                  src={item.image}
                                  alt={`${item.name} Image`}
                                />
                              </td>
                              <td>{item.name}</td>
                              <td className="cals">{item.calories}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* Mobile Section */}
      <div className="Mobile" id="mobile-section">
      <div className="container">
        <div className="delivery-header">
          <h1>Place a Mobile Order</h1>
          <div className="delivery">
            <div className="grub-hub">
              <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer">
                <img src={ghLogo} alt="Grubhub Logo" height="60px" width="120px" />
              </a>
            </div>
            <div className="uber-eats">
              <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">
                <img src={ueLogo} alt="Uber Eats Logo" height="60px" width="120px" />
              </a>
            </div>
            <div className="door-dash">
              <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer">
                <img src={ddLogo} alt="DoorDash Logo" height="60px" width="120px" />
              </a>
            </div>
          </div>
          <p>No delivery? No worries, go ahead and order for pickup!</p>
        </div>
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Menu;
