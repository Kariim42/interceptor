import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})
export class Auth implements HttpInterceptor {



    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.urlWithParams);
        const start = Date.now();
        return next.handle(req).pipe(tap((response) => {

            if (response instanceof HttpResponse) {

                const millis = Date.now() - start;
                console.log(millis +  "ms");
            }
        }
        ))
    }
}


