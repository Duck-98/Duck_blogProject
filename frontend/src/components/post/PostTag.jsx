import React from 'react';
import Link from 'next/link';
import { Container, Tag } from './style';
import { useSelector, useDispatch } from 'react-redux';
import PostCardTag from './PostCardTag';

const PostTag = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { logInDone } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <Container>
      <Tag>
        <span className="tag-title"> 태그 리스트 </span>
        <div className="tag-container">
          <ul className="tag-content">
            {mainPosts.map((post) => (
              <PostCardTag key={post.tag} post={post.tag} />
            ))}
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
    </Container>
  );
};

export default PostTag;
