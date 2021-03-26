import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Controller, Post, Get, Patch, Delete, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

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

    // Test Auth Guard
    @Post('test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        console.log(req);
    }
}
