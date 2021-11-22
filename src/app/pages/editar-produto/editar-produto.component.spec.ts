import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

import { EditarProdutoComponent } from './editar-produto.component';
import { EditarProdutoModule } from './editar-produto.module';

class RouterStub {
  url = '/editar-produto/33';
  navigateByUrl(url: string) {
    return url;
  }

  navigate(route: any) {
    return null;
  }
}

describe('EditarProdutoComponent', () => {
  let component: EditarProdutoComponent;
  let fixture: ComponentFixture<EditarProdutoComponent>;
  let activatedRouteSpy;

  beforeEach(async(() => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          code: 33
        })
      }
    };
    TestBed.configureTestingModule({
      imports: [
        EditarProdutoModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useValue: activatedRouteSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
