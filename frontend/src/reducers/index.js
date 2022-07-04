import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import post from './post';

const persistConfig = {
  key: 'root',
  storage: storage, // 9번째 줄에서 import한 storage를 지정해준다.
  whitelist: ['post'], // 유지하고 싶은 데이터를 배열 안에 지정한다.
  // combineReducers 안에 지정된 값들을 사용한다. 이렇게 하면 특정 reducer만 storage에 저장 할 수 있다.
  // 특정 reducer만 storage에 저장하지 않도록 하기 위해서는 blacklist를 사용하면 된다.
  // blacklist: ["userInfoReducer"]
};

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootReducer;
//export default persistReducer(persistConfig, rootReducer);
