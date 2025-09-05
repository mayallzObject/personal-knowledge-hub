// src/theme/tokens/palette.ts
import { type PaletteOptions } from '@mui/material/styles'

import { colors } from './colors'

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: colors.primary,
    contrastText: '#fff',
  },
  secondary: {
    main: colors.secondary,
    contrastText: '#fff',
  },
  error: {
    main: colors.error,
  },
  warning: {
    main: colors.warning,
  },
  info: {
    main: colors.info,
  },
  success: {
    main: colors.success,
  },
  background: {
    default: colors.background,
    paper: colors.surface,
  },
  text: {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
  },
  divider: colors.border,
}

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.primary,
    contrastText: '#fff',
  },
  secondary: {
    main: colors.secondary,
    contrastText: '#fff',
  },
  error: {
    main: colors.error,
  },
  warning: {
    main: colors.warning,
  },
  info: {
    main: colors.info,
  },
  success: {
    main: colors.success,
  },
  background: {
    default: '#181a1b',
    paper: '#23272b',
  },
  text: {
    primary: '#fff',
    secondary: '#bbb',
  },
  divider: colors.border,
}
