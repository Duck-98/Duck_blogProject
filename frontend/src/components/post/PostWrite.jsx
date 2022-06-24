/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

// TOAST UI Editor import
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// TOAST UI Editor Plugins
import chart from '@toast-ui/editor-plugin-chart';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import uml from '@toast-ui/editor-plugin-uml';
import '@toast-ui/chart/dist/toastui-chart.css';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../../reducers/post';
import { Button, TitleCon } from './style';

const PostWrite = () => {
  const { addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [markdown, setMarkdown] = useState(``);
  const [title, setTitle] = useState('');
  const inputRef = useRef();
  // image Upload 막기
  /* useEffect(() => {
    inputRef.current.getInstance().removeHook('addImageBlobHook');
  }, []); */

  const handleAddText = (e) => {
    if (!title || !title.trim()) {
      return alert('제목을 입력해주세요.');
    }
    const formData = new FormData();

    e.preventDefault();
    const editorInstance = inputRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    console.log('----markdown---');
    console.log(getContent_md);
    setMarkdown(getContent_md);
    const getContent_html = editorInstance.getHTML();
    console.log('----markdown---');
    console.log(getContent_html);
    console.log(title);
    formData.append('title', title);
    formData.append('content', markdown);
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  };
  const onChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <>
      <TitleCon>
        <input
          className="title"
          placeholder="제목을 입력해주세요"
          onChange={onChange}
          onClick={handleAddText}
          value={title}
        />
        <span>내용</span>
      </TitleCon>
      <Editor
        plugins={[codeSyntaxHighlight, tableMergedCell, uml, chart, colorSyntax]}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        ref={inputRef}
       /* hooks={{
          addImageBlobHook: async (blob, callback) => {
            console.log(blob); // File {name: '카레유.png', ... }

            // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
            // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...

            // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
            callback(/*'http://localhost:5000/img/카레유.png', '카레유';
          },
        }}  */
      />
      <Button onClick={handleAddText}>글 올리기</Button>
    </>
  );
};

export default PostWrite;
