# Botverse — AI Ethical Dilemma Simulator

Botverse is a Next.js application that generates interactive, multi‑stage ethical dilemmas. Users choose a difficulty level (Easy, Medium, Hard) and progress through realistic scenarios with branching consequences. The app integrates with Puter.ai for chat generation and features a polished, responsive UI built with Tailwind CSS 4.

## Features

- Multi‑stage ethical dilemma simulator powered by Puter AI
- Difficulty modes that control the number of options per step
  - Easy: 4 options
  - Medium: 3 options
  - Hard: 2 options
- Scenario box and Choices box as separate responsive panels on mobile and desktop
- Session persistence for selected difficulty
- Glassmorphism UI with smooth micro‑interactions
- Next.js App Router and React 19

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Puter.ai JS SDK (`https://js.puter.com/v2/`)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended LTS)
- npm, pnpm, or yarn

### Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

### Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open `http://localhost:3000` to view the app.

## Project Structure

```
botverse/
  app/
    chatbot/            # Chat experience (Scenario + Choices)
    difficulty/         # Difficulty selection page
    layout.js           # App layout
    page.js             # Landing page
  components/           # Reusable UI components
  css/                  # Global CSS utilities
  lib/                  # Utilities
  public/               # Static assets
  tailwind.config.js    # Tailwind configuration
```

## Key Files

- `app/chatbot/page.js`: Main simulator logic and UI
  - Loads Puter SDK dynamically and checks authentication
  - Builds the system prompt based on difficulty
  - Renders two panels:
    - Scenario panel: shows narrative text (options stripped)
    - Choices panel: shows exactly N options based on difficulty
- `app/difficulty/page.js`: Difficulty selection and persistence in `sessionStorage`

## Environment & Authentication

The app uses the Puter.ai SDK loaded at runtime. Users must be signed in to Puter for the simulator to work.

- SDK: `https://js.puter.com/v2/`
- The app checks `window.puter.auth.isSignedIn()` on load
- Unauthenticated users are redirected to `/`

No local env variables are required for development. If your Puter integration requires credentials or project configuration, follow your Puter workspace setup and ensure you can sign in via the Puter SDK in the browser.

## Scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Styling

- Tailwind CSS 4 is configured in `tailwind.config.js` with content paths including `app/**`, `components/**`, and `pages/**`.
- The design uses glassmorphism with layered blurs and gradients.

## Accessibility & Responsiveness

- Mobile‑first layout
- Scenario and Choices are rendered in distinct, vertically stacked boxes on small screens and side‑by‑side on large screens
- Buttons and inputs sized for touch interaction

## Deployment

You can deploy on any platform that supports Next.js 15. Example with Vercel:

1. Push the repository to GitHub
2. Import the project on Vercel
3. Set the framework to Next.js
4. Deploy

If using a custom domain or platform, run:

```bash
npm run build
npm start
```

## Contributing

1. Create a feature branch
2. Make your changes with clear, readable code
3. Run `npm run lint` and ensure no errors
4. Open a PR with a concise description and screenshots if UI changes

## License

This project is licensed under the MIT License. You are free to use, copy, modify, merge, publish, and distribute the software.
