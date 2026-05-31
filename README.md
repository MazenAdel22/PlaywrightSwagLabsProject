# 🚀 Playwright Automation Framework - Swag Labs Website

## 📖 Project Overview

Welcome to the **Playwright Automation Framework** repository! 🎯

This project demonstrates a **modern, scalable, and maintainable test automation framework** built using **Playwright with TypeScript** to validate the functionality of the **Swag Labs** e-commerce application.
The framework follows industry-standard automation practices and design patterns to ensure high readability, reusability, and maintainability. It is designed to support efficient test execution, easy test data management, and seamless integration with CI/CD pipelines.

---

## 🛠 Tools & Technologies

* **Programming Language:** TypeScript ⚡
* **Automation Tool:** Playwright 🎭
* **Test Runner:** Playwright Test 🧪
* **Design Pattern:** Page Object Model (POM) 📑
* **CI/CD:** GitHub Actions 🚀
* **Version Control:** Git & GitHub 🐙
* **Reporting:** Playwright Allure Report 📊

---

## 🏗 Framework Architecture

The framework is structured to promote maintainability and scalability:

```text
PlaywrightSwagLabsProject
│
├── pages/
├── fixtures/
├── tests/
├── utils/
├── test-data/
├── playwright.config.ts
└── .github/workflows/
```

### Key Components

* **Page Objects**

  * Encapsulate page locators and actions.
  * Improve code reusability and readability.

* **Fixtures**

  * Centralized test setup and dependency management.
  * Simplify test implementation.

* **Test Data Management**

  * Externalized test data for better maintainability.
  * Supports data-driven testing scenarios.

* **Utilities**

  * Reusable helper functions and common operations.

---

## 🏆 Key Features

✔️ Page Object Model (POM) Architecture
✔️ Reusable Custom Fixtures
✔️ Data-Driven Testing Approach
✔️ Centralized Test Data Management
✔️ Playwright Auto-Wait Mechanism
✔️ Cross-Browser Execution Support
✔️ Clean and Maintainable Framework Design
✔️ CI/CD Integration using GitHub Actions
✔️ Detailed HTML Test Reports
✔️ Scalable Structure for Future Enhancements

---

## 🧪 Automated Test Coverage

The framework currently covers key Swag Labs user journeys, including:

### Authentication

* Valid Login
* Invalid Login
* Locked User Validation
* Logout Functionality

### Product Management

* Product Details Verification
* Product Information Validation
* Product Sorting Validation

### Shopping Cart

* Add Products to Cart
* Remove Products from Cart
* Cart Validation

### Checkout Process

* Complete End-to-End Order Flow
* Customer Information Validation
* Order Confirmation Verification

---

## 🚀 Running Tests

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Execute All Tests

```bash
npx playwright test
```

### Execute Specific Test

```bash
npx playwright test tests/uiTests/LoginFeature.spec.ts
```

---

## 📊 Reporting

Playwright Allure Reports provide:

✔️ Test execution summary
✔️ Passed and failed test details
✔️ Error logs and stack traces
✔️ Screenshots, Videos and traces for debugging

To open the report:

```bash
npx allure open ./allure-report/
```

---

## 🔄 Continuous Integration

The framework is integrated with **GitHub Actions** to enable automated test execution on every push and pull request.

Benefits include:

✔️ Automated validation of changes
✔️ Early defect detection
✔️ Consistent test execution across environments
✔️ Improved development workflow

---

## 🎯 Why This Framework?

This project demonstrates my practical experience in:

🔹 Building automation frameworks from scratch using Playwright
🔹 Applying Page Object Model and framework design best practices
🔹 Creating reusable and maintainable automation solutions
🔹 Implementing data-driven testing strategies
🔹 Integrating automated testing into CI/CD pipelines
🔹 Delivering reliable end-to-end test automation for web applications
