const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
const hpp = require('hpp');
//const path = require('path');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log('db연결성공');
  })
  .catch(console.error);
passportConfig();
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined')); //배포용
  app.use(hpp());
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );
  app.use(
    cors({
      origin: ['http://duck-blog.info'],
      credentials: true, // cookie도 같이 전달
    }),
  );
} else {
  app.use(morgan('dev')); // 개발용
  app.use(
    cors({
      origin: true,
      credentials: true, // cookie도 같이 전달
    }),
  );
}

/* 
app.get 가져오기
app.post 생성하기
app.put 전체 수정
app.delete 제거
app.patch 부분 수정
app.options 찔러보기(?) ex) 요청이 가능한지  
app.head 헤더만 가져오기 
*/
app.use('/', express.static(path.join(__dirname, 'uploads'))); // 경로 더해주기
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// req -> 요청 res -> 응답
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET, // cookie에 보낸 데이터도 해킹당하지 않기 위해 secret키도 숨기기
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === 'production' && '.duck-blog.info',
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/posts', postsRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);
app.listen(80, () => {
  console.log('서버실행중');
});
