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
  { title: 'Top list creator', description: 'An app for automatic video generation using Goland and flask using metacritic lists', media:'video',technologies:['Golang','Flask','Docker','React','FFmpeg'],source:'https://github.com/mage1711/video-generator-app' ,demo:'https://video-generator-app.vercel.app/' },
  { title: 'Flashcards', description: 'A flashcards website that gives users the ability to create flashcards and share them with each other', media:'flashcards',technologies:['Django','PostgreSQL','Nginx','Docker'],source:'https://github.com/mage1711/flashCards-django' ,demo:'http://206.189.58.188:1337/flashcards/',documentation:'https://github.com/mage1711/flashCards-django/blob/master/README.md' },
  { title: 'Notus', description: 'A note and media sharing app for students to share tips and comment on each other\'s notes', media:'notus',technologies:['React','PostgreSQL','Nginx','Docker','Reducx','TypeScript','Nextjs'],source:'https://github.com/mage1711/Notus-server' ,demo:'https://notus-client.vercel.app/' },
  { title: 'SPE club site', description: 'A university club website developed for the SPE BUE club branch', media:'SPE',technologies:['Nodejs','React','Firebase'],demo:'https://spe-bue.web.app/' },
  { title: 'Chatapp', description: 'A real time chat app using socket and flask', media:'chatapp',technologies:['Flask','SQLlite','Nginx','Docker'],source:'https://github.com/mage1711/flask-chatapp' ,demo:'http://143.198.126.177/' },

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
    <a href='https://drive.google.com/file/d/1E_Dgqm3YEZQrjIGmCvcXjPpiTBEy1l0f/view?usp=sharing'><Resume className="inline-block w-6 h-6 mb-1 mr-1 "/> Resume</a>
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
  <div className="container mt-3 border-b-2 border-black border-opacity-40"><h1 className="mb-2 text-3xl text-center ">PROJECTS</h1>
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


