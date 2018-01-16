import { KseniaPage } from './app.po';

describe('ksenia App', function() {
  let page: KseniaPage;

  beforeEach(() => {
    page = new KseniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
