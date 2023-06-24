const btnAbrirModal =
document.querySelector("#btn-abrir-modal");
const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");
const modal= 
document.querySelector("#modal");


btnAbrirModal.addEventListener("click", () => {
    modal.showModal();
    document.querySelector('.help').classList.add('open');
  });
  
  btnCerrarModal.addEventListener("click", () => {
    modal.close();
    document.querySelector('.help').classList.remove('open');
  });
  

