document.body.style.height = '10000px';
document.body.style.margin = '0';
const div = document.createElement('div');
document.body.appendChild(div);
div.style.width = '100%';
div.style.position = 'fixed';
let barHeight = 0;

let grow = true;

window.addEventListener('scroll', function() {
    if(grow) {
        barHeight += 10;
        div.style.backgroundColor = 'green';
    }else {
        barHeight -= 10;
        div.style.backgroundColor = 'red';
    }

    if(barHeight >= window.innerHeight/2) {
        grow = !grow;
    }else if(barHeight == 0){
        grow = !grow;
    }

    div.style.height = barHeight + 'px';
})