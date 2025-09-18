 let dropDown = document.querySelector(".dropDown");
dropDown.addEventListener("click",function(){
    dropDown.classList.toggle("active");
});
function show(text){
    let dropDownText = document.querySelector(".dropDownText");
    dropDownText.value = text.innerHTML;

}
