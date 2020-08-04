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
const back2Btn = document.getElementById('backButtons1');
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

// remove button1
const removeItem1 = document.getElementById('removeItem1');

removeItem1.addEventListener("click",function () {
    
    document.getElementById("phone-total").innerText = 1219;
    shopQuantity.value = 1;
    document.getElementById("subTotalPrice").innerText = 1219 ; 
    document.getElementById("tax-amount").innerText = 191;
    document.getElementById("grand-total").innerText = 1469;
    
})
// remove button2
const removeItem2 = document.getElementById('removeItem2');
removeItem2.addEventListener("click",function () {
    document.getElementById("phone-total").innerText = 59;
    shopQuantity2.value = 1;
    document.getElementById("subTotalPrice").innerText = 1219 ; 
    document.getElementById("tax-amount").innerText = 191;
    document.getElementById("grand-tota").innerText = 1469;
})

document.getElementById("case-increase").addEventListener("click",function () {
    handleProductchange('case',true);
})
document.getElementById("case-decrease").addEventListener("click",function () {
    handleProductchange('case',false);
})
document.getElementById("phone-increase").addEventListener("click",function () {
    handleProductchange('phone',true);
})
document.getElementById("phone-decrease").addEventListener("click",function () {
    handleProductchange('phone',false);
})
// Create string
function getFormatedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function handleProductchange(product,isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0 ){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
   

    let productTotal = 0;
    if (product == 'phone'){
        productTotal = productNewCount*1219;
    }
    if (product == 'case') {
        productTotal = productNewCount*59;
    }
    document.getElementById(product + "-total").innerText = getFormatedNumber(productTotal);
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputvalue("phone");
    const caseCount = getInputvalue("case");
    const totalPrice = phoneCount*1219 + caseCount*59;
    document.getElementById('subTotalPrice').innerText = getFormatedNumber(totalPrice) ;
    const tax = totalPrice * .15;
    document.getElementById("tax-amount").innerText = getFormatedNumber(tax);
    const grandTotal = parseInt(tax) + totalPrice;
    document.getElementById("grand-total").innerText = getFormatedNumber(grandTotal);
}

function getInputvalue(product) {
    const productInp = document.getElementById(product + "-count");
    const productCount = parseInt(productInp.value);
    return productCount;
}
// document.getElementById("case-increase").addEventListener("click",function () {
//     const caseInpt = document.getElementById("case-count");
//     const caseCount = parseInt(caseInpt.value);
//     const caseNewCount = caseCount + 1;
//     caseInpt.value = caseNewCount;
//     const caseTotal = caseNewCount*59;
//     document.getElementById("case-total").innerText = caseTotal;
// })
// document.getElementById("case-decrease").addEventListener("click",function () {
//     const caseInpt = document.getElementById("case-count");
//        const caseCount = parseInt(caseInpt.value);
//         const caseNewCount = caseCount - 1;
//         caseInpt.value = caseNewCount;
//         const caseTotal = caseNewCount*59;
//     document.getElementById("case-total").innerText = caseTotal;
// })
// 

// function handleProductchange(isIncrease,productPrice,id1,id2) {
//     const productInpt = document.getElementById(id1);
//     const productCount = parseInt(productInpt.value);
    
//     let productNewCount = productCount;
//     if (isIncrease == true) {
//         productNewCoun = productCount + 1;
//     }
//     if (isIncrease == false && productNewCount>0 ) {
//         productNewCoun = productCount - 1;
//     }
//      productInpt.value = productNewCoun;
//      const productTotal = productNewCount*productPrice;
//  document.getElementById(id2).innerText = productTotal;
//  calculateTotal()
// }
