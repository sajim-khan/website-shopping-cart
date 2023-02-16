// function updateCaseNumber(isIncrease){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
    
//     let newCaseNumber ;
    
//     if(isIncrease === true) {
//         newCaseNumber = previousCaseNumber + 1;
//     } else {
//         newCaseNumber = previousCaseNumber - 1;
//     }
    
//     caseNumberField.value = newCaseNumber;
    
//     return newCaseNumber;
// }


function getTextElementValueById (elementId) {
    // calculate total
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalPriceString = phoneTotalElement.innerText
    const currentPhoneTotal = parseFloat(phoneTotalPriceString)
    return currentPhoneTotal;
}


function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

///
function calculateSubTotal() {
       // calculate total
       const currentPhoneTotal = getTextElementValueById('phone-total');
       const currentCaseTotal = getTextElementValueById('case-price-total');
       
       const currentSubTotal = currentPhoneTotal + currentCaseTotal;
       setTextElementValueById('sub-total', currentSubTotal);

       // calculate tax
       const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
       const taxAmount = parseFloat(taxAmountString);
       setTextElementValueById('tax-amount', taxAmount);
       
       const finalAmount = currentSubTotal + taxAmount;
       setTextElementValueById('final-total', finalAmount);
}