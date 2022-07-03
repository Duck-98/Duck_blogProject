import React, { useEffect, useCallback } from 'react';
import PostCard from '../../components/post/PostCard';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import PropTypes from 'prop-types';
import { Tag } from '../../components/post/style';
import PostCardTag from '../../components/post/PostCardTag';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 46.5rem;
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
    justify-content: space-around;
    .a {
      color: black;
    }
  }
`;

const Blog = ({ post }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector((state) => state.post);
  const { logInDone } = useSelector((state) => state.user);

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
              {logInDone ? (
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
            <a className="a">
              <div className="item-con">
                <PostCard key={post.id} post={post} id={post.id} onClick={() => onClick(id, title)} />
              </div>
            </a>
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

export default Blog;
