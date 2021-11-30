//-------vars
const navbar = document.querySelector("nav"),
    filterBtns = document.querySelectorAll(".fav_food .filter_list button"),
    filterList = document.querySelectorAll('.fav_food  .filter_menu .item'),
    food_boxes = document.querySelectorAll(".food_review .box"),
    filter_list = document.querySelectorAll(".fav_food .filter_list li"),
    loading_animation = document.querySelector(".loading_animation");
//--------------
window.addEventListener('scroll', () => {
    this.scrollY >= 150 ? navbar.classList.add("show") : navbar.classList.remove("show");
})
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let attr = btn.getAttribute("data-filter")
        toggleActive(btn)
        filterFood(attr)
    })
})

function toggleActive(btn) {
    filterBtns.forEach(btn => {
        btn.classList.remove("active")
    })
    btn.classList.add("active")
}

function filterFood(attr) {
    filterList.forEach(item => {
        item.style.display = "block"
        let itemAttr = item.getAttribute("data-filter")
        if (attr == 1) {
            item.style.display = "block"
        } else if (itemAttr !== attr) {
            item.style.display = "none"
        }
    })
}
//- animation
gsap.timeline({
        scrollTrigger: {
            trigger: "header",
            start: "+=500 center",
            end: "bottom center",
            scrub: 1
        }
    })
    .fromTo("header h2", { y: "0%" }, { y: "-100%", opacity: "0" })
    .fromTo("header h6", { y: "0%" }, { y: "-100%", opacity: "0" })
    .fromTo("header .btn_container", { y: "0%" }, { y: "-100%", opacity: "0" }, "-=0.5");
gsap.timeline({
        scrollTrigger: {
            trigger: '.how_it_work',
            start: "top bottom",
            end: "+=100 bottom",
            scrub: 2
        }
    })
    .fromTo(".how_it_work .layer", { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
    .fromTo(".how_it_work .main_img", { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" }, "-=0.5");
gsap.timeline({
        scrollTrigger: {
            trigger: '.food_review',
            start: "top bottom",
            end: "+=200 bottom",
            scrub: 3

        }
    })
    .fromTo(food_boxes[0], { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
    .fromTo(food_boxes[1], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.5")
    .fromTo(food_boxes[2], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.2");
gsap.timeline({
        scrollTrigger: {
            trigger: '.food_review',
            start: "top bottom",
            end: "+=200 bottom",
            scrub: 3

        }
    })
    .fromTo(food_boxes[0], { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
    .fromTo(food_boxes[1], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.5")
    .fromTo(food_boxes[2], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.2");
gsap.timeline({
        scrollTrigger: {
            trigger: '.fav_food',
            start: "top bottom",
            end: "+=200 bottom",
            scrub: 3
        }
    })
    .fromTo(filter_list[0], { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
    .fromTo(filter_list[1], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.5")
    .fromTo(filter_list[2], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.2")
    .fromTo(filter_list[3], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.2")
    .fromTo(filter_list[4], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.2")
    .fromTo(filter_list[5], { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.2");
gsap.timeline({
        scrollTrigger: {
            trigger: '.download_app',
            start: "top bottom",
            end: "+=100 bottom",
            scrub: 3
        }
    })
    .fromTo('.download_app .content', { x: "-100%", opacity: "0" }, { x: "0%", opacity: "1" })
    .fromTo('.download_app .img_container', { x: "100%", opacity: "0" }, { x: "0%", opacity: "1" }, "-=0.5");
window.onload = () => {
    setTimeout(() => {
        loading_animation.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }, 2000)
}