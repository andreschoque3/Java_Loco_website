import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a>About</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Locations">Locations</a></li>
                <li><a href="/Checkout">Checkout</a></li>
                <li><a href="/#contact">Contact Us</a></li>
                <li><a href="/Join">Join Us</a></li>
                <a href="/Login" className='btn'>Login</a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar