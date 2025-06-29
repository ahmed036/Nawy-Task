import { test, expect } from '@playwright/test';

test('The user can log in with a valid email and password', async ({ page }) => {
    const username = 'Testafsdf'; // Replace with actual username from previous test
    const password = 'fadfasdfas'; // Replace with actual password from previous test

    await page.goto('https://www.demoblaze.com');
    await page.click('#login2');
    await expect(page.locator('#logInModal')).toBeVisible();
    await page.fill('#loginusername', username);
    await page.fill('#loginpassword', password);
    await page.click('button:has-text("Log in")');

    await expect(page.locator('#logInModal')).toBeHidden();
    await expect(page.locator('#login2')).toBeHidden();
    await expect(page.locator('#logout2')).toBeVisible();

    await page.click('a:has-text("Monitors")');
    await page.click('a:has-text("Apple monitor 24")');
    await expect(page.locator('h2:has-text("Apple monitor 24")')).toBeVisible();
    await page.click('a:has-text("Add to cart")');

    await page.waitForEvent('dialog').then(dialog => dialog.accept());
    await page.click('#cartur');
    await expect(page.locator('button:has-text("Place Order")')).toBeVisible();
    await page.click('button:has-text("Place Order")');

    await page.fill('#name', 'Ahmed');
    await page.fill('#country', 'Egypt');
    await page.fill('#city', 'Cairo');
    await page.fill('#card', '12345');
    await page.fill('#month', 'May');
    await page.fill('#year', '1997');

    await page.click('button:has-text("Purchase")');

    const successModal = page.locator('.sweet-alert.showSweetAlert.visible');
    await expect(successModal).toBeVisible();
    await successModal.screenshot({ path: "C:\\Users\\ahmed\\Downloads\\success-message.png" });
    await page.click('button:has-text("OK")');
});