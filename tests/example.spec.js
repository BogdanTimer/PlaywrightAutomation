const { test, expect, request } = require('@playwright/test');
const {
  ucoz_MainPage,
} = require('../src/page_objects/ucoz/mainPage/ucoz_MainPage');

test('UCOZ - Go to create website new tab - click sign up without credentials - verify error message', async ({
  context,
  page,
}) => {
  const ucozMainPage = new ucoz_MainPage(page);
  await ucozMainPage.gotoMainPage();
  await ucozMainPage.clickButton(ucozMainPage.create_btn);

  const [newPage] = await Promise.all([context.waitForEvent('page')]);

  await newPage.locator('#sbt47').click();
  if (newPage.locator('#fEmail-status').isVisible()) {
    console.log(await newPage.innerText('#fEmail-status'));
  }
});

test('UCOZ - Open hamburger menu button', async ({ page }) => {
  const ucozMainPage = new ucoz_MainPage(page);
  await ucozMainPage.gotoMainPage();
  await ucozMainPage.clickButton(ucozMainPage.menu_btn);
});

test.only('UCOZ - Go to second sldie page by clicking on the side small dot button', async ({
  page,
}) => {
  const ucozMainPage = new ucoz_MainPage(page);
  await ucozMainPage.gotoMainPage();
  await ucozMainPage.gotoXsideBtn(2);
  if (ucozMainPage.secondPageHeader.isVisible()) {
    console.log('GG: ', await ucozMainPage.secondPageHeader.innerText());
  }
});
