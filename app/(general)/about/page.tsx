import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Esta es la página de información',
  keywords: ['About Page', 'Leo', 'Información']
}

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola mundo</span>
      <span className="text-7xl">About Page</span>
    </main>
  )
}

export default AboutPage
