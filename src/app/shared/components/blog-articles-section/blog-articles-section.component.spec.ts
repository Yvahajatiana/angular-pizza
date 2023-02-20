import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlesSectionComponent } from './blog-articles-section.component';

describe('BlogArticlesSectionComponent', () => {
  let component: BlogArticlesSectionComponent;
  let fixture: ComponentFixture<BlogArticlesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlogArticlesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticlesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
