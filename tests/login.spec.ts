import { test, expect } from '@playwright/test';
import { urlLogin, username_qatest, password_qatest, invalidUserName, invalidPassword } from './const';
import { username_InputField, password_InputField, login_Button, invalid_Login_Text } from './loginPage_const';
import { welcomeManagerTextElement } from './dashboard';

test.beforeEach(async ({ page }) => {
  await page.goto(urlLogin);
});

test.describe('This Test all login senarios', () => {
  test('sucessfully login', async ({ page }) => {

    // Fill in username and password
    await page.fill(username_InputField, username_qatest);
    await page.fill(password_InputField, password_qatest);

    // Click the login button
    await page.click(login_Button);

    const welcomeMessage = await page.waitForSelector(welcomeManagerTextElement);

    expect(welcomeMessage).toBeTruthy();
    await page.waitForTimeout(3000);
  });

  test('verify invalid login', async ({ page }) => {
    // Fill in username and password
    await page.fill(username_InputField, invalidUserName);
    await page.fill(password_InputField, invalidPassword);
    //click login button
    await page.click(login_Button);
    //verify user is not logged in
    const invalidNotification = await page.waitForSelector(invalid_Login_Text);
    expect(invalidNotification).toBeTruthy();
  });
});