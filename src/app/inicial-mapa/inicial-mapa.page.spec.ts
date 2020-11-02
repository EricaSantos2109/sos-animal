import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicialMapaPage } from './inicial-mapa.page';

describe('InicialMapaPage', () => {
  let component: InicialMapaPage;
  let fixture: ComponentFixture<InicialMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialMapaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicialMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
