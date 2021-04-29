import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emmit an event when click send', () => {
    //given
    const button = fixture.debugElement.query(By.css('.card__confirmation'));
    const buttonClickSpy = spyOn(component.clickSend, 'emit');
    //when
    button.nativeElement.click();
    //expect
    expect(buttonClickSpy).toHaveBeenCalled();

  });
});
