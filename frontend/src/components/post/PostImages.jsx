import React from 'react';
import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  return (
    <>
      <img
        src={images?.src}
        alt={images?.src}
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
