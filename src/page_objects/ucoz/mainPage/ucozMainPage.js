const { expect } = require('@playwright/test');

exports.ucozMainPage = class ucozMainPage {
  constructor(page) {
    this.page = page;
    this.create = page.locator('#block-for-me > a');
  }

  async goto() {
    await this.page.goto('https://www.ucoz.com/');
  }

  async goToCreate() {
    await this.create.click();
  }
};
