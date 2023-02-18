import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
  return (
      {
          title: 'GuitarLA - Nosotros',
          description: 'Venta de Guitarras, blog de musica'
      }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen nosotros" />

        <div className="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, placeat amet unde distinctio rem at illo ipsam itaque laudantium dignissimos corrupti optio veniam facere quis explicabo tenetur praesentium! Modi, deleniti!</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, placeat amet unde distinctio rem at illo ipsam itaque laudantium dignissimos corrupti optio veniam facere quis explicabo tenetur praesentium! Modi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, accusantium recusandae? Cupiditate, doloribus ipsam odit molestiae fugiat facilis sapiente accusamus.</p>
        </div>
      </div>
    </main>
  )
}
export default Nosotros