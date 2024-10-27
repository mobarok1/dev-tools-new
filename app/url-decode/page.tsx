import Footer from '@/app/components/footer'
import TopHeader from '@/app/components/header'
import TopNavbar from '@/app/components/topNavbar'
import React from 'react'
import ToolsListSideBar from '@/app/components/toolsListSideBar'
import URLDecoder from './urldecoder'

const URLDecode = () => {
  return (
    <>
      <TopHeader pageName="URL Encoder Online"/>
      <TopNavbar showSearch={false}/>
      <main>
          <div className='container'>
            <div>
                <h4 className="text-left">URL Decode Online</h4>
            </div>
            <div className="row">
              <div className="col-9">
                  <URLDecoder/>
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

export default URLDecode