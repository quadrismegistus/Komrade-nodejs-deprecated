import React from 'react';
import './ExploreContainer.css';
import PostCard from './PostCard';
import LoginContainer from './Login'


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
    <div className='label-logo-main'>Komrade</div>
      <LoginContainer />
      <PostCard name="quadrismegistus" content="Testing" />

    </div>
  );
};

export default ExploreContainer;
