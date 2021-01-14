import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';


import Spinner from '../../../components/Spinner';

const Frase = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="frase">
      <div className="left">
        {!project && <Spinner />}
        {project && (
          <>
            <h2>{project.configuration.description_1}</h2>
            <h3>{project.configuration.description_2}</h3>

            <p>{project.configuration.description_3}</p>
            <div>
              <button>
                <a href={project.configuration.app_link} target="blank">
                  GooglePlay
                </a>
              </button>
              <button>AppleStore</button>
            </div>
          </>
        )}
      </div>

      <div className="right">{!project && <Spinner />}

      <Image
          src="/images/header-image.jpg"
          alt="calling taxi portada"
          width={500}
          height={400}
          className={styles.img}
         />

      </div>

      <style jsx>
        {`
          .frase {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          }

          .left {
            flex: 1;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            flex-flow: column;
          }

          h2 {
            font-size: 2em;
            width: 60%;
            margin-bottom: 1em;
          }
          h3 {
            width: 60%;
            margin-bottom: 1em;
          }
          p {
            width: 60%;
            font-size: 2em;
            font-style: italic;
            margin-bottom: 1em;
          }
          button {
            width: 7em;
            height: 2.5em;
            margin: 15px 5px;
            border-radius: 3em;
            outline: none;
            border: 2px solid black;
            color: black;
            font-weight: 700;
            background: white;
          }
          button:hover {
            background: black;
            color: white;
          }

          // ======================================================

          .right {
            flex: 1;
            width: 100%;
            height: 100%;
            padding:2em;
            display: flex;
            justify-content: center;

          }
          @media (max-width: 1000px) {
            .frase {
              flex-flow: column;
            }
            .left {
              width: 100%;
              height: 100%;
              padding: 0 2em;
            }
            h2,
            h3,
            p {
              width: 80%;
              margin-bottom:.5em;
            }
            h3,
            p {
              font-size:1.3em;
            }
            p{
              margin-bottom:0;
            }
          }
          @media (max-width: 430px) {

            .left {
              padding: 0 1em;
            }
            h2,
            h3,
            p {
              width: 100%;
              margin-bottom:.5em;

            }
            h3,
            p {
              font-size:1.3em;

            }
          }
        `}
      </style>
    </div>
  );
};

export default Frase;
