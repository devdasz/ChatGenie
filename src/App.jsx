import './App.css'
import {Message, AIMessage} from './componenets/message.jsx'
import { useState,useEffect } from "react";
import axios from 'axios';
const messages =  [  
    
{'role':'user', 'content':'tell me a joke'},   
{'role':'assistant', 'content':'Why did the chicken cross the road'},   
{'role':'user', 'content':'I don\'t know'}  ]
export default function App() {
  const [messageList,setMessageList]=useState([])
 const [input,setInput]=useState()


  const handleSubmit=async()=>{
    
   var data = {
     role:"user",
     content:input
   };
    setMessageList(
      (preArray)=>(
        [...preArray,data]
      )
    );

    let path='https://apitest.devdazz.repl.co/uitest'
    
   const response = await axios.post(path, data)
    console.log(response.data)
    
   
    setMessageList((preArray)=>(
      [...preArray,response.data ]
    ))

  }

  useEffect(()=>{
    // getMeassage()
  },[])
  return (
    <main className='flex flex-col h-screen max-h-screen' style={{paddingBottom:"50px"}}>
      <div className='grow  [overflow-anchor:none] max-h-[80vh] overflow-auto' >
      {
      messageList.map((ele)=>(
      <>
      {ele.role=="user"?
     <Message message={ele.content} />
      
      :""}
         {ele.role=="assistant"?
     <AIMessage message={ele.content}/>
      
      :""}
     
        </>))}
      
        </div>

<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<div class="flex items-center bottom-0 left-0 right-0 p-4 bg-white">
  <input type="text" class="grow bg-white border border-gray-400 rounded-l-lg px-4 py-2 w-3/4 focus:outline-none focus:shadow-outline" placeholder="Enter your text here" value={input}
  onChange={(event)=>{
    setInput(event.target.value)
  }}/>
  <button  onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-lg px-6 py-2 ml-2" type="submit">Send</button>
</div>

      


    </main>
  )
}
