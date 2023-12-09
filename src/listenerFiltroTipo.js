import fetchPopulares from './fetchPopulares';
import cargarTitulos from './cargarTitulos';
import cargarGeneros from './cargarGeneros';

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPelicula.addEventListener('click', async (e) => {
	e.preventDefault();

	// Cargamos los generos
	cargarGeneros('movie');

	// Obtenemos los resultados
	const resultados = await fetchPopulares('movie');

	// Los cargamos en el DOM.
	cargarTitulos(resultados);

	filtroShow.classList.remove('btn--active');
	filtroPelicula.classList.add('btn--active');
	document.querySelector('#populares .main__titulo').innerText = 'Peliculas Populares';
});

filtroShow.addEventListener('click', async (e) => {
	e.preventDefault();
	cargarGeneros('tv');

	const resultados = await fetchPopulares('tv');

	cargarTitulos(resultados);

	filtroPelicula.classList.remove('btn--active');
	filtroShow.classList.add('btn--active');
	document.querySelector('#populares .main__titulo').innerText = 'Series Populares';
});