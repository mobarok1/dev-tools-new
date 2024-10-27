"use client"
import React, { useState } from 'react'

const StringReplacer = () => {
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

              <div className='bg-white p-5 mt-3 mb-5'>
                    <h5>1. How do I replace a substring in JavaScript?</h5>
                        <p>Use the <code>replace()</code> method to replace a substring. Example:</p>
                        <pre>
                    let str = "Hello World";
                    let newStr = str.replace("World", "JavaScript");
                    console.log(newStr); // Output: Hello JavaScript
                        </pre>

                        <h5>2. Does <code>replace()</code> change the original string?</h5>
                        <p>No, <code>replace()</code> returns a new string. Strings in JavaScript are immutable.</p>

                        <h5>3. How do I replace all occurrences of a substring?</h5>
                        <p>Use a regular expression with the <code>/g</code> flag:</p>
                        <pre>
                    let str = "apple apple apple";
                    let newStr = str.replace(/apple/g, "orange");
                    console.log(newStr); // Output: orange orange orange
                        </pre>

                        <h5>4. Can I use <code>replace()</code> with a case-insensitive search?</h5>
                        <p>Yes, use the <code>/i</code> flag for case-insensitive matching:</p>
                        <pre>
                    let str = "Hello hello";
                    let newStr = str.replace(/hello/i, "Hi");
                    console.log(newStr); // Output: Hi hello
                        </pre>

                        <h5>5. How do I replace using a callback function?</h5>
                        <p>You can pass a function to <code>replace()</code> to generate dynamic replacements:</p>
                        <pre>
                    let str = "Price: $10";
                    let newStr = str.replace(/\d+/g, (match) ={'>'} match * 2);
                    console.log(newStr); // Output: Price: $20
                        </pre>
              </div>

            
        </div>
    </div>
  )
}

export default StringReplacer