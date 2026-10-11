

const btnlist = document.getElementById("btnlist");
const navlist = document.getElementById("navlist");

btnlist.addEventListener("click", () => {
    btnlist.classList.toggle("active");
    navlist.classList.toggle("active");
});