import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React, { useState } from 'react'
import ToolsListSideBar from '@/app/components/toolsListSideBar'
import UTFEncoder from './seed-phrase'
import SeedPhrase from './seed-phrase'

const base64Encode = () => {

  return (
    <>
      <TopHeader pageName="Crypto Seed Phrase Generator Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">Crypto  Seed Phrase Generator</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <SeedPhrase/>
                  
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