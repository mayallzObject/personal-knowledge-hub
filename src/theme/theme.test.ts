import { describe, it, expect } from 'vitest'

import { createAppTheme } from '@theme'

describe('createAppTheme', () => {
  it('returns a theme with light palette when mode is light', () => {
    const theme = createAppTheme({ mode: 'light' })
    expect(theme.palette.mode).toBe('light')
    expect(theme.palette).toHaveProperty('primary')
    expect(theme.palette).toHaveProperty('background')
  })

  it('returns a theme with dark palette when mode is dark', () => {
    const theme = createAppTheme({ mode: 'dark' })
    expect(theme.palette.mode).toBe('dark')
    expect(theme.palette).toHaveProperty('primary')
    expect(theme.palette).toHaveProperty('background')
  })
})
