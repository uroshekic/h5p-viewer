import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H5pViewerComponent } from './h5p-viewer.component';

describe('H5pComponent', () => {
  let component: H5pViewerComponent;
  let fixture: ComponentFixture<H5pViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H5pViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H5pViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
