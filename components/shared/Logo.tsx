'use client'

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import NWLogo from '@/public/logo.svg'

interface Props {
    className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <Link href='/' className={cn('', className)}>
        <Image className='w-48 object-cover' src={NWLogo} alt='Logo Naranja Web' />
    </Link>
  )
  
}
