# Portal frontend

This folder contains Portal's public React, TypeScript, and Vite frontend. See the [main project README](../README.md) for feature status and the distinction between public source and unpublished local development.

## Local development

From this `app` folder:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Available routes are `/`, `/login`, and `/register`. In the reviewed public version, login and registration are placeholder interfaces; they do not create or authenticate accounts.

## Other package scripts

```bash
npm run build
npm run lint
npm run preview
```

Build before running preview. ESLint is not a functional test suite. These commands come from the committed package configuration and have not been verified by a clean run in this review. Supported Node.js/npm versions remain to be confirmed.
