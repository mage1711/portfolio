import Head from 'next/head'


import { Fragment } from 'react'
import CodeEditor from '../components/CodeEditor'
import AboutMe from '../components/AboutMe'
import ProjectCard from '../components/ProjectCard'

import GitHub from '../public/icons/github-original.svg'
import LinkedIn from '../public/icons/linkedin-original.svg'
import Contact from '../public/icons/mail.svg'
import Resume from '../public/icons/user.svg'
import Blog from '../public/icons/blog.svg'
import {Project} from '../types'

const Projects:Project[] = [
    { title: 'Coflow', description: 'Automate property repairs and maintenance', media:'coflow',technologies:['Typescript','Django','Docker','React','Superbase','AWS'] ,link:'https://www.joincoflow.com/' },
    { title: 'Hirebolt', description: 'Hire staff fast without wasting hours on admin work', media:'hirebolt',technologies:['Javascript','Nodejs','Docker','React'],link:'https://www.hirebolt.com/' },
    { title: 'Popmenu', description: 'Maximum growth for restaurants.', media:'popmenu',technologies:['Javascript','Webpacker','Ruby','Docker'],link:'https://get.popmenu.com/' },
    { title: 'Blinkist', description: 'Get the key ideas from the top books, podcasts, and experts in 15 minutes with the Blinkist app.', media:'blinkist',technologies:['Javascript','Webpacker','Ruby','Docker'],link:'https://www.blinkist.com/' },
    { title: 'CDD Vault', description: 'Scientific Data Management', media:'cddvault',technologies:['Javascript','Webpacker','Ruby','Docker'],link:'https://www.collaborativedrug.com/' },
    { title: 'Gluu 4', description: 'Gluu Solo enables you to choose millions or billions of requests per month, multiple cloud locations and the SLA to right-size your business identity requirements.', media:'gluu',technologies:['Javascript','VUE','Python','Flask'],link:'https://gluu.org/gluu-4/' },

]
export default function Home() {

  return (
    <Fragment>
<Head> <title>Ziad Ibrahim </title> </Head>
<div className='flex flex-col m-4 text-center lg:m-10 lg:mx-96'>
  <div className='flex flex-row space-x-20'>
  <div className='flex flex-col font-roboto' >
  <h3 className='pl-8 text-2xl font-bold text-left font-bebas'>HELLO I AM</h3>
  <h1 className='text-8xl font-bebas '>ZIAD IBRAHIM</h1>
  <p className='pt-4 text-lg font-medium'>A Software Engineer and Full-Stack Web Developer </p>
  <div className="flex flex-col mt-6 space-y-4 text-center lg:space-y-0 lg:flex-row lg:space-x-12 lg:mt-20 ">

 <div className="hover:opacity-50">
    <a href='https://github.com/mage1711'><GitHub className="inline-block w-6 h-6 mb-1 mr-1"/> GitHub</a>
    </div>
    <div className="hover:opacity-50">
    <a href='https://www.linkedin.com/in/ziad-ibrahim-12391279/'> <LinkedIn className="inline-block w-6 h-6 mb-1 mr-1 "/> LinkedIn</a>
    </div>
    <div className="hover:opacity-50">
    <a href='https://drive.google.com/file/d/1OkNSSEnlORDfzDFmD4DHfo3XpX6f-xcr/view'><Resume className="inline-block w-6 h-6 mb-1 mr-1 "/> Resume</a>
    </div>
    <div className="hover:opacity-50">
    <a href='https://dev.to/mage1711'><Blog className="inline-block w-6 h-6 mb-1 mr-1"/> Blog</a>
    </div>
    <div className="hover:opacity-50">
    <a href='mailto:ziad.abdelrahman.ibrahim@gmail.com'><Contact className="inline-block w-6 h-6 mb-1 mr-1"/> Contact</a>
    </div>
  </div>
  </div>
<CodeEditor/>
  </div>
<AboutMe/>
 <div>
  <div className="container mt-3 border-b-2 border-black border-opacity-40"><h1 className="mb-2 text-3xl text-center ">PROJECTS I WORKED ON</h1>
 </div>
 <div className='grid grid-cols-1 gap-5 p-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
 {Projects.map((project) => (
<ProjectCard project = {project}/>
 ))}
 </div>
 </div>
</div>
<footer className='p-6 text-white bg-black'>
<address>
  <p className='mb-4 hover:opacity-50'>email: <a href="mailto:ziad.abdelrahman.ibrahim@gmail.com">ziad.abdelrahman.ibrahim@gmail.com</a></p>
<p className='mb-1 hover:opacity-50'><a href="https://github.com/mage1711/portfolio">source code for this page</a></p>
  </address>
</footer>


</Fragment>
  )
}


