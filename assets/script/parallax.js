document.addEventListener("mousemove", parallax);

function parallax(m) {
    var windowW = window.innerWidth / 2;
    var windowH = window.innerHeight / 2;

    var mouseX = m.clientX;
    var mouseY = m.clientY;

    document.body.style.backgroundPosition = `${50 + (mouseX - windowW) * 0.01}% ${50 + (mouseY - windowH) * 0.01}%`;
}