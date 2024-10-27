import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React, { useState } from 'react'
import ToolsListSideBar from '@/app/components/toolsListSideBar'
import StringReplacer from './stringReplacer'


const StringReplace = () => {

  return (
    <>
      <TopHeader pageName="URL Encoder Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">String Replace Online</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <StringReplacer/>
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

export default StringReplace