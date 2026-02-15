import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomlistComponent } from './roomlist.component';

describe('RoomlistComponent', () => {
  let component: RoomlistComponent;
  let fixture: ComponentFixture<RoomlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomlistComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
