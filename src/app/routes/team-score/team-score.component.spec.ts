import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoreComponent } from './team-score.component';

describe('TeamScoreComponent', () => {
  let component: TeamScoreComponent;
  let fixture: ComponentFixture<TeamScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
