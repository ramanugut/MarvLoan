# MarvLoan

This repository contains the initial scaffolding for the **MarvLoan** project.
It includes configuration for Firebase and a minimal Node.js setup. Further
modules and source code will be added over time.

## Contents
- `firebase.json` – Firebase services configuration
- `.firebaserc` – Firebase project aliases
- `package.json` – Node.js tooling and scripts
- `scripts/` – placeholder directory for build or deployment scripts

## Getting Started
1. Install the Firebase CLI and project dependencies:
   ```bash
   npm install -g firebase-tools
   npm install
   ```
2. Initialize Firebase if you haven't already:
   ```bash
   firebase use --add
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   This uses [Vite](https://vitejs.dev/) to serve the code in `app/`.

## License

MIT License
