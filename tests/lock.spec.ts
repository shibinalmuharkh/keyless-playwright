import { test } from '@playwright/test';
import { login } from './utlis';
import { password_qatest, urlLogin, urlLoginProduction, username_qatest, username_qatest02 } from './const';

test.beforeEach(async ({ page }) => {
    await page.goto(urlLoginProduction);
  });

  test.describe('This Test all login senarios', () => {
    test('sucessfully login', async ({ page }) => {
        await login (page, username_qatest02, password_qatest)
        await page.waitForTimeout(3000);
    });
  });