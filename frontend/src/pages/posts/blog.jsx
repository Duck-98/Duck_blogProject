import React, { useEffect, useCallback } from 'react';
import PostCard from '../../components/post/PostCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import wrapper from '../../store/configure';
import { END } from 'redux-saga';
import Link from 'next/link';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import PropTypes from 'prop-types';
import { PostBtn, Tag } from '../../components/post/style';
import PostCardTag from '../../components/post/PostCardTag';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  .tag {
    display: flex;
    width: 20%;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .tag-con {
      position: fixed;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: space-evenly;
    margin-bottom: 10rem;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .item-con {
      @media screen and (max-width: 768px) {
        width: 95%;
      }
    }
    .post-btn {
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding-top: 3rem;
      }
    }
  }
`;

const Blog = ({ post }) => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POST_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostLoading, mainPosts]);

  return (
    <Container>
      <div className="tag">
        <div className="tag-con">
          <Tag>
            <span className="tag-title"> 태그 리스트 </span>
            <div className="tag-container">
              <ul className="tag-content">
                <PostCardTag post={post} />
              </ul>
            </div>
            <div className="btn-container">
              {me ? (
                <Link href="/posts/blogWrite">
                  <PostBtn className="btn">글쓰기</PostBtn>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </Tag>
        </div>
      </div>
      <div className="list">
        <div className="post-btn">
          {me ? (
            <Link href="/posts/blogWrite">
              <PostBtn className="btn">글쓰기</PostBtn>
            </Link>
          ) : (
            <></>
          )}
        </div>
        {mainPosts.map((post) => (
          <Link
            href={
              ({
                pathname: `/posts/${post.id}`,
                query: {
                  title: post.title,
                },
              },
              `/posts/${post.id}`)
            }
            key={post.id}
          >
            <div className="item-con">
              <PostCard key={post.id} post={post} id={post.id} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    UserId: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    tag: PropTypes.string,
    createdAt: PropTypes.object,
    Images: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POST_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});
export default Blog;
