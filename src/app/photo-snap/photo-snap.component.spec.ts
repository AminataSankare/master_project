import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSnapComponent } from './photo-snap.component';

describe('PhotoSnapComponent', () => {
  let component: PhotoSnapComponent;
  let fixture: ComponentFixture<PhotoSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSnapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
