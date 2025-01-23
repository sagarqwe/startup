import { Controller, Get } from "@nestjs/common";

@Controller("/")

export class AppController{
    @Get()
    getInfo()
    {
        return "Hi, Welcome to Hell";
    }
}