import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GiphySearchAppComponent } from '../app/giphy-search.component';

beforeEachProviders(() => [GiphySearchAppComponent]);

describe('App: GiphySearch', () => {
  it('should create the app',
      inject([GiphySearchAppComponent], (app: GiphySearchAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'giphy-search works!\'',
      inject([GiphySearchAppComponent], (app: GiphySearchAppComponent) => {
    expect(app.title).toEqual('giphy-search works!');
  }));
});
