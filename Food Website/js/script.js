let searchBar=document.querySelector('.search_bar');
let searchBtn=document.querySelector('#search_btn');
let form=document.querySelector('#form');
let login_btn=document.querySelector('#login_btn');
let form_close = document.querySelector('.form form .form_close');
let menu_btn = document.querySelector('#menu_btn');
let navbar = document.querySelector('header .navbar');
let link = document.querySelectorAll('header .navbar a');
let registerBtn = document.querySelector('#register_btn');
let registerForm = document.querySelector('#register_form');
let formClose = document.querySelector('.form_close');

menu_btn.onclick = ()=>{
    navbar.classList.toggle("active");
    if(navbar.classList.contains("active")){
        menu_btn.src = "img/cancel.svg"
    }else{
        menu_btn.src = "img/menu.svg"
    }
}

link.forEach((click) =>{
    click.onclick = ()=>{
        navbar.classList.toggle("active");
        if(navbar.classList.contains("active")){
            menu_btn.src = "img/cancel.svg"
        }else{
            menu_btn.src = "img/menu.svg"
        }  
    }
})
searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    form.classList.remove("active");
}

login_btn.onclick = ()=>{
    form.classList.toggle("active");
    searchBar.classList.remove("active");
}
form_close.onclick = ()=>{
    form.classList.remove("active");
}


var swiper = new Swiper(".home-slider", {
    autoplay: true,
    loop: true,
    grabCursor: true,
    effect: "flip",
    pagination: {
        el: ".home-button-pagination",
        clickable: true,
    }
})
var swiper = new Swiper(".review-swiper", {
    autoplay: true,
    loop: true,
    grabCursor: true,
    effect: "flip",
    pagination: {
        el: ".review-button-pagination",
        clickable: true,
    }
})

const loader = document.querySelector(".loader");
function fadeOut(){
    setInterval(()=>{
        loader.style.display = "none";
    }, 3500)
}
window.onload = fadeOut;

window.onscroll = ()=>{
    navbar.classList.remove("active");
    form.classList.remove("active");
    searchBar.classList.remove("active");
}
window.onscroll = ()=>{
    const sections = document.querySelectorAll("section");
    const scrollY  = window.pageXOffset;

    sections.forEach((current) =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 100;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navbar a[href*=" + id + "]").classList.add("active")
        }else{
            document.querySelector(".navbar a[href*=" + id + "]").classList.remove("active")
        }
    })
}
function validateForm() {
    const firstname = document.getElementById('firstname').value;
    const secondname = document.getElementById('secondname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;
    let errorMessages = "";

    // Check if username is empty
    if (firstname === "") {
        errorMessages += "please enter your firstname.<br>";
    }
    if (secondname === "") {
        errorMessages += "please enter your secondname.<br>";
    }
    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        errorMessages += "please enter your email.<br>";
    } else if (!emailRegex.test(email)) {
        errorMessages += "Please enter a valid email address.<br>";
    }

    // Check if passwords match
    if (password === "") {
        errorMessages += "please enter your password.<br>";
    }

    if (address === "") {
        errorMessages += "Please enter your address.<br>";
    }

    if (gender === "") {
        errorMessages += "please enter your gender.<br>";
    }
    // Display error messages
    if (errorMessages !== "") {
        document.getElementById('errorMessages').innerHTML = errorMessages;
        return false; // Prevent form submission
    }
    
    return true; // Allow form submission
}
