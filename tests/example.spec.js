const { test, expect, request } = require('@playwright/test');
const {
  ucozMainPage,
} = require('../src/page_objects/ucoz/mainPage/ucozMainPage');

// test('homepage has Playwright in title and get started link linking to the intro page', async ({
//   page,
// }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByText('Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test('do something pls', async ({ context, page }) => {
  const ucoz_mainpage = new ucozMainPage(page);
  await ucoz_mainpage.goto();
  await ucoz_mainpage.goToCreate();

  const [newPage] = await Promise.all([context.waitForEvent('page')]);

  await newPage.locator('#sbt47').click();
  if (newPage.locator('#fEmail-status').isVisible()) {
    console.log(await newPage.innerText('#fEmail-status'));
  }
});
