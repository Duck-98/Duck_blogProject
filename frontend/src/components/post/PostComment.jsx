import React, { createRef, useEffect } from 'react';

const PostComment = () => {
  const PostCommentRef = createRef();

  useEffect(() => {
    const utterances = document.createElement('script');

    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'Duck-98/duck-blog-comment',
      'issue-term': 'pathname',
      label: 'Comments',
      theme: 'github-light',
      async: true,
      crossorigin: 'anonymous',
    };

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    PostCommentRef.current.appendChild(utterances);
  }, []);

  return <div className="comments" ref={PostCommentRef}></div>;
};

export default PostComment;
