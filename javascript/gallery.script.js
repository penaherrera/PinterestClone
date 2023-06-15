let pagina = 3;
let imagenes = '';
let ultimaImagen;


//Creando observador
let observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            pagina++;
            cargarImagenes();
        }
    });
}, {
    rootMargin: '0px 0px 500px 0px',
    threshold: 1.0
});



const cargarImagenes = async () => {
    try{

        const apiKey = `AKXr0L9UKKAX00oUGXcBOMlEaqjENSm5puXpRsqn0gQB0KqDHs3ZkCnQ`;


  const respuesta = await fetch(`https://api.pexels.com/v1/curated/?page=${pagina}&per_page=25`, {
    headers: {
      Authorization: apiKey
    }
  });

  const datos = await respuesta.json();

  console.log(datos);
  console.log(datos.photos);
  console.log(pagina)
  datos.photos.forEach(imagen =>{
    imagenes = imagenes += 
    `
    <div class="imgcard">
    <img src="${imagen.src.original}" alt=""> 
        <div class="content">
            <button class="savebtn">
            <h3>Save</h3>
            </button>
            <button class="exampleLink">
            <h3>${imagen.photographer}</h3>
            </button>
            <button class="sharebtn">
            <img src="img/subir.png" alt="">
            </button>
            <button class="optionsbtn">
            <img src="img/mas-opciones.png" alt="">
        </button>
        </div>
    </div>


    `
  });

  document.getElementById('gallery').innerHTML = imagenes;

  if(ultimaImagen){
    observador.unobserve(ultimaImagen);
  }

  const imagenesEnPantalla = document.querySelectorAll('.gallery .imgcard');
  console.log(imagenesEnPantalla);
  ultimaImagen = imagenesEnPantalla[imagenesEnPantalla.length - 1];
  observador.observe(ultimaImagen);


    }

    catch(error){
        console.log(error);
    }

  
};

cargarImagenes();




