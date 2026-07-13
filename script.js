console.log("Welcome to Yogesh's Portfolio!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(){
        console.log("Clicked: " + this.innerText);
    });
});
