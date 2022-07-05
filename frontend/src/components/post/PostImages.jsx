import React from 'react';
import PropTypes from 'prop-types';
import { backUrl } from '../config/config';

const PostImages = ({ images }) => {
  return (
    <>
      <img
        src={`${backUrl}/${images[0]?.src}`}
        alt={images[0]?.src}
        style={{
          width: '495px',
          height: '295px',
          display: 'flex',
        }}
      />
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
