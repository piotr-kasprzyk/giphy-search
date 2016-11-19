export class GiphySearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('giphy-search-app h1')).getText();
  }
}
