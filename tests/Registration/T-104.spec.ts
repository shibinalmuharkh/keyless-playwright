import { test, expect } from '@playwright/test';
import { urlRegistration } from '../const';
import { Registration_Title, Logo, OurSubsriptinPlan_Text, Free_Text, Home_Text, GetStarted_Text, onetp3Locks_Text, premium_Text } from '../registerPage_const';

test.beforeEach(async ({ page }) => {
    await page.goto(urlRegistration);
    await page.waitForTimeout(3000);

});

test.describe('This Tests All the elements in the Registration Page', () => {
    test('verify title', async ({ page }) => {
        await expect(page).toHaveTitle(Registration_Title);
    });

    test('verify logo', async ({ page }) => {

        const logoElement = await page.$(Logo);
        expect(logoElement).toBeTruthy();

    });

    test('verify heading text', async ({ page }) => {

        const expectedText = "Our subscription plans"

        const elementText = await page.textContent(OurSubsriptinPlan_Text);
        expect(elementText).toBe(expectedText);
    });

    test('verify texts in Home', async ({ page }) => {

        const expectedTextFree = "Free"
        const expectedTextHome = "Home"
        const expectedGetStartedText = 'Get started'
        const expectedText1t03Locks = "HomeFreeGet started1 to 3  Locks3 Active Users  per lock150 Events History  per lock3  Property registrationNo  Personalised DomainNo  User profiling Ticket and Call Support"

        const elementTextFree = await page.textContent(Free_Text)
        expect(elementTextFree).toBe(expectedTextFree);
        const elementTextHome = await page.textContent(Home_Text)
        expect(elementTextHome).toBe(expectedTextHome);
        const buttonTextGetStarted = await page.$eval(GetStarted_Text, (element) => element.textContent);
        expect(buttonTextGetStarted).toBe(expectedGetStartedText);
        const elementText1t03L = await page.textContent(onetp3Locks_Text)
        // Check if the page text content contains each of the expected texts
        for (const text of expectedText1t03Locks) {
            const trimmedText = text.trim(); // Trim the expected text
            expect(elementText1t03L).toContain(trimmedText);
        }
    });
    test('verify texts in Premium', async ({ page }) => {

        const expectedTextPremium = "Premium(Annual)AED 120 / lockGet started1 to Unlimited Locks10 Active Users per"
        const elementTextPremium = await page.textContent(premium_Text)

        // Check if the page text content contains each of the expected texts
        for (const text of expectedTextPremium) {
            const trimmedText = text.trim(); // Trim the expected text
            expect(elementTextPremium).toContain(trimmedText);
        }
    });
});