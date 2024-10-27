"use client"
import React, { useState } from 'react'

const StringSplite = () => {
  const [inputValue, setInputValue]=useState("");
  const [findValue, setfindValue]=useState("");
  const [replaceValue, setReplaceValue]=useState("");
  const [outputValue, setOutputValue]=useState("");
  const [bttnText, setBttnText] = useState("Copy");
  const [btnEnable, setBtnEnable] = useState(true);

  function onButtonClick(){
    setOutputValue(inputValue.replaceAll(findValue,replaceValue));    
  }

  const copyCode = () => {
    setBtnEnable(false);
    navigator.clipboard
      .writeText(outputValue)
      .then(() => {
        setBttnText("Copied");
        setTimeout(function () {
          setBttnText("Copy");
          setBtnEnable(true);

        }, 3000);
      });
  };

  return (
    <div className='row' style={{margin:"0 auto"}}>
        <div className="col-12">
              <div className='bg-white p-3 mt-3 mb-5'>
                <label htmlFor="inputValue">Input String</label>
                <textarea className="form-control mt-2" rows={5} id="inputValue" required onChange={(e)=>{setInputValue(e.target.value);}}/>
                <div className='row mt-3'>
                    <div className='col-6'>
                      <label htmlFor="findValue">Find String</label>
                      <textarea className="form-control mt-2" rows={2} id="findValue" required onChange={(e)=>{setfindValue(e.target.value);}}/>
                    </div>
                    <div className='col-6'>
                      <label htmlFor="replaceValue">Replace With</label>
                      <textarea className="form-control mt-2" rows={2} id="replaceValue" required onChange={(e)=>{setReplaceValue(e.target.value);}}/>
                    </div>
                </div>
                <div className='row justify-center'>
                    <button onClick={onButtonClick} className="btn btn-success mt-3 mb-3 col-4">Replace String</button><br></br>
                </div>
              </div>

                
              <div className='bg-white p-3 mt-3 mb-5'>
                      <label htmlFor="outputValue">Output String</label>
                  <textarea className="form-control mt-2" rows={5} id="outputValue" value={outputValue} readOnly/>

                  <div className='row justify-center'>
                      <button className="btn btn-link mt-3 mb-3 col-4" disabled={outputValue==""?true:!btnEnable} onClick={copyCode}><i className="bi bi-copy"></i> {bttnText}</button><br></br>
                  </div>
              </div>

            
        </div>
    </div>
  )
}

export default StringSplite