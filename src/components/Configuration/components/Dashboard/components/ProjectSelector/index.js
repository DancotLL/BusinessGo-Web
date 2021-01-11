import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';

import Spinner from '../../../../../Spinner';
import Button from '../../../../../Button';
import { getProjects } from '../../../../../../services/api/project';
import { setProject } from '../../../../../../actions/project';

import { getLanguage } from './lang';

const ProjectSelector = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    getProjects(user).then(({ data: _projects }) => {
      setProjects(_projects);
      setLoading(false);
    });
  }, []);

  const handleSelectProject = project => {
    setLeaving(true);
    setSelectedProject(project);
  };

  const handleAnimationEnd = () => {
    dispatch(setProject(selectedProject));
  };

  return (
    <div
      className={`projectSelector${leaving ? ' projectSelectorLeave' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <PopoverTitle style={{ color: '#345' }}>{language.getTitle(user)}</PopoverTitle>
      <p className="message">{language.selectProject}</p>
      {loading && <Spinner />}
      {!loading && (
        <div>
          {projects.map((project, i) => (
            <Button
              key={i}
              text={project.name}
              disabled={leaving}
              onClick={() => handleSelectProject(project)}
            />
          ))}
        </div>
      )}
      <style jsx>
        {`
          .projectSelector {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
            width: 450px;
            height: 300px;
            background-color: #ffffff;
            border-radius: 5px;
            transition: 1s;
            animation: initialAnimation 1s linear;
          }
          .projectSelectorLeave {
            animation: leaveAnimation 1s linear;
          }
          .message {
            margin: 9px;
          }

          @keyframes initialAnimation {
            0% {
              width: 0;
              opacity: 0;
              background-color: green;
              margin: 100% 0 100% 0;
            }
            100% {
              margin: 0;
            }
          }

          @keyframes leaveAnimation {
            100% {
              width: 0;
              opacity: 0;
              background-color: green;
              margin: 100% 0 100% 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectSelector;
