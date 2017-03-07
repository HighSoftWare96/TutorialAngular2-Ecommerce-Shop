import { browser, element, by } from 'protractor';

export class TutorialAngular2.1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
