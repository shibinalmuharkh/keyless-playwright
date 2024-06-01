import { test } from '@playwright/test';
import { invalidLogin, login, logoff, visitLoginUrl } from './utlis';
import { invalidPassword, invalidUserName, password_qatest, urlLogin, username_qatest } from './const';

test.describe('This Test will login and then logout', () => {
  test('sucessfully login and logout', async ({ page }) => {
    await visitLoginUrl(page);
    await login(page, username_qatest, password_qatest)
    await page.waitForTimeout(3000);
    // Check if the locator exists and click if it does
    const locator = page.getByText('X').nth(2);
    if (await locator.isVisible()) {
      await locator.click();
    }
    await logoff(page);
  });
})