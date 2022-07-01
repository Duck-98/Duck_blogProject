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
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../../reducers/post';
import { useInView } from 'react-intersection-observer';

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

const HashTag = ({ post }) => {
  const router = useRouter();
  const { tag } = router.query;
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector((state) => state.post);
  const { logInDone } = useSelector((state) => state.user);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasMorePost && !loadPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        lastId,
        data: tag,
      });
    }
  }, [inView, hasMorePost, loadPostLoading, mainPosts, tag]);

  const onClick = (id) => {
    router.push(
      {
        pathname: `/posts/${id}`,
        query: {
          id,
        },
      },
      `/posts/${id}`,
    );
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
                  id: post.id,
                },
              },
              `/posts/${post.id}`)
            }
            key={post.id}
          >
            <div className="item-con">
              <PostCard key={post.id} post={post} images={post.Images} onClick={() => onClick(post.id)} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

HashTag.propTypes = {
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

export default HashTag;
