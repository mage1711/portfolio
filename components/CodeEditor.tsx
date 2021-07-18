

export default function CodeEditor(){
    return(  <div className=" hidden lg:flex flex-col text-left w-98 bg-gray-800 rounded-lg overflow-hidden shadow ">
    <div className="h-6 bg-gray-600 relative rounded ">
      <div className="p-2 flex flex-row space-x-1.5 ">
    <div className="rounded-full h-2 w-2 bg-red-400 "></div>
    <div className="rounded-full h-2 w-2 bg-yellow-400 "></div>
    <div className="rounded-full h-2 w-2 bg-green-400 "></div>
    </div>
    </div>
    <div className="h-80 p-2 space-x-1 m-2 text-white "> 
    <div>
    <span className=' text variable'>const </span>
    <span className=' text-blue-300'>profile </span>
    <span >= {`{`}</span>
    </div>
    <div className='px-10'> <div id="line1"><span className='text variable'>name :</span>
    <span className='text json'> 'Ziad Ibrahim'</span>
    <span>,</span>
    </div>
    <div id="line2"><span className='text variable'>role :</span>
    <span className='text json'> 'Backend Developer'</span>
    <span>,</span>
    </div>
 <div id="line3"><span className='text variable'>languages :</span>
    <span className='text json'> ['Python', 'JavaScript', 'Golang', Typescript]</span>
    <span>,</span>
    </div>
    <div id="line4"><span className='text variable'>frameWorks :</span>
    <span className='text json'> ['Node.js', 'Flask', 'Django', 'React', 'Next.js']</span>
    <span>,</span>
    </div>
    <div id="line5"><span className='text variable'>github :</span>
    <span className='text json'><a href='https://github.com/mage1711'> https://github.com/mage1711</a></span>
    <span>,</span>
    </div>
    <div id="line6">
    <span> {`}`}</span>
    </div>
    </div>
</div>
    </div>)
}