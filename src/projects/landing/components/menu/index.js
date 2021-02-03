import Link from 'next/link';

const Navbar = () => (
  <div className="menu">
    <Link href="/">
      <a>Inicio</a>
    </Link>

    <Link href="/precios">
      <a>Precios</a>
    </Link>

    <Link href="/Galeria">
      <a>Galeria</a>
    </Link>

    <Link href="/blog">
      <a>Blog</a>
    </Link>

    <Link href="/Contacto">
      <a>Contacto</a>
    </Link>

    <Link href="/Nosotros">
      <a>Nosotros</a>
    </Link>

    <style jsx>
      {`
        .menu {
          width: 100vw;
          padding: 1.5em 1em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          margin: 0 1em;
          cursor: pointer;
          color: grey;
          font-size: 1.3em;
          text-decoration: none;
        }
        a:hover {
          color: black;
        }
        @media (max-width: 700px) {
          a {
            margin: 0 0.5em;
            font-size: 1em;
          }
        }
        @media (max-width: 448px) {
          a {
            margin: 0 5px;
          }
        }
      `}
    </style>
  </div>
);

export default Navbar;
