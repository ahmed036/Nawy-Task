# Playwright Project

This project contains automated tests using Playwright for verifying user login and product purchase functionality on a demo e-commerce website.

## Project Structure

```
playwright-project
├── tests
│   └── Buy-product.spec.ts      # Contains Playwright tests for user login and product purchase
├── package.json                  # npm configuration file with dependencies and scripts
├── playwright.config.ts          # Playwright configuration file
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd playwright-project
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running Tests

To run the tests, use the following command:

```
npx playwright test
```

### Configuration

The Playwright configuration can be found in `playwright.config.ts`. You can adjust the settings such as test directory, timeout, and other global configurations as needed.

### License

This project is licensed under the MIT License.