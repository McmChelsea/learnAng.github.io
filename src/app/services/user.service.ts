import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { of, throwError } from 'rxjs';


// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users') || '[]');

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient){}
    register(user: any) {
        return this.http.post(`/users/register`, user);
    }

    register1(user: any) {
        console.log(users)

        if (users.find((x: any) => x.username === user.username)) {
            return this.error('Username "' + user.username + '" is already taken')
        }

        user.id = users.length ? Math.max(...users.map((x: any) => x.id)) + 1 : 1;
        users.push(user);
        console.log(users, user)
        localStorage.setItem('users', JSON.stringify(user));

        return this.ok();
    }



     ok(body?: any) {
        return of(new HttpResponse({ status: 200, body }))
    }

     error(message: any) {
        return throwError({ error: { message } });
    }
}