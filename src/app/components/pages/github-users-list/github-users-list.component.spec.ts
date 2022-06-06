import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUsersListComponent } from './github-users-list.component';

describe('GithubUsersListComponent', () => {
  let component: GithubUsersListComponent;
  let fixture: ComponentFixture<GithubUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
