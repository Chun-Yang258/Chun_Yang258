const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const view_work = document.querySelector(".view-work");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const shadow2 = document.querySelector(".shadow2");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const border2 = document.querySelector(".border2");
const border3 = document.querySelector(".border3");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
})
    

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = (sectionY.top + section_height) < 0 ? 1 : (scroll / (sectionY.top + section_height) + 0.2) > 1 ? 1 : scroll / (sectionY.top + section_height) + 0.2;
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    view_work.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
    shadow2.style.height = `${1350 - scroll * 0.6}px`;
    //content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    //image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = (scroll  / (sectionY.top + section_height) * 30) >= 15 ? "15%" : `${scroll  / (sectionY.top + section_height) * 30}%`;
    border2.style.width = (scroll  / (sectionY.top + section_height) * 30 - 20) >= 15 ? "15%" : `${scroll  / (sectionY.top + section_height) * 30 - 20}%`;
    border3.style.width = (scroll  / (sectionY.top + section_height) * 30 - 40) >= 15 ? "15%" : `${scroll  / (sectionY.top + section_height) * 30 - 40}%`;
})