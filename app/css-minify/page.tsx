import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React, { useState } from 'react'
import Base64Encoder from './css-minifier'
import ToolsListSideBar from '@/app/components/toolsListSideBar'

const base64Encode = () => {

  return (
    <>
      <TopHeader pageName="Base64 Encoder Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">BASE64 ENCODER</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <Base64Encoder/>
                  
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

export default base64Encode