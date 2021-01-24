import { useSelector } from 'react-redux';

const Logo = () => {
  const project = useSelector(store => store.project);

  return (
    <a className="logo" href="/">
      <img src="/favicon.png" width={24} height={24} />
      <h4>{project?.configuration.basic_info.page_name}</h4>
      <style jsx>
        {`
          .logo {
            border: 3px solid #2e31be;
            border-radius: 1em;
            display: flex;
            margin: 0 5px;
            color: #2e31be;
            padding: 0.5em;
            cursor: pointer;
            transition: 0.7s;
          }
          .logo:hover {
            border-radius: 2em;
          }
          .fa-bacon {
            font-size: 2em;
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </a>
  );
};

export default Logo;
