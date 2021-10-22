import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
 import { Icolor } from '../interfaces/icolor';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
  color: any;
  http: any;
 
  constructor(private httpClient : HttpClient) { }

  // getRandomColor(): Observable<Icolor>{
  //   const url = "https://random-data-api.com/api/color/random_color";
  //  return this.httpClient.get<Icolor>(url);
  // }
  url = "https://random-data-api.com/api/color/random_color";

  user(){
    return this.http.get(this.url)
  }

  getRandomColor<T>(size: number = 0): Observable<T>{
    let url = `https://random-data-api.com/api/color/random_color`;
    const finalUrl = size ? `${url}?size=${size}` : url;
   return this.httpClient.get<T>(finalUrl);
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IColor } from '../interfaces/icolor';

// @Injectable({
//   providedIn: 'root'
// })
// export class ColorService {

//   constructor(private httpClient : HttpClient) { }

//   getRandomColor(): Observable<IColor>{
//     const url = "https://random-data-api.com/api/color/random_color";
//    return this.httpClient.get<IColor>(url);
//   }
// }
