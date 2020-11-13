import { Component, OnInit, ViewChild } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AlertController, ViewWillEnter } from "@ionic/angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cadastro-animal",
  templateUrl: "./cadastro-animal.page.html",
  styleUrls: ["./cadastro-animal.page.scss"],
})
export class CadastroAnimalPage implements ViewWillEnter {
  @ViewChild('form') formulario: NgForm;

  public base64Image: any = "assets/foto.svg";
  public base64Image2: any = "assets/foto.svg";
  public base64Image3: any = "assets/foto.svg";

  constructor(
    private camera: Camera,
    public alertController: AlertController
  ) {}

  ionViewWillEnter(): void {
    this.formulario.reset();
  }

  cadastrarAnimal() {
    this.presentAlert('Cadastrado com sucesso', 'O animal foi cadastrado com sucesso!');
    this.formulario.reset();
  }

  async presentAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ["OK"],
    });

    await alert.present();
  }

  cam(idFoto: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        let base64header = "data:image/jpeg;base64,";
        if (idFoto === 1) {
          this.base64Image = base64header + imageData;
        } else if (idFoto === 2) {
          this.base64Image2 = base64header + imageData;
        } else {
          this.base64Image3 = base64header + imageData;
        }
      },
      (err) => {}
    );
  }
}
