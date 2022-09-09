import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserService } from '../user/service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../students/entities/students.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([StudentEntity]),
        UserModule, 
        PassportModule, 
        JwtModule.register({
            secret: jwtConstants.secret, 
            signOptions: {expiresIn: '60s'},
        }),],
    providers:[
        AuthService, 
        LocalStrategy, 
        JwtStrategy, 
        UserService],
        exports:[AuthService]
})
export class AuthModule {}