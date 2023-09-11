/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface SignUpRequest {
}

export interface SignUpResponse {
}

export interface LoginReqeust {
}

export interface LoginResponse {
}

export interface RessetPasswordRequest {
}

export interface RessetPasswordResponse {
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  signUp(request: SignUpRequest): Observable<SignUpResponse>;

  login(request: LoginReqeust): Observable<LoginResponse>;

  ressetPassword(request: RessetPasswordRequest): Observable<RessetPasswordResponse>;
}

export interface AuthServiceController {
  signUp(request: SignUpRequest): Promise<SignUpResponse> | Observable<SignUpResponse> | SignUpResponse;

  login(request: LoginReqeust): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  ressetPassword(
    request: RessetPasswordRequest,
  ): Promise<RessetPasswordResponse> | Observable<RessetPasswordResponse> | RessetPasswordResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["signUp", "login", "ressetPassword"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
