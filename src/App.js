import './App.css';
import TextInput from "./TextInput";
import { useState } from 'react';
import Message from './Message';
import Camera from 'react-snap-pic';
import NamePicker from './NamePicker.js';

function App() {
  /* fetch(url)
     .then(data=>console.log(data)) */
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false)
  function sendMessage(text) {
    if (!text) return;
    // we'll create a new message object
    const newMessage = {
      text,
      time: Date.now(),
      user: "Sebastian",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  
  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }
  function setUserName(name) {
    console.log(name);
  }

  return (
    <div className="App">
      <header className="header">
        <div className ="logo" />
        <span className="title">ORDER NOW!</span>
        <NamePicker setUserName={setUserName}/>
      </header>
      <div className='messages'>
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={(sendMessage)}
        showCamera={()=>setShowCamera(true)}
      />
      {showCamera && <Camera takePicture={takePicture} />}
    </div>
  );
}

export default App;
