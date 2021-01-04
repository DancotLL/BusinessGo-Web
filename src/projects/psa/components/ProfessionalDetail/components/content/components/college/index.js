import React from 'react';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../components/OpenableImage';

const College = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-College-container">
      <img
        className="ProfessionalDetail-Content-College-university"
        src="icons/college.svg"
        alt="collegeIcon"
      />
      <div className="ProfessionalDetail-Content-College-textContainer">
        <div className="ProfessionalDetail-Content-College-collage">{professional.college}</div>
        <div className="ProfessionalDetail-Content-College-collegeDegree">{professional.college_degree}</div>
        <OpenableImage
          style={{ float: 'left', width: 100 }}
          title={professional.college_degree}
          src={professional.college_degree_photo}
        />
      </div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-College-container {
            width: 100%;
            float: left;
          }

          .ProfessionalDetail-Content-College-university {
            float: left;
          }

          .ProfessionalDetail-Content-College-textContainer {
            position: relative;
            top: -3px;
            margin-left: 4px;
            float: left;
          }

          .ProfessionalDetail-Content-College-collage {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 11px;
          }

          .ProfessionalDetail-Content-College-collegeDegree {
            font-size: 14px;
            text-align: left;
            margin: 0 0 0 11px;
          }
        `}
      </style>
    </div>
  );
};

College.propTypes = {
  professional: PropTypes.object.isRequired
};

export default College;
