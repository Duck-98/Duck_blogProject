import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostImages from './PostImages';
import { useSelector, useDispatch } from 'react-redux';
import { PostContainer, PostCon } from './style';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <PostCon>
      <PostContainer>
        <div className="post-img">
          <PostImages images={post.Images} />
        </div>
        <div className="post-content">
          <span className="post-title">{post?.title}</span>
          <p className="post-writing">{post?.content}</p>
          <div className="tag-container">
            <div className="tag">리액트</div>
          </div>
        </div>
      </PostContainer>
    </PostCon>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
