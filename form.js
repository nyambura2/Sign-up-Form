function validateForm(){
const firstname = document.getElementById ('fname');
const lastname = document.getElementById ('lname');
const email = document.getElementById ('email1');
const password= document.getElementById ('password1');

const errormsg1 = document.getElementById ('errormsg1');
const errormsg2 = document.getElementById ('errormsg2');
const errormsg3 = document.getElementById ('errormsg3');
const errormsg4 = document.getElementById ('errormsg4');

const thanks = document.getElementById ('thanks');
const form1 = document.getElementById ('form1')

let isValid = true;

if (firstname.value ==='' ) {errormsg1.style.display ="Block"; 
isValid = false;
} else {
    errormsg1.style.display = 'none';
}

if (lastname.value === '') {errormsg2.style.display = 'block';
isValid = false;
} else {
    errormsg2.style.display='none';
}

if (email.value === '') {errormsg3.style.display = 'block';
isValid = false;
} else {
    errormsg3.style.display='none';
}

if (password.value === '') {errormsg4.style.display = 'block';
isValid = false;
} else {
    errormsg4.style.display='none';
}
if (isValid) {
    form1.style.display='none';
    thanks.style.display= 'block';
}

} 