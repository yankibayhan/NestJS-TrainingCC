import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Controller, Post, Get, Patch, Delete, Body, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}
    
    @Post('signup')
    signUp(@Body(ValidationPipe) credentialDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signup(credentialDto);
    }

    @Post('signin')
    signIn(@Body(ValidationPipe) credentialDto : AuthCredentialsDto): Promise<{accessToken: string}> {
        return this.authService.signin(credentialDto);
    }
}
