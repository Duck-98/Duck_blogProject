
import React from 'react';
import PostCard from '../../components/post/PostCard';
import PostTag from '../../components/post/PostTag';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .tag {
    width: 20%;
  }
  .list {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`;


const Blog = () => {
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <Container>
      <div className="tag">
        <PostTag />
      </div>
      <div className="list">
        <PostCard />
        {mainPosts.map((post => (
          <PostCard key={post.id} post={post} />
        )))}
      </div>
        <div>
<span></span>
        </div>
    </Container>
  );
};

export default Blog;
