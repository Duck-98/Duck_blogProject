import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import axios from 'axios';
import wrapper from '../../store/configure';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { LOAD_DETAIL_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
const PostView = dynamic(() => import('../../components/post/PostView'), { ssr: false });

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  justify-content: center;
  width: 100%;
`;
const BlogView = () => {
  const { singlePost } = useSelector((state) => state.post);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <PostView post={singlePost} />
    </Container>
  );
};
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_DETAIL_POST_REQUEST,
    data: params.id,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});
export default BlogView;
