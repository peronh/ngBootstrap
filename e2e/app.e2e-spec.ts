import { BsIntegrationPage } from './app.po';

describe('bs-integration App', function() {
  let page: BsIntegrationPage;

  beforeEach(() => {
    page = new BsIntegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
