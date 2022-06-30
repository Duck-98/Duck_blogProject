import React from 'react';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TitleCon } from './style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const test = `# markdown`;
const PostView = ({ post }) => {
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <>
      <TitleCon>
        <span className="title">{mainPosts[2].title}</span>
      </TitleCon>
      <Container>
        <span className="tag">{mainPosts[2].tag}</span>
        <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={mainPosts[2].content} />
      </Container>
    </>
  );
};
export default PostView;

PostView.propTypes = {
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
