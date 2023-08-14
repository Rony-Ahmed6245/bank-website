
// login page js
document.getElementById('btn-submit').addEventListener('click',function(){
    const inputFieldEmail = document.getElementById('user-email');
    const inputEmial = inputFieldEmail.value;

    const inputFieldPassword = document.getElementById('user-password');
    const inputPassword = inputFieldPassword.value;
    
    if(inputEmial == 'rony@gmail.com' && inputPassword == 'rony'){
        window.location.href = "bank.html";
    }else{
        return alert('invalid user')
    }

})


