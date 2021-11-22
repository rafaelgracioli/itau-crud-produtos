import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { ListaComponent } from './lista.component';
import { ListaModule } from './lista.module';

class RouterStub {
  url = '/lista';
  navigateByUrl(url: string) {
    return url;
  }

  navigate(route: any) {
    return null;
  }
}

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ListaModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#createProduct - Should navaget to cadastro-produto when it is called', () => {
    const test = spyOn(component.router, 'navigate');
    component.createProduct();

    expect(test).toHaveBeenCalledWith(['cadastro-produto']);
  });
});
