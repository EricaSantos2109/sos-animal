import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalizarAdocaoPage } from './finalizar-adocao.page';

describe('FinalizarAdocaoPage', () => {
  let component: FinalizarAdocaoPage;
  let fixture: ComponentFixture<FinalizarAdocaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarAdocaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizarAdocaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
