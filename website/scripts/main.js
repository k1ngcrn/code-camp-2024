var email = prompt("enter your e-mail:");
function checkemail (){
if (email.length < 1){
    alert("e-mail cannot be blank. Try again!");
} else {
    alert("thanks! we'll spam you at: " + email);
}

}
 checkemail();