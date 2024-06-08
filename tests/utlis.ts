import { Page, expect } from '@playwright/test';
import { username_InputField, password_InputField, login_Button, invalid_Login_Text } from './loginPage_const';
import { welcomeManagerTextElement, logout_Button } from './dashboard';
import { urlLogin } from './const';


export async function visitLoginUrl(page: Page) {
    await page.goto(urlLogin);
}


export async function login(page: Page, username: string, password: string) {
    // Fill in username and password
    await page.fill(username_InputField, username);
    await page.fill(password_InputField, password);
    // Click the login button
    await page.click(login_Button);
    //verify dashboard is loaded 
    const welcomeMessage = await page.waitForSelector(welcomeManagerTextElement);
    expect(welcomeMessage).toBeTruthy();
}

export async function invalidLogin(page: Page, username: string, password: string) {
    // Fill in username and password
    await page.fill(username_InputField, username);
    await page.fill(password_InputField, password);
    //click login button
    await page.click(login_Button);
    //verify user is not logged in
    const invalidNotification = await page.waitForSelector(invalid_Login_Text);
    expect(invalidNotification).toBeTruthy();
}

export async function logoff(page) {
    await page.click(logout_Button);
    await page.waitForTimeout(3000);
}

export async function closeInstalltionPopUp(page) {
    const locator = page.getByText('X').nth(2);
    if (await locator.isVisible()) {
        await locator.click();
    }
}