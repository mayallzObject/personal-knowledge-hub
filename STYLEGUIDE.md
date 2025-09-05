# Personal Knowledge Hub Style Guide

![Best Practices](https://img.shields.io/badge/style-guide-blue)
![Accessibility](https://img.shields.io/badge/accessibility-AA-green)
![Tech Stack](https://img.shields.io/badge/tech-React%20%7C%20MUI%20%7C%20TypeScript-blue)

> **Purpose:** Defines UI and styling standards for Personal Knowledge Hub. Adhering to these guidelines ensures a consistent, accessible, and maintainable user experience across all features and contributors.

---

## 📚 Table of Contents

1. [🎯 Introduction](#1-introduction)
2. [💡 Principles & Philosophy](#2-principles--philosophy)
3. [🎨 Theme Architecture & Design Tokens](#3-theme-architecture--design-tokens)
4. [🧩 MUI Component Usage](#4-mui-component-usage)
5. [🖌️ Styling Approach (`sx` Prop & sx Files)](#5-styling-approach-sx-prop--sx-files)
6. [📱 Responsive Design & Breakpoints](#6-responsive-design--breakpoints)
7. [♿ Accessibility Standards](#7-accessibility-standards)
8. [📏 Layout & Spacing](#8-layout--spacing)
9. [🔧 Component Overrides & Customization](#9-component-overrides--customization)
10. [🔤 Typing & Props for sx Objects](#10-typing--props-for-sx-objects)
11. [📁 Naming Conventions (Files, Variables, Styles)](#11-naming-conventions-files-variables-styles)
12. [🗂️ File & Folder Structure for Styles](#12-file--folder-structure-for-styles)
13. [♻️ Reusability & Modularity](#13-reusability--modularity)
14. [⚡ Performance Considerations](#14-performance-considerations)
15. [🧪 Testing & Documentation for Styles](#15-testing--documentation-for-styles)
16. [🤖 Tooling & Automation](#16-tooling--automation)
17. [🤝 Contribution Workflow](#17-contribution-workflow)
18. [🦾 Accessibility Testing](#18-accessibility-testing)
19. [📊 Performance Metrics](#19-performance-metrics)
20. [🌍 Internationalization & RTL](#20-internationalization--rtl)
21. [🛠️ Developer Experience](#21-developer-experience)
22. [🔄 Continuous Improvement](#22-continuous-improvement)
23. [✅ Do’s and Don’ts (Best Practices & Anti-Patterns)](#23-dos-and-donts-best-practices--anti-patterns)
24. [🔗 References & Further Reading](#24-references--further-reading)
25. [🖼️ Visual Examples](#25-visual-examples)

---

## 1. Introduction

This guide covers all aspects of UI development and styling using [Material UI (MUI)](https://mui.com/material-ui/getting-started/overview/) in Personal Knowledge Hub.
It is intended for all contributors and should be followed for every UI change.

---

## 2. Principles & Philosophy

- Consistency, clarity, and accessibility are top priorities.
- Prefer convention over configuration.
- Use MUI’s system and patterns for all UI work, including theme values, breakpoints, and the `sx` prop.
- Design for scalability and maintainability.
- Avoid repeating guidance about sx files and theme spacing in multiple sections—see dedicated sections below.

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for practical examples.

---

## 3. Theme Architecture & Design Tokens

Centralize all design tokens (colors, spacing, typography, radii, etc.) in `src/theme/tokens/` and import them into your theme.

**Example:**

```typescript
// src/theme/theme.ts
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { paper: '#fff', default: '#f4f6f8' },
  },
  spacing: 8,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  // Example custom property
  custom: {
    sidebarWidth: 240,
  },
})
```

```typescript
// src/theme/theme.d.ts
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      sidebarWidth: number
    }
  }
  interface ThemeOptions {
    custom?: {
      sidebarWidth?: number
    }
  }
}
```

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for theme usage examples.
> See [References & Further Reading](#17-references--further-reading) for more on theming.

---

## 4. MUI Component Usage

- Use MUI components for all UI elements.
- Prefer built-in props and composition over custom implementations.
- Extend MUI components only when necessary.
- Use `Box` for generic containers, `Stack` for layout, and `Grid` for complex layouts.

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for component usage examples.

---

## 5. Styling Approach (`sx` Prop & sx Files)

- **All sxProps objects must be defined and exported from dedicated `*.sx.ts` files.**
- Do not define sxProps inline in components.
- Use string keys for theme values (e.g., `'primary.main'`, `p: 2`).
- For dynamic styles, define sx objects as functions with `(theme: Theme) => ({ ... })`.
- Always import `Theme` from `@mui/material` for type safety, including when you extend the theme.

**Example:**

```typescript
// src/features/navigation/sidebar/sidebarNavList.sx.ts
import { SxProps, Theme } from '@mui/material'

// Static sx object
export const sidebarNavListRoot: SxProps = {
  bgcolor: 'background.paper',
  color: 'primary.main',
  p: 2,
}

// Dynamic sx object
export const sidebarNavListItem = (theme: Theme) => ({
  color: theme.palette.secondary.main,
  padding: theme.spacing(2.5),
  width: theme.custom.sidebarWidth, // using extended theme property
})
```

**Usage in component:**

```tsx
import { sidebarNavListRoot, sidebarNavListItem } from './sidebarNavList.sx';

<Box sx={sidebarNavListRoot}>...</Box>
<Box sx={sidebarNavListItem(theme)}>...</Box>
```

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for styling examples.
> See [References & Further Reading](#17-references--further-reading) for MUI sx prop documentation.

---

## 6. Responsive Design & Breakpoints

- Use MUI’s breakpoint system for responsive layouts.
- Place breakpoint-based styles in sx files for maintainability.

**Example:**

```typescript
// src/features/layout/mainLayout.sx.ts
import { SxProps } from '@mui/material'

export const mainLayoutRoot: SxProps = {
  display: { xs: 'block', md: 'flex' },
  p: { xs: 1, md: 3 },
}
```

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for responsive examples.
> See [References & Further Reading](#17-references--further-reading) for MUI breakpoints documentation.

---

## 7. Accessibility Standards

- Ensure all interactive elements are keyboard accessible.
- Use ARIA labels for navigation and forms.
- Use semantic HTML within MUI components.
- Test UI for accessibility on all supported devices.

**Example:**

```tsx
<form aria-labelledby="login-form-title">
  <h2 id="login-form-title">Login</h2>
  <TextField label="Email" aria-required fullWidth margin="normal" />
  <TextField label="Password" type="password" aria-required fullWidth margin="normal" />
  <Button type="submit" aria-label="Submit login form">
    Login
  </Button>
</form>
```

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for accessibility examples.
> See [References & Further Reading](#17-references--further-reading) for accessibility resources.

---

## 8. Layout & Spacing

- Use theme spacing (`p`, `m`, `theme.spacing(n)`) for layout.
- Avoid hardcoded pixel values; always use theme units for consistency.
- Place all spacing logic in sx files. (See section 5 for details.)

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for spacing examples.

---

## 9. Component Overrides & Customization

- Use the `components` key in the theme for global overrides.
- Document all overrides in `theme.ts` for maintainability.
- For advanced customization, consider MUI variants, CSS utilities, and dark mode support.

**Example:**

```typescript
// src/theme/theme.ts
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
      },
    },
  },
},
```

> See [References & Further Reading](#17-references--further-reading) for theme customization.

---

## 10. Typing & Props for sx Objects

- Use TypeScript for all sx objects.
- Use `SxProps` for static sx objects.
- For dynamic sx objects, type the function parameter as `theme: Theme`.
- No need to specify a return type for dynamic sx functions; TypeScript will infer it.

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for typing examples.

---

## 11. Naming Conventions (Files, Variables, Styles)

- Use PascalCase for component files.
- Use camelCase for variables and sx objects.
- Name style files as `*.sx.ts` for clarity.

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for naming examples.

---

## 12. File & Folder Structure for Styles

- Place feature-specific sx files in their respective folders.
- Organize global styles and theme in `src/theme/`.
- Use barrel files (`index.ts`) for grouped exports.

**Global vs. Feature Styles:**

- Use global theme overrides for shared styles (see section 9).
- Use feature-specific sx files for component-level customization.

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for structure examples.

---

## 13. Reusability & Modularity

- Create reusable sx objects and components.
- Avoid duplication by centralizing common styles.

> See [Do’s and Don’ts](#16-dos-and-donts-best-practices--anti-patterns) for reusability examples.

---

## 14. Performance Considerations

- Minimize unnecessary re-renders by memoizing components (e.g., with `React.memo`).
- Avoid deep nesting of styled or layout components to reduce rendering complexity.
- Use MUI’s system props and sx objects for efficient styling.

**Example:**

```tsx
import React from 'react'
import { Box } from '@mui/material'

// Memoized component to prevent unnecessary re-renders
const MemoizedSidebar = React.memo(function Sidebar({ sx, children }) {
  return <Box sx={sx}>{children}</Box>
})
```

> See [References & Further Reading](#17-references--further-reading) for performance tips.

---

## 15. Testing & Documentation for Styles

- Write unit tests for custom styled components.
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for UI tests.
- Document complex styles and overrides in code comments and `/docs`.

**Example:**

```tsx
import { render } from '@testing-library/react'
import MyComponent from './MyComponent'

test('applies correct spacing', () => {
  const { getByTestId } = render(<MyComponent />)
  expect(getByTestId('main-box')).toHaveStyle('padding: 8px')
})
```

## 18. Visual Examples

[// Placeholder: Add screenshots or diagrams to clarify layout, spacing, and responsive design.]

> See [References & Further Reading](#17-references--further-reading) for testing resources.

---

## 16. Do’s and Don’ts (Best Practices & Anti-Patterns)

**Do:**

```typescript
// Good: Export sx objects from sx files
export const buttonPrimary: SxProps = {
  color: 'primary.main',
  bgcolor: 'secondary.main',
  p: 2,
}

// Good: Use theme values and breakpoints in sx files
export const responsiveBox: SxProps = {
  display: { xs: 'block', md: 'flex' },
  p: { xs: 1, md: 3 },
}

// Good: Use dynamic sx object for advanced theme usage
import { Theme } from '@mui/material'
export const sidebarNavListItem = (theme: Theme) => ({
  color: theme.palette.secondary.main,
  padding: theme.spacing(2.5),
  width: theme.custom.sidebarWidth,
})
```

**Don't:**

```tsx
// Avoid: Inline sx objects in components
<Box sx={{ p: 2, color: 'primary.main' }} />

// Avoid: Inline styles
<Box style={{ padding: '16px', color: 'blue' }} />

// Avoid: External CSS files for component styling
import './MyComponent.css';

// Avoid: Hardcoded pixel values
export const badSpacing: SxProps = {
  p: '16px',
};
```

---

## 17. References & Further Reading

- [Material UI Documentation](https://mui.com/material-ui/getting-started/overview/)
- [MUI System - The `sx` Prop](https://mui.com/system/the-sx-prop/)
- [MUI Custom Theme](https://mui.com/material-ui/customization/theming/)
- [MUI Breakpoints](https://mui.com/material-ui/customization/breakpoints/)
- [React Best Practices](https://react.dev/learn/thinking-in-react)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

**Following this style guide ensures a unified, scalable, and maintainable UI across Personal Knowledge Hub.**

---

## 18. Visual Examples

Below are sample visual aids to clarify layout, spacing, and responsive design. Replace with your own screenshots or diagrams as needed.

### Example: Responsive Layout Diagram

![Responsive Layout Example](docs/Output%20screen.png)

### Example: Login Screen (Desktop)

![Login Desktop](docs/Login%20-%20Desktop.png)

---

## 19. Advanced MUI Patterns

### Variants

```typescript
// src/theme/theme.ts
components: {
  MuiButton: {
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          border: '2px dashed #1976d2',
        },
      },
    ],
  },
},
```

### Dark Mode

```typescript
// src/theme/theme.ts
palette: {
  mode: 'dark',
  primary: { main: '#90caf9' },
  background: { default: '#121212' },
},
```

### Custom Breakpoints

```typescript
// src/theme/theme.ts
breakpoints: {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    xxl: 1920, // custom breakpoint
  },
},
```

---

## 20. Troubleshooting & FAQ

### Why isn’t my sx prop style applying?

- Check for typos in property names.
- Ensure you’re using theme values, not hardcoded pixels.
- Confirm the sx object is imported from the correct file.

### How do I debug responsive issues?

- Use MUI’s breakpoint helpers and inspect with browser dev tools.
- Test on multiple device sizes.

### My custom theme property isn’t typed

- Extend the theme using TypeScript module augmentation (see section 3).

---

## 21. Contributor Tips

### Onboarding

- Read this style guide before making UI changes.
- Review existing sx files and theme structure.
- Ask questions if anything is unclear—consistency is key.

### Code Review

- Check for use of theme values and sx files.
- Ensure accessibility and responsive design are implemented.
- Suggest improvements and share best practices.
