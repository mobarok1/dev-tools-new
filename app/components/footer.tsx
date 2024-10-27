import React from 'react'
import Script from "next/script";
import Image from 'next/image';
import { HOME_PAGE_URL } from '@/config/config';

const Footer = () => {
  return (
    <>
     
    <div className="legal-bar">
      <div className="container">
        <div className="row align-items-center gy-3 gy-lg-0">
          
          <div className="col-md-12 col-lg-6">
            <div className="footer-list">
              <ul className="justify-center">
                <li>
                  <a href="about-us">About us</a>
                </li>
                <li>
                  <a href="contact-us">Contact us</a>
                </li>
                <li>
                  <a href="https://www.termsfeed.com/live/e12d7670-ef48-4437-b788-017785bdc815">Privacy Policy </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="copy-right-text text-center text-lg-center">
              Copyright ©CodHost
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Footer End */}
    {/* back to top button start */}
    <button
      id="scrolltoTop"
      className="scroll-top d-flex align-items-center justify-content-center"
    >
    <i className="bi bi-arrow-up-short" />
    </button>
    {/* back to top button end */}
    {/* jquery js */}
    <Script src={`${HOME_PAGE_URL()}/js/jquery-3.6.0.min.js`}/>
    {/* popper js */}
    <Script src={`${HOME_PAGE_URL()}/js/popper.min.js`}/>
    {/* bootstarp js */}
    <Script src={`${HOME_PAGE_URL()}/js/bootstarp.min.js`}/>
    {/* swiper sider js */}
    
    </>
  )
}

export default Footer