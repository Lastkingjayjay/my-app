import React from 'react'

const Footer = () => {
  return (
    <>
         <footer>
            <div className="container grid1">
                <div className="box">
                    <img src="./assets/logo1.png" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="socialIcon">
                    <i className="fab fa-facebook-f "></i>
                    <i className="fab fa-instagram "></i>
                    <i className="fab fa-twitter "></i>
                    <i className="fab fa-youtube "></i>
                     <i className="fab fa-pinterest "></i>
                    <i className="fab fa-dribbble "></i>
                    </div>
                </div>
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolil</li>
                    <li>News</li>
                    <li>Contract</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales </p>
                    <span>28 Feb 2022 </span>
                </div>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales </p>
                    <span>28 Feb 2022 </span>
                </div>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales </p>
                    <span>28 Feb 2022 </span>
                </div>
            <div className="box">
                <h2>Get in Touch</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, numquam.</p>
                <div className="icon">
                    <i className="fa fa-location-dot"></i>
                    <label htmlFor="/">Location: 27 Division , St New , Ny 10002</label>
                </div>
                <i className="fa fa-phone"></i>
                <label htmlFor="">Phone: +14578 526189</label>
            </div>
            <div className="icon">
                <i className="fa fa-envelope"></i>
                <label htmlFor="/">Email:support@gami.com</label>
            </div>
            </div>
            <div className="legal container">
                <p>Copyright @2022. All rights reserved.</p>
                <label htmlFor="">
                    Design  Developed by <span>Junior Joseph</span>
                </label>
            </div>
        </footer>
    </>
  )
}

export default Footer