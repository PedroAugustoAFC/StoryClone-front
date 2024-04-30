import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistMainComponent } from './booklist-main.component';

describe('BooklistMainComponent', () => {
  let component: BooklistMainComponent;
  let fixture: ComponentFixture<BooklistMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooklistMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooklistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
