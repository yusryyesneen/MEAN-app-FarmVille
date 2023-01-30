import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinsideComponent } from './productinside.component';

describe('ProductinsideComponent', () => {
  let component: ProductinsideComponent;
  let fixture: ComponentFixture<ProductinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductinsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
