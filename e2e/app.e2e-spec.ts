import { JsYandexMapDevToolPage } from './app.po';

describe('js-yandex-map-dev-tool App', () => {
  let page: JsYandexMapDevToolPage;

  beforeEach(() => {
    page = new JsYandexMapDevToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
