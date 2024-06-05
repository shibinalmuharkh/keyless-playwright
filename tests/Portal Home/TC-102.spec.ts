// Verify admin Portal Home Page
// created by shibin

import { test, expect } from '@playwright/test';
import { Keyless_adminLogin_Title, urlLogin, urladminLogin } from '../const';
import { Logo, forgotPassword_Text, Login_Button } from '../loginPage_const';

test.beforeEach(async ({ page }) => {
    await page.goto(urladminLogin);
});

test('has title', async ({ page }) => {
    // Expect a title
    await expect(page).toHaveTitle(Keyless_adminLogin_Title);
});

test('has logo', async ({ page }) => {
    // Check if the logo element is present on the page
    const logoElement = await page.$(Logo);
    // Assert that the logo element exists
    expect(logoElement).toBeTruthy();
});

test('verify Login Text', async ({ page }) => {

    // Locate the heading and assert its text content
    const heading = page.getByRole('heading', { name: 'Sign in to your account' });
    await expect(heading).toBeVisible();


});

test('verify Email/Username Text', async ({ page }) => {
    const EmailPassword = page.getByPlaceholder('Email/Username')
    await expect(EmailPassword).toBeVisible();
});

test('verify Password Text', async ({ page }) => {

    const Password = page.getByPlaceholder('Password')
    await expect(Password).toBeVisible();
});

test('verify Forot Password Text', async ({ page }) => {
    await page.goto(urlLogin);

    const expectedText = "Forgot Password?";

    // Get the text content of the element
    const elementText = await page.textContent(forgotPassword_Text);
    // Assert that the element's text matches the expected text
    expect(elementText).toBe(expectedText);
});

test('verify Login Button', async ({ page }) => {

    const isLoginButtonVisible = await page.isVisible(Login_Button);
    // Assert that the login button is visible
    expect(isLoginButtonVisible).toBeTruthy();
});