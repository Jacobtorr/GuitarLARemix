import { useLoaderData } from '@remix-run/react';
// Datos del servidor
import { obtenerGuitarras } from '~/models/guitarras.server';
import { obtenerPosts } from '~/models/post.server';
import { obtenerCurso } from '~/models/curso.server';
// Componentes
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '~/components/listado-posts';
import Curso from '~/components/curso';
//Estilos
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

export async function loader() {

  const [guitarras, posts, curso] = await Promise.all([
    obtenerGuitarras(),
    obtenerPosts(),
    obtenerCurso()
  ])

  const datos = {
    guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data
  }

  return datos;
}

export function meta() {

}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}



function Index() {

  const {guitarras, posts, curso} = useLoaderData();

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <section>
        <Curso
          curso={curso.attributes}
        />
      </section>

      <section className="contenedor">
        <ListadoPosts
            posts={posts}
          />
      </section>
    
    </>
  )
}
export default Index;