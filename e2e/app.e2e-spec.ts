import { AngularDatatables2Page } from './app.po';

describe('angular-datatables2 App', function() {
  let page: AngularDatatables2Page;

  beforeEach(() => {
    page = new AngularDatatables2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
