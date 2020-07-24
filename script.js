

let addBtn = document.getElementById("addButton");
let subtractBtn = document.getElementById("substractButton");
 let shopQuantity = document.getElementById("shopQuantity");
let subTotalPrice = document.getElementById("subTotalPrice");
let taxPrice = document.getElementById("taxPrice");
let totalPrice = document.getElementById("totalPrice");
const thankyouArea = document.getElementById('thankYou');
const backBtn = document.getElementById("backButtons");
const shoppingArea = document.getElementById('shoppingArea');
const removeItem1 = document.getElementById('removeItem1');
const removeItem2 = document.getElementById('removeItem2');

// checkout buttons
const checkOutBtn = document.getElementById('checkOutButton');
checkOutBtn.addEventListener("click", function () {
    const shoppingArea = document.getElementById('shoppingArea');
    shoppingArea.style.display = 'none';
    const submitArea = document.getElementById('login-area');
    submitArea.style.display = 'block';
})

// enter buttons
const enterBtn = document.getElementById('enterButton');
enterBtn.addEventListener("click", function () {
    const submitArea = document.getElementById('login-area');
    submitArea.style.display = 'none';
    const thankYou = document.getElementById('thankYou');
    thankYou.style.display = 'block';
})
// back2 button
const back2Btn = document.getElementById('backButtons2');
back2Btn.addEventListener("click", function () {
    const thankYou= document.getElementById('thankYou');
    thankYou.style.display = 'none';
    const submitArea = document.getElementById('login-area');
    submitArea.style.display = 'block';
})
// back1 button
const back1Btn = document.getElementById('backButtons1');
back1Btn.addEventListener("click", function () {
    const submitArea= document.getElementById('login-area');
    submitArea.style.display = 'none';
    const shoppingArea = document.getElementById('shoppingArea');
    shoppingArea.style.display = 'block';
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
          let total1 = subTotalPrice1  + subTotalTaxPrice;
           document.getElementById("totalPrice").innerText = total1;
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
    let total1 = subTotalPrice1  + subTotalTaxPrice
    document.getElementById("totalPrice").innerText = total1 ;
})
// remove button1
removeItem1.addEventListener("click",function () {
    
    document.getElementById("mobilePrice").innerText = 1219;
    shopQuantity.value = 1;
    document.getElementById("subTotalPrice").innerText = 1219 ; 
    document.getElementById("taxPrice").innerText = 191;
    document.getElementById("totalPrice").innerText = 1469;
    
})
// remove button2
removeItem2.addEventListener("click",function () {
    document.getElementById("mobilePrice2").innerText = 59;
    shopQuantity2.value = 1;
    document.getElementById("subTotalPrice").innerText = 1219 ; 
    document.getElementById("taxPrice").innerText = 191;
    document.getElementById("totalPrice").innerText = 1469;
})
// add2 and sub2
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


