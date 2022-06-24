import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PostContainer, PostCon } from './style';

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <PostCon>
      <PostContainer>
        <div className="post-img">
          <img /> {/* post.image */}
        </div>
        <div className="post-content">
          <span className="post-title">test</span>
          <p className="post-writing">dd</p>
          <div className="tag-container">
            <div className="tag">리액트</div>
          </div>
        </div>
      </PostContainer>
    </PostCon>
  );
};

export default PostCard;
