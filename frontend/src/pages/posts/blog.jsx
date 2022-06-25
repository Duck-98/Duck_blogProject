import React, { useEffect } from 'react';
import PostCard from '../../components/post/PostCard';
import PostTag from '../../components/post/PostTag';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../../reducers/post';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .tag {
    width: 20%;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: space-around;
  }
`;

const Blog = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);
  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        if (hasMorePost) {
          dispatch({
            type: LOAD_POST_REQUEST,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost]);

  return (
    <Container>
      <div className="tag">
        <PostTag post={mainPosts.post} />
      </div>
      <div className="list">
        {mainPosts.map((post) => (
          <div className="item-con">
            <PostCard key={post.id} post={post} />
          </div>
        ))}
      </div>
      <div>
        <span></span>
      </div>
    </Container>
  );
};

export default Blog;
