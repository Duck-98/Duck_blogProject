/* eslint-disable no-fallthrough */
/* eslint-disable default-param-last */
import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';
export const initialState = {
  mainPosts: [
    /*  {
      id: 0,
      User: {
        id: 1,
        nickname: 'duck',
      },
      title: '게시글입니다 테스트',
      content: '게시글 왜 안돼 #리액트',
      tag: '#리액트',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
      ],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'duck',
      },
      title: '게시글 제목 테스트',
      content: '게시글 테스트 #리액트',
      tag: '#리액트',
      Images: [
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
    },
    {
      id: 2,
      User: {
        id: 1,
        nickname: 'duck',
      },
      title: '제발 되라',
      content: '## 제발되라',
      tag: '#리액트',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
      ],
    }, */
  ],
  imagePaths: [],
  singlePost: null,
  hasMorePost: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadDetailPostLoading: false,
  loadDetailPostDone: false,
  loadDetailPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
};
/*
export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      tag: '#태그',
      Images: [
        {
          src: faker.image.image(),
        },
      ],
    }));

initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

const dummyPost = (data) => ({
  id: data.id,
  User: {
    id: 1,
    nickname: 'duck1',
  },
  title: data.title,
  content: data.content,
  tag: data.tag,
  Images: [
    {
      src: data.imageSrc,
    },
  ],
});
*/
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_DETAIL_POST_REQUEST = 'LOAD_DETAIL_POST_REQUEST';
export const LOAD_DETAIL_POST_SUCCESS = 'LOAD_DETAIL_POST_SUCCESS';
export const LOAD_DETAIL_POST_FAILURE = 'LOAD_DETAIL_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        console.log(action.data);
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_DETAIL_POST_REQUEST:
        draft.loadDetailPostLoading = true;
        draft.loadDetailPostDone = false;
        draft.loadDetailPostError = null;
        break;
      case LOAD_DETAIL_POST_SUCCESS:
        draft.loadDetailPostLoading = false;
        draft.loadDetailPostDone = true;
        draft.singlePost = action.data;
        break;
      case LOAD_DETAIL_POST_FAILURE:
        draft.loadDetailPostLoading = false;
        draft.loadDetailPostError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = draft.imagePaths.concat(action.data);
        //concat 함수를 이용하여 imagePaths 배열에 action.data(이미지 데이터)를 합치기
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        break;
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
