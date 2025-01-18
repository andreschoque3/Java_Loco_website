import React, { useEffect } from 'react';
import './About.css'
import aboutm1 from './AboutImages/about-m1.jpg'
import aboutm2 from './AboutImages/about-m2.jpg'
import aboutm3 from './AboutImages/about-m3.jpg'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function About() {

    useEffect(() => {
        document.title = 'Java Loco - About';
    }, []);

    return (
    <div>
        <div class="about-header">
            <div class="container">
                <Navbar/>
                <div class="abt-header-text">
                <h1>Our Story</h1>
                </div>
            </div>
        </div>


            <div className="bio-container">
               <div className="container">
                    <div className="bio-box">
                        <h1 className="box-1">First Blend</h1>
                            <div className="box-content">
                                <img src={aboutm1} alt="A coffee cart on a quiet corner in 2003" />
                                <p>Java Loco started as a single coffee cart on a quiet corner in 2003, brewing just a few varieties of coffee
                                    sourced from a small, family-run 
                                    farm in Colombia. The goal was simple: to serve exceptional coffee and create a welcoming spot for coffee 
                                    lovers.</p>
                        </div>
                    </div>

                <hr className="line" />

                <div className="bio-box">
                    <h1 className="box-2">Present Chapter</h1>
                    <div className="box-content">
                        <img src={aboutm2} alt="One of Java Loco's locations" />
                        <p>Today, Java Loco has expanded to multiple locations across the city, each one preserving the charm and 
                            warmth of the original. With an experienced team of baristas and a constantly evolving menu, 
                            Java Loco continues to serve carefully crafted products.</p>
                    </div>
                </div>

                <hr className="line" />

                <div className="bio-box">
                    <h1 className="box-1">Next Steps</h1>
                    <div className="box-content">
                        <img src={aboutm3} alt="Java Loco plans for the future" />
                        <p>Looking to the future, Java Loco aims to deepen its roots in the community while exploring new ways to innovate. Plans are in motion to open a
                            few more locations, each with a slightly unique vibe to fit the neighborhood. Java Loco also hopes to launch a line of bottled cold brews 
                            and introduce virtual coffee-making classes to bring the Java Loco experience into homes.</p>
                    </div>
                </div>

                <hr className="line" />

                <div className="cta">
                    <p>Want to support us? Join our community today!</p>
                    <div className="btn-div">
                        {/* <Link to="/#contact" className="join-btn">Join Now</Link> */}
                    </div>
                </div>
               </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
