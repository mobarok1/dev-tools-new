import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React, { useState } from 'react'
import ToolsListSideBar from '@/app/components/toolsListSideBar'
import UTFEncoder from './qr-code'
import QRCodeGenerator from './qr-code'

const base64Encode = () => {

  return (
    <>
      <TopHeader pageName="QR Code Generator Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">QR Code Generator Online</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <QRCodeGenerator/>
                  
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