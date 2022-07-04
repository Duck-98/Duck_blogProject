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
import { Tag } from '../../components/post/style';
import PostCardTag from '../../components/post/PostCardTag';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  .tag {
    display: flex;
    width: 20%;
    .tag-con {
      position: fixed;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: flex-start;
    .item-con {
      padding-right: 2rem;
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

  /*
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/posts/${id}`,
        query: {
          title,
        },
      },
      `/posts/${id}`,
    );
    console.log(id, title);
  };
*/
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
                  <button className="btn">글쓰기</button>
                </Link>
              ) : (
                <button
                  className="btn"
                  onClick={() => {
                    alert('로그인해주세요.');
                  }}
                >
                  글쓰기
                </button>
              )}
            </div>
          </Tag>
        </div>
      </div>
      <div className="list">
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
