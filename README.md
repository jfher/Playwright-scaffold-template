# Basic Template for QA Automation Projects

This template is designed to help to have a scaffold to begin the automation practice with Playwright and TypeScript.
The structure follows clean architecture and design patterns. Also uses POM and COM to make the code more maintainable and scalable.

The template is open for improvements, so feel free to suggest any changes.

## Dependencies

    "@axe-core/playwright": "^4.12.1", //To test a11y issues.
    "@faker-js/faker": "^10.5.0", //To generate fake data.
    "@playwright/test": "^1.61.1", //To run the tests.
    "@types/node": "^26.1.1", //To use TypeScript.
    "allure-playwright": "^3.10.2", //To generate reports.
    "dotenv": "^17.4.2", //To use environment variables.
    "eslint": "^10.6.0",
    "eslint-plugin-playwright": "^2.10.5",
    "husky": "^9.1.7", // To run the tests before committing.
    "lint-staged": "^16.4.0",
    "prettier": "^3.9.5",
    "ts-node": "^10.9.2",
    "typescript": "^7.0.2"
  }

## Tech Stack

- [Playwright](https://playwright.dev/):
- [TypeScript](https://www.typescriptlang.org/):
- [Node.js](https://nodejs.org/):

## Installations

All the packages and dependencies are managed with npm.
To install all the required packages run:
    npm install

This will install all the dependencies listed in the `package.json` file.

## Running Tests

- To run the tests in the default browser (chromium)
    npx playwright test

- To run the tests in all browsers:
    npx playwright test --project=chromium --project=firefox --project=webkit

- To run the tests in a specific browser:
    npx playwright test --project=chromium

- To run the tests in parallel:
    npx playwright test --workers=3

- To run the tests with a specific reporter:
    npx playwright test --reporter=list
