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

import React, { useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../../reducers/post';
import Router, { useRouter } from 'next/router';
import { Button, TitleCon, ImageCon, TagInput } from './style';
import { backUrl } from '../config/config';

const PostWrite = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const inputRef = useRef();
  const onChangeTags = (e) => {
    e.preventDefault();
    setTag(e.target.value);
  };
  const onChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleAddText = useCallback(
    (e) => {
      e.preventDefault();
      // 대표 이미지 업로드 코드
      const formData = new FormData();
      const editorInstance = inputRef.current.getInstance();
      const getContent_md = editorInstance.getMarkdown();
      const content = editorInstance.getHTML();

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
      return router.push('/posts/blog');
    },
    [imagePaths],
  );

  // 대표 이미지 업로드
  const imageInput = useRef();
  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files); // 선택한 파일 정보
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

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleAddText}>
        <TitleCon>
          <input className="title" placeholder="제목을 입력해주세요" onChange={onChange} value={title} />
          <span>내용</span>
        </TitleCon>
        <Editor
          plugins={[codeSyntaxHighlight, tableMergedCell, uml, chart, colorSyntax]}
          placeholder="내용을 입력해주세요."
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          ref={inputRef}
          preventDefault
          /*hooks={{
            addImageBlobHook: async (blob, callback) => {
              const url = await uploadImage(blob);
              callback(url, 'alt text');
              return false;
            },
          }}*/
        />
        <input className="image-cover" hidden type="file" ref={imageInput} name="image" onChange={onChangeImages} />
        <TagInput placeholder="태그를 입력해주세요. ex) #리액트 #리덕스" onChange={onChangeTags} value={tag} />
        <ImageCon>
          <div className="button-con">
            <Button type="submit">글 올리기</Button>
            <Button type="button" onClick={onClickImageUpload}>
              썸네일 업로드
            </Button>
            <Button type="button" onClick={onRemoveImage}>
              썸네일 제거
            </Button>
          </div>
          <div className="img-box">
            <span>썸네일 미리보기</span>
            {imagePaths.map((v, i) => (
              <div key={v} style={{ display: 'inline-block' }}>
                <img // // map함수 안에 데이터를 넣고 싶으면 고차함수로 만들어야함(index)
                  src={`${backUrl}/${v}`} // 이미지 파일이 백엔드 서버에 있기 때문에 직접 백엔드 서버의 경로를 써줌.
                  style={{ width: '200px' }}
                  alt={v}
                />
                <div>
                  <Button onClick={onRemoveImage(i)}>제거</Button>
                </div>
              </div>
            ))}
          </div>
        </ImageCon>
        <div></div>
      </form>
    </>
  );
};
export default PostWrite;
