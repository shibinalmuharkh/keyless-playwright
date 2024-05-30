import { test } from '@playwright/test';
import { invalidLogin, login } from './utlis';
import { invalidPassword, invalidUserName, password_qatest, urlLogin, username_qatest } from './const';

test.beforeEach(async ({ page }) => {
    await page.goto(urlLogin);
  });

  test.describe('This Test all login senarios', () => {
    test('sucessfully login', async ({ page }) => {
        await login (page, username_qatest, password_qatest)
        await page.waitForTimeout(3000);
    });
    test('verify invalid login', async ({ page }) => {
        await invalidLogin (page, invalidUserName, invalidPassword)
    });
  });