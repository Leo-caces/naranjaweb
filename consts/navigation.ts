import type { IconType } from "react-icons";

// Icons
import { FaInstagram, FaWhatsapp, FaHouseUser, FaUser } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { SlSpeech } from "react-icons/sl";
import { MdEmail, MdLeaderboard } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";


// Main navigation constant

export interface NavItem {
  label: string
  href: string
  icon: IconType
}

export const navigationMap: NavItem[] = [
  { label: 'Inicio', href: '/', icon: FaHouseUser },
  { label: 'Nosotros', href: '/nosotros', icon: FaUser },
  { label: 'Sitios Web', href: '/sitios-web', icon: LiaTachometerAltSolid },
  { label: 'Gestión de Redes Sociales', href: '/gestion', icon: SlSpeech },
  { label: 'Posicionamiento Web', href: '/posicionamiento', icon: MdLeaderboard },
  { label: 'Email Marketing', href: '/marketing', icon: SiMinutemailer },
  { label: 'Contáctenos', href: '/contacto', icon: MdEmail },
];

// Social icons constant

export interface SocialItem {
  label: string
  href: string
  icon: IconType
}

export const socialNavigationMap: SocialItem[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/algarrobodigital', icon: RiFacebookCircleLine },
  { label: 'Instagram', href: 'https://www.instagram.com/algarrobodigital', icon: FaInstagram },
  { label: 'Whatsapp', href: '/', icon: FaWhatsapp },
  { label: 'eMail', href: 'mailto:algarrobodigital@gmail.com', icon: IoMailUnreadOutline  },
];