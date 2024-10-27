"use client"
import React, { useState } from 'react'

const UTFEncoder = () => {
  const [inputValue, setInputValue]=useState("");
  const [outputValue, setOutputValue]=useState("");
  const [bttnText, setBttnText] = useState("Copy");
  const [btnEnable, setBtnEnable] = useState(true);

  function onButtonClick(){
    setOutputValue(encodeURI(inputValue as string));    
    
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
                                    <button onClick={onButtonClick} className="btn btn-success mt-3 mb-3 col-4">Encode</button><br></br>
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

                  <h5>1. What is UTF-8 encoding?</h5>
                  <p>UTF-8 (Unicode Transformation Format - 8-bit) is a variable-width character encoding used to encode characters in Unicode. It can represent any character in the Unicode standard using one to four bytes.</p>

                  <h5>2. Why is UTF-8 so widely used?</h5>
                  <p>UTF-8 is widely used because it is compatible with ASCII, efficient for English text, and can represent all characters from all languages, making it ideal for internationalization.</p>

                  <h5>3. How does UTF-8 encoding work?</h5>
                  <p>UTF-8 uses one byte for standard ASCII characters (U+0000 to U+007F) and additional bytes for other characters. The first byte indicates how many bytes the character uses in total.</p>

                  <h5>4. What are the advantages of using UTF-8?</h5>
                  <div>Advantages include: 
                      <ul>
                          <li>Supports all Unicode characters.</li>
                          <li>Backward compatible with ASCII.</li>
                          <li>Efficient storage for texts primarily in English.</li>
                          <li>Widely supported across programming languages and platforms.</li>
                      </ul>
                  </div>

                  <h5>5. How can I encode and decode strings in UTF-8?</h5>
                  <p>In JavaScript, you can use <code>encodeURIComponent()</code> for encoding and <code>decodeURIComponent()</code> for decoding UTF-8 strings:</p>
                  <pre>
              let encoded = encodeURIComponent("Hello, 世界!");
              let decoded = decodeURIComponent(encoded);
              console.log(encoded); // Output: Hello%2C%20%E4%B8%96%E7%95%8C%21
              console.log(decoded); // Output: Hello, 世界!
                  </pre>
            </div>
        </div>
    </div>
  )
}

export default UTFEncoder