import { HingymanPage } from './app.po';

describe('hingyman App', function() {
  let page: HingymanPage;

  beforeEach(() => {
    page = new HingymanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
