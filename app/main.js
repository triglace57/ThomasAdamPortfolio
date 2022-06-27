const faders_left = document.querySelectorAll(".fade_in")
const faders_right = document.querySelectorAll(".fade_in_right")
const appearOptions = {
    threshold: 0.3
}

const appearWithScroll = new IntersectionObserver((entries,appearWithScroll)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){return;}
        entry.target.classList.add("appear");
        appearWithScroll.unobserve(entry.target)
        return;
    });
},appearOptions)
const appearWithScrollRight = new IntersectionObserver((entries,appearWithScroll)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){return;}
        entry.target.classList.add("appear_right");
        appearWithScroll.unobserve(entry.target)
        return;
    });
},appearOptions)

faders_left.forEach(fader_left => {
    appearWithScroll.observe(fader_left)
});
faders_right.forEach(fader_right => {
    appearWithScrollRight.observe(fader_right)
})