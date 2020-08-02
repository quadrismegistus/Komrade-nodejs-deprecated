import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Feed.css';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Feed page" />
      </IonContent>
    </IonPage>
  );
};

export default Feed;
