# Apex FD | Professional Portfolio

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS-yellow.svg)

A high-performance, responsive personal portfolio website designed to showcase Mobile Application development capabilities. This project emphasizes semantic HTML, a scalable CSS architecture, and performance-optimized JavaScript.

---

## 🚀 Live Demo

**[View Live Portfolio](#)**

---

## 🛠 Tech Stack & Architecture

This project strictly avoids heavy frameworks (React/Vue/Django/SpringBoot etc.) to demonstrate mastery of core web technologies and browser rendering optimization.

### **Core Technologies**

* **Semantic HTML5:** Structure optimized for SEO and Accessibility (a11y).
* **CSS3 (Modern Architecture):**
  * **CSS Custom Properties (Variables):** Used for global theming (colors, typography, spacing) to ensure maintainability.
  * **CSS Grid:** Utilized for complex 2D layouts (Hero Section, Portfolio Gallery).
  * **Flexbox:** Utilized for 1D layouts (Navbar, Card internals).
  * **BEM-ish Naming:** A modified Block-Element-Modifier convention for class names to prevent style leakage.
* **Vanilla JavaScript (ES6+):**
  * **Intersection Observer API:** Replaces legacy `scroll` event listeners for the "Active Link" highlighting feature to reduce main-thread load and improve scroll performance.

### Architecture

* **CSS Methodology:** BEM-ish naming convention.

* **Responsiveness:** Mobile-first approach using 'min-width' media queries.
* **State Management:** URL Hash-based routing + JS ScrollSpy.

### **Performance Decisions**

* **Aspect-Ratio Enforcement:** All portfolio images use `aspect-ratio` CSS property to prevent Cumulative Layout Shift (CLS) during loading.
* **System Fonts First:** Uses a performant font stack falling back to system sans-serif to minimize First Contentful Paint (FCP) delay.

---

## 📂 Directory Structure

```text
/
├── index.html          # Main application entry point
├── README.md           # Documentation
├── assets/             # Static assets (Images optimized for web)
├── styles/
│   ├── style.css       # Core styles, variables, and component logic
│   └── queries.css     # Media queries for responsiveness (Mobile-First overrides)
└── scripts/
    └── menu_toggle.js  # Mobile menu logic & ScrollSpy implementation
