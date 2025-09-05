import { useMemo } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { createAppTheme } from '@theme/theme'

import App from './App.tsx'

const ThemedApp = () => {
  const mode = 'light'
  const theme = useMemo(() => createAppTheme({ mode }), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

export default ThemedApp
