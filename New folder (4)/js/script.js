var password = document.querySelector("#password");
var password_confirm = document.querySelector("#password_confirm");

document.querySelector("#thisForm").addEventListener("submit", checkPsw);
function checkPsw(){

     if (password.value == password_confirm.value ) {
        alert ( "Password was entered correctly" );


        
    }else{
      
        alert ( "Please enter correct password" );
    }
  




}


