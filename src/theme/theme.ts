import { darkPalette, lightPalette } from '@design-tokens'

import { createTheme, type ThemeOptions } from '@mui/material/styles'

type ThemeMode = 'light' | 'dark'

export type ThemeOptionsInput = {
  mode: ThemeMode
}

export function createAppTheme({ mode }: ThemeOptionsInput) {
  const themeOptions: ThemeOptions = {
    palette: mode === 'dark' ? darkPalette : lightPalette,
  }

  return createTheme(themeOptions)
}

export type AppTheme = ReturnType<typeof createAppTheme>
