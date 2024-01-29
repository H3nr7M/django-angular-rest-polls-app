import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailComponentComponent } from './question-detail-component.component';

describe('QuestionDetailComponentComponent', () => {
  let component: QuestionDetailComponentComponent;
  let fixture: ComponentFixture<QuestionDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
