import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const TagCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR};
  font-size: 15px;
  color: ${(props) => props.theme.LINE_WHITE_COLOR};
  a {
    &:hover {
      background-color: ${(props) => props.theme.CURSOR_COLOR};
    }
  }
`;
const PostContentTag = ({ postData }) => {
  return (
    <TagCon>
      {postData?.split(/(#[^\s#]+)/g).map((v) => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link
              href={{ pathname: '/posts/hashtag', query: { tag: v.slice(1) } }}
              as={`/posts/hashtag/${v.slice(1)}`}
              key={v}
            >
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </TagCon>
  );
};

PostContentTag.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostContentTag;
