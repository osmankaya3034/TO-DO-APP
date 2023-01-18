const button = document.getElementById("btn")
const textInput = document.getElementById("title")
const main = document.getElementsByTagName("main")[0]
button.addEventListener("click", (e) => {
  main.innerHTML += `<nav class="add remove "><button class="nav__check"><i class="fa-solid fa-check"></i></button> <span>${textInput.value}</span>  <button class="nav__remove"><i class="fa-solid fa-xmark"></i></button></nav>`;
  textInput.value = "";
});

window.addEventListener("keyup",(e)=>{
   e.code === "Enter" && button.click();
})

main.addEventListener("click", (e) => {

  if(e.target.classList.contains("fa-xmark")){
    e.target.closest("nav").remove()
}
  if(e.target.classList.contains("fa-check")){   
 e.target.classList.toggle("click")
}
  if(e.target.classList.contains("fa-check")){    e.target.closest("nav").classList.toggle("nav_click")   
  }
  if (e.target.classList.contains("fa-check")) {
    e.target.closest("nav").classList.toggle("white");
  }

});