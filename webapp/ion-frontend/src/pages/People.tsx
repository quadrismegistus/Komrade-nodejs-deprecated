import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './People.css';

const People: React.FC = () => {
  return (
    <IonPage>

      <IonContent>

        <ExploreContainer name="People page" />
      </IonContent>
    </IonPage>
  );
};

export default People;
