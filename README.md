# AI/ML & Edge Computing Portfolio | Joseph Kothapalli

> **Disclaimer:** This is my personal engineering portfolio. You are welcome to fork and adapt this codebase for your own portfolio needs; however, I assume no responsibility for downstream modifications, deployment configurations, or third-party usage.

---

## 🛠️ Project Architecture Overview

This project implements a decoupled, modular front-end architecture that isolates site layout and design from runtime data. By keeping content out of the HTML markup, the interface scales cleanly across platforms without hardcoded dependencies.

### 📂 Directory & File Matrix
* **`index.html`**: The semantic skeleton and landing hub. Manages document metadata, assets, third-party libraries, and the root DOM nodes.
* **`css/style.css`**: Design system and hardware-inspired aesthetics. Implements fluid responsive breakpoints, glassmorphism layers, and scroll-driven entry animations.
* **`js/main.js`**: Dynamic DOM rendering engine. Ingests structured objects from memory, runs sanitization and string interpolation, and mounts UI sections dynamically.
* **`updates/data.js`**: **Central data engine.** Houses all profile summaries, patents (such as the published Intruder Detection System and Driver Drowsiness units), R&D lab records, hackathon awards, and Edge AI/ML project stacks (Aditya-L1 flare pipeline, TRNG, and waste sorting systems).
* **`img/`**: Stores static media, project schematics, diagrams, and profile assets (`profile.png`).
* **`LICENSE`**: MIT open-source license.

---

## ⚡ Workflow & Content Updates

Because content is decoupled from presentation, updating resume metrics never impacts the responsive CSS grids or DOM routines:

1. Open `updates/data.js` in your editor.
2. Edit or append entries to the `PORTFOLIO_DATA` object—including `biography`, `experience`, `patents`, `technicalMatrix`, `projects`, and `accreditation`.
3. Save the file. The client-side parser in `js/main.js` will automatically read the updated arrays and render the revised content upon reload.
