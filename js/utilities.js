function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}

function calculate(inputAmount,myBalance,locationBalance,id){
    if(inputAmount < 0 || isNaN(inputAmount)){
        alert('Invalid donation amount!')
    }else if(myBalance < inputAmount){
        alert("You don't have enough balance!")
    }else{
        document.getElementById(id).innerText = (locationBalance + inputAmount).toFixed(2);
        document.getElementById('my-balance').innerText = (myBalance - inputAmount).toFixed(2);
    }
}