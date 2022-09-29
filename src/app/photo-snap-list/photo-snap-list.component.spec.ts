import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSnapListComponent } from './photo-snap-list.component';

describe('PhotoSnapListComponent', () => {
  let component: PhotoSnapListComponent;
  let fixture: ComponentFixture<PhotoSnapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSnapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoSnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
