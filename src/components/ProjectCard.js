import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import CustomLink from "../components/CustomLink"

import TextToIcon from "./TextToIcon"

const ProjectCard = ({ project }) => {
  return (
    <div className="paper">
      <div className="h-56 flex relative">
        <GatsbyImage
          image={getImage(project.frontmatter.banner)}
          alt="banner"
        />
        <div className="h-full w-full absolute opacity-0 hover:opacity-80 text-sm bg-contain bg-white dark:bg-nord1 transition-all">
          <div className="h-full w-full flex items-center justify-center text-nord2 dark:text-nord4 text-3xl transform hover:scale-110 transition-all">
            {project.frontmatter.tech.split(" ").map((tech, index) => {
              return (
                <div key={index} className="m-2">
                  <TextToIcon label={tech} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-xl md:text-2xl lg:text-3xl pb-2">
          <CustomLink to={`/${project.slug}`}>
            {project.frontmatter.title}
          </CustomLink>
          <div className="m-2">
            <a className="link" href={project.frontmatter.github}>
              <TextToIcon label="github" />
            </a>
          </div>
        </div>
        <div className="text-secondary text-sm lg:text-base">
          {project.excerpt}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
