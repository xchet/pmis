const sideMenu = document.querySelector(".sidebar");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click",() =>{
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", () =>{
    sideMenu.style.display = "none";
});