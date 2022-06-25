import React from 'react';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { useSelector } from 'react-redux';
import { TitleCon } from './style';

const test = `# markdown`;
const PostView = () => {
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <>
      <TitleCon>
        <span className="title">{mainPosts.title}</span>
      </TitleCon>
      <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={mainPosts.content} />
    </>
  );
};
export default PostView;
