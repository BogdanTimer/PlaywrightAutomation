//create class using page object for further usage instead of declaring and finding by elements in the test themselves
exports.ucoz_MainPage = class ucoz_MainPage {
  constructor(page) {
    this.page = page;
    this.main_logo = page.locator('body > a'); //for visual tests
    this.menu_btn = page.locator('body > section.navigation > div > a > div'); //hamburger button, top left corner
    this.language_ddl = page.locator('#llink'); //language drop down list
    this.login_btn = page.locator(
      '#choice > div.top-sub-section > header > div.login-logout > a'
    ); //login button
    this.main_header = page.locator('#choice > h2'); //main text, big header
    this.create_btn = page.locator('#block-for-me > a');
    this.start_btn = page.locator('#block-for-business > a');
    this.order_btn = page.locator('#block-for-shop > a');
    this.godown_btn = page.locator('#choice > div.to-next-section > a');
    this.secondPageHeader = page.locator(
      '#for-me > div.top-part.container-fluid.no-paddings > div.box > h2'
    );
  }

  async gotoXsideBtn(whichButton) {
    await this.page
      .locator(`#fp-nav > ul > li:nth-child(${whichButton})`)
      .click();
  }

  async gotoMainPage() {
    await this.page.goto('');
  }

  async clickButton(whereClick) {
    await whereClick.click();
  }
};
