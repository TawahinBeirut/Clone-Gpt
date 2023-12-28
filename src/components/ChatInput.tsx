
export default function ChatInput(){
    return(
    <div className="flex justify-start pl-7">
    <div className="bg-gray-300 p-2 rounded-xl flex items-center w-8/12">
  <textarea placeholder="Message Jasser-GPT..." className="bg-transparent outline-none text-gray-800 placeholder-gray-800 flex-1 break-words"  />
  <button className="ml-4 bg-gray-600 text-white p-2 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>
</div>
    )
}