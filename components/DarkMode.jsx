'use client';

import { BsSunFill, BsMoon } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {
        currentTheme === "dark" ? (
          <BsSunFill onClick={() => setTheme('light')} />
        ) : (
          <BsMoon onClick={() => setTheme('dark')} />
        )
      }
    </>
  )
}

export default DarkMode