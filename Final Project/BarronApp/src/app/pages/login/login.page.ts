import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.credentialsForm =this.fb.group({
      email: ['email@example.com', [Validators.email, Validators.required]],
      password: ['111111', [Validators.minLength(6), Validators.required]]
    });
  }

  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.authService.signup(this.credentialsForm.value).then(_ => {
      loading.dismiss();
      this.router.navigateByUrl('inside', {replaceUrl: true });
    }, async err => {
        await loading.dismiss();

        const alert = await this.alertCtrl.create({
          header: 'Sign Up Failed',
          message: 'Please try again later, if it continues, contact the administrator. Reason: ' + err,
          buttons: ['OK']
        });
        await alert.present();
    });
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.authService.login(this.credentialsForm.value).then(user => {
      console.log(user);

      loading.dismiss();
      this.router.navigateByUrl('inside', {replaceUrl: true });
    }, async err => {
        await loading.dismiss();

        const alert = await this.alertCtrl.create({
          header: 'Error logging in',
          message: 'Please try again later, if it continues, contact the administrator. Reason: ' + err,
          buttons: ['OK']
        });
        await alert.present();
    });
  }

}
