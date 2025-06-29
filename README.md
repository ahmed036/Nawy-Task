# 🧪 Demoblaze Test Automation Project

This is a simple test automation project using **Playwright** to automate basic user flows on the [Demoblaze](https://www.demoblaze.com/) demo e-commerce website.

## 🚀 Project Tech Stack

- **Automation Framework:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript / TypeScript (Node.js) OR Java (you can pick one)
- **Test Runner:** Playwright Test (if using Node.js)
- **Assertions:** Built-in Playwright expect API

> ✅ Choose either **Node.js** or **Java** as your environment depending on your preference.
---
# Environment perparation
1- Install Node.js

2- Intsall VS Code

3- Install Playwright (npm init playwright@latest) inside VS Code

---

## 📋 Test Scenarios

The following test cases are automated:

1. **User Registration**  
   ✅ Verify that a user can register successfully using valid credentials.

2. **User Login**  
   ✅ Verify that a registered user can log in with valid username and password.

3. **User Logout**  
   ✅ Verify that a logged-in user can log out successfully.

4. **Create Order for Apple Monitor 24**  
   ✅ Add the "Apple monitor 24" to the cart and complete the purchase successfully.

---
# 📌 Notes
- Avoid using real accounts repeatedly; consider generating random usernames for registration.
- Handle modal alerts and dynamic content with appropriate wait strategies.
- Customize Playwright’s timeout and retry settings in playwright.config.js if needed.

