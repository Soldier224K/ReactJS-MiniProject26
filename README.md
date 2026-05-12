# P@55W0Rd G9&9R6T0R

A sleek, BMW M-inspired password generator built with React and Vite. Generates cryptographically sound passwords with fine-grained control over length, character sets, and embedded memorable strings.

---

## Features

- **Adjustable Length** — slide from 8 to 32 characters
- **Character Set Toggles** — include/exclude numbers and symbols independently
- **Suggestion Embedding** — weave a memorable word or phrase into the generated password
- **Strength Indicator** — real-time feedback (Weak / Fair / Good / Strong)
- **One-Click Copy** — copy to clipboard with visual confirmation
- **Auto-Generate** — new password generated instantly on any setting change

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Lucide React | 1.14 |

---

## Project Structure

```
src/
├── components/
│   ├── PasswordGenerator.jsx   # Root state + orchestration
│   ├── PasswordDisplay.jsx     # Output field with copy & refresh actions
│   ├── Controls.jsx            # Slider, toggles, and suggestion input
│   └── StrengthIndicator.jsx   # Strength score and bar visualisation
├── App.jsx                     # Layout and branding shell
├── main.jsx                    # React entry point
└── index.css                   # Global styles and CSS custom properties
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## How Password Generation Works

Every password guarantees at minimum one lowercase letter and one uppercase letter. When enabled, at least one number and one symbol are also injected. The suggestion string (if provided) is embedded verbatim after stripping whitespace. All segments are then combined and shuffled using a Fisher-Yates algorithm, so the suggestion position is never predictable.

```
password = shuffle([required chars] + [suggestion] + [random fill])
```

The suggestion is capped at `length − 4` characters to always leave room for the required character classes.

---

## Strength Scoring

| Score | Label  | Criteria |
|-------|--------|----------|
| ≤ 1   | WEAK   | Short length only |
| 2     | FAIR   | Length > 8 or one character class |
| 3     | GOOD   | Length ≥ 12 + one character class |
| 4     | STRONG | Length ≥ 12 + numbers + symbols |

---

## Design

The UI follows a BMW M motorsport aesthetic: black canvas, white typography, and the signature M tricolour stripe (blue / dark blue / red) as a visual anchor. All surface tokens, colours, and spacing are defined as CSS custom properties in `index.css`.
