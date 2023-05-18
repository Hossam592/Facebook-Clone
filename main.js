// Login Page Validation
function formValidate() {
    // Create Variables
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // Hide error Message
    document.getElementById("error1").style.display  = "none";
    document.getElementById("error2").style.display  = "none";
    // Create Conditions For Validate 
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
        document.getElementById("error1").style.display  = "block";
        return false;
    } 
    else
    if (password.length < 8) {
        document.getElementById("error2").style.display = "block";
        return false;
    }
    else{
        return true;
    }
}

// Sign Up Modal Form Validation
function formValidation() {
    // Create Variables
    let name_1 = document.querySelector("#fName").value;
    let name_2 = document.querySelector("#sName").value;
    let mail = document.querySelector("#mail").value;
    let pass = document.querySelector("#newPass").value;
    let error = document.querySelector("#error");
    let text = '';
        // Create Conditions For Validate 
    if (name_1.length < 6) {
        text = "Please Enter Your First Name";
        error.innerHTML = text;
        return false;
    }
    else if (name_2.length < 6) {
        text = "Please Enter Your Second Name";
        error.innerHTML = text;
        return false;
    }
    else if (mail.indexOf("@") == -1 || mail.indexOf(".") == -1) {
        text = "Please Enter Your Email Address";
        error.innerHTML = text;
        return false;
    }
    else if (pass.length < 8) {
        text = "Please Enter Your Password";
        error.innerHTML = text;
        return false;
    }
    else{
        return true;
    }
}

