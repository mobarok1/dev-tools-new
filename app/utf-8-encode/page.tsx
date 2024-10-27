import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React, { useState } from 'react'
import ToolsListSideBar from '@/app/components/toolsListSideBar'
import UTFEncoder from './utf8-encoder'

const base64Encode = () => {

  return (
    <>
      <TopHeader pageName="UTF-8 Encoder Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">UTF-8 Encoder</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <UTFEncoder/>
                  
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