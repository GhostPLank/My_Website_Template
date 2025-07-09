function returnText() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let s = "From: "+ email + "\n \n" + "Message: "+ "\n" +message;
    alert(s);
}