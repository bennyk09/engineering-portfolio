# Software Engineering Portfolio | Joseph Kothapalli

> **Disclaimer:** This is my own personal engineering portfolio. You are welcome to download and edit this codebase for your own projects; however, I am not responsible for any modifications, deployment errors, or subsequent use of this software.

---

## 🛠️ Project Architecture Overview

This project is built using a professional, production-ready modular architecture that decouples structural layouts from core content. This avoids hardcoding variables and makes it highly scalable across platforms.

### 📂 Directory & File Matrix
* **`index.html`**: The main structural skeleton and semantic landing hub of the interface. It handles document loading, parses third-party dependencies, and links to global styles.
* **`css/style.css`**: The design system matrix. It processes layout boundaries using fluid responsive breakpoints and houses hardware-inspired CSS animations (such as the initial sequence slide-in and scroll-driven entry reveals).
* **`js/main.js`**: The operational DOM orchestrator. It pulls configuration data dynamically from memory, handles runtime string parsing, and systematically injects modular component structures into the HTML view.
* **`updates/data.js`**: **The central repository data engine.** This isolated object holds your exact text assets, bio scripts, project stacks (including your Filed Patent, CodeFusion TRNG, Linkd CLI, and QR System metrics), and hyperlinks.
* **`img/`**: Stores local asset files such as `profile.png`.
* **`LICENSE`**: The official MIT License providing open-source compliance credentials.

---

## ⚡ Workflow & Data Updates

Because the layout and data layers are entirely separated, updating your portfolio values never risks breaking your active UI design:

1. Open `updates/data.js` in your code editor.
2. Edit or add records to the corresponding properties inside the `PORTFOLIO_DATA` master configuration block (e.g., changing text lines, updating project details, or adding links).
3. Save the file. The main JavaScript engine reads the modified strings and updates your live landing environment instantly.