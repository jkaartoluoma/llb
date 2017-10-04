import { LlbPocPage } from './app.po';

describe('llb-poc App', () => {
  let page: LlbPocPage;

  beforeEach(() => {
    page = new LlbPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
