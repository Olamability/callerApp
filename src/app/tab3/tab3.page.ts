import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  // alert effect
  async presentAlert(msg: any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      // message: 'Form Submitted!',
      message: msg,

      buttons: ['OK'],
    });

    await alert.present();
  }

  // loading effext
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait while Ability Classic Travels proccesses your booking...',
      duration: 3000,
    });

    loading.present();
    setTimeout(() => {
      this.presentAlert("Successful");

    }, 3200);
  }
  
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      window.location.reload();
      // event.target.complete();
    }, 500);
  };

}
