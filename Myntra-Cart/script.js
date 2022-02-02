var prodamt = document.getElementById('prodamt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discount_code1 = document.getElementById('discount_code1');
var order_amt_total = document.getElementById('order_amt_total');

const decreaseNumber = (incdec, itemprice) =>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    var coupon_disc = document.getElementById('coupon_disc');

    if(itemval.value <= 0){
        itemval.value = 0;
        itemprice.value = 0;
        // total_cart_amt.innerHTML = parseInt(shipping_charge.innerHTML) - 99;
        // prodamt = 0;
    }

    // else if(itemval.value === 0){
    //     total_cart_amt.innerHTML = parseInt(shipping_charge.innerHTML) - 99;
    // }



    else{
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = 'rgb(228, 54, 83)';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 1500;
        prodamt.innerHTML = parseInt(prodamt.innerHTML) - 1500;
        itemval_mob1.innerHTML = parseInt(itemval1.innerHTML);
        itemval_mob2.innerHTML = parseInt(itemval11.innerHTML);

        total_cart_amt.innerHTML = parseInt(prodamt.innerHTML) + parseInt(shipping_charge.innerHTML);
        order_amt_total.innerHTML = parseInt(prodamt.innerHTML) + parseInt(shipping_charge.innerHTML);

        if(parseInt(prodamt.innerHTML) == 0){
            total_cart_amt.innerHTML = 0;
            order_amt_total.innerHTML = 0;
            coupon_disc.innerHTML = 0;
            console.log("less")
          }
    }
}

const increaseNumber = (incdec, itemprice) =>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if(itemval.value >= 5){
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = 'white';
    }
    else{
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 1500;
        prodamt.innerHTML = parseInt(prodamt.innerHTML) + 1500;
        itemval_mob1.innerHTML = parseInt(itemval1.innerHTML);
        itemval_mob2.innerHTML = parseInt(itemval11.innerHTML);


        total_cart_amt.innerHTML = parseInt(prodamt.innerHTML) + parseInt(shipping_charge.innerHTML);
        order_amt_total.innerHTML = parseInt(prodamt.innerHTML) + parseInt(shipping_charge.innerHTML);

        // order_amt_total.innerHTML = total_cart_amt.value;


    }
}

// order_amt_total.innerHTML = total_cart_amt.value;


const discount_code = () =>{
  var discount_code1 = document.getElementById('discount_code1');
  var error_trw = document.getElementById('error_trw');
  var coupon_disc = document.getElementById('coupon_disc');
  var code = "gaurav";



  if (parseInt(prodamt.innerHTML) <= 0){
      error_trw.style.color = 'red';
      error_trw.innerHTML = "Please add items to cart first";
      coupon_disc.innerHTML = 0;
  }

  else if (discount_code1.value === 'gaurav'){
    total_cart_amt.innerHTML = parseInt(total_cart_amt.innerHTML) - 500;
    order_amt_total.innerHTML=parseInt(order_amt_total.innerHTML) - 500;
    error_trw.innerHTML = "Code Applied";
    error_trw.style.color = 'green';
    coupon_disc.innerHTML = -500;
  }

  else{
      error_trw.innerHTML = "Code Expired";
      error_trw.style.color = 'red';
      coupon_disc.innerHTML = 0;

  }
}