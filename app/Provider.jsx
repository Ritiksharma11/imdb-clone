'use client';

import { ThemeProvider } from 'next-themes'

const Provider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-slate-800 min-h-screen transition-colors duration-300 select-none '>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Provider