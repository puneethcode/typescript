import { SchoolBookNowPage } from './app.po';

describe('school-book-now App', function() {
  let page: SchoolBookNowPage;

  beforeEach(() => {
    page = new SchoolBookNowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
