// get input from form


//vali form
function validateForm(name, email, message){
    if(!name || !email || !message){
        alert("write sth");
    }
    else if (!email.includes("@")) {
        alert("that cant be a mel")
        return false;
} else {
  return true;
}
}
//submit form
function submit(e) {
    const user_name = document.getElementById("contact-name").value;
const user_email = document.getElementById("contact-email").value;
const user_message = document.getElementById("contact-message").value;
    e.preventDefault();
    const validated = validateForm (user_email, user_message, user_name)
    if (validated == true) {
        console.table([user_name, user_email, user_message]);
}
}
//add event 4 button sub
document.querySelector("#contact-submit").addEventListener("click", submit);