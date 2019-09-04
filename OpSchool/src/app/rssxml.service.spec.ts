import { TestBed } from '@angular/core/testing';

import { RssxmlService } from './rssxml.service';

describe('RssxmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RssxmlService = TestBed.get(RssxmlService);
    expect(service).toBeTruthy();
  });
});
