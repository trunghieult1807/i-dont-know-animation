import $ from "jquery";

const cerchio = document.querySelectorAll('.cerchio');
cerchio.forEach(function (elem) {
    $(document).on('mousemove touch', function (e) {
        magnetize(elem, e);
    });
})

function magnetize(el, e) {
    var mX = e.pageX,
        mY = e.pageY;
    const item = $(el);

    const customDist = item.data('dist') * 20 || 120;
    const centerX = item.offset().left + (item.width() / 2);
    const centerY = item.offset().top + (item.height() / 2);

    var deltaX = Math.floor((centerX - mX)) * -0.45;
    var deltaY = Math.floor((centerY - mY)) * -0.45;

    var distance = calculateDistance(item, mX, mY);

    if (distance < customDist) {
        TweenMax.to(item, 0.5, {y: deltaY, x: deltaX, scale: 1.1});
        item.addClass('magnet');
    } else {
        TweenMax.to(item, 0.6, {y: 0, x: 0, scale: 1});
        item.removeClass('magnet');
    }
}

function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}

/*- MOUSE STICKY -*/
function lerp(a, b, n) {
    return (1 - n) * a + n * b
}

export class Cursor {
    constructor() {
        console.log('init');
        this.bind();
        this.cursor = document.querySelector('.js-cursor')

        this.mouseCurrent = {
            x: 0,
            y: 0
        }

        this.mouseLast = {
            x: this.mouseCurrent.x,
            y: this.mouseCurrent.y
        }

        this.rAF = undefined
    }

    bind() {
        ['getMousePosition', 'run'].forEach((fn) => this[fn] = this[fn].bind(this))
    }

    getMousePosition(e) {
        this.mouseCurrent = {
            x: e.clientX,
            y: e.clientY
        }
    }

    run() {
        this.mouseLast.x = lerp(this.mouseLast.x, this.mouseCurrent.x, 0.2)
        this.mouseLast.y = lerp(this.mouseLast.y, this.mouseCurrent.y, 0.2)

        this.mouseLast.x = Math.floor(this.mouseLast.x * 100) / 100
        this.mouseLast.y = Math.floor(this.mouseLast.y * 100) / 100

        // this.cursor.style.positionX()
        this.cursor.style.transform = `translate3d(${this.mouseLast.x}px, ${this.mouseLast.y}px, 0)`
        this.rAF = requestAnimationFrame(this.run)
    }

    requestAnimationFrame() {
        this.rAF = requestAnimationFrame(this.run)
    }

    addEvents() {
        window.addEventListener('mousemove', this.getMousePosition, false)
    }

    on() {
        this.addEvents()
        this.requestAnimationFrame()
    }

    init() {
        this.on()
    }
}




// $(".trigger-audio").on('mouseout', function() {
//   SoundHover.pause();
//   // SoundHover.volume = .2;
//   SoundHover.currentTime = 0;
// });
