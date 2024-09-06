import Image from 'next/image'
import React from 'react'
import {Project} from '../types'
import GitHub from '../public/icons/github-original.svg'
interface ProjectCardProps {
    project: Project
  }
export default function ProjectCard({project}: ProjectCardProps ){

    return(
        <div className="rounded overflow-hidden shadow-lg  ">
            <div className="border-b-2 border-opacity-25 border-black">
      <Image className="w-full" width='500' height='330' layout='responsive' src={`/images/${project.media}.png`} alt="project" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base ">
          {project.description}
        </p>
      </div>
      {project.link &&
      <a href={project.link}><span className="inline-block bg-green-600 rounded-full px-3 py-1 text-white  font-semibold  mr-1 mb-2 hover:bg-green-900 ">Link</span> </a>
}
{project.source && <a href={project.source}><span className="inline-block bg-indigo-600 rounded-full px-3 py-1  font-semibold text-white mr-1 mb-2 hover:bg-indigo-900">Source</span> </a>
}
      {project.documentation &&
        <a href={project.documentation}><span className="inline-block bg-pink-600 rounded-full px-3 py-1  font-semibold text-white mr-1 mb-2 hover:bg-pink-900">Documentation</span> </a>
      }
      <div className="px-6 pt-4 pb-2">
      {project.technologies.map((technology) => (
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{technology}</span>
      ))}

      </div>
      </div>

    )

}