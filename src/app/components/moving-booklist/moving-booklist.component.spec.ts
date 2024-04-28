import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBooklistComponent } from './moving-booklist.component';

describe('MovingingBooklistComponent', () => {
  let component: MovingBooklistComponent;
  let fixture: ComponentFixture<MovingBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingBooklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
