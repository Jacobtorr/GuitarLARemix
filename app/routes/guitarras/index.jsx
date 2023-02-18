// Recursos React/Remix
import { useLoaderData } from '@remix-run/react';
import { obtenerGuitarras } from '~/models/guitarras.server';
//Componentes
import ListadoGuitarras from '~/components/listado-guitarras';

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra coleccion de guitarras'
  }
}

export async function loader() {
  const guitarras = await obtenerGuitarras();

  return guitarras.data;
}

function Tienda() {
  
  const guitarras = useLoaderData();

  return (

    <ListadoGuitarras
        guitarras={guitarras}
    />
  )
}
export default Tienda