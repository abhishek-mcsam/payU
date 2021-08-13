import { Injectable } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
 
// import  jssha from 'jssha'
import * as request from 'request'

const jsSHA = require("jssha");


@Injectable()
export class PaymentSevice {

  Pay(){
      
    let marchentKey = "uZPa95"
    let marchentslt = "uZPa95"
    let txnid='asc12345678';
    let amount=1000;
    let produnctinfo='Product 1';
    let firstname='Amit';
    let email='abhi08127gmail.com';
    let phone='8860934923';
    let surl='http://localhost:3000/app/paymentsuccess';
    let furl='http://localhost/app/paymentsuccess';
    let service_provider='payu_paisa';
    let string = marchentKey +'|' +txnid+ '|' +amount+'|'+'|'+firstname+'|'+email+'|'+phone+'|'+ surl +'|'+furl+'|'+service_provider+'|||||||'+ marchentslt;
     
    let sha = new  jsSHA('SHA-512', "TEXT");

    sha.update(string);

    const hash = sha.getHash("HEX");

    const pay = {
        key: 'uZPa95',
        firstname:'Amit',
        email: 'abhi08127@gmail.com',
        surl: 'http://localhost:3000/app/paymentsuccess',
        furl:  'http://localhost/app/paymentsuccess',
        hash
    }
    console.log("LLLLLLLLLL")
request.post({
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        url: 'https://sandboxsecure.payu.in/_payment', //Testing url
        form: pay
        }, function (error, httpRes, body) {
            if (error) {
                console.log("errrrrror is " , error)
                return error
            } else if (httpRes.statusCode === 200) {
                return body;
                } else if (httpRes.statusCode >= 300 && 
                httpRes.statusCode <= 400) {
                    
                // res.redirect(httpRes.headers.location.toString());
                return { message: 'Hello world!' };
                }
                })

    }

}