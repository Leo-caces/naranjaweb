'use client'

import { useEffect, useState } from 'react'
import { Logo } from '@/components/shared/Logo'
import Link from 'next/link'

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="clip-round bg-background  ">
      <div className="flex flex-col items-center justify-center py-14">
        <Logo className="mb-8" />
        <p className="font-semibold text-lg">Naranja Web · Agencia Digital © {year ?? ''}</p>
        <p className="font-semibold text-lg">(+56 9) 8822 8778 · <Link href="mailto:hola@naranjaweb.cl">hola@naranjaweb.cl</Link></p>
      </div>
    </footer>
  )
}