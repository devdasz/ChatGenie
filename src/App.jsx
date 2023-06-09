import './App.css'
import { Message, AIMessage } from './componenets/message.jsx'
import React from "react"
import { useState, useEffect } from "react";
import axios from 'axios';
import { AppRouter, SetAppRouter } from './utils/AppRouter';
import ChatPage from './ChatPage';
const messages = [

  { 'role': 'user', 'content': 'tell me a joke' },
  { 'role': 'assistant', 'content': 'Why did the chicken cross the road' },
  { 'role': 'user', 'content': 'I don\'t know' }]


// Component Objects 
const components = {
  PIZZABOT: PizzaBot,
  UITEST: UiTest,
  NOTFOUND: NotFound,
  DEFAULT: Home,
  CHATMENU: ChatMenu
};


export default function App() {
  return (<AppRouter components={components} />);
}



export function NotFound() {
  return (
    <div>NotFound</div>
  )
}

export function ChatMenu() {
  return (
    <>
      <div>ChatMenu</div>
      <button type="button" onClick={() => SetAppRouter("PIZZABOT")}>Pizzabot</button>
      <button type="button" onClick={() => SetAppRouter("UITEST")}>UiTest</button>
    </>
  )
}


export function PizzaBot() {
  return (
    <ChatPage chatEndpoint={"chatbot"} />
  )
}
export function UiTest() {
  return (
    <ChatPage chatEndpoint={"uitest"} />
  )
}



export function Home() {
  return (
    <>
      <div className='min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900'>
        <div className='p-4 md:p-8'>
        <p className='text-2xl font-bold text-white '>
          ChatGenie
        </p>
        </div>
        
       <div className='grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-14'>
        <div></div>
        <div>
        <div className='w-fit p-9    bg-[#d9d9d9b3] shadow-landing'>
          <p className='font-extrabold text-[44px] leading-[70px]'>

            Meet the
          </p>
          <p className='font-extrabold text-[44px] leading-[70px]'>

            possibilities
          </p>
          <p className='font-extrabold text-[44px] leading-[70px]'>

            of AI Chatbot
          </p>
          <p className='mt-8 text-base font-semibold tracking-widest ml-11'>Powered by OPENAI</p>
        </div>
        <button type="button" class="w-full md:w-96 md:ml-10 mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => SetAppRouter("CHATMENU")}>Chat Now</button>
       
        </div>
     
       </div>
       

      </div>

    </>
  )
}



