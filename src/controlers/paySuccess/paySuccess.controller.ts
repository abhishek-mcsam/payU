import { Body, Controller, Post  , Req, Res} from "@nestjs/common";
import { PaySuccessService } from "./paySuccess.services";
import { PaySuccessDto } from "./paySuccess.dto";

@Controller('paymentsuccess')

export class PaymentSuccessController {
    constructor(private payService: PaySuccessService){}

    @Post()
    // @Body() payScehma : PaySuccessDto  ,
    PaymentSuccess(@Req() req  , @Res() res){
        console.log("reeeqqqqqbodyy is " , req.body)
        return this.payService.SucessHandler()
    }


    
}