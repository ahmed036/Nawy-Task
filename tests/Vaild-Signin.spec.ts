import { test, expect } from '@playwright/test';

test('User can register with valid data on demoblaze', async ({ page }) => {
    // Go to the website
    await page.goto('https://www.demoblaze.com/');

    // Click on "Sign up" button (top right)
    await page.click('#signin2');

    // Wait for the modal to appear
    await expect(page.locator('#signInModal')).toBeVisible();

    // Generate random username and password
    const randomStr = Math.random().toString(36).substring(2, 10);
    const username = `user_${randomStr}`;
    const password = `pass_${randomStr}`;

    // Fill in the username and password fields
    await page.fill('#sign-username', username);
    await page.fill('#sign-password', password);

    // Click on "Sign up" button in the popup
    await page.click('button[onclick="register()"]');

    // Optionally, handle the alert popup
    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    // Wait for a short time to ensure the dialog is handled
    await page.waitForTimeout(1000);
});