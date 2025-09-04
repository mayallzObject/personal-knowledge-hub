# Contributing Guidelines

Thank you for your interest in contributing to **Personal Knowledge Hub**!
This document outlines the standards and processes to ensure code quality, consistency, and effective collaboration.

---

## 1. Code Standards

- Use **TypeScript** for all source files.
- Prefer **functional components** and React hooks.
- Use **Material UI (MUI)** for all UI elements and style with the `sx` prop.
- Organize code by feature in the `src/features/` directory.
- Use **path aliases** for imports (no `../`).

---

## 2. Formatting & Linting

- Enforce code style with **ESLint** and **Prettier**.
- Run `npm run lint` and `npm run format` before committing.
- Use consistent spacing, semicolons, and trailing commas.

---

## 3. Branching & Commit Messages

- Create branches using this format:
  `us-<user-story-number>/task-<task-number>-<short-description>`
  - Example: `us-1/task-2-add-wireframes`
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages:
  - `feat: [US-1/TASK-2] add wireframes to /docs`
  - `fix: [US-2/TASK-1] correct note saving bug`
- Reference the related issue in your commit message or PR description using `Closes #issue-number`.

---

## 4. Pull Requests

- Open a PR for every change; do **not** commit directly to `main`.
- PR title format: `[US-x/TASK-x] <short description>`
- Ensure all checks pass (lint, tests, build).
- Link the PR to the relevant issue (use `Closes #issue-number`).
- Request a review from at least one team member.

---

## 5. Testing

- Write **unit tests** for all logic and components using **Jest** and **React Testing Library**.
- Place tests in `__tests__` folders or alongside components.
- Ensure new code is covered by tests before merging.

---

## 6. Documentation

- Update `README.md` and `/docs` with relevant changes.
- Add JSDoc comments for complex functions and logic.
- Document architectural decisions and public APIs.

---

## 7. Collaboration

- Be respectful and constructive in code reviews.
- Provide clear feedback and rationale for requested changes.
- Collaborate on solutions and share knowledge.

---

## 8. Issue & Task Management

- Use [GitHub Projects Kanban board](https://github.com/your-username/personal-knowledge-hub/projects/1) for tracking user stories and tasks.
- Create issues for all new features, bugs, and improvements.
- Use `[US-x/TASK-x]` prefixes in issue titles for traceability.

---

**Thank you for helping us build a reliable, scalable, and professional product!**