import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Esta es la página de información',
  keywords: ['About Page', 'Leo', 'Información']
}

const AboutPage = () => {
  return <span className="text-7xl">About Page</span>
}

export default AboutPage
