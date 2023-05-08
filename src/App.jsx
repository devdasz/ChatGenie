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
    

    let path='https://apitest.devdazz.repl.co/chatbot'
    
   const response = await axios.post(path, data)
    console.log(response.data)
    setMessageList([...messageList,data,response.data])
    // var config = {
    //   method: 'post',
    //   url: 'https://apitest.devdazz.repl.co/infer-review',
    //   headers: { },
    //   data : data
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    //   const receivedData=JSON.stringify(response.data)
      
    //    setMessageList([...messageList,receivedData])
      
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  useEffect(()=>{
    // getMeassage()
  },[])
  return (
    <main>
      {messageList.map((ele)=>(
      <>
      {ele.role=="user"?
     <Message message={ele.content}/>
      
      :""}
         {ele.role=="assistant"?
     <AIMessage message={ele.content}/>
      
      :""}
     
        </>))}
      
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
  value={input}
  onChange={(event)=>{
    setInput(event.target.value)
  }}
  ></textarea>
      <button   onClick={handleSubmit} type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
      
</button>


    </main>
  )
}
