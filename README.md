# Portal

An in-progress personal web application by **Dila Ozersen**, intended to support shared workspaces, projects, tasks, calendars, and conversations.

## Public source versus local development

**Status reviewed October 20, 2026.** The public `main` branch at commit `2fd7d63e5eac4f8b310d36fadaaa0993f9318d00` contains an earlier frontend version. Dila's newer local work has not all been pushed. The sections below distinguish source available for inspection from reported local functionality.

### Available in the reviewed public source

- React/TypeScript/Vite frontend.
- Landing page and navigation.
- Login and registration interfaces.
- Required form fields and password-confirmation checking.
- Routes `/`, `/login`, and `/register`.

The public login form reports that authentication is unavailable; the registration form reports that registration is unavailable. These forms do not create or authenticate accounts in this version. The reviewed public source does not include the reported Express/PostgreSQL backend.

### Reported in the newer local version — not verified in public source

- Working landing page and basic user display.
- Development accounts created with a fictitious email address and password, then used to log in.
- Password hashing and PostgreSQL persistence.
- Connection requests and basic chatroom connections, still being cleaned up before publication.

These statements reflect Dila's October 20 development report, not an independent runtime audit. Full message delivery, persistence, and real-time behavior are not confirmed. Email-address verification/integration remains future work; an email-shaped login identifier does not verify inbox ownership.

### Planned / not yet implemented

- Company and personal workspaces.
- Teams, projects, tasks, and collaboration workflows.
- Shared calendars.
- Role-based permissions.
- Complete direct and group messaging, beyond the partial chat-related work above.
- Real-email integration.

No delivery dates or production-readiness claims are made.

## Technologies

**Evidenced in the public frontend:** React, React Router, TypeScript, Vite, ESLint, and CSS.

**Confirmed by Dila for the broader development version:** Node.js, Express, PostgreSQL, `pg`, and SQL migrations, alongside the frontend stack. The backend implementation is not included in the reviewed public version.

## Public frontend setup

The commands below follow the committed package configuration and lockfile; they have not been validated by a clean install/run in this review.

```bash
git clone https://github.com/Dila-Ozersen/portal.git
cd portal/app
npm ci
npm run dev
```

Use the local URL printed by Vite. Exact supported Node.js/npm versions still need to be documented from a successful setup.

Other scripts in `app/package.json`, run from `portal/app`:

```bash
npm run build
npm run lint
npm run preview
```

`build` runs TypeScript checks and creates the Vite build. `lint` runs ESLint; it is not a functional test suite. `preview` serves an existing build locally, so build first. No successful results for these commands are asserted here.

These steps describe only the public frontend. The reviewed source does not require a documented backend/database service to explain its placeholder form behavior. Setup for the newer backend version, database, migrations, and configuration remains unpublished/undocumented here.

## Current limitations and validation

- Public account forms are UI placeholders, not working registration/login.
- Public source and the newer local version are not synchronized.
- No automated test script is defined in the reviewed frontend package; no functional test result or clean-checkout run is supplied.
- No public demo, screenshot set, or production deployment is established.
- The newer local login/session implementation and hashing method have not been audited.
- Exact backend schema/routes, setup steps, chat behavior, and project start date remain unresolved.
- Two-factor authentication appears as a design idea in the landing copy, but is not implemented or a confirmed roadmap commitment.

## Author

**Dila Ozersen** · [GitHub](https://github.com/Dila-Ozersen) · [LinkedIn](https://www.linkedin.com/in/dila-ozersen-b50a88326/)

## License

No project license has been confirmed. Public source visibility alone does not establish reuse permission.
