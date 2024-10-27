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
                <h4 className="text-left">About Us</h4>
            </div>
            <div className="row">
              <div className="col-9 mt-5">
              <p>
                Welcome to our developer tools hub! Our goal is to simplify your workflow with a collection of lightweight, easy-to-use tools.We offer quick solutions for common development tasks.
              </p>
              <p>
                Our mission is to create tools that are fast, accessible, and efficient for developers, saving you time and effort. Whether you're a programmer, student, or tech enthusiast, you'll find our tools helpful in streamlining your coding journey.
              </p>
              <p>
                We're committed to continuous improvement and adding new utilities based on your needs. Thank you for using our tools!
              </p>
              <div className="email">
                  <p>
                    For support or recommendations, feel free to reach out:  <br></br>
                    <strong>Email:</strong> <a href="mailto:info@codhost.com">info@codhost.com</a>
                  </p>
                </div>
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