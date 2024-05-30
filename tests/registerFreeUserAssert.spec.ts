import { test, expect } from '@playwright/test';
import { urlRegistration } from './const';
import { Registration_Title, Logo, OurSubsriptinPlan_Text, Free_Text, Home_Text, GetStarted_Text } from './registerPage_const';
import { CompanyName_Text, SignupforHomePlan_Text, InputCompnayName_TextField } from './registerFreeUser';

test.beforeEach(async ({ page }) => {
    await page.goto(urlRegistration);
    await page.waitForTimeout(3000);

});

test.describe('This Test will verify Singup for Home Plan Page', () => {
    test('verify all the elements on the page', async ({ page }) => {
        await page.click(GetStarted_Text);
        await page.waitForTimeout(3000);

        const expectedTextHeading = 'Signup for Home Plan'
        const expectTextCompanyName = 'Company Name'

        const elementText = await page.textContent(SignupforHomePlan_Text);
        expect(elementText).toBe(expectedTextHeading);
        const elementTextCompnayName = await page.textContent(CompanyName_Text);
        expect(elementTextCompnayName).toBe(expectTextCompanyName);

        

});

});