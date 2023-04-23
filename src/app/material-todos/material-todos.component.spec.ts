import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTodosComponent } from './material-todos.component';

describe('MaterialTodosComponent', () => {
  let component: MaterialTodosComponent;
  let fixture: ComponentFixture<MaterialTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
