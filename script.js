let myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", function(event){
event.preventDefault();
let name = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let message = document.querySelector("#message");
message.textContent = `Thank you ${name} your email ${email} has been submitted!`
this.remove;    
})