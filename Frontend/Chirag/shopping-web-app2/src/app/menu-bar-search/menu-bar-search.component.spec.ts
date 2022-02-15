import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarSearchComponent } from './menu-bar-search.component';

describe('MenuBarSearchComponent', () => {
  let component: MenuBarSearchComponent;
  let fixture: ComponentFixture<MenuBarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
