import { TestBed } from '@angular/core/testing';

import { MypackagesService } from './mypackages.service';

describe('MypackagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MypackagesService = TestBed.get(MypackagesService);
    expect(service).toBeTruthy();
  });
});
