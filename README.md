# Personal Knowledge Hub

![Build Status](https://img.shields.io/github/actions/workflow/status/mayallzObject/personal-knowledge-hub/main.yml?branch=main)
![License](https://img.shields.io/github/license/mayallzObject/personal-knowledge-hub)

A modern, scalable, and AI-powered web app for collecting, organizing, and searching notes, articles, code snippets, and bookmarks. Built with React, Redux Toolkit, Material UI, RTK Query, Firebase Auth, and GraphQL federation. Designed for both desktop and mobile, with advanced features like semantic search, auto-tagging, and summarization. Follows [UI best practices and coding standards](./STYLEGUIDE.md) for maintainability and accessibility.

---

## 🚀 Features

- **Secure user authentication:** Firebase Auth, Google/GitHub OAuth
- **Knowledge collection:** Notes, articles, code snippets, bookmarks
- **Organization:** Tags, folders, collections
- **AI integration:** Semantic search, auto-tagging, summarization, Q&A
- **Responsive design:** Material UI breakpoints ([see style guide](./STYLEGUIDE.md#6-responsive-design--breakpoints))
- **Accessibility:** Keyboard navigation, ARIA labels, theme toggle ([see style guide](./STYLEGUIDE.md#7-accessibility-standards))
- **Internationalization-ready:** RTL and localization support planned
- **Developer experience:** Storybook, live style guide ([see style guide](./STYLEGUIDE.md#21-developer-experience))

---

## 📝 User Stories

- As a user, I want to securely log in so that my notes and bookmarks are private and accessible only to me.
- As a user, I want to add notes so I can organize my thoughts.
- As a user, I want to search my notes using AI so I can find information quickly.
- As a user, I want to switch between light and dark themes for comfortable viewing.
- As a user, I want an accessible and responsive experience ([see style guide](./STYLEGUIDE.md#7-accessibility-standards)).

---

## 🖼️ Wireframes

![Login Page Wireframe](./docs/login-wireframe.png)
![Home Page Wireframe](./docs/home-wireframe.png)

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux Toolkit, Material UI, RTK Query, React Router, React Hook Form, Zod
- **Backend:** Node.js/Express or Go, GraphQL (Apollo Federation), PostgreSQL/MongoDB
- **AI:** OpenAI API
- **Auth:** Firebase Auth
- **DevOps:** Docker, GitHub Actions, Husky, Prettier, ESLint ([see style guide](./STYLEGUIDE.md#16-tooling--automation))
- **Codegen:** GraphQL Code Generator

---

## 🏗️ Project Structure

```
src/
  features/
    notes/
    bookmarks/
    snippets/
    navigation/
      sidebar/
      bottom/
    theme/
  layouts/
    MainLayout/
      components/
  assets/
  docs/
```

---

## 🏷️ Kanban Board

[View Kanban Board](https://github.com/users/mayallzObject/projects/2)

---

## 🧑‍💻 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for coding standards, commit/branch naming, and collaboration guidelines.

---

## 📄 License

MIT License

---

## 🙋‍♂️ About

Created by [Your Name](https://your-portfolio-link.com)

---
