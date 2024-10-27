"use client"
import React, { useState } from 'react'
import { toolsListJson } from '@/data/tools';
import Link from 'next/link';
import { HOME_PAGE_URL } from '@/config/config';
import { usePathname } from 'next/navigation';

const ToolsList = () => {
const [searchValue, setSearchValue] = useState("");
    const pathname = usePathname()

  var filteredTools = toolsListJson;
  if(searchValue!=""){
    filteredTools = toolsListJson.filter(tool => tool.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  return (
    <>
        <div className="input-group toolsSearch col-lg-12">
            <input
                className="form-control border-end-0 border"
                type="text"
                placeholder='Type to Search'
                onChange={(e)=>{setSearchValue(e.target.value)}}
            />
            
        </div>

        <div className='row tools-list'>
            {

                filteredTools.map(
                    (tools: any) => {
                        return <div key={tools.id} className='col-12 col-sm-6 col-md-4 col-lg-3 p-0'>
                                        <Link href={pathname+tools.path}>
                                            <div className="bg-white p-3 m-2">
                                                <p className='h6 m-0 toolsTitle'>{tools.title}</p>
                                                <p className='m-0 p-0 mt-1 toolsubTitle'>{tools.subTitle}</p>                                        
                                            </div>
                                        </Link>
                                </div>
                    }
                )
            }
        </div>
    </>
  )
}

export default ToolsList