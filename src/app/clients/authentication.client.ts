import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import sampleData from '../data.json';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
    Users: any = sampleData;
    constructor(private http: HttpClient) {}

    public login(username: string, password: string): string {
    var user = {
        username: username,
        password: password
    };
    return this.isLogin(user);
    }

    public register(
    username: string,
    email: string,
    password: string
    ): string {
    var user = {
        username: username,
        email: email,
        password: password
    };
    return this.isRegister(user);
    }

    private isRegister(user){
        return this.generateToken(user, "register");
    }
    private isLogin(user){
        console.log(this.generateToken(user, "login"));
        return this.generateToken(user, "login");
    }
    private checkIfUser(user){
        var data = sampleData;
        var bol = false;
        for(var i = 0; i<data.length; i++){
            if(user.email == data[i].email || user.username == data[i].username){
                bol = true;
            }
        }
        return bol;
    }

    private generateToken(user, action){
        var check = this.checkIfUser(user);
        var token = "";
        if(action == "register" && check == true){
            token = "user_exist";
        }
        else if(action == "register" && check == false){ 
            token = "created";
            this.creatUser(user);
            console.log(sampleData);
        }
        else if(action == "login" && check == true){
            token = this.random32bit();
        }
        else if(action == "login" && check == false){
            token = "doesnt_exist";
        }
        return token;
    }

    private creatUser(user){
        var json = JSON.stringify(user);
        sampleData.push(user);
    }
    
    private random32bit() {
        let u = new Uint32Array(1);
        window.crypto.getRandomValues(u);
        let str = u[0].toString(16).toUpperCase();
        return '00000000'.slice(str.length) + str;
    }
}