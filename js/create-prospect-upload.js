const yesBttn = document.querySelector(".yesbtn");
const successPop = document.querySelector(".successpopupmodalcontainer");
const poppUp = document.querySelector(".reportsuccess-popup");
yesBttn.onclick = function() {
successPop.style.display = "flex";
}

successPop.addEventListener("click", ()=> {
  successPop.style.display= "none"
})

poppUp.addEventListener("click", (e)=>{
  e.stopPropagation();
  return;
})