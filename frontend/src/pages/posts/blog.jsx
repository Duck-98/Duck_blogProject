import React, { useEffect, useCallback } from 'react';
import PostCard from '../../components/post/PostCard';
import PostTag from '../../components/post/PostTag';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../../reducers/post';
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
    justify-content: space-around;
  }
`;

const Blog = ({ post }) => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector((state) => state.post);
  const { logInDone } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
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
          <div className="item-con">
            <PostCard key={post.id} post={post} images={post.Images} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
