import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const TagBoxContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid black

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: black
    color: white;
    font-weight: bold;
    &:hover {
      background: black
    }
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// tag 값 바뀔 때만 리렌더링
const TagItem = React.memo(({ tag, onRemove }) => <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>);
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));
const TagBox = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);
  return (
    <TagBoxContainer>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input placeholder="태그를 입력하세요." value={input} onChange={onChange} />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxContainer>
  );
};

export default TagBox;
