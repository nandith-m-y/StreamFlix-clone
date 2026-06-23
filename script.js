const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 80);
});



const trending = document.querySelector(".trending");

document.querySelector(".explore-btn").addEventListener("click", () => {
    trending.scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".scroll-indicator").addEventListener("click", () => {
    trending.scrollIntoView({
        behavior: "smooth"
    });
});



document.querySelectorAll(".faq-item").forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        document.querySelectorAll(".faq-item").forEach(other => {

            if(other !== item){

                other.classList.remove("active");
                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});



const sliders = document.querySelectorAll(".movie-slider");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

const amount = 900;

sliders.forEach((slider,index)=>{

    nextBtns[index].addEventListener("click",()=>{

        slider.scrollBy({

            left:amount,
            behavior:"smooth"

        });

    });

    prevBtns[index].addEventListener("click",()=>{

        slider.scrollBy({

            left:-amount,
            behavior:"smooth"

        });

    });

});


const badge = document.querySelector(".hero-badge");

window.addEventListener("scroll",()=>{

    badge.style.opacity = window.scrollY > 200 ? "0" : "1";

});


document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const size=Math.max(this.clientWidth,this.clientHeight);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=(e.offsetX-size/2)+"px";
        ripple.style.top=(e.offsetY-size/2)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loader-hide");

        }, 1800);

    }

});