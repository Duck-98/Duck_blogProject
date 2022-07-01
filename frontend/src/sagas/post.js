import axios from 'axios';
import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';
import shortId from 'shortid';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  generateDummyPost,
  LOAD_HASHTAG_POSTS_REQUEST,
  LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from '../reducers/post';

function loadPostAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPost(action) {
  try {
    // const result = yield call(loadPostAPI, action.lastId);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: LOAD_POST_SUCCESS,
      data: generateDummyPost(10),
      /* {
        id,
        title: action.data.title,
        content: action.data.content,
      } */
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        title: action.data.title,
        content: action.data.content,
        tag: action.data.tag,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}
/*
function loadHashtagPostsAPI(data, lastId) {
  return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}
// get에서 data를 얻으려면 주소 뒤에 ?key=${key값}으로 입력해줘야함.
function* loadHashtagPosts(action) {
  try {
    console.log('loadHashtag console');
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}
*/
function* watchLoadPost() {
  yield throttle(5000, LOAD_POST_REQUEST, loadPost);
}

function* watchAddpost() {
  yield throttle(5000, ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield throttle(5000, REMOVE_POST_REQUEST, removePost);
}
/*
function* watchLoadHashtagPost() {
  yield throttle(5000, LOAD_POST_REQUEST, loadHashtagPosts);
}
fork(watchLoadHashtagPost)
*/
export default function* postSaga() {
  yield all([fork(watchAddpost), fork(watchLoadPost), fork(watchRemovePost)]);
}
