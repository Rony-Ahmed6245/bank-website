
document.getElementById('btn-deposit').addEventListener('click',function(){
   

// deposit part 
    const depositField = document.getElementById('deposit-field');
    const depositText = depositField.value;
    const depositAmount = parseFloat(depositText);
    // console.log(depositAmount)
    
   

    const deposit = document.getElementById('deposit-total');
    const depositstring = deposit.innerText;
    const depositBlance = parseFloat(depositstring);
    const totalAmount = depositBlance + depositAmount ;


    deposit.innerText = totalAmount;
    depositField.value = '';


    const balanceElement = document.getElementById('balance-total');
    const balanceText = balanceElement.innerText;
    const balance = parseFloat(balanceText);


    const totalBlance = depositAmount + balance;
    balanceElement.innerText = totalBlance ;


    // withdraw part

})


document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFieldElements = document.getElementById('withdraw-field');
    const withdrawField = withdrawFieldElements.value;
    const withdrawFieldAmount = parseFloat(withdrawField);
    

    const withdrawBox = document.getElementById('withdraw-total');
    const withdrawBoxAmount = withdrawBox.innerText;
    const withdrawAmount = parseFloat(withdrawBoxAmount);

    const totalWithdrawAmount=withdrawFieldAmount +withdrawAmount;
    withdrawBox.innerText = totalWithdrawAmount
    withdrawFieldElements.value = '';


    const balanceElement = document.getElementById('balance-total');
    const balanceText = balanceElement.innerText;
    const balance = parseFloat(balanceText);


    const finalBlance = balance - withdrawFieldAmount;
    balanceElement.innerText = finalBlance ;



})



