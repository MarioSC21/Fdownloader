'use client'
import { ThemeEnum } from '@/types'
import { useEffect, useState } from 'react'

export function useTheme () {
  const themeLocalStorage = (typeof window !== 'undefined') && (localStorage.getItem('theme') != null) ? localStorage.getItem('theme') : ThemeEnum.DARK
  const [theme, setTheme] = useState(themeLocalStorage)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT))
  }

  useEffect(() => {
    localStorage.setItem('theme', theme as string)
    const localTheme = localStorage.getItem('theme')
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector('html')?.setAttribute('data-theme', localTheme as string)
  }, [theme])

  return { theme, toggleTheme }
}
