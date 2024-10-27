import Link from 'next/link'
import React from 'react'

import Image from 'next/image';
import { HOME_PAGE_URL} from '@/config/config';


const TopNavbar =({showSearch,}: {showSearch:boolean}) => {
    return (
        <div>           
            {/* Top Bar End */}
            {/*Desktop Header Start*/}
            <nav>
                <div className="navbar">
                    <Link href={HOME_PAGE_URL()} className='m-auto'>
                        <div className="logo-bar">
                            <h2  style={{textAlign:"center"}}>CodHost</h2>
                            <p style={{textAlign:"center"}}>Free Developer Tools</p>
                        </div>
                    </Link>
                    
                    
                    <div className="input-group toolsSearch col-lg-12" style={{display:showSearch?"flex":"none"}}>
                        <input
                            className="form-control border-end-0 border"
                            type="text"
                            placeholder='Search'
                            id="example-search-input"
                        />
                        <span className="input-group-append">
                            <button className="btn border bg-white ms-n3"type="button">
                                <i className="bi bi-search" /> Search
                            </button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default TopNavbar