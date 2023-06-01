import { Controller, Get, Post,Res, Body, Patch, Param, Delete,UseGuards,Request,Session,InternalServerErrorException  } from '@nestjs/common';
import { Response } from 'express';


import { IsAuthenticatedGuard, UnauthenticatedGuard } from 'src/auth/guards/is-authenticated';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { Session as ExpressSession } from 'express-session';
@Controller()
export class UserController {

    @UseGuards(IsAuthenticatedGuard)
    @Post('logout')
        async logout(@Request() request,@Res() res: Response) {
        const logoutError = await new Promise((resolve) =>
            request.logout({ keepSessionInfo: false }, (error) =>
            resolve(error),
            ),
        );

        if(logoutError) {
            throw new InternalServerErrorException('Could not log out user');
        }
        return res.json({status:200,logout:true})
    
    }


    @UseGuards(UnauthenticatedGuard,LocalAuthGuard)
    @Post('login')
    login(@Request() request: any, @Session() session: ExpressSession) {
        return session;
    }

}
