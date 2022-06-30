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
  const { id } = router.query;

  return (
    <Container>
      <PostView />
      <div>{id}번 게시글</div>
    </Container>
  );
};

export default BlogView;
