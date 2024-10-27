import React from 'react'
import ToolsListSideBar from '../components/toolsListSideBar'
import Footer from '../components/footer'
import TopHeader from '../components/header'
import TopNavbar from '../components/topNavbar'

const ContactUs = () => {
  return (
    <>
      <TopHeader pageName="Base64 Encoder Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">Contact Us</h4>
            </div>
            <div className="row">
              <div className="col-9 mt-5">
                <p>
                We would love to hear from you! For inquiries, feedback, or partnership opportunities, please reach out to us.
                </p>
                <p>
                <strong>Email:</strong> 
                <a href="mailto:info@codhost.com">info@codhost.com</a>
                </p>
                <p>Thank you for your interest in our website and tools!</p>
                  
              </div>
              <div className="col-3">
                  <ToolsListSideBar/>
              </div>
            </div>
          </div>
          
      </main>
      
      <Footer/>
    </>
    
  )
}

export default ContactUs