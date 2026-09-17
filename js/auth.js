/* REGISTER */

const registerForm =
document.getElementById(
"registerForm"
);

if(registerForm){

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById(
"name"
).value;

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

const confirmPassword =
document.getElementById(
"confirmPassword"
).value;

if(
password !== confirmPassword
){

alert(
"Passwords do not match"
);

return;

}

const user = {

name,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert(
"Registration Successful"
);

window.location.href = "../login.html";

});
}

/* LOGIN */

const loginForm =
document.getElementById(
"loginForm"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById(
"loginEmail"
).value;

const password =
document.getElementById(
"loginPassword"
).value;

const user =
JSON.parse(
localStorage.getItem(
"user"
)
);

if(
email === user.email &&
password === user.password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

alert(
"Login Successful"
);

window.location.href = "../index.html";

}
else{

alert(
"Invalid Email Or Password"
);

}

});
}