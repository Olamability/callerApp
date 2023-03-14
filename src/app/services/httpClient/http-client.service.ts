import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from "rxjs";
import { catchError, filter } from "rxjs/operators";

/**
 * Error interface definition
 */
export type HttpServiceErrorInterface = {
  error: boolean;
  message: string;
  code: number;
};

export interface HttpOptionsInterface {
  headers?:
  | HttpHeaders
  | {
    [header: string]: string | string[];
  }
  | undefined;
  responseType?: "json";
  context?: any | undefined;
  observe?: "body" | undefined;
  params?: HttpParams | any | undefined;
  reportProgress?: boolean | undefined;

  withCredentials?: boolean | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }


  /**
 * Handles all http get request calls
 * @param {string} url        The http get url
 * @param {any} httpOptions   The http options to use for the current call
 * @returns {Observable<any>} Returns an observable of type any
 */
  public get(url: string, httpOptions?: HttpOptionsInterface): Observable<any> {
    return this.http
      .get(url, httpOptions)
      .pipe(
        filter((data) => {
          console.log("from http get: ", typeof data == "string");

          return typeof data == "string" ? JSON.parse(data) : data;
        })
      )
      .pipe(catchError(this.catchError<any>("https")));
  }

  /**
   * Handles all http get request calls
   * @param {string} url        The http get url
   * @param {any} httpOptions   The http options to use for the current call
   * @returns {Observable<any>} Returns an observable of type any
   */
  public post(
    url: string,
    body: any,
    httpOptions?: HttpOptionsInterface
  ): Observable<any> {
    return this.http
      .post(url, body, httpOptions)
      .pipe(
        filter((data) => (typeof data == "string" ? JSON.parse(data) : data))
      )
      .pipe(catchError(this.catchError<any>("https")));
  }

  /**
   * Catch local http error and return value to subscribers
   * @param errorType The the type of operation been performed
   * @returns {HttpServiceErrorInterface} Returns error values
   */
  private catchError<HttpServiceErrorInterface>(errorType: string = "http") {
    return (error: any): Observable<HttpServiceErrorInterface> => {
      console.log(error, "http client catch error value");

      /** Error response formatter
       * @todo use a proper response service or method in the future
       */
      const errorValue: any = {
        status: error.status ?? 0,
        error: error.statusText ?? "An unknown error occurs",
        errorType: errorType,
        // message: error.message,
        message: 'something went wrong check your network or close and relaunch the app again.',
      };

      return of(errorValue as HttpServiceErrorInterface);
    };
  }


}
