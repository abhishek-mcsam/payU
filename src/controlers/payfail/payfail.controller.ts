import { Controller, Post , Req , Res } from "@nestjs/common";
import { PayfailProvider } from "./payfill.providers";


@Controller()

export class PayfailController{
    constructor(private failProvider: PayfailProvider ){}

    @Post()
    PayFailHandler(@Req() req  , @Res() res){
        console.log("reeeeee" , req.body)
     return this.failProvider.paymentfailHandler()
    }

  
}