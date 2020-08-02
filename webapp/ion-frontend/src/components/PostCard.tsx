import React from 'react';
import './PostCard.css'

interface ContainerProps {
  name: string;
  content: string
}

const PostAuthor: React.FC<{name: string}> = ({ name }) => {
  return (
    <div className="PostAuthor">{name}</div>
  );
};

const PostContent: React.FC<{ content: string; }> = ({ content }) => {
  return (
    <div className="PostContent">
      <p>{content}</p>
    </div>
  );
};


const PostCard: React.FC<{name: string; content: string}> = ({ name, content }) => {
  return (
    <div className="PostCard">

      <PostAuthor name={name} />

      <PostContent content={content} />

    </div>
  );
};

export default PostCard;
