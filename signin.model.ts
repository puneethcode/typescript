export class User {
    userId: string;
    passCode: string;
}

export class SignIn {
  userId: string;
  passCode: string;
}

export class Response {
    status: string;
    errorDesc: string;
    statusCode: number;
}
