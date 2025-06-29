import { test, expect } from '@playwright/test';

test('The user can log in then log out from the website', async ({ page }) => {
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

    // Click on "Log out" button
    await page.click('#logout2');

    // Ensure that "Log in" button is visible again
    await expect(page.locator('#login2')).toBeVisible();

    // Ensure that "Log out" button is hidden
    await expect(page.locator('#logout2')).toBeHidden();
});