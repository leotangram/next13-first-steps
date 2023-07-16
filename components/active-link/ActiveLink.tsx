'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './ActiveLink.module.css'

type ActiveLinkProps = {
  path: string
  name: string
}

export const ActiveLink: FC<ActiveLinkProps> = ({ name, path }) => {
  const pathName = usePathname()

  return (
    <Link
      className={`${style.link}${
        pathName === path ? ` ${style['active-link']}` : ''
      }`}
      href={path}
    >
      {name}
    </Link>
  )
}
