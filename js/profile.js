// Bookmark Count

const bookmarks =
JSON.parse(
localStorage.getItem("bookmarks")
) || [];

document.getElementById(
"bookmarkCount"
).innerText = bookmarks.length;


// User Data

const user =
JSON.parse(
localStorage.getItem("user")
);

if(user){

document.getElementById(
"userName"
).innerText =
user.name;

document.getElementById(
"userEmail"
).innerText =
user.email;

}


// Blog Count

const blogs =
JSON.parse(
localStorage.getItem("blogs")
) || [];

document.getElementById(
"blogCount"
).innerText =
blogs.length || 14;


// Logout

document.getElementById(
"logoutBtn"
).addEventListener(
"click",
()=>{

localStorage.removeItem(
"user"
);

alert(
"Logged Out Successfully"
);

window.location.href =
"login.html";

}
);


// Edit Profile

document.getElementById(
"editBtn"
).addEventListener(
"click",
()=>{

let newName =
prompt(
"Enter New Name"
);

if(newName){

document.getElementById(
"userName"
).innerText =
newName;

let user =
JSON.parse(
localStorage.getItem("user")
);

if(user){

user.name =
newName;

localStorage.setItem(
"user",
JSON.stringify(user)
);

}

}

});