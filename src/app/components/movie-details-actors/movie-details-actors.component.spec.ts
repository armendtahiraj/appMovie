import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsActorsComponent } from './movie-details-actors.component';

describe('MovieDetailsActorsComponent', () => {
  let component: MovieDetailsActorsComponent;
  let fixture: ComponentFixture<MovieDetailsActorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsActorsComponent]
    });
    fixture = TestBed.createComponent(MovieDetailsActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
