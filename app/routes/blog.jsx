import { Outlet } from "@remix-run/react";
import styles from "~/styles/blog.css";

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta () {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA, Blog de musica y venta de guitarras'
  }
}

function Blog() {

  return (
    <main className="contenedor">

      <Outlet/>

    </main>
  )
}
export default Blog;