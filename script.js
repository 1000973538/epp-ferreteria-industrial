/* BUSCADOR */

const buscador = document.getElementById("buscador");

if(buscador){

    buscador.addEventListener("keyup", function(){

        const texto = buscador.value.toLowerCase();

        const productos = document.querySelectorAll(".producto-card");

        productos.forEach(producto => {

            const nombre = producto.dataset.nombre;

            if(nombre.includes(texto)){

                producto.style.display = "block";

            }else{

                producto.style.display = "none";

            }

        });

    });

}

/* ========================= */
/* FILTROS PRODUCTOS */
/* ========================= */

const filtros = document.querySelectorAll(".filtro");

filtros.forEach(filtro => {

    filtro.addEventListener("click", function(e){

        e.preventDefault();

        const categoria = filtro.dataset.filtro;

        const productos = document.querySelectorAll(".producto-card");

        productos.forEach(producto => {

            if(producto.dataset.categoria === categoria){

                producto.style.display = "block";

            }else{

                producto.style.display = "none";

            }

        });

    });

});

