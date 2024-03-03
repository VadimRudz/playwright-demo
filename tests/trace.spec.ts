import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('h1')).toContainText('Installation');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').click();
  await page.getByPlaceholder('Search docs').fill('locator');
  await page.getByRole('link', { name: 'Locator', exact: true }).click();
  await page.getByRole('link', { name: 'BrowserServer' }).click();
  await expect(page.getByRole('heading', { name: 'BrowserServer' })).toBeVisible();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByLabel('Breadcrumbs').getByText('Getting Started').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('GitHub repository').click();
  const page1 = await page1Promise;
  await page1.goto('https://github.com/microsoft/playwright');
  await expect(page1.locator('#repository-container-header')).toContainText('playwright');
});