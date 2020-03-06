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

  signUp(email: string, password: string)
  {
    return this.http.post<responseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyAmqFJnOcMOGuEB2G0POapMkzBE7Nx4zqc]',
      {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
