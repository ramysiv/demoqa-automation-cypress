DemoQA Automation with Cypress

This repository contains a robust automated testing framework for the DemoQA platform. It serves as a showcase for high-quality QA automation practices using Cypress and JavaScript, focusing on maintainability, scalability, and clean code.

🚀 Overview
The goal of this project is to automate various UI components of the DemoQA site, including forms, alerts, frames, and dynamic elements. Given my background in Mobile Game QA, I’ve implemented this web-based framework with a focus on stability and detailed reporting, mirroring the rigor required in gaming environments.

🛠️ Tech Stack
Framework: Cypress

Language: JavaScript (ES6+)

Pattern: Page Object Model (POM)

Reporting: Mochawesome (or Cypress Dashboard)

CI/CD: GitHub Actions (Optional/Configurable)

📁 Project Structure
Plaintext

├── cypress
│   ├── e2e             # Test scripts organized by feature
│   ├── fixtures        # Static data for test inputs
│   ├── pages           # Page Object classes (Logic & Locators)
│   └── support         # Global configuration and custom commands
├── cypress.config.js   # Cypress configuration
└── package.json        # Project dependencies and scripts
⚙️ Prerequisites
Before running the project, ensure you have:

Node.js (v14 or higher)

npm or yarn

📥 Installation
Clone the repository:

Bash

git clone https://github.com/ramysiv/demoqa-automation-cypress.git
cd demoqa-automation-cypress
Install dependencies:

Bash

npm install
🏃 Running Tests
You can run the tests in different modes:

Interactive Mode (Cypress Runner):

Bash

npm run cy:open
Headless Mode (CLI):

Bash

npm run cy:run
🧠 Key Features Implemented
Page Object Model (POM): Decoupling test logic from UI locators to ensure easy maintenance.

Custom Commands: Simplified repetitive actions for cleaner test scripts.

Data-Driven Testing: Utilizing fixtures to run tests with multiple data sets.

Handling Sync/Async: Efficiently managing wait times for dynamic elements without flaky results.
