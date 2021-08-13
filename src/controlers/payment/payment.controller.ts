import { Body, Controller , Post } from "@nestjs/common";
import { PaymentSevice } from "./payment.service";
 


@Controller('payment')

export class PaymentController {
    constructor(private paymentService: PaymentSevice ){}

   @Post()
    createpayment(){
         
       return   this.paymentService.Pay();
   }

}
