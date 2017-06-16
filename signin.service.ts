import { Injectable } from '@angular/core';
import { AppAPI } from 'app/api/app.api';

@Injectable()
export class SignInServices {
    constructor( private appAPI: AppAPI ) { }
    checkUser() {
        const endPoint = 'users';
        const usersList = this.appAPI.fetchGetData(endPoint);
        return usersList;
    }

    signUpUsers(req) {
        const endPoint = 'setuser';
        const res = this.appAPI.fetchPostData(endPoint, req);
        return res;
    }
}
