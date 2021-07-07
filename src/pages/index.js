import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Home from "../layouts/Home"
import CustomLink from "../components/CustomLink"
import TextToIcon from "../components/TextToIcon"
import ThemeToggle from "../components/ThemeToggle"

const profileData = {
  name: "Amogh Warkhandkar",
  tagline: "Developer",
  socialLinks: [
    {
      id: 1,
      label: "email",
      href: "mailto:amoghw2025@gmail.com",
    },
    {
      id: 2,
      label: "github",
      href: "https://github.com/amogh-w",
    },
    {
      id: 3,
      label: "linkedin",
      href: "https://www.linkedin.com/in/amogh-w/",
    },
    {
      id: 4,
      label: "medium",
      href: "https://medium.com/@amoghw2025",
    },
    {
      id: 5,
      label: "googlescholar",
      href: "http://scholar.google.com/citations?user=9refg3wAAAAJ&hl=en",
    },
    {
      id: 6,
      label: "researchgate",
      href: "https://www.researchgate.net/profile/Amogh_Warkhandkar",
    },
  ],
}

const navLinks = [
  {
    id: 1,
    label: "About",
    href: "/about",
  },
  {
    id: 2,
    label: "Experience",
    href: "/experience",
  },
  {
    id: 3,
    label: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    label: "Publications",
    href: "/publications",
  },
]

const Index = () => {
  return (
    <Home>
      <div className="flex flex-col justify-center items-center">
        <StaticImage
          src="../images/profile.png"
          alt="Profile"
          placeholder="blurred"
          layout="constrained"
          className="w-40 md:w-50 lg:w-60"
        />
        <div className="text-3xl md:text-4xl lg:text-5xl">
          {profileData.name}
        </div>
        <div className="text-secondary text-1xl md:text-2xl lg:text-3xl">
          {profileData.tagline}
        </div>
        <div className="flex text-2xl md:text-3xl lg:text-4xl">
          {profileData.socialLinks.map(link => {
            return (
              <div className="m-2" key={link.id}>
                <a className="link" href={link.href}>
                  <TextToIcon label={link.label} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-4xl italic font-bold">
        {navLinks.map(link => {
          return (
            <CustomLink key={link.id} className="link" to={link.href}>
              {link.label}
            </CustomLink>
          )
        })}
      </div>
      <div className="link text-2xl md:text-3xl lg:text-4xl">
        <ThemeToggle />
      </div>
    </Home>
  )
}

export default Index
