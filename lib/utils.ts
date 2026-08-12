import { type ClassValue, clsx } from 'clsx';
import path from 'path';
import { twMerge } from 'tailwind-merge'

/*
* Une clases condicionales de manera inteligente con soporte para tailwind.
* - Usa clsx para lógica condicional.
* - Usa tailwnd-merge para evitar conflictos de clases
*/

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(...inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDay(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
        day: '2-digit'
    });
}

export function formatShortMonth(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short'
    });
}

