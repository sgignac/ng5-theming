import { TestBed, inject } from '@angular/core/testing';

import { ThemeSetupService } from './theme-setup.service';

describe('ThemeSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSetupService]
    });
  });

  it('should be created', inject([ThemeSetupService], (service: ThemeSetupService) => {
    expect(service).toBeTruthy();
  }));
});
