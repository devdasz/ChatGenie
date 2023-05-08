export function Message({message, isAI}) {
  
  return (
    <main>

      <div 
        className="flex items-start space-x-4 p-4" 
       >
        <img class="w-10 h-10  rounded-full" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
   
        <div className="font-medium bg-gray-600 p-2   rounded-lg text-white">

          <div className="text-sm "> {message} </div>
        </div>
      </div>

    </main>
  )
}
export  function AIMessage({message, isAI}) {
  
  return (
    <main>

      <div 
        className="flex items-start space-x-4 p-4" 
        style={{
          flexDirection: "row-reverse"
        }}>
        <img class="w-10 h-10 mx-2 rounded-full" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
   
        <div className="font-medium bg-gray-600 p-2   rounded-lg text-white">

          <div className="text-sm "> {message} </div>
        </div>
      </div>

    </main>
  )
}