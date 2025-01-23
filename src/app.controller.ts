import { Controller, Get } from "@nestjs/common";

@Controller("/")

export class AppController{
    @Get()
    getInfo()
    {
        return {
            "data":"Sagar",
            "message":"C paper back",
            "status":200
        };
    }
}