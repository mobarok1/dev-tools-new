"use client"
import React, { useState } from 'react'

const URLDecoder = () => {
  const [inputValue, setInputValue]=useState("");
  const [outputValue, setOutputValue]=useState("");
  const [bttnText, setBttnText] = useState("Copy");
  const [btnEnable, setBtnEnable] = useState(true);

  function onButtonClick(){
    const outputValue: string = decodeURIComponent(inputValue).replaceAll('+',' ');    
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
                      <button onClick={onButtonClick} className="btn btn-success mt-3 mb-3 col-4">Decode URL</button><br></br>
                  </div>
            </div>
            <div className='bg-white p-3 mt-3 mb-5'>
                <label htmlFor="outputValue" className=''>Output Value</label>
                <textarea className="form-control mt-2" rows={8} id="outputValue" value={outputValue} readOnly/>

                <div className='row justify-center'>
                    <button className="btn btn-link mt-3 mb-3 col-4" disabled={outputValue==""?true:!btnEnable} onClick={copyCode}><i className="bi bi-copy"></i> {bttnText}</button><br></br>
                </div>
            </div>
            <div className='bg-white p-5 mt-3 mb-5'>
                  <h5>1. What is URL Encoding?</h5>
                  <p>URL encoding, also known as percent-encoding, is a method of encoding special characters in URLs by replacing them with their ASCII hexadecimal equivalents prefixed by a <code>%</code>. This ensures that URLs are transmitted correctly over the internet.</p>

                  <h5>2. Why is URL Encoding needed?</h5>
                  <p>URLs can only contain certain characters (letters, numbers, and some special characters like <code>-</code>, <code>_</code>, <code>.</code>, and <code>~</code>). Characters like spaces, <code>#</code>, <code>?</code>, and <code>=</code> must be encoded to ensure proper URL transmission.</p>

                  <h5>3. How does URL Encoding work?</h5>
                  <p>Each special character in the input is replaced by its ASCII value in hexadecimal, prefixed with <code>%</code>. For example, a space becomes <code>%20</code>, and the <code>@</code> symbol becomes <code>%40</code>.</p>

                  <h5>4. What is URL Decoding?</h5>
                  <p>URL decoding is the reverse process of URL encoding. It converts encoded strings back into their original form by replacing percent-encoded values with their corresponding characters.</p>

                  <h5>5. When should I use URL Encoding and Decoding?</h5>
                  <p>Use URL encoding when passing data via URLs, such as query parameters in GET requests, to ensure special characters don’t break the URL. Use decoding when you retrieve data from URLs to convert it back to its original form.</p>

                  <h5>6. What characters need to be encoded?</h5>
                  <p>Characters like spaces (<code> </code>), ampersands (<code>&</code>), slashes (<code>/</code>), question marks (<code>?</code>), and others that have special meanings in URLs must be encoded.</p>

                  <h5>7. What are common URL Encoded values?</h5>
                  <ul>
                      <li><code>Space</code> → <code>%20</code></li>
                      <li><code>@</code> → <code>%40</code></li>
                      <li><code>&</code> → <code>%26</code></li>
                      <li><code>/</code> → <code>%2F</code></li>
                      <li><code>?</code> → <code>%3F</code></li>
                  </ul>

                  <h5>8. Is URL Encoding case-sensitive?</h5>
                  <p>No, URL encoding is not case-sensitive. For example, <code>%3F</code> and <code>%3f</code> both represent the <code>?</code> character.</p>

                  <h5>9. What are the limitations of URL Encoding?</h5>
                  <p>URL encoding increases the size of URLs, especially if many special characters are encoded. This can sometimes lead to URLs exceeding browser or server length limits.</p>

                  <h5>10. How do I encode or decode a URL?</h5>
                  <p>You can use online tools or programming languages like JavaScript to encode or decode URLs.</p>

                  <h3>JavaScript Example:</h3>
                  <pre>
                      let encoded = encodeURIComponent("Hello World!");
                      console.log(encoded);  {"//Output: Hello%20World%21"}

                      let decoded = decodeURIComponent(encoded);
                      console.log(decoded);   {"//Output:  Hello World!"}
                  </pre>

                  <h5>11. What is the difference between encodeURI() and encodeURIComponent()?</h5>
                  <p><code>encodeURI()</code> is used to encode a full URL, while <code>encodeURIComponent()</code> encodes individual components like query parameters. For example, <code>encodeURI()</code> does not encode <code>:</code> or <code>/</code>, but <code>encodeURIComponent()</code> does.</p>

            </div>
           
        </div>
    </div>
  )
}

export default URLDecoder