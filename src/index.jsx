import React, { useRef } from "react";
import ReactDOM from "react-dom";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


function App() {
  const messageRef = useRef()
  
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    const message = messageRef.current?.value
    
    if (!message) {
      return alert("Please insert a message")
    }
    
    const payload = { message }
    
    console.log(JSON.stringify(payload))
    
    let res = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': "application/json"
      }
    })
    
    if (res.ok) {
      alert("Successfully sent the message")
    } else {
      alert("Failed to send the message")
    }
  }
  
  
  return (
    <div>
      <div>
        <label>
          <div>
          Message
          </div>
          <input type="text" ref={messageRef} />
        </label>
      </div>
      <button onClick={handleSubmit}>Send</button>
    </div>
  )
}