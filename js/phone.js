function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber ;
    
    if(isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    
    phoneNumberField.value = newPhoneNumber;
    
    return newPhoneNumber;    
}




//
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1342;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

// For plus button 
document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatePhoneTotalPrice(newPhoneNumber)
    
    calculateSubTotal()
    
})

//For minus button
document.getElementById('btn-phone-minus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(false);
    
    updatePhoneTotalPrice(newPhoneNumber)
    
    calculateSubTotal()
})











