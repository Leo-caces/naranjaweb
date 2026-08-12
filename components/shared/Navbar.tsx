'use client'

import { navigationMap, socialNavigationMap } from "@/consts/navigation"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from 'react'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Logo } from "./Logo"


interface Props {
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ isOpen, onClose }: Props) => {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    // Use 'click' instead of 'mousedown' so button click handlers run first
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <>
        
        <aside
        ref={sidebarRef}
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-full max-w-100 flex-col overflow-y-auto bg-secondary py-8 shadow-2xl transition-transform duration-300 ease-out border-r border-white/10 sm:w-lg',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        
        <Logo className="ml-9" />
        <nav className="mt-10">
          <ul>
            {navigationMap.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href

              return (
                <li key={link.href} className="border-b  border-white/10">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      'flex min-h-16 items-center animate-duration-200  hover:text-white text-white hover:bg-orange-300/50 transition-colors pl-6  border-l-7 border-orange-400',
                      isActive
                        ? 'font-semibold border-l-7 border-primary text-white bg-white/10'
                        : ' text-white'
                    )}
                  >
                    
                    <Icon className="mr-3 w-5 h-5" />{link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-10 ml-7 flex gap-5">
          {socialNavigationMap.map((social) => {
            const Icon = social.icon
            const isExternal = social.href.startsWith('http')
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="flex h-9 w-9  items-center justify-center rounded-full text-2xl  transition-colors  text-white/85 hover:text-white"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </aside>
    </>
  )
}
