import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Messages.css';

const Messages: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Messages" />
      </IonContent>
    </IonPage>
  );
};

export default Messages;
