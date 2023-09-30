import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookchangeComponent } from './bookchange.component';

describe('BookchangeComponent', () => {
  let component: BookchangeComponent;
  let fixture: ComponentFixture<BookchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookchangeComponent]
    });
    fixture = TestBed.createComponent(BookchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
