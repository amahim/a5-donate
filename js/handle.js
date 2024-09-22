// menu button
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');
// sections
const donationSec =  document.getElementById('donation-sec');
const historySec = document.getElementById('history-sec');
// donation buttons
const noakhaliBtn = document.getElementById('noakhali-btn')
const feniBtn = document.getElementById('feni-btn')
const quotaBtn = document.getElementById('quota-btn')

// menu btn click handles
historyBtn.addEventListener('click',function(){
    donationSec.classList.add('hidden');
    historySec.classList.remove('hidden');

    historyBtn.classList.add('bg-[#B4F461]','text-black')
    historyBtn.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')

    donationBtn.classList.remove('bg-[#B4F461]','text-black')
    donationBtn.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')


})

donationBtn.addEventListener('click',function(){
    donationSec.classList.remove('hidden');
    historySec.classList.add('hidden');

    donationBtn.classList.add('bg-[#B4F461]','text-black')
    donationBtn.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')

    historyBtn.classList.remove('bg-[#B4F461]','text-black')
    historyBtn.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')

})

// donation handles all

// noakhali
noakhaliBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('noakhali-input-value');
    const noakhaliBalance = getBalance('noakhali-balance')

    calculate(inputAmount,myBalance,noakhaliBalance,'noakhali-balance');

})
// feni
feniBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('feni-input-value');
    const feniBalance = getBalance('feni-balance')

    calculate(inputAmount,myBalance,feniBalance,'feni-balance');

})
// quota
quotaBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('my-balance')
    const inputAmount = getInputValue('quota-input-value');
    const quotaBalance = getBalance('quota-balance')

    calculate(inputAmount,myBalance,quotaBalance,'quota-balance');

})
