

let addBtn = document.getElementById("addButton");
let subtractBtn = document.getElementById("substractButton");
 let shopQuantity = document.getElementById("shopQuantity");
let subTotalPrice = document.getElementById("subTotalPrice");
let taxPrice = document.getElementById("taxPrice");
let totalPrice = document.getElementById("totalPrice");
const thankyouArea = document.getElementById('thankYou');
const backBtn = document.getElementById("backButtons");
const shoppingArea = document.getElementById('shoppingArea');

backBtn.addEventListener("click", function () {
    
    thankyouArea.style.display = 'none';
   
    shoppingArea.style.display = 'block';
})

const checkoutBtn = document.getElementById("checkOutButtons");
checkoutBtn.addEventListener("click", function () {
  
    shoppingArea.style.display = 'none';

    thankyouArea.style.display = 'block';
})

// First add button
 addBtn.addEventListener('click',function () {
   
    shopQuantity.value = parseFloat(shopQuantity.value) + 1;
           let totalAmount =  1219 * parseFloat(shopQuantity.value);
           document.getElementById("mobilePrice").innerText = totalAmount; 
           subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) + 1219;
           let subTotal = document.getElementById("subTotalPrice").innerText;
           let subTotalPrice1 = parseInt(subTotal )
           document.getElementById("totalPrice").innerText = subTotalPrice1;
           taxPrice.innerText = parseInt(subTotalPrice.innerText*.15);
           let subTotalTax = document.getElementById("taxPrice").innerText;
           let subTotalTaxPrice= parseInt(subTotalTax)
           document.getElementById("totalPrice").innerText = subTotalTaxPrice;
          
           document.getElementById("totalPrice").innerText = subTotalPrice1  + subTotalTaxPrice ;
    })
  
    // First substract button
subtractBtn.addEventListener('click',function () {
    shopQuantity.value = parseFloat(shopQuantity.value) - 1;
    let totalAmount =  1219 * parseFloat(shopQuantity.value);
    document.getElementById("mobilePrice").innerText = totalAmount;
    subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) - 1219;
    let subTotal = document.getElementById("subTotalPrice").innerText;
           let subTotalPrice1 = parseInt(subTotal )
           document.getElementById("totalPrice").innerText = subTotalPrice1;
    taxPrice.innerText = parseInt(subTotalPrice.innerText*.15);
    let subTotalTax = document.getElementById("taxPrice").innerText;
    let subTotalTaxPrice= parseInt(subTotalTax)
    document.getElementById("totalPrice").innerText = subTotalTaxPrice;
    document.getElementById("totalPrice").innerText = subTotalPrice1  + subTotalTaxPrice ;
})


let addBtn2 = document.getElementById("addButton2");
let subtractBtn2 = document.getElementById("substractButton2");
 let shopQuantity2 = document.getElementById("shopQuantity2");

  
// second add button
 addBtn2.addEventListener('click',function () {
    shopQuantity2.value = parseFloat(shopQuantity2.value) + 1;
    let totalAmount2 =  59 * parseFloat(shopQuantity2.value);
    document.getElementById("mobilePrice2").innerText = totalAmount2; 
    subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) + 59;
    let subTotal2 = document.getElementById("subTotalPrice").innerText;
    let subTotalPrice2 = parseInt(subTotal2 )
    document.getElementById("totalPrice").innerText = subTotalPrice2;
    taxPrice.innerText = parseInt(subTotalPrice.innerText*.15);
    let subTotalTax2 = document.getElementById("taxPrice").innerText;
    let subTotalTaxPrice2= parseInt(subTotalTax2)
    document.getElementById("totalPrice").innerText = subTotalTaxPrice2;
   
    document.getElementById("totalPrice").innerText = subTotalPrice2  + subTotalTaxPrice2 ;

          
           
    })
 // second substract button  
subtractBtn2.addEventListener('click',function () {
    shopQuantity2.value = parseFloat(shopQuantity2.value) - 1;
    let totalAmount2 =  59 * parseFloat(shopQuantity2.value);
    document.getElementById("mobilePrice2").innerText = totalAmount2;
    subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) - 59;
    let subTotal2 = document.getElementById("subTotalPrice").innerText;
           let subTotalPrice2 = parseInt(subTotal2 )
           document.getElementById("totalPrice").innerText = subTotalPrice2;
    taxPrice.innerText = parseInt(subTotalPrice.innerText*.15);
    let subTotalTax2 = document.getElementById("taxPrice").innerText;
    let subTotalTaxPrice2= parseInt(subTotalTax2)
    document.getElementById("totalPrice").innerText = subTotalTaxPrice2;
    document.getElementById("totalPrice").innerText = subTotalPrice2  + subTotalTaxPrice2 ;
    
})


