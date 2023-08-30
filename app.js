
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains_behind=document.getElementById('mountains_behind');
let text=document.getElementById('text');
let btn=document.getElementById('btn');
let mountains_first=document.getElementById('mountains_first');
let header=document.getElementById('header');



window.addEventListener('scroll',function(){
let value=window.scrollY;
stars.style.left=value*1.25 +'px';
moon.style.top=value*1.05 +'px';
mountains_behind.style.top=value*0.5 +'px';
mountains_front.style.top=value*0 +'px';
text.style.marginRight=value*4 +'px';
text.style.marginTop=value*2.0 +'px';
btn.style.marginTop=value*2.0 +'px';
header.style.top=value*0.5 +'px';


})

