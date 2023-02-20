import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPresentationSectionComponent } from './menu-presentation-section.component';

describe('MenuPresentationSectionComponent', () => {
  let component: MenuPresentationSectionComponent;
  let fixture: ComponentFixture<MenuPresentationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuPresentationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPresentationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
