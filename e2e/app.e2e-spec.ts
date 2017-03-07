import { TutorialAngular2.1Page } from './app.po';

describe('tutorial-angular2.1 App', () => {
  let page: TutorialAngular2.1Page;

  beforeEach(() => {
    page = new TutorialAngular2.1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
