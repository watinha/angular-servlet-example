import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { FrutaComponent } from './fruta.component';
import { FrutaService } from '../service/fruta.service';

var dataObject = [{id: 1, nome: 'mamao'}];

class FrutaServiceMock {
    get() {
        return of(dataObject);
    }
}

describe('FrutaComponent', () => {
  let component: FrutaComponent;
  let service: FrutaService;
  let fixture: ComponentFixture<FrutaComponent>;
  let lis = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaComponent ],
      providers: [
        FrutaComponent,
        { provide: FrutaService, useClass: FrutaServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaComponent);
    component = fixture.componentInstance;
    service = TestBed.get(FrutaService);
    fixture.detectChanges();
    lis = fixture.nativeElement.querySelectorAll('li');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get one fruit on init', () => {
    expect(component.fruits).toEqual([{id: 1, nome: 'mamao'}]);
    expect(lis.length).toBe(1);
    expect(lis[0].textContent).toBe('mamao');
  });

  it('should get two fruits on init', () => {
    dataObject = [{id: 1, nome: 'mamao'},{id: 2, nome: 'abacate'}];
    fixture = TestBed.createComponent(FrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    lis = fixture.nativeElement.querySelectorAll('li');
    expect(component.fruits).toEqual([{id: 1, nome: 'mamao'},{id: 2, nome: 'abacate'}]);
    expect(lis.length).toBe(2);
    expect(lis[0].textContent).toBe('mamao');
    expect(lis[1].textContent).toBe('abacate');
  });
});
