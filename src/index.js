import fetchPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";


const cargar = async() => {
	// Obtenemos los resultados.
	const resultados = await fetchPopulares('movie');

	if (resultados) {
		// Los cargamos en el DOM.
		cargarTitulos(resultados);
	}
};
cargar();