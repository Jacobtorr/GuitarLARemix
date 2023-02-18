// Hooks de React/Remix
import { useLoaderData } from "@remix-run/react";
// Datos del servidor
import { obtenerPosts } from "~/models/post.server";
//Componentes
import ListadoPosts from "~/components/listado-posts";

export function meta () {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, Blog de musica y venta de guitarras'
  }
}

export async function loader() {
  const posts = await obtenerPosts();

  return posts.data;
}

function Blog() {

  const posts = useLoaderData();

  return (
    <ListadoPosts
        posts={posts}
    />
  )
}
export default Blog