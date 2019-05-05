import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaSearchComponent } from './pessoa-search.component';

describe('PessoaSearchComponent', () => {
  let component: PessoaSearchComponent;
  let fixture: ComponentFixture<PessoaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
