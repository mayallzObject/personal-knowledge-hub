# Testing Guide

This document describes the testing strategy, conventions, and best practices for this project using Vitest and React Testing Library.

## General Rules

- All new features and bug fixes must include appropriate tests.
- Place all test files alongside the code they test, using the `.test.tsx` or `.test.ts` suffix.
- Use descriptive test names and group related tests with `describe` blocks.
- Prefer testing user-facing behavior over implementation details.

## Vitest Usage

- Use Vitest as the test runner (`npm run test` or `npm run test:coverage`).
- The test environment is set to `jsdom` for React component testing.
- Global matchers from `@testing-library/jest-dom` are available via `src/setupTests.ts`.
- Coverage is collected only from `src/**/*.{ts,tsx}` (excluding entry points and type files).

## React Testing Library Patterns

- Use `render` from `@testing-library/react` to mount components.
- Use queries like `getByRole`, `getByText`, etc., to select elements.
- Use `user-event` for simulating user interactions.
- Avoid querying by implementation details (e.g., class names).

## Do / Don't Examples

**Do:**

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders welcome message', () => {
  render(<App />)
  expect(screen.getByText(/welcome/i)).toBeInTheDocument()
})
```

**Don't:**

```tsx
// Don't test internal state or private methods directly
// Don't use setTimeout for async tests unless necessary
```

## Running Tests

- Run all tests: `npm test`
- Run with coverage: `npm run test:coverage`

## More Resources

- [Vitest Docs](https://vitest.dev/)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
