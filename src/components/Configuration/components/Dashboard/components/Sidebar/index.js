import { useSelector } from 'react-redux';

import Spinner from '../../../../../Spinner';
import Split from '../../../../../Split';

import ConfigurationButton from './components/ConfigurationButton';
import Title from './components/Title';
import TablesSection from './components/TablesSection';
import FormsSection from './components/FormsSection';

const Sidebar = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="sidebar">
      <Title code="configuration" />
      {!project && <Spinner />}
      {project &&
        project.configuration_sections.map((section, i) => (
          <ConfigurationButton key={i} text={section.form.name} configurationSection={section} />
        ))}
      <Split />
      <Title code="tables" />
      <Split />
      <TablesSection />
      <Split />
      <Title code="forms" />
      <Split />
      <FormsSection />
      <style jsx>
        {`
          .sidebar {
            background-color: #ffffff;
            box-shadow: 0 0 2px 2px #ffffff;
            width: 20%;
            margin: auto;
            height: 87vh;
            border-radius: 5px;
            transition: 0.8s;
            animation: arrive 1s linear;
            overflow-x: auto;
          }
          .sidebar:hover {
            background-color: #fffffff3;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              -ms-transform: translate(-100%);
              -moz-transform: translate(-100%);
              -webkit-transform: translate(-100%);
              -o-transform: translate(-100%);
              transform: translate(-100%);
              height: 0;
              background-color: rgb(42, 42, 209);
            }
            100% {
              opacity: 1;
              margin-right: 0;
              -ms-transform: translate(0);
              -moz-transform: translate(0);
              -webkit-transform: translate(0);
              -o-transform: translate(0);
              transform: translate(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
