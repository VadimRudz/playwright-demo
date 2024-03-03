// @ts-check
const { test, expect } = require('@playwright/test');

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});


// Locale and Timezone

// test.use({
//   locale: 'de-DE',
//   timezoneId: 'Europe/Berlin',
// });

// test('my test for de lang in Berlin timezone', async ({ page }) => {
//   await page.goto('https://www.bing.com');
//   // ...
// });
