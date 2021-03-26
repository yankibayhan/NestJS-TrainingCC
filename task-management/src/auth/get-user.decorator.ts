import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";


// This decorator is created to request only the logged users info
 
export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});