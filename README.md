# DemoQA Automation with Cypress

This repository contains a robust automated testing framework built for the [DemoQA](https://demoqa.com/) platform. It serves as a showcase for high-quality QA automation practices using **Cypress** and **JavaScript**, focusing on maintainability, scalability, and clean code.

## 🚀 Overview

The goal of this project is to automate various UI components of the DemoQA site, including forms, alerts, frames, and dynamic elements. Leveraging my **5+ years of experience in Mobile Game QA**, I have implemented this web-based framework with a focus on stability and detailed reporting, mirroring the rigor required in gaming environments.

## 🛠️ Tech Stack & Plugins

This framework is powered by Cypress and enhanced with several key libraries to handle complex UI interactions:

* **Core:** Cypress (JavaScript/ES6+)
* **Pattern:** Page Object Model (POM)
* **Reporting:** `cypress-mochawesome-reporter`
* **Key Plugins:**
    * `cypress-real-events`: Triggers native system events (like hover and swipe), essential for accurate user simulation.
    * `@4tw/cypress-drag-drop`: Simplifies drag-and-drop interactions often found in game-like UIs.
    * `cypress-file-upload`: Handles file upload widgets seamlessly.
    * `cypress-wait-until`: Adds explicit waiting strategies for dynamic asynchronous elements.

## ⚙️ Prerequisites
Before running the project, ensure you have:

Node.js (v14 or higher)

npm or yarn

##📥 Installation

Clone the repository:

Bash

git clone [https://github.com/ramysiv/demoqa-automation-cypress.git](https://github.com/ramysiv/demoqa-automation-cypress.git)
cd demoqa-automation-cypress
Install dependencies:

Bash

npm install


##🏃 Running Tests
You can run the tests in different modes:

Interactive Mode (Cypress Runner)
Opens the Cypress Test Runner for visual execution.

Bash

npm run cy:open
Headless Mode (CLI)
Runs tests in the background. This mode automatically generates HTML reports.

Bash

npm run cy:run

##📊 Reporting

This project uses Mochawesome to generate detailed HTML reports.

After running the tests in Headless Mode (npm run cy:run), you can find the reports at:

Location: cypress/reports/html/index.html

Features: The report includes screenshots of failures, execution time, and detailed stack traces.

##🔮 Roadmap & Future Improvements

To further enhance the framework's efficiency and maintainability, the following improvements are planned:

API Data Seeding (cy.request): Implement API requests to programmatically create "data mass" (test data) before test execution. This will bypass repetitive UI steps (like user registration) to significantly speed up the test suite.

Expanded Custom Commands: Refactor more repetitive code blocks into distinct Custom Commands. This will result in even cleaner e2e spec files and better readability.

##🧠 Key Features Implemented

Page Object Model (POM): Decouples test logic from UI locators.

Custom Commands: Simplified repetitive actions.

Data-Driven Testing: Utilizing fixtures for multiple data sets.

Handling Sync/Async: Robust wait strategies using cypress-wait-until.

## 📁 Project Structure

```plaintext
├── cypress
│   ├── e2e          # Test scripts organized by feature
│   ├── fixtures     # Static data for test inputs
│   ├── pages        # Page Object classes (Logic & Locators)
│   └── support      # Custom commands & plugin configuration
├── cypress.config.js # Cypress configuration
└── package.json      # Project dependencies and scripts

