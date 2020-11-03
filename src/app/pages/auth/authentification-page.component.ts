import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbSpinnerService } from '@nebular/theme';
import { Role } from 'app/@core/models/role';
import { User } from 'app/@core/models/user';
import { AuthentificationService } from 'app/shared/services/authentification/authentification.service';
/*import { Credentials } from '../pages/authentification/models/credentials';
import { Utilisateur } from '../pages/authentification/models/utilisateur';
import { AuthentificationService } from '../pages/authentification/services/authentification.service';
*/
@Component({
  selector: 'ngx-authentification-page',
  templateUrl: './authentification-page.component.html',
  styleUrls: ['./authentification-page.component.scss']
})
export class AuthentificationPageComponent  implements OnInit {

  invalidCredentialMsg: string;
  // model: any = {};
  loading = false;

  returnUrl: string | null = null;
  model: User = { email: '',username: '', password: '', role: Role.CLEINT};
  error = '';
  /*

  selectedUser: Utilisateur;
  users: Utilisateur[] = [];
*/
  constructor(
    private authentificationService: AuthentificationService, 
    private router: Router,
    private notificationsService: NbToastrService, 
    private spinnerService: NbSpinnerService
    ) {
    // deconnnecter l'utilisateur
    //this.logout(); // ** ancien
  }

  ngOnInit() {
  }

  onChangeLoginPassword() {
    this.invalidCredentialMsg = '';
    this.loading = false;
  }

  connexion(isValid: boolean) {
    if (!isValid) {
      this.invalidCredentialMsg = 'Invalid Login et Mot de pass. Reessayer!';
      return;
    }

    // this.loading = true;
    //this.spinnerService.spinnerShow();
    this.invalidCredentialMsg = '';
    /*
    const login = this.model.login; // const password = this.model.password;
    this.model.telephone = login;
    this.model.email = login;
    this.model.appCode = this.authentificationService.getAppCode();*/
    // executer l'authentification
    this.authentification();
  }

  authentification() {
    this.authentificationService.login(this.model).subscribe(
      authenticated => {
        if (authenticated) {
          console.log(authenticated)
          this.authentificationService.setCurrentUser(authenticated);
          /* redirection 1ere solution
          const url = this.authentificationService.getRedirectUrl();
          console.log('Redirect Url:' + url);
          // Redirect the user*/
          this.router.navigate(["/home"]);
        } else {
          this.invalidCredentialMsg = "credentials invalide" //this.authentificationService.getMessageAuthentification();
          //this.notificationsService.messageErreurBasDroit('' + this.invalidCredentialMsg);
          this.notificationsService.danger(''+this.invalidCredentialMsg);
          console.log(this.invalidCredentialMsg);
        }

        this.loading = false;
        //this.spinnerService.spinnerOut();
      }, (error) => {
        console.log(error);
        this.loading = false;
        //this.spinnerService.spinnerOut();
        //this.notificationsService.messageErreurBasDroit('Erreur de connexion: <b>' + error + '</b>!');
        this.notificationsService.danger('Erreur de connexion: <b>' + error + '</b>!');
      });
  }

/*
  // TODO: a enlever
  logout(navigateToHome?: boolean) {
    this.authentificationService.logout();
  }
*/

  submitForm(form: NgForm) {
    console.log(form);

    this.error = '';
    this.authentificationService.login(this.model)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(['/home']);
          }
        }
      }, (err: HttpErrorResponse) => {
        let message = '';
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
          message = 'Failed to authenticate user. ' + err.error.message;
          console.log('Failed to authenticate user.' + err.error.message);
        } else {
          // this.globalStateService.oups();
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
          message = 'Backend returned status code: ' + err.status +
            '\nFailed to authenticate user. Response body: ' + err.error;
        }
        //this.notificationsService.messageErreurBasDroit(message);
        this.notificationsService.danger(message);
        console.log(message);
      });
  }
}
