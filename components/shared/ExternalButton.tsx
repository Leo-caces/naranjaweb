'use client'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ExternalButtonProps {
    href: string // URL de destino
    children: ReactNode // Texto o íconos dentro del botón
}

export default function ExternalButton({href, children}: ExternalButtonProps) {
  return (
    <Link
        href={href}
        target="_blank" // Abre en pestaña nueva
        rel="noopener noreferrer" // Protege la seguridad y rendimiento del navegador
        className="inline-flex items-center justify-center px-5 py-3 text-xl bg-background rounded-full hover:scale-110 transform transition-all text-white"
    >
        {children}
    </Link>
  )
}

