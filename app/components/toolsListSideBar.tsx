"use client"
import React, { useState } from 'react'
import { toolsListJson } from '@/data/tools';
import Link from 'next/link';
import { HOME_PAGE_URL } from '@/config/config';
import { usePathname } from 'next/navigation';

const ToolsListSideBar = () => {
const [searchValue, setSearchValue] = useState("");
    const pathname = usePathname()

  var filteredTools = toolsListJson;
  if(searchValue!=""){
    filteredTools = toolsListJson.filter(tool => tool.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  console.log(pathname.split("/"))

  return (
    <div className='bg-white p-2 mt-3 mb-3'>
        <p className='text-center font-bold border-b-2 pb-2' style={{fontSize: 18, color:"#0ab699"}}>Other Free Tools</p>
        <div className="input-group toolsSearch">
            <input
                className="form-control border mr-2 ml-2"
                type="text"
                placeholder='Type to Search'
                onChange={(e)=>{setSearchValue(e.target.value)}}
            />
            
        </div>

        <div className='row tools-list'>
            {
                
                filteredTools.map(
                    (tools: any) => {
                        return <div key={tools.id} className='col-12'>
                                        <Link href={tools.path}>
                                            <div className="bg-white p-3 pb-2 pt-2 m-2 border-1">
                                                <p className='h6 m-0 toolsTitle'>{tools.title}</p>
                                                <p className='m-0 p-0 mt-1 toolsubTitle'>{tools.subTitle}</p>                                        
                                            </div>
                                        </Link>
                                </div>
                    }
                )
            }
        </div>
    </div>
  )
}

export default ToolsListSideBar