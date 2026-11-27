/* BUSCADOR */

const buscador = document.getElementById("buscador");

if(buscador){

    buscador.addEventListener("keyup", function(){

        const texto = buscador.value.toLowerCase();

        const productos = document.querySelectorAll(".producto-card");

        productos.forEach(producto => {

            const nombre = producto.dataset.nombre;

            // Comprobar si el nombre del producto contiene el texto ingresado 
            if(nombre.includes(texto)){

                //Mostrar la tarjeta cuando coincide con la búsqueda.
                producto.style.display = "block";

            }else{

                // Ocultar la tarjeta cuando no coincide con la búsqueda.
                producto.style.display = "none";

            }

        });

    });

}

    /* ========================= */
    /* FILTROS PRODUCTOS */
    /* ========================= */

    // Obtener todos los elementos que funcionan como filtros de categorías.
    const filtros = document.querySelectorAll(".filtro");

    // Recorrer cada filtro para asignarle un evento de clic.
    filtros.forEach(filtro => {

        // Detectar cuando el usuario selecciona una categoría.
        filtro.addEventListener("click", function(e){

            // Evitar el comportamiento predeterminado del enlace.
            e.preventDefault();

            // Obtener la categoría asociada al filtro seleccionado. 
            const categoria = filtro.dataset.filtro;

            // Obtener todas las tarjetas de productos disponibles.
            const productos = document.querySelectorAll(".producto-card");

            // Recorrer los productos para comparar sus categorías.
            productos.forEach(producto => {

                // Comprobar si el producto pertenece a la categoría seleccionada.
                if(producto.dataset.categoria === categoria){

                    // Mostrar el producto cuando coincide con el filtro.
                    producto.style.display = "block";

                }else{

                    // Ocultar el producto cuando pertenece a otra categoría.
                    producto.style.display = "none";

                }

            });

        });

    });

