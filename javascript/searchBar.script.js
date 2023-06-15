$(document).ready(function() {
    // Obtener los contenedores de items para cada sección
    const recentItems = $('.searchbar .section:eq(0) .items');
    const ideasItems = $('.searchbar .section:eq(1) .items');
    const popularItems = $('.searchbar .section:eq(2) .items');
  
    // Manejar el clic en el SearchBar
    $('.searchbar').click(function() {

      // Si ya se han cargado los elementos, no hacer nada
      if (recentItems.children().length || ideasItems.children().length || popularItems.children().length) {
        return;
      }

      // Incrustar elementos de tipo Card en la sección de Populares en Pinterest
      for (let i = 1; i <= 6; i++) {
        const card = $('<div>', { class: 'card' });
        const img = $('<img>', { src: `https://picsum.photos/200/200?random=${i}` });
        const title = $('<h4>', { text: `Card ${i}` });
        card.append(img, title);
        popularItems.append(card);
      }
  
      // Incrustar elementos de tipo Card en la sección de Ideas para ti
      for (let i = 1; i <= 4; i++) {
        const card = $('<div>', { class: 'card' });
        const img = $('<img>', { src: `https://picsum.photos/200/200?random=${i + 6}` });
        const title = $('<h4>', { text: `Card ${i + 6}` });
        card.append(img, title);
        ideasItems.append(card);
      }
  
      // Incrustar elementos de tipo Button en la sección de Búsquedas recientes
      const recentSearches = ['Gatos', 'Perros', 'Jardinería', 'Diseño de interiores', 'Recetas'];
      for (let i = 0; i < recentSearches.length; i++) {
        const button = $('<button>', { text: recentSearches[i] });
        recentItems.append(button);
      }
    });
  
    // Manejar el clic en un botón de búsqueda reciente
    recentItems.on('click', 'button', function() {
      const searchQuery = $(this).text();

      // Aplicar filtro de búsqueda
      console.log(`Filtrando imágenes por "${searchQuery}"`);
    });
  });
  
