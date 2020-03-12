import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface responseData
{
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered: string
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  signUp(email: string)
  {
    localStorage.setItem("key", email);
    // return this.http.post<responseData>(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSMsVNyEs8nVqZ3a1TkJfAw8uQvMHWV5Y',
    //   {
    //   email: email,
    //   password: password,
    //   returnSecureToken: true
    // })
  }

  signIn(email: string)
  {

     localStorage.getItem("key");
     console.log('got item')
    // return this.http.post<responseData>(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSMsVNyEs8nVqZ3a1TkJfAw8uQvMHWV5Y',
    //   {
    //      email: email,
    //   password: password,
    //   returnSecureToken: true
    //   }
    // )
  }
}