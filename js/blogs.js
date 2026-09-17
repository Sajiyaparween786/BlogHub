const form =
document.getElementById(
"blogForm"
);

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const blog = {

id:Date.now(),

title:
document.getElementById(
"title"
).value,

category:
document.getElementById(
"category"
).value,

image:
document.getElementById(
"image"
).value,

author:
document.getElementById(
"author"
).value,

content:
document.getElementById(
"content"
).value

};

let blogs =
JSON.parse(
localStorage.getItem(
"blogs"
)
) || [];

blogs.push(blog);

localStorage.setItem(
"blogs",
JSON.stringify(blogs)
);

alert(
"Blog Published Successfully"
);

window.location.href =
"../index.html";

});

}

