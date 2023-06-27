document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        //añadir la funcion de mostrarImagen
        imagen.onclick = mostrarImagen;
        imagen.dataset.imagenId = i;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId)

    //generar img
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //boton para cerrar la img
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    //cuando se presiona, se cierra
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');

    }

    //cuando se da click, se cierra la img
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }


    overlay.appendChild(cerrarImagen);
    //mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}