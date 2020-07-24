

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
 addBtn.addEventListener('click',function () {
   
    shopQuantity.value = parseFloat(shopQuantity.value) + 1;
           let totalAmount =  1219 * parseFloat(shopQuantity.value);
           document.getElementById("mobilePrice").innerText = totalAmount; 
           subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) + 1219;
           
           taxPrice.innerText = subTotalPrice.innerText*.15;
          
           document.getElementById("totalPrice").innerText = subTotalPrice.innerText ;
    })
  
subtractBtn.addEventListener('click',function () {
    shopQuantity.value = parseFloat(shopQuantity.value) - 1;
    let totalAmount =  1219 * parseFloat(shopQuantity.value);
    document.getElementById("mobilePrice").innerText = totalAmount;
    subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) - 1219;
    taxPrice.innerText = subTotalPrice.innerText*.15;
    document.getElementById("taxPrice").innerText = taxPrice.innerText;
    document.getElementById("totalPrice").innerText = subTotalPrice.innerText;
})


let addBtn2 = document.getElementById("addButton2");
let subtractBtn2 = document.getElementById("substractButton2");
 let shopQuantity2 = document.getElementById("shopQuantity2");

  

 addBtn2.addEventListener('click',function () {
   
    shopQuantity2.value = parseFloat(shopQuantity2.value) + 1;
           let totalAmount2 =  59 * parseFloat(shopQuantity2.value);
           document.getElementById("mobilePrice2").innerText = totalAmount2; 
           subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) + 59;
           document.getElementById("totalPrice").innerText = subTotalPrice.innerText;
           taxPrice.innerText = subTotalPrice.innerText*.15;
           document.getElementById("taxPrice").innerText = taxPrice.innerText;
    })
   
subtractBtn2.addEventListener('click',function () {
    shopQuantity2.value = parseFloat(shopQuantity2.value) - 1;
    let totalAmount2 =  59 * parseFloat(shopQuantity2.value);
    document.getElementById("mobilePrice2").innerText = totalAmount2;
    subTotalPrice.innerText = parseFloat(subTotalPrice.innerText) - 59;
    document.getElementById("totalPrice").innerText = subTotalPrice.innerText;
    taxPrice.innerText = subTotalPrice.innerText*.15;
    document.getElementById("taxPrice").innerText = taxPrice.innerText;
})

function updateSubTotal(id,num1) {
    
    // const current = document.getElementById(id).innerText;
    // const currentNumber = parseFloat(current);
    const totalAmount = 1278 + num1;
    document.getElementById(id).innerText = totalAmount; 
}
function getTotalPrice(id) {
    const current1 = document.getElementById(id).innerText;
    const num4 = parseFloat(current1);
    const current2 = document.getElementById(id).innerText;
    const num5 = parseFloat(current2);
    let total = num4 + num5;
    document.getElementById(id).innerText = total;
}