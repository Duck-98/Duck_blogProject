import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const PostWrite = dynamic(() => import('../../components/post/PostWrite'), { ssr: false });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 7rem;
  justify-content: center;
  margin-left: 100px;
`;

const BlogWrite = () => (
  <Container>
    <PostWrite />
  </Container>
);

export default BlogWrite;
