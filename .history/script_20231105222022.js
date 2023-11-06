const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Añade este código para ocultar la bolita cuando el cursor se sale de la pantalla
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
})

document.addEventListener('mouseover', () => {
    cursor.style.display = 'block';
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var adjust = 500; // Ajusta este valor según tus necesidades
        var speed = 2000; // Ajusta este valor para cambiar la velocidad del desplazamiento (en milisegundos)
        var target = document.querySelector(this.getAttribute('href'));
        var position = target.getBoundingClientRect().top + window.pageYOffset - adjust;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });

        setTimeout(function() {
            target.focus();
        }, speed + 100);
    });
});
