import { TestBed } from '@angular/core/testing';

import { PhotoSnapsService } from './photo-snaps.service';

describe('PhotoSnapsService', () => {
  let service: PhotoSnapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoSnapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
