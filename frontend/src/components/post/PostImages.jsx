import React from 'react';
import PropTypes from 'prop-types';
import { backUrl } from '../../config';
import styled from 'styled-components';

const Image = styled.img`
  display: flex;
  width: 495px;
  height: 295px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PostImages = ({ images }) => {
  return (
    <>
      <Image src={`${backUrl}/${images[0]?.src}`} alt={images[0]?.src} />
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
