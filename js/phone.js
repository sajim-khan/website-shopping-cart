function updatePhoneNumber(newPhoneNumber) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber ;
    
    if(isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    
    phoneNumberField.value = newPhoneNumber;
    
    return newPhoneNumber;
    
    
    
}

document.getElementById('btn-phone-plus').addEventListener('click', function() {
    
})


document.getElementById('btn-phone-minus').addEventListener('click', function() {

})