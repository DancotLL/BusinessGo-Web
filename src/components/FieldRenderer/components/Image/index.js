import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../../Spinner';
import { uploadImage } from '../../../../services/cloudinary/image';

const Image = props => {
  const { field, value } = props;
  const project = useSelector(store => store.project);
  const [uploading, setUploading] = useState(false);
  const input = useRef(null);

  const handleOpenFileSelector = () => {
    input.current.click();
  };

  const handleChangeImage = e => {
    const [file] = e.target.files;

    if (!file) return;

    setUploading(true);

    uploadImage(project, file).then(body => {
      setUploading(false);
      props.onChange(body.secure_url);
    });
  };

  return (
    <div className="imageContainer">
      <div className="imageText">{`${field.name}:`}</div>
      {uploading ? (
        <Spinner />
      ) : (
        <img
          alt={field.name}
          src={value || field.default_value || '/shared/icons/upload.svg'}
          className="image"
          onClick={handleOpenFileSelector}
        />
      )}
      <input ref={input} type="file" style={{ display: 'none' }} onChange={handleChangeImage} />
      <style jsx>
        {`
          .imageContainer {
            margin: 16px 0 16px 0;
          }
          .imageText {
            width: fit-content;
            display: inline-block;
          }
          .image {
            display: inline-block;
            width: 50px;
            margin-left: 10px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

Image.propTypes = {
  value: PropTypes.string,
  field: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    default_value: PropTypes.any,
    important: PropTypes.bool.isRequired,
    input_type: PropTypes.string.isRequired,
    is_required: PropTypes.bool.isRequired
  }).isRequired,
  onChange: PropTypes.func
};

Image.defaultProps = {
  value: '',
  onChange: () => {}
};

export default Image;
