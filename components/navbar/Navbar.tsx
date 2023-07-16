import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'

const navItems = [
  { path: '/about', name: 'About' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/contact', name: 'Contact' }
]

export const Navbar = () => {
  console.log('Navbar creado')

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map(({ path, name }) => (
        <Link key={path} className="mr-2" href={path}>
          {name}
        </Link>
      ))}
    </nav>
  )
}
