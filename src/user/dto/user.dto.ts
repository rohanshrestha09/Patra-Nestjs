export class UserSignupDto {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly confirmpassword: string;
}

export class UserLoginDto {
  readonly email: string;
  readonly password: string;
}

export class ImgUrlDto {
  readonly imgUrl: string;
}
