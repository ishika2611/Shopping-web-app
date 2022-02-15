import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageMiddlePhotoSectionComponent } from './front-page-middle-photo-section.component';

describe('FrontPageMiddlePhotoSectionComponent', () => {
  let component: FrontPageMiddlePhotoSectionComponent;
  let fixture: ComponentFixture<FrontPageMiddlePhotoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageMiddlePhotoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageMiddlePhotoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
