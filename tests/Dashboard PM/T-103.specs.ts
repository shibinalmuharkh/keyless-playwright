import { expect, test } from '@playwright/test';
import { login, visitLoginUrl } from '../utlis';
import { password_qatest, username_qatest } from '../const';
import { shop_sideBar, dashboard_title, dashboard_sidebar, locks_sidebar, propertyManagement_sidebar, users_sidebar, routines_sidebar, reports_sidebar, tickets_sidebar, scheduleInstallation_sidebar, rfid_sidebar, settings_sidebar, plansandtrans_sidebar } from './dashboard';

test.beforeEach(async ({ page }) => {
    await visitLoginUrl(page);
    await login(page, username_qatest, password_qatest)
    await page.waitForTimeout(3000);
  });

test.describe('This Test will verify dashboard', () => {
    test('verify dashboard title', async ({ page }) => {
        await expect(page).toHaveTitle(dashboard_title);
    });
    test('verify sidebar', async ({ page }) => {

        const expectedTextDashboard = "Dashboard"
        const expectedTextLocks = "Locks"
        const expectedTextPropertyManager = "Property Management"
        const expectedTextUsers = "Users"
        const expectedTextRoutines = "Routines"
        const expectedTextReports = "Reports"
        const expectedTextTickets = "Tickets"
        const expectedTextScheduleInstallation = "Schedule Installation"
        const expectedTextRFIDCards = "RFID Cards"
        const expectedTextSettings = "Settings"
        const expectedTextPlansandtrans = "Plans and Transactions"
        const expectedTextShop = "Shop "

        // const shopElement = await page.$(shop_sideBar);
        // expect(shopElement).toBeTruthy();
        const shopElementText =  await page.textContent(shop_sideBar);
        expect(shopElementText).toBe(expectedTextShop);
        const dashboardElementText = await page.textContent(dashboard_sidebar);
        expect(dashboardElementText).toBe(expectedTextDashboard);
        const locksElementText = await page.textContent(locks_sidebar);
        expect(locksElementText).toBe(expectedTextLocks);
        const propertyManagementText = await page.textContent(propertyManagement_sidebar);
        expect(propertyManagementText).toBe(expectedTextPropertyManager);
        const usersElementText = await page.textContent(users_sidebar);
        expect(usersElementText).toBe(expectedTextUsers);
        const routinesElementText = await page.textContent(routines_sidebar);
        expect(routinesElementText).toBe(expectedTextRoutines)
        const reportsElementText = await page.textContent(reports_sidebar);
        expect(reportsElementText).toBe(expectedTextReports);
        const ticketsElementText = await page.textContent(tickets_sidebar);
        expect(ticketsElementText).toBe(expectedTextTickets);
        const scheduleInstallationElementText = await page.textContent(scheduleInstallation_sidebar);
        expect(scheduleInstallationElementText).toBe(expectedTextScheduleInstallation);
        const rfidcardsElementText = await page.textContent(rfid_sidebar);
        expect(rfidcardsElementText).toBe(expectedTextRFIDCards)
        const settingsElementText = await page.textContent(settings_sidebar);
        expect(settingsElementText).toBe(expectedTextSettings);
        const plansandtransElementText = await page.textContent(plansandtrans_sidebar);
        expect(plansandtransElementText).toBe(expectedTextPlansandtrans);
        
    }); 
});