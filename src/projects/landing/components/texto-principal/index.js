const Texto = () => (
  <div className="texto">
    <h2 data-aos="flip-left">En este tiempo, todo tiene una identidad digital.</h2>
    <h4 data-aos="flip-right">Por eso aqui en WeBuildWebz, disponemos para ofrecerte, todo para tu web.</h4>
    <br />
    <p data-aos="flip-left">
      SEO, Responsive Design, CopyWritting, exclusividad de diseños, Animaciones, metodos de Pago, Link A
      Redes Sociales, Bases de Datos, Paginas Auto Administrables, Optimizacion de Imagenes, Video, y todas
      las funcionalidades que necesites, mira la siguiente informacion:
    </p>
    <div className="icons" data-aos="flip-up">
      <div className="bullhorn" />
      <div className="feather" />
      <div className="gem" />
      <div className="handshake" />
      <div className="key" />
      <div className="images" />
    </div>
    <style jsx>
      {`
        .texto {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          padding: 1em;
        }
        h2 {
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        h4 {
          font-style: italic;
          font-size: 1.2em;
        }
        p {
          width: 50%;
        }
        .icons {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        // ======================================================================================
        .bullhorn {
          width: 30px;
          height: 30px;
          background: url(/bullhorn-solid.svg) no-repeat 100% 100%;
          margin: 0 1em;
        }
        .bullhorn:hover {
          -webkit-mask: url(/bullhorn-solid.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
        }
        // ===========================================================
        .feather {
          width: 30px;
          height: 30px;
          background: url(/feather-alt-solid.svg) no-repeat 100% 100%;
          margin: 0 1em;
        }
        .feather:hover {
          -webkit-mask: url(/feather-alt-solid.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
        }
        // ===========================================================
        .gem {
          width: 30px;
          height: 30px;
          background: url(/gem-regular.svg) no-repeat 100% 100%;
          margin: 0 1em;
        }
        .gem:hover {
          -webkit-mask: url(/gem-regular.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
        }
        // ===========================================================
        .handshake {
          width: 30px;
          height: 30px;
          background: url(/handshake-solid.svg) no-repeat 100% 100%;
          margin: 0 1em;
        }
        .handshake:hover {
          -webkit-mask: url(/handshake-solid.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
        }
        // ============================================================
        .key {
          width: 30px;
          height: 30px;
          background: url(/key-solid.svg) no-repeat 100% 100%;
          margin: 0 1em;
        }
        .key:hover {
          -webkit-mask: url(/key-solid.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
        }
        // ============================================================
        .images {
          width: 30px;
          height: 30px;
          background: url(/images-solid.svg) no-repeat 100% 100%;
          margin: 0 1em;
        }
        .images:hover {
          -webkit-mask: url(/images-solid.svg) no-repeat 100% 100%;
          background-image: linear-gradient(to left, #ff8aac, #e396dc, #aca9fa, #63baff, #12c5eb);
        }
        // =====================================
        @media (max-width: 608px) {
          p {
            width: 100%;
          }
        }
        @media (max-width: 280px) {
          h2,
          h4,
          p {
            width: 100%;
            height: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Texto;
