import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightmenuComponent } from './rightmenu.component';

describe('RightmenuComponent', () => {
  let component: RightmenuComponent;
  let fixture: ComponentFixture<RightmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightmenuComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RightmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
