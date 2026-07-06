// =====================================
// AYUSHI DIWAS
// Premium Invitation Script
// =====================================

// Countdown Date
const eventDate = new Date("July 8, 2026 21:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;

    }

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    minutes.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    seconds.innerHTML = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

}

setInterval(updateCountdown,1000);

updateCountdown();


// Smooth reveal animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(70px)";
sec.style.transition=".9s ease";

observer.observe(sec);

});


// RSVP Button

const btn=document.querySelector("button");

btn.addEventListener("click",()=>{

alert("🎉 Your invitation has been received! See you at Ayushi Diwas ❤️");

});


// Floating Glow Circles

for(let i=0;i<25;i++){

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width=Math.random()*8+4+"px";
glow.style.height=glow.style.width;
glow.style.background="#ff5ca8";
glow.style.borderRadius="50%";
glow.style.left=Math.random()*100+"vw";
glow.style.top=Math.random()*100+"vh";
glow.style.opacity=.15;
glow.style.pointerEvents="none";
glow.style.filter="blur(3px)";
glow.style.animation=`float ${5+Math.random()*8}s linear infinite`;

document.body.appendChild(glow);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0px);

}

100%{

transform:translateY(-120vh);

}

}

`;

document.head.appendChild(style);
