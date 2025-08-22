# Botverse — AI Ethical Dilemma Simulator & Universal Analyzer

Botverse is a comprehensive Next.js application featuring two main AI-powered tools: an interactive multi‑stage ethical dilemma simulator and a universal AI dilemma analyzer. Users can choose difficulty levels for structured scenarios or submit custom problems for strategic analysis. The app integrates with Puter.ai for chat generation and features a polished, responsive UI with advanced animations and glassmorphism effects.

## Problem Statement -

AI ETHICAL DILEMME SIMULATOR : Create an AI agent based on the assigned concept and present its business model/idea to our esteemed panel of judges.

## Features

### Core Simulators

- **Multi‑stage Ethical Dilemma Simulator** (`/chatbot`) - Guided ethical scenarios with branching consequences
  - Difficulty modes that control the number of options per step
    - Easy: 4 options
    - Medium: 3 options
    - Hard: 2 options
  - Scenario and Choices panels with responsive design
  - Session persistence for selected difficulty
- **Universal AI Dilemma Analyzer** (`/ownchat`) - Custom problem analysis tool
  - Strategic analysis for any question, problem, or decision
  - Comprehensive stakeholder identification
  - Multi-perspective evaluation with scored recommendations
  - Structured response format with advantages/considerations
  - Success metrics and next steps guidance

### UI/UX Features

- **Advanced Animations**
  - Custom text generation effects with staggered word animations
  - WebGL-powered background with CPPN (Compositional Pattern Producing Networks)
  - Animated star borders with customizable colors and speeds
- **Responsive Design**
  - Mobile‑first layout with adaptive panels
  - Glassmorphism UI with smooth micro‑interactions
  - Touch-optimized buttons and inputs
- **Authentication Integration**
  - Puter.ai SDK integration with dynamic loading
  - Persistent authentication state
  - Seamless sign-in flow

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS 4
- **Animations**: Framer Motion (motion/react), OGL (WebGL)
- **AI Integration**: Puter.ai JS SDK (`https://js.puter.com/v2/`)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS 4, Custom CSS animations

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
    chatbot/            # Ethical dilemma simulator (Scenario + Choices)
    difficulty/         # Difficulty selection page
    ownchat/           # Universal AI dilemma analyzer
    layout.js           # App layout
    page.js             # Landing page with navigation
  components/
    ui/
      text-generate-effect.jsx  # Text animation component
    DarkVeil.js         # WebGL background effect
    StarBorder.js       # Animated border component
  css/
    StarBorder.css      # Star border animations
  lib/                  # Utilities (cn helper, etc.)
  public/               # Static assets
  tailwind.config.js    # Tailwind configuration
```

## Key Files & Components

### Core Pages

- **`app/page.js`**: Landing page with animated text effects and dual navigation
  - WebGL background with CPPN shaders
  - Text generation effects with motion blur
  - Dual-path navigation to simulator or analyzer
- **`app/chatbot/page.js`**: Structured ethical dilemma simulator
  - Dynamic system prompts based on difficulty
  - Two-panel layout (Scenario + Choices)
  - Progress tracking through multiple stages
- **`app/ownchat/page.js`**: Universal AI dilemma analyzer
  - Open-ended problem submission
  - Structured analysis with stakeholder identification
  - Strategic options with scoring and recommendations
- **`app/difficulty/page.js`**: Difficulty selection with session persistence

### UI Components

- **`components/DarkVeil.js`**: WebGL shader background using OGL library
- **`components/StarBorder.js`**: Animated button borders with customizable colors
- **`components/ui/text-generate-effect.jsx`**: Staggered text animations with blur effects

## Environment & Authentication

The app uses the Puter.ai SDK loaded at runtime. Users must be signed in to Puter for AI features to work.

- **SDK**: `https://js.puter.com/v2/`
- **Auth Check**: `window.puter.auth.isSignedIn()` on load
- **Model**: Uses `gpt-4o-mini` for AI responses
- **Unauthenticated**: Users are prompted to sign in via Puter SDK

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

## Styling & Animations

- **Tailwind CSS 4** configured with content paths including `app/**`, `components/**`
- **Glassmorphism design** with layered blurs and gradients
- **Custom animations**:
  - WebGL background effects using fragment shaders
  - Text generation with staggered word reveals
  - Animated star borders with CSS keyframes
  - Motion blur effects with Framer Motion
- **Responsive breakpoints** optimized for mobile-first design

## Accessibility & Responsiveness

- **Mobile‑first layout** with adaptive stacking
- **Touch-optimized interactions** with proper sizing
- **Keyboard navigation** support for form elements
- **Loading states** with progress indicators
- **Error handling** with fallback content
- **Authentication prompts** for protected features

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

## Usage Guide

### Ethical Dilemma Simulator

1. Navigate to landing page and click "Sign In to Get Started"
2. Select difficulty level (Easy/Medium/Hard)
3. Progress through multi-stage scenarios
4. Make choices and see consequences unfold
5. Reach final outcomes based on decisions

### Universal Dilemma Analyzer

1. Click "Continue to give your own Dilemma" from landing page
2. Enter any question, problem, or decision in the text area
3. Click "Analyze with AI" to get comprehensive analysis
4. Review stakeholder identification and strategic options
5. Use scoring and recommendations to guide decisions

## Contributing

1. Create a feature branch
2. Make your changes with clear, readable code
3. Run `npm run lint` and ensure no errors
4. Test animations and WebGL compatibility across devices
5. Open a PR with a concise description and screenshots if UI changes

## License

This project is licensed under the MIT License. You are free to use, copy, modify, merge, publish, and distribute the software.
