import * as React from 'react'
import { 
  UserSection, 
  SocialLinks, 
  ExperienceSection, 
  EducationSection 
} from './pages'
import {
  Tag,
  Footer
} from './components'

export default function App() {
  return (
    <>
      <UserSection />
      <Tag label="Education" />
      <EducationSection />
      <Tag label="Experience" />
      <ExperienceSection />
      <Tag label="Socials" />
      <SocialLinks />
      <Footer />
    </>
  )
}
