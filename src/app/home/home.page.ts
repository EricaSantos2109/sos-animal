import { Component } from "@angular/core";
import { AutenticacaoService } from "../services/autenticacao.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  constructor(private autenticacao: AutenticacaoService){}
  loginGoogle(){
    this.autenticacao.loginGoogle();
  }
}
