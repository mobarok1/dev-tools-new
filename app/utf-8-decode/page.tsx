import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React from 'react'
import Base64Decoder from './utf8-decoder'
import ToolsListSideBar from '@/app/components/toolsListSideBar'
import UTF8Decoder from './utf8-decoder'

const base64Decode = () => {
  return (
    <>
      <TopHeader pageName="UTF-8 Encoder Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">UTF-8 Decoder</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <UTF8Decoder/>
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

export default base64Decode