"use client"
import React, { useState } from 'react'

const UTF8Decoder = () => {
  const [inputValue, setInputValue]=useState("");
  const [outputValue, setOutputValue]=useState("");
  const [bttnText, setBttnText] = useState("Copy");
  const [btnEnable, setBtnEnable] = useState(true);

  function onButtonClick(){
    const outputValue: string = decodeURI(inputValue);    
    setOutputValue(outputValue);        
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
              <label htmlFor="inputValue">Input Value</label>
                  <textarea className="form-control mt-2" rows={8} id="inputValue" required onChange={(e)=>{setInputValue(e.target.value);}}/>
                  <div className='row justify-center'>
                      <button onClick={onButtonClick} className="btn btn-success mt-3 mb-3 col-4">Decode</button><br></br>
                  </div>
            </div>
            <div className='bg-white p-3 mt-3 mb-5'>
                <label htmlFor="outputValue">Output Value</label>
                <textarea className="form-control mt-2" rows={8} id="outputValue" value={outputValue} readOnly/>

                <div className='row justify-center'>
                    <button className="btn btn-link mt-3 mb-3 col-4" disabled={outputValue==""?true:!btnEnable} onClick={copyCode}><i className="bi bi-copy"></i> {bttnText}</button><br></br>
                </div>
            </div>
            <div className='bg-white p-5 mt-3 mb-5'>

            <h5>1. What is UTF-8 decoding?</h5>
    <p>UTF-8 decoding is the process of converting a sequence of bytes encoded in UTF-8 back into a human-readable string. It interprets the byte sequences according to UTF-8 rules.</p>

    <h5>2. Why is decoding necessary?</h5>
    <p>Decoding is necessary to convert data stored in a byte format back into a format that can be easily read and processed by humans or software applications.</p>

    <h5>3. How does UTF-8 decoding work?</h5>
    <p>UTF-8 decoding identifies the number of bytes that represent each character based on the first byte's value. It reads the corresponding number of bytes to reconstruct each character.</p>

    <h5>4. What are common methods for decoding UTF-8 strings?</h5>
    <p>In JavaScript, you can use <code>decodeURIComponent()</code> to decode a URI component encoded in UTF-8. In Python, the <code>bytes.decode()</code> method can be used:</p>
    <pre>
let encoded = "Hello%2C%20%E4%B8%96%E7%95%8C%21";
let decoded = decodeURIComponent(encoded);
console.log(decoded); // Output: Hello, 世界!
    </pre>

    <h5>5. What happens if decoding fails?</h5>
    <p>If decoding fails, it may result in errors or produce incorrect characters. In JavaScript, this may throw a <code>URIError</code> if the input string is not correctly encoded.</p>


            </div>
        </div>
    </div>
  )
}

export default UTF8Decoder