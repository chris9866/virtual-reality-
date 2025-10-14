# Copilot Instructions for AI Coding Agents

## Project Overview
This repository contains a series of virtual reality (VR) lessons and practicals, each in its own directory. The project is organized for educational purposes, focusing on interactive web-based VR experiences using HTML, JavaScript, and image assets.

## Directory Structure & Patterns
- Each lesson/practical is in a separate folder (e.g., `VRLesson1_5Classwork/`, `VRPractical2_1/`).
- Most lesson folders contain an `index.html` as the entry point, often accompanied by images and sometimes JavaScript files (e.g., `script.js`, `cloud.js`).
- Asset files (images, textures) are stored alongside their respective lesson/practical for easy reference.
- No build system, package manager, or test framework is present; all code runs directly in the browser.

## Development Workflow
- **Edit and preview**: Modify HTML/JS/image files, then open the corresponding `index.html` in a browser to view changes.
- **No compilation or bundling**: All scripts and assets are loaded directly; keep file references relative and correct.
- **Debugging**: Use browser developer tools (Console, Network, Elements) for troubleshooting.

## Project-Specific Conventions
- **File naming**: Use descriptive names for images and scripts to match their lesson context (e.g., `texture_grass.jpeg`, `cloud.js`).
- **No global dependencies**: All code is self-contained per lesson; avoid cross-folder imports.
- **Image assets**: Reference images with relative paths in HTML/JS. Place new assets in the relevant lesson/practical folder.
- **JavaScript**: Scripts are typically loaded via `<script src="script.js"></script>` in the HTML. Some lessons use multiple JS files.
- **No CSS frameworks**: Styling is minimal or inline; if needed, add a `style.css` in the lesson folder.

## Key Files & Examples
- `VRLesson2_1Classwork/index.html` and `script.js`: Example of a lesson with interactive JS.
- `VRPractical2_4/style.css`: Example of custom styling for a practical.
- Asset-rich lessons (e.g., `VRLesson1_5Classwork/`) demonstrate how to organize and reference images.

## Recommendations for AI Agents
- When adding new lessons, follow the existing folder and file naming conventions.
- Keep all assets and code for a lesson/practical self-contained within its folder.
- Reference files using relative paths; do not assume a build step.
- If introducing new patterns, document them in the relevant lesson folder and update this file.

---
For questions or unclear conventions, ask the user for clarification or examples from existing lessons.
