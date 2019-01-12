import { TestBed, inject } from '@angular/core/testing';

import { TileService } from './tile.service';

describe('TileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TileService]
    });
  });

  it('should be created', inject([TileService], (service: TileService) => {
    expect(service).toBeTruthy();
  }));
});
