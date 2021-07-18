
import JavaScript from '../public/icons/javascript.svg'
import Python from '../public/icons/python.svg'
import GoLang from '../public/icons/Go-Logo_Black.svg'
import Reactsvg from '../public/icons/react.svg'
import Nodejs from '../public/icons/nodejs.svg'
import Docker from '../public/icons/docker.svg'
import DigitalOcean from '../public/icons/digitalocean.svg'
import TypeScriptSvg from '../public/icons/typescript.svg'
import NextJs from '../public/icons/nextjs.svg'

const Technologies = [
    { name: 'JavaScript', component: JavaScript  },
    { name: 'TypeScript', component: TypeScriptSvg},
    { name: 'Python', component: Python  },
    { name: 'GoLang', component: GoLang },
    { name: 'React', component: Reactsvg  },
    { name: 'Nodejs', component: Nodejs },
    { name: 'Nextjs', component: NextJs},
    { name: 'Docker', component: Docker  },
    { name: 'DigitalOcean', component: DigitalOcean},

  ]
export default function AboutMe(){
return(
    <div>
    <div className="mt-4 lg:mt-14 border-b-2 container  border-black border-opacity-40"><h1 className=" mb-2 text-center text-3xl">ABOUT ME</h1>
   </div>
   <div className=' flex flex-col space-y-6 lg:space-y-0 lg:flex-row my-8'>
   <section className='lg:w-6/12'>
   <p className="text-left">I'm a graduate of computer science and software engineering from the British university in Egypt, passionate about back-end development and performant software.</p>
   </section>
  
  <section className='grid grid-cols-2 gap-y-4 gap-x-4   lg:grid-cols-4 '>
  {Technologies.map((item) => (
    <div className="flex fexl-row space-x-5">
      <item.component className="w-8 h-8 "/>
  <h1>{item.name}</h1>
  
  </div>
  ))}
  </section>
   </div>
   </div>
)
}