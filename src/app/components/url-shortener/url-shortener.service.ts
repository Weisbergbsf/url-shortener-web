
import { HttpClient } from "@angular/common/http";

import { OriginalUrl } from "./original-url.model";
import { URL_API } from "./../../app.api";
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { ShortenedUrl } from './shortened-url.model';

@Injectable()
export class UrlShortenerService {

    constructor(private http: HttpClient){}

    create(originalUrl: OriginalUrl): Observable<ShortenedUrl>{

        return this.http.post<OriginalUrl>(`${URL_API}/create-short`, originalUrl).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e) )
        );
    }

    errorHandler(e: any): Observable<any> {
        console.log(e.error[0])
        return EMPTY;
      }
}