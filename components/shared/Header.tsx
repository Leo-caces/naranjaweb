'use client'

import { useState, useEffect } from "react"
import { Logo } from '@/components/shared/Logo'
import Image from "next/image"
import { IoMenu } from 'react-icons/io5'
import { Hamburger } from "./Hamburger"
import { Navbar } from "./Navbar"




export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleMenuClick = () => {
      setIsMenuOpen((prev) => !prev)
  }

  const handleMenuClose = () => {
      setIsMenuOpen(false)
  }

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-background' : 'bg-linear-to-b from-primary'
      }`}>
        <Navbar isOpen={isMenuOpen} onClose={handleMenuClose} />
        <div className="px-14 mx-auto">
            <div className="py-3 flex items-center justify-between">
                <Logo />
                <Hamburger onClick={handleMenuClick} isInitiallyOpen={isMenuOpen}  />
            </div>
        </div>
    </header>
  )
}