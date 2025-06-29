import { test, expect } from '@playwright/test';

test('The user can log in with a valid email and password', async ({ page }) => {
    // Test data from previous "Valid-signin" test case
    const username = 'Testafsdf'; // Replace with actual username from previous test
    const password = 'fadfasdfas'; // Replace with actual password from previous test

    // Go to the website
    await page.goto('https://www.demoblaze.com');

    // Click on "Log in" button to open the login modal
    await page.click('#login2');

    // Wait for the login modal to appear
    await expect(page.locator('#logInModal')).toBeVisible();

    // Fill in username and password
    await page.fill('#loginusername', username);
    await page.fill('#loginpassword', password);

    // Click on "Log in" button in the modal
    await page.click('button:has-text("Log in")');

    // Wait for the modal to disappear and user to be logged in
    await expect(page.locator('#logInModal')).toBeHidden();

    // Validate that "Log in" button is not visible
    await expect(page.locator('#login2')).toBeHidden();

    // Validate that "Log out" button is visible
    await expect(page.locator('#logout2')).toBeVisible();
    // Click on "Monitors" under "CATEGORIES"
    await page.click('a:has-text("Monitors")');

    // Wait for the "Apple monitor 24" product to be visible and click it
    await page.click('a:has-text("Apple monitor 24")');

    // Wait for the product page to load and click "Add to cart"
    await expect(page.locator('h2:has-text("Apple monitor 24")')).toBeVisible();
    await page.click('a:has-text("Add to cart")');

    // Wait for alert and accept it
    await page.waitForEvent('dialog').then(dialog => dialog.accept());

    // Click on "Cart" from the menu
    await page.click('#cartur');

    // Wait for the cart page to load and click "Place Order"
    await expect(page.locator('button:has-text("Place Order")')).toBeVisible();
    await page.click('button:has-text("Place Order")');
    // Fill in the order form
    await page.fill('#name', 'Ahmed');
    await page.fill('#country', 'Egypt');
    await page.fill('#city', 'Cairo');
    await page.fill('#card', '12345');
    await page.fill('#month', 'May');
    await page.fill('#year', '1997');

    // Click on "Purchase"
    await page.click('button:has-text("Purchase")');

    // Wait for the success message modal to appear
    const successModal = page.locator('.sweet-alert.showSweetAlert.visible');
    await expect(successModal).toBeVisible();

    // Take a screenshot of the success message
    await successModal.screenshot({ path: "C:\\Users\\ahmed\\Downloads\\success-message.png" });

    // Click on "OK" button in the success modal
    await page.click('button:has-text("OK")');
});