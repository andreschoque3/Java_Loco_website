import React from 'react';
import './Locations.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect } from 'react';

const Locations = () => {

    useEffect(() => {
        document.title = 'Java Loco - Location';
    }, []);
    return (
        <>
            <div className="locations-header">
                <div className="container">
                    <div>
                        <Navbar />
                    </div>
                    <div className="l-header-text">
                        <h1>Check our Locations</h1>
                    </div>
                </div>
            </div>

            <div className="middle-sect">
                <div className="container">
                    <h1 className="sub-head">Locations</h1>

                    <div className="location-container">
                        <div className="search-bar">
                            <span>Find the nearest location</span>
                            <input type="search" placeholder="Postal/Zip Code" />
                            <span>Distance</span>
                            <select>
                                <option value="5">5 mi</option>
                                <option value="10">10 mi</option>
                                <option value="20">15 mi</option>
                                <option value="20">20 mi</option>
                            </select>
                            <span>Results</span>
                            <select>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                            <button>Search</button>
                        </div>

                        <div className="map-integration">
                            <div className="side-bar">
                                <div className="bar">
                                    <div className="box-title">
                                        <i className="fa-solid fa-map-pin"></i><h2>Alexandria Location</h2>
                                    </div>
                                    <p>This cozy spot in historic Alexandria is a favorite for its warm
                                        atmosphere and patio seating overlooking the charming streets. 
                                        Ideal for a relaxing coffee break while exploring the city.</p>
                                </div>
                                <hr className="line-bar" />

                                <div className="bar">
                                    <div className="box-title">
                                        <i className="fa-solid fa-map-pin"></i><h2>Crystal City Location</h2>
                                    </div>
                                    <p>Perfect for commuters, our Crystal City shop offers quick service and 
                                        grab-and-go options, along with a comfy seating area for those taking a 
                                        breather from their busy day.</p>
                                </div>
                                <hr className="line-bar" />

                                <div className="bar">
                                    <div className="box-title">
                                        <i className="fa-solid fa-map-pin"></i><h2>Falls Church Location</h2>
                                    </div>
                                    <p>A neighborhood favorite, this Falls Church location offers a quiet space for work, study, or meeting 
                                        friends. Known for friendly service and specialty lattes.</p>
                                </div>
                                <hr className="line-bar" />

                                <div className="bar">
                                    <div className="box-title">
                                        <i className="fa-solid fa-map-pin"></i><h2>Arlington Location</h2>
                                    </div>
                                    <p>This modern Arlington spot emphasizes sustainability and features seasonal drinks, making it a popular choice for coffee lovers in the area.</p>
                                </div>
                                <hr className="line-bar" />
                            </div>
                            <div className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90121.44184982729!2d-77.15179818249982!3d38.73829887078298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7af92785c7185%3A0xca668c7542439ac2!2sJava%20Loco%20Coffee%20%26%20Bubble%20Tea%20-%20Mt%20Vernon!5e1!3m2!1sen!2sus!4v1724631601058!5m2!1sen!2sus"
                                    width="800"
                                    height="600"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Locations;
