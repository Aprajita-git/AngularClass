import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor{

    constructor( private auth:AuthService) {}

    intercept(request:HttpRequest<any>, handler:HttpHandler){
        const modifiedRequest = request.clone();
        return handler.handle(modifiedRequest)
    }

}