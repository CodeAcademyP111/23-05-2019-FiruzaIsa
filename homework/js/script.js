var password = document.querySelector("#password");
var password_confirm = document.querySelector("#password_confirm");
var text = document.createElement("p");
var textnode = document.createTextNode("Minimum 6 characters");
var form= document.querySelector(".form-child");



password.addEventListener("keyup",function(){
    if(this.value.length<=6){
        this.classList.add("invalid");
       text.appendChild(textnode);
      form.insertBefore(text, form.childNodes[1]);
        }else{
        this.classList.remove("invalid");
        text.style.color="green"
        this.classList.add("valid");
         
    }
})







document.querySelector("#thisForm").addEventListener("submit", checkPsw);
function checkPsw(){
if (password.value == password_confirm.value) {
 }else{
      alert ( "Please enter correct password" );
    }
  }




