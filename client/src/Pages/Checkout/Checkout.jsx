import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Checkout.css';
import sampleImage from './Images/selection-sample.jpg';
import { useEffect } from 'react';


function Checkout() {
  useEffect(() => {
    document.title = 'Java Loco - Checkout';
}, []);

  return (
    <div className="checkout-header">
      <div className="container">
        <div>
          <Navbar/>
        </div>
        <div className="ck-header-text">
          <h1>Checkout</h1>
        </div>
      </div>

      <div className="review-order-sect" id="review-order">
        <div className="container">
          <div className="ck-title">
            <h1>Review Order</h1>
          </div>

          <div className="two-boxes">
            <div className="img-container">
            <img src={sampleImage} alt="item-selected" />
            </div>

            <div className="item-container">
              <h2>Ice Tea</h2>

              <h3>Beverage</h3>

              <div className="size-select">
                <div className="sizes">
                  <p>Large</p>
                </div>
                <div className="sizes">
                  <p>Medium</p>
                </div>
                <div className="sizes">
                  <p>Small</p>
                </div>
              </div>

              <div className="items">
                <div className="item-1">
                  <p>$12</p>
                </div>

                <div className="item-2">
                  <button>Add to Cart</button>
                </div>
              </div>

              <div className="last">
                <div className="last-1">
                  <a href="#" className="pickup">Pick up</a>
                </div>

                <div className="last-2">
                  <label htmlFor="quantity">Quantity</label>
                  <select name="quantity" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-btns">
            <div className="c-o">
              <a className="complete-order">Complete Order</a>
            </div>

            <div className="c-s">
            <Link to="/Menu#menu-section" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Checkout