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
import moment from 'moment';
import 'moment/locale/ko';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  div {
  }
  .time {
    font-size: 20px;
    font-weight: bold;
  }
  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR};
    font-size: 15px;
    color: ${(props) => props.theme.LINE_WHITE_COLOR};
    margin-bottom: 3rem;
  }
`;

const test = `# markdown`;
const PostView = ({ post }) => {
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <>
      <TitleCon>
        <span className="title">{mainPosts[0].title}</span>
      </TitleCon>
      <Container>
        <div>
          <span className="time"> {moment(mainPosts.createdAt).calendar()}</span>
          <span className="tag">{mainPosts[0].tag}</span>
          <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={mainPosts[0].content} />
        </div>
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
