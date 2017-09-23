import { GCSPage } from './app.po';

describe('gcs App', () => {
  let page: GCSPage;

  beforeEach(() => {
    page = new GCSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
