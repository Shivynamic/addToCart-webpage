var product_total_amt = document.getElementById('product_total_amt');
var total_cart_amt = document.getElementById('total_cart_amt');
var shipping_charge = document.getElementById('shipping_charge');
var discountCode = document.getElementById('discount_code1');



const decreaseNumber =(incdec,itemprice)=>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if(itemval.value <= 0){
        itemval.value=0;
        total_cart_amt.innerHTML = 0
        alert('Negative quatity not allowed!')
    }
    else{
        itemval.value = parseInt(itemval.value)-1;
        itemval.style.background ='white';
        itemval.style.color ='black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML)-20;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML)-20;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)
    }
}

const increaseNumber =(incdec,itemprice)=>{
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);


    if(itemval.value >= 5){
        itemval.value=5;
        alert('Max 5 items allowed!!');
        itemval.style.background ='red';
        itemval.style.color ='#fff';
    }
    else{
        itemval.value = parseInt(itemval.value)+1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML)+20;

        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML)+20;

        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)

    }
}


const discount_code =() =>{
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);


    let error_trw = document.getElementById('error_trw')

    if (discountCode.value ==="SHEWEDRS"){
        let newtotalamt = totalamtcurr -15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Wohoo!! Code is applied for discount!"

    }
    else{
        error_trw.innerHTML = "Wrong Code! Discount available on code: SHEWEDRS"
    }
}