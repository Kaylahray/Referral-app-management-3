const yesBttn = document.querySelector(".yesbtn");
const successPop = document.querySelector(".successpopupmodalcontainer");
yesBttn.onclick = function() {
  successPop.style.display = "flex"
  if(successPop.style.display= "flex") {
    successPop.addEventListener("click", function(){
successPop.style.display = "none";
    })
  }
}



// if (typeof loadProspectUpload === "undefined") {
//   const loadProspectUpload = () => {
//     const createProspectBtn = document.getElementById(
//       "createProspectBtn"
//     );
//     const successPopUpModal = document.querySelector(
//       ".successpopupmodalcontainer"
//     );

//     createProspectBtn.onclick = function () {
//       successPopUpModal.style.visibility = "visible";
//     };
//   };
//   loadProspectUpload();
// } else {
//   loadProspectUpload();
// }
