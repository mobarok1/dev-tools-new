"use client"
import React, { useState } from 'react'

const StringTrimer = () => {
  const [inputValue, setInputValue]=useState("");
  const [outputValue, setOutputValue]=useState("");
  const [bttnText, setBttnText] = useState("Copy");
  const [btnEnable, setBtnEnable] = useState(true);

  function onButtonClick(){
    setOutputValue(inputValue.trim());    
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
                    <div className='row justify-center'>
                        <button onClick={onButtonClick} className="btn btn-success mt-3 mb-3 col-4">Trim String</button><br></br>
                    </div>
                </div>
                <div className='bg-white p-3 mt-3 mb-5'>
                   <label htmlFor="outputValue">Output String</label>
                      <textarea className="form-control mt-2" rows={5} id="outputValue" value={outputValue} readOnly/>

                      <div className='row justify-center'>
                          <button className="btn btn-link mt-3 mb-3 col-4" disabled={outputValue==""?true:!btnEnable} onClick={copyCode}><i className="bi bi-copy"></i> {bttnText}</button><br></br>
                      </div>
                </div>
                <div className='bg-white p-5 mt-3 mb-5'>
                        <h5>1. What is <code>trim()</code> in JavaScript?</h5>
                        <p>The <code>trim()</code> method removes whitespace from both the beginning and end of a string.</p>
                        <pre>
                    let str = "  Hello World!  ";
                    console.log(str.trim()); // Output: "Hello World!"
                        </pre>

                        <h5>2. Does <code>trim()</code> modify the original string?</h5>
                        <p>No, <code>trim()</code> returns a new string. The original string remains unchanged.</p>

                        <h5>3. How do I remove only leading or trailing spaces?</h5>
                        <p>Use <code>trimStart()</code> to remove leading spaces and <code>trimEnd()</code> to remove trailing spaces.</p>
                        <pre>
                    let str = "  Hello World!  ";
                    console.log(str.trimStart()); // Output: "Hello World!  "
                    console.log(str.trimEnd());   // Output: "  Hello World!"
                        </pre>

                        <h5>4. Can <code>trim()</code> remove other whitespace characters?</h5>
                        <p>Yes, it removes all types of whitespace characters like spaces, tabs, and newlines from both ends.</p>
                        <pre>
                    let str = "\n\t Hello World! \n";
                    console.log(str.trim()); // Output: "Hello World!"
                        </pre>

                        <h5>5. What if the string contains no whitespace?</h5>
                        <p>If the string has no leading or trailing whitespace, <code>trim()</code> returns the original string unchanged.</p>
                        <pre>
                    let str = "JavaScript";
                    console.log(str.trim()); // Output: "JavaScript"
                        </pre>
                </div>
            
           
        </div>
    </div>
  )
}

export default StringTrimer