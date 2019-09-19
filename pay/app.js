const LiqPay = require("liqpay");
const request = require('request');
// console.log(liqpay);

const Pay = require('./liqpay2')

const public_key = "sandbox_i50014293598";
const private_key = "sandbox_HzRfKQbVeT7GYka2UjbQUJPUAkUHK1NYF8MuXjaP";



const liqpay = new LiqPay("sandbox_i50014293598", "sandbox_HzRfKQbVeT7GYka2UjbQUJPUAkUHK1NYF8MuXjaP");
const pay = new Pay(public_key, private_key)
// console.log(pay);
console.time();
pay.api(
  "request",
  {
    action: "invoice_bot",
    version: "3",
    email: "dima15521@gmail.com",
    amount: "1",
    currency: "UAH",
    order_id: "34",
    phone: "380958258543"
  },
  function(json) {
    console.log('Ответ',json.result);
  }
);

console.timeEnd();
