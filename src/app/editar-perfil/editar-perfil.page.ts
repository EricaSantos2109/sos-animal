import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AlertController, ViewWillEnter } from "@ionic/angular";
@Component({
  selector: "app-editar-perfil",
  templateUrl: "./editar-perfil.page.html",
  styleUrls: ["./editar-perfil.page.scss"],
})
export class EditarPerfilPage implements ViewWillEnter {
  @ViewChild("form") formulario: NgForm;

  public base64Image: any = "assets/perfil.svg";

  constructor(
    private camera: Camera,
    public alertController: AlertController
  ) {}

  ionViewWillEnter(): void {
    this.formulario.reset();
  }

  salvarDados() {
    this.formulario.reset();
    this.presentAlert(
      "Alterado com sucesso",
      "O perfil foi alterado com sucesso!"
    );
  }

  async presentAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ["OK"],
    });

    await alert.present();
  }
  cam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      (err) => {
        this.presentAlert("Error", err);
      }
    );
  }
}
