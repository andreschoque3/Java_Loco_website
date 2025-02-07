import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Join.css";
import landscape from './Images/join-landscape.jpg';

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, phone, street, city, state, zipcode } = formData;
  
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!phone || !/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (!street) {
      alert("Please enter your street address.");
      return;
    }
    if (!city) {
      alert("Please enter your city.");
      return;
    }
    if (!state) {
      alert("Please select your state.");
      return;
    }
    if (!zipcode || !/^\d{5}$/.test(zipcode)) {
      alert("Please enter a valid 5-digit zipcode.");
      return;
    }
  
    const apikey = process.env.REACT_APP_WEB3FORMS_API_KEY;
    if (!apikey) {
      toast.error("API key is missing. Check your .env file.");
      return;
    }
  
    // Prepare form data
    const formDataObj = new FormData();
    formDataObj.append("access_key", apikey);
    formDataObj.append("name", name);
    formDataObj.append("email", email);
    formDataObj.append("phone", phone);
    formDataObj.append("street", street);
    formDataObj.append("city", city);
    formDataObj.append("state", state);
    formDataObj.append("zipcode", zipcode);
  
    // Convert to JSON
    const json = JSON.stringify(Object.fromEntries(formDataObj));
    console.log("JSON Payload:", json);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await res.json();
  
      if (result.success) {
        console.log("Success:", result);
        toast.success("Message sent successfully!", {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: true,
        });
  
        // Reset form fields
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
          });
        }, 50);
      } else {
        console.error("Error:", result);
        toast.error(`Error sending message: ${result.message || "Unknown error"}`, {
          autoClose: 2000,
          pauseOnHover: false,
          closeOnClick: true,
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Network error, please try again later.");
    }
  };
  

  useEffect(() => {
    document.title = 'Java Loco - Join';
}, []);

  return (
  <div>
    <ToastContainer/>
    <div className="join-page">
      {/* Header Section */}
      <div className="header-section-join">
        <div className="container">
          <Navbar />
          <div className="header-text">
            <h1>Join Our Team!</h1>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-sect">
        <div className="container">
          <div className="why-join-flex">
            <div className="flex-join-text-col">
              <h1>Why Join Us?</h1>
              <p>
                Join our team at Java Loco and be part of a community that brews more than just coffee! We’re passionate about creating a welcoming atmosphere for our customers while fostering a supportive environment for our staff. As a team member, you’ll enhance your barista skills, connect with coffee lovers, and contribute to a vibrant local culture.
              </p>
            </div>
            <div className="flex-join-img-col">
              <img
                src={landscape}
                alt="flex-join landscape"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Join Form Section */}
      <div className="join-form-section">
        <div className="container">
          <h1>Team Form</h1>
          <div className="join-form">
            <form id="join-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                pattern="\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}"
                minLength="10"
                maxLength="12"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="street"
                value={formData.street}
                placeholder="Street-Add."
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="City"
                onChange={handleChange}
                required
              />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                 {/* List of 50 U.S. States */}
                 {[
                  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
                  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
                  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
                  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
                  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
                ].map(stateCode => (
                  <option key={stateCode} value={stateCode}>
                    {stateCode}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                pattern="\d{5}(-\d{4})?"
                maxLength="5"
                placeholder="Zipcode"
                onChange={handleChange}
                required
              />

              <div className="btn-align">
                <button type="submit" className="btn-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
  );
};

export default Join;