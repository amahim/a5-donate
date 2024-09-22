function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}


function calculate(inputAmount,myBalance,locationBalance,id,locationTitle){
    if(inputAmount < 0 || isNaN(inputAmount)){
        alert('Invalid Donation Amount!')
    }else if(myBalance < inputAmount){
        
        alert("You Don't Have Enough Balance!")
    }else{
        my_modal.showModal();
        document.getElementById(id).innerText = (locationBalance + inputAmount).toFixed(2);
        document.getElementById('my-balance').innerText = (myBalance - inputAmount).toFixed(2);
        history(inputAmount,locationTitle);
    }
}

function history(inputAmount,locationTitle){
    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();
    div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-[#111111B3]', 'rounded-xl');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${inputAmount} Taka donated to: ${locationTitle}
        </h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date : 
            ${dateTimeString}
        </p>   
    `;
    document.getElementById('history-div').appendChild(div);
}