import React from 'react';
import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  return (
    <>
      <img
        src={images[0]?.src}
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
