import { useState,useRef } from "react";
import { useEffect } from "react";


function App() {
  //useEffect? --> hook use to do side-Effect in react
   let [ws,setWs]= useState(null) //to create state variable
   let inputRef= useRef() //store any dom element reference , and it is different from useState because it does not trigger re-rendering of a componet
  
    useEffect(()=>{
      const socket = new WebSocket("ws://localhost:8888");
      socket.onmessage = (e)=>{
        console.log(e.data)
      }
      setWs(socket);

    },[])

    function sendMessage(){
      let message= inputRef.current.value
     ws.send(message)
     inputRef.current.value=""
    }
    
  
  return (
    <>
      <h1>Ping Pong</h1>
      <input ref={inputRef} type="text" />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
