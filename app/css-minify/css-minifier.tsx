"use client"
import React, { useState } from 'react'

const Base64Encoder = () => {
  const [inputValue, setInputValue]=useState("");
  const [outputValue, setOutputValue]=useState("");
  const [bttnText, setBttnText] = useState("Copy");
  const [btnEnable, setBtnEnable] = useState(true);

  function onButtonClick(){
    setOutputValue(btoa(inputValue as string));    
    
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
                                    <button onClick={onButtonClick} className="btn btn-success mt-3 mb-3 col-4">Encode Base64</button><br></br>
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

                <h5>1. What is Base64?</h5>
                <p>Base64 is a binary-to-text encoding scheme that converts binary data into an ASCII string format using a set of 64 characters. It is commonly used for encoding data in text-based formats like email, JSON, or URLs.</p>

                <h5>2. Why is Base64 used?</h5>
                <p>Base64 is used to safely transfer binary data over text-based systems, such as email or HTTP headers, without data corruption.</p>

                <h5>3. How does Base64 encoding work?</h5>
                <p>Base64 encoding takes three bytes (24 bits) of binary data, divides them into four 6-bit groups, and maps each group to a Base64 character.</p>

                <h5>4. What is the Base64 character set?</h5>
                <p>The Base64 character set includes uppercase letters (A–Z), lowercase letters (a–z), numbers (0–9), symbols (+, /), and padding (=).</p>

                <h5>5. How do I encode data to Base64?</h5>
                <p>Convert the input to binary, group it into 24 bits, split it into four 6-bit groups, and map each group to a Base64 character. Example: "Hello" becomes "SGVsbG8=".</p>

                <h5>6. What is Base64 decoding?</h5>
                <p>Base64 decoding reverses the encoding process, converting a Base64 string back into its original binary or text form.</p>

                <h5>7. Why does Base64 use padding (=)?</h5>
                <p>If the input isn't a multiple of 24 bits, padding characters are added to complete the Base64 encoding.</p>

                <h5>8. Is Base64 encryption?</h5>
                <p>No, Base64 is not encryption. It simply encodes data and can be easily decoded.</p>

                <h5>9. Where is Base64 commonly used?</h5>
                <p>Base64 is used in email attachments (MIME), data URLs in HTML/CSS, HTTP authentication headers, and JWT tokens.</p>

                <h5>10. What are the limitations of Base64?</h5>
                <p>Base64 increases data size by 33%, offers no security, and adds processing overhead for large files.</p>

                <h5>11. Can Base64 handle non-text data like images or files?</h5>
                <p>Yes, Base64 is often used to encode binary data like images, PDFs, or videos into text-based formats.</p>

                <h5>12. How do I decode Base64 using an online tool?</h5>
                <p>Many online tools allow you to paste Base64 strings and convert them back to their original form.</p>

                <h5>13. What is the difference between Base64 URL encoding and standard Base64?</h5>
                <p>In URL-safe Base64, + and / are replaced with - and _, and padding (=) is often omitted.</p>

                <h5>14. How do I know if a string is Base64-encoded?</h5>
                <p>A valid Base64 string contains alphanumeric characters, +, /, possibly =, and its length is a multiple of 4.</p>

                <h5>15. Can Base64 encoding result in data loss?</h5>
                <p>No, Base64 encoding is lossless, and the original data can be fully restored after decoding.</p>

                <h5>16. How efficient is Base64 encoding?</h5>
                <p>Base64 increases the size of the data by about 33%, making it less efficient than other encoding methods.</p>

            </div>
        </div>
    </div>
  )
}

export default Base64Encoder