var m_o_x
var m_o_y
var c = document.querySelector('#myCanvas');
var c_h = c.height = window.innerHeight * 0.8;
var c_w = c.width = window.innerWidth * 0.8;
var ctx = c.getContext('2d');
var pen_color = '#ff0000';
var picker = document.querySelector('#picker')

c.addEventListener('mousemove', get_mouse);
c.addEventListener('mousemove', draw);
document.addEventListener('keyup', erase, key_color);
document.addEventListener('keyup', key_color);
document.addEventListener('keyup', lift_down);
picker.addEventListener('change', get_picker);

function get_mouse(e) {
    m_o_x = e.offsetX;
    m_o_y = e.offsetY;
}

function draw(e) {
    ctx.beginPath();
    ctx.arc(m_o_x, m_o_y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = pen_color;
    ctx.fill();
}

function erase(e) {
    if (e.keyCode == 32) {
        ctx.clearRect(0, 0, c.width, c.height)
    }
}

function key_color(e) {
    if (e.keyCode == 89) {
        // yellow
        pen_color = '#ffff00'
    } else if (e.keyCode == 82) {
        // red
        pen_color = '#ff0000'
    } else if (e.keyCode == 71) {
        // green
        pen_color = '#00ff00'
    } else if (e.keyCode == 66) {
        // blue
        pen_color = '#0000ff'
    }
}

function lift_down(e) {
    if (e.keyCode == 38) {
        // up
        c.removeEventListener('mousemove', draw)
    } else if (e.keyCode == 40) {
        // down
        c.addEventListener('mousemove', draw)
    }
}

function get_picker(e) {
    let picked_color = picker.value;
    pen_color = picked_color;
    console.log(picked_color)
}