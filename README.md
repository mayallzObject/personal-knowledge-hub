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

### 🛡️ Code Quality Automation (Husky & lint-staged)

This project uses [Husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged) to enforce code quality before code is committed or pushed:

- **Pre-commit:** Runs ESLint and Prettier on staged files. If any lint or formatting errors are found, the commit will be blocked until they are fixed.
- **Pre-push:** Runs all tests before allowing a push. If tests fail, the push is blocked.

#### How it works

1. When you `git commit`, Husky triggers lint-staged, which runs ESLint and Prettier only on files you staged for commit.
2. If any issues are found, the commit is stopped and you must fix the errors before committing again.
3. When you `git push`, Husky runs the test suite. If tests fail, the push is blocked.

#### Customizing checks

- To add more checks, edit `.husky/pre-commit`, `.husky/pre-push`, or `lint-staged.config.json`.

#### Why?

This ensures that only well-formatted, lint-free, and tested code enters the repository, improving code quality and reducing errors for everyone.

---

## 🐳 Docker Usage

### Build and Run for Production

1. Build the Docker image:
   ```sh
   docker build -t personal-knowledge-hub .
   ```
2. Run the production container:
   ```sh
   docker run -p 4173:4173 personal-knowledge-hub
   ```

### Development Mode

1. Build the dev image:
   ```sh
   docker build --target dev -t personal-knowledge-hub-dev .
   ```
2. Run the dev container (with hot reload):
   ```sh
   docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules personal-knowledge-hub-dev
   ```

> **Note:** The `docker:dev` script in `package.json` uses Unix shell syntax (`$(pwd)`). On Windows, use Git Bash or manually specify the full path to your project directory in the `-v` option.

### Notes

- The `.dockerignore` file ensures your image is small and fast by excluding unnecessary files.
- For more advanced Docker usage, see the official [Docker documentation](https://docs.docker.com/).

---

## 📄 License

MIT License

---

## 🙋‍♂️ About

Created by [Your Name](https://your-portfolio-link.com)

---
