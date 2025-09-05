# 🤝 Contributing Guidelines

![Collaboration](https://img.shields.io/badge/collaboration-welcome-brightgreen)
![Code Style](https://img.shields.io/badge/code%20style-ESLint%20%7C%20Prettier-blue)
![Tech Stack](https://img.shields.io/badge/tech-React%20%7C%20MUI%20%7C%20TypeScript-blue)

Thank you for your interest in contributing to **Personal Knowledge Hub**!
This document outlines the standards and processes to ensure code quality, consistency, and effective collaboration.

---

## 📚 Table of Contents

1. [🛠️ Code Standards](#1-code-standards)
2. [🧹 Formatting & Linting](#2-formatting--linting)
3. [🌳 Branching & Commit Messages](#3-branching--commit-messages)
4. [🔀 Pull Requests](#4-pull-requests)
5. [🧪 Testing](#5-testing)
6. [📄 Documentation](#6-documentation)
7. [🤗 Collaboration](#7-collaboration)
8. [📋 Issue & Task Management](#8-issue--task-management)

---

## 1. 🛠️ Code Standards

- Use **TypeScript** for all source files.
- Prefer **functional components** and React hooks.
- Use **Material UI (MUI)** for all UI elements and style with the `sx` prop ([see style guide](./STYLEGUIDE.md#5-styling-approach-sx-prop--sx-files)).
- Organize code by feature in the `src/features/` directory.
- Use **path aliases** for imports (no `../`).

---

## 2. 🧹 Formatting & Linting

- Enforce code style with **ESLint** and **Prettier** ([see style guide](./STYLEGUIDE.md#16-tooling--automation)).
- Run `npm run lint` and `npm run format` before committing.
- Use consistent spacing, semicolons, and trailing commas.

---

## 3. 🌳 Branching & Commit Messages

- Create branches using this format:
  `<type>/us-<user-story-number>/task-<task-number>/<short-description>`
  - Example: `feat/us-1/task-2/add-wireframes`
  - Example: `bugfix/us-2/task-10/fix-login`
  - Example: `chore/us-3/task-5/update-deps`
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages:
  - `feat: [US-1/TASK-2] add wireframes to /docs`
  - `fix: [US-2/TASK-1] correct note saving bug`
- Reference the related issue in your commit message or PR description using `Closes #issue-number`.

---

## 4. 🔀 Pull Requests

- Open a PR for every change; do **not** commit directly to `main`.
- PR title format: `[US-x/TASK-x] <short description>`
- Ensure all checks pass (lint, tests, build).
- Link the PR to the relevant issue (use `Closes #issue-number`).
- Request a review from at least one team member.

---

## 5. 🧪 Testing

- Write **unit tests** for all logic and components using **Jest** and **React Testing Library**.
- Place tests in `__tests__` folders or alongside components.
- Ensure new code is covered by tests before merging.

---

## 6. 📄 Documentation

- Update `README.md` and `/docs` with relevant changes ([see style guide](./STYLEGUIDE.md#21-developer-experience)).
- Add JSDoc comments for complex functions and logic.
- Document architectural decisions and public APIs.

---

## 7. 🤗 Collaboration

- Be respectful and constructive in code reviews.
- Provide clear feedback and rationale for requested changes.
- Collaborate on solutions and share knowledge.

---

## 8. 📋 Issue & Task Management

- Use [GitHub Projects Kanban board](https://github.com/your-username/personal-knowledge-hub/projects/1) for tracking user stories and tasks.
- Create issues for all new features, bugs, and improvements.
- Use `[US-x/TASK-x]` prefixes in issue titles for traceability.

---

**Thank you for helping us build a reliable, scalable, and professional product!**
