const logo_btn = document.querySelector(".logo-home");

logo_btn.addEventListener("click", function(e){
    window.location.href = "./index.html";
    e.stopPropagation();
});