import React from 'react';
import Link from 'next/link';
import { Container, Tag } from './style';
import { useSelector, useDispatch } from 'react-redux';

const PostTag = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { logInDone } = useSelector((state) => state.user);
  return (
    <Container>
      <Tag>
        <span className="tag-title"> 태그 리스트 </span>
        <div className="tag-container">
          <ul className="tag-content">
            <li>리액트</li>
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
