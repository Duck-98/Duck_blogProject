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
  console.log(router);
  return (
    <Container>
      <PostView />
      <h4>{router.query.title}</h4>
      <h4>{router.query.id}</h4>
    </Container>
  );
};

export default BlogView;
