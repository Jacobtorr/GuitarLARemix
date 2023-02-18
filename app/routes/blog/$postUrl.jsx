// Hooks de React/Remix
import { useLoaderData } from "@remix-run/react";
// Datos del Servidor
import { obtenerPost } from "~/models/post.server";
//Helpers
import { formatearFecha } from "~/utils/helpers";

export async function loader({params}) {
    const { postUrl } = params;
    const post = await obtenerPost( postUrl);
    
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post;
}

export function meta({data}) {

    if(!data) {
        return {
            title: 'GuitarLA - Entrada no encontrada',
            description: `Guitarras, venta de guitarras, entrada no encontrada`
        }
    }

    return {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`,
      description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.titulo}`
    }
}

function PostUrl() {

    const post = useLoaderData();
    const { titulo, imagen, contenido, publishedAt } = post.data[0]?.attributes;

  return (
    <div className="post mt-4">
        <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </div>
  )
}
export default PostUrl;