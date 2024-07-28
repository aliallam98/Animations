
setInterval(MakeItRain,50)
MakeItRain()


function MakeItRain(){
    const el = document.createElement('i');
    el.classList.add('fa-solid');
    el.classList.add('fa-snowflake');
    el.style.left= Math.random() * window.innerWidth + 'px';
    // el.style.left= Math.random() * 100 + 'vw';
    el.style.animationDuration = Math.random() * 3 + 2 + 's';
    el.style.opacity = Math.random();
    el.style.fontSize = Math.random() * 10 + 10 + 'px';



    document.body.appendChild(el)

    setTimeout(() => {
        el.remove()
    }, 5000);
}


