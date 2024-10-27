"use client"
import React, { useRef,useState } from 'react'
import {QRCodeCanvas} from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputValue, setInputValue]=useState("");

  const [size, setSize] = useState(256); // Default size of QR code
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  const saveQRCode = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qr_code.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className='row' style={{margin:"0 auto"}}>
        <div className="col-12">
            <div className='bg-white p-3 mt-3 mb-5'>
                <label htmlFor="inputValue">Input Value</label>
                <textarea className="form-control mt-2" rows={8} id="inputValue" required onChange={(e)=>{setInputValue(e.target.value);}}/>
            </div>

              
            <div className='bg-white p-3 mt-3 mb-5'>
                  <p>Output {inputValue==""?"(Type in the input field to show QR Code)":""}</p>
                  {inputValue && (
                    <div style={{ marginTop: '20px' }} className='row justify-center'>
                      <h3 className='mb-3 text-center'> Your QR Code:</h3>
                      <QRCodeCanvas ref={canvasRef} value={inputValue} size={size} />
                    </div>

)}

                  <div className='row justify-center'>
                    <button className="btn btn-link mt-3 mb-3 col-4" disabled={inputValue==""} onClick={saveQRCode}><i className="bi bi-copy"></i> Save</button><br></br>
                </div>
            </div>
            <div className='bg-white p-5 mt-3 mb-5'>

                  <h5>1. What is a QR code?</h5>
                  <p>A QR code (Quick Response code) is a type of matrix barcode that can store various types of information and can be scanned using smartphones and other devices to quickly access that information.</p>

                  <h5>2. How do I scan a QR code?</h5>
                  <p>To scan a QR code, open your device's camera or a QR code scanning app, point it at the QR code, and wait for the device to recognize it. Most modern smartphones automatically detect QR codes with the camera app.</p>

                  <h5>3. What kind of information can be stored in a QR code?</h5>
                  <p>QR codes can store a variety of information, including URLs, text, contact information, email addresses, phone numbers, and Wi-Fi network credentials.</p>

                  <h5>4. Are QR codes safe to use?</h5>
                  <p>While QR codes themselves are not inherently unsafe, they can link to malicious websites. Always verify the source of a QR code before scanning it and avoid scanning codes from unknown sources.</p>

                  <h5>5. How can I create my own QR code?</h5>
                  <p>You can create a QR code using various online QR code generators. Simply enter the information you want to encode (like a URL) and the generator will create a QR code that you can download and use.</p>

                  <h5>6. Can QR codes be customized?</h5>
                  <p>Yes, many QR code generators allow customization, such as changing colors, adding logos, or adjusting the design of the QR code while maintaining its scannability.</p>

            </div>
        </div>
    </div>
  )
}

export default QRCodeGenerator