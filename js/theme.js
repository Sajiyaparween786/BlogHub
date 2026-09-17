const body = document.body;

const darkBtn =
document.getElementById("dark-btn");

const lightBtn =
document.getElementById("light-btn");

darkBtn.addEventListener("click",()=>{

    body.classList.remove("light-mode");

    localStorage.setItem(
        "theme",
        "dark"
    );

});

lightBtn.addEventListener("click",()=>{

    body.classList.add("light-mode");

    localStorage.setItem(
        "theme",
        "light"
    );

});

if(
localStorage.getItem("theme")
=== "light"
){
    body.classList.add("light-mode");
}