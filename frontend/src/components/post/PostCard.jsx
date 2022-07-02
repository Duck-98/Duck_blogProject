import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostImages from './PostImages';
import PostContentTag from './PostContentTag';
import { useSelector, useDispatch } from 'react-redux';
import { PostContainer, PostCon } from './style';
import { REMOVE_POST_REQUEST } from '../../reducers/post';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { mainPosts } = useSelector((state) => state.post);
  const onRemovePost = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  return (
    <PostCon>
      <div className="remove-con">
        <button type="button" onClick={onRemovePost}>
          X
        </button>
      </div>
      <PostContainer>
        <div className="post-img">
          <PostImages images={post?.Images} />
        </div>
        <div className="post-content">
          <span className="post-title">{post?.title}</span>
          <p className="post-writing">{post?.content}</p>
          <div className="tag-container">
            <div className="tag">{<PostContentTag postData={post?.tag} />}</div>
          </div>
        </div>
      </PostContainer>
    </PostCon>
    /*
     {mainPosts.map((post) => (
        <div className="item-con">
          <PostCard key={post.id} post={post} images={post.Images} onClick={() => onClick(post.id)} />
        </div>
      */
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
    createdAt: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
