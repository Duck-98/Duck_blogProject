import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const PostView = dynamic(() => import('../../components/post/PostView'), { ssr: false });

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  justify-content: center;
  width: 100%;
`;
const BlogView = () => {
  const router = useRouter();

  return (
    <Container>
      <PostView />
    </Container>
  );
};

export default BlogView;
