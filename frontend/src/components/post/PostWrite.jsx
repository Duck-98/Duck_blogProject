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
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../../reducers/post';
import Router, { useRouter } from 'next/router';
import { Button, TitleCon, ImageCon, TagInput } from './style';

const PostWrite = () => {
  const { addPostDone, imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [markdown, setMarkdown] = useState(``);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [fileImage, setFileImage] = useState('');
  const inputRef = useRef();
  /*
  useEffect(() => {
    if (addPostDone) {
      Router.replace('/posts/blog');
    }
  }, [addPostDone]); // 게시글 쓰기가 완료되면 메인홈페이지로 이동
*/
  const handleAddText = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !title.trim()) {
        return alert('제목을 입력해주세요.');
      }

      // 대표 이미지 업로드 코드
      const formData = new FormData();
      const editorInstance = inputRef.current.getInstance();
      const getContent_md = editorInstance.getMarkdown();
      /* console.log('----markdown---');
      console.log(getContent_md);
      setMarkdown(getContent_md); */
      const content = editorInstance.getHTML();
      /*  console.log('----html---');
      console.log(postContent);
      console.log(title); */

      formData.append('title', title);
      formData.append('content', content);
      formData.append('tag', tag);
      imagePaths.forEach((p) => {
        formData.append('image', p);
      }); // image 파일 정보를 서버로 전달
      for (let value of formData.values()) {
        console.log(value);
      }
      dispatch({
        type: ADD_POST_REQUEST,
        data: formData,
      });
      /*return router.push('/posts/blog');*/
    },
    [title, imagePaths],
  );

  // 대표 이미지 업로드
  const imageInput = useRef();
  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files); // 선택한 파일 정보
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const imageFormData = new FormData(); // 멀티파트 형식으로 서버로 전송.
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });
  const onRemoveImage = useCallback((index) => () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
    dispatch({
      // 이미지 삭제
      type: REMOVE_IMAGE,
      data: index,
    });
  });
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  /*
  // image Upload 막기
  useEffect(() => {
    inputRef.current.getInstance().removeHook('addImageBlobHook');
  }, []);
*/
  const onChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onChangeTags = (e) => {
    e.preventDefault();
    setTag(e.target.value);
  };
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleAddText}>
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
          /*hooks={{
            addImageBlobHook: async (blob, callback) => {
              const url = await uploadImage(blob);
              callback(url, 'alt text');
              return false;
            },
          }}*/
        />
        <input className="image-cover" hidden type="file" ref={imageInput} name="image" onChange={onChangeImages} />
        <TagInput
          placeholder="태그를 입력해주세요. ex) #리액트 #리덕스"
          onChange={onChangeTags}
          onClick={handleAddText}
          value={tag}
        />
        <ImageCon>
          <div className="button-con">
            <Button>글 올리기</Button>
            <Button type="button" onClick={onClickImageUpload}>
              썸네일 업로드
            </Button>
            <Button type="button" onClick={onRemoveImage}>
              썸네일 제거
            </Button>
          </div>
          <div className="img-box">
            <span>썸네일 미리보기</span>
            {fileImage && <img alt="sample" src={fileImage} />}
          </div>
        </ImageCon>
        <div>
          {imagePaths.map((v, i) => (
            <div key={v} style={{ display: 'inline-block' }}>
              <img // // map함수 안에 데이터를 넣고 싶으면 고차함수로 만들어야함(index)
                src={`http://localhost:3065/${v}`} // 이미지 파일이 백엔드 서버에 있기 때문에 직접 백엔드 서버의 경로를 써줌.
                style={{ width: '200px' }}
                alt={v}
              />
              <div>
                <Button onClick={onRemoveImage(i)}>제거</Button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};
/*
  console.log(blob); // File {name: '카레유.png', ... }

            // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
            // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...

            // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
            callback(/*'http://localhost:5000/img/카레유.png', '카레유';
*/
export default PostWrite;
