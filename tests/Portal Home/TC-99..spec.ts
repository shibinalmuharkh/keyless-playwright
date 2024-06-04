// Verify Portal Home Page
// created by shibin

import { test, expect } from '@playwright/test';
import { Keyless_LoginPage_Title, urlLogin } from '../const';
import { Logo, Login_Text, emailUsername_Text, password_Text, forgotPassword_Text, Login_Button } from '../loginPage_const';

test.beforeEach(async ({ page }) => {
    await page.goto(urlLogin);
  });

test('has title', async ({ page }) => {
    // Expect a title
    await expect(page).toHaveTitle(Keyless_LoginPage_Title);
});

test('has logo', async ({ page }) => {
    // Check if the logo element is present on the page
    const logoElement = await page.$(Logo);
    // Assert that the logo element exists
    expect(logoElement).toBeTruthy();
});

test('verify Login Text', async ({ page }) => {

    const expectedText = 'Login';

    // Get the text content of the element
    const elementText = await page.textContent(Login_Text);
    // Assert that the element's text matches the expected text
    expect(elementText).toBe(expectedText);
});

test('verify Email/Username Text', async ({ page }) => {

    const expectedText = 'Email/Username';

    // Get the text content of the element
    const elementText = await page.textContent(emailUsername_Text);
    // Assert that the element's text matches the expected text
    expect(elementText).toBe(expectedText);
});

test('verify Password Text', async ({ page }) => {

    const expectedText = 'Password';

    // Get the text content of the element
    const elementText = await page.textContent(password_Text);
    // Assert that the element's text matches the expected text
    expect(elementText).toBe(expectedText);
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