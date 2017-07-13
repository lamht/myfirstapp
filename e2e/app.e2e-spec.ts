import { MyfristappPage } from './app.po';

describe('myfristapp App', function() {
  let page: MyfristappPage;

  beforeEach(() => {
    page = new MyfristappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
