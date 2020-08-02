import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { peopleOutline, mailOutline, bonfireOutline, radioOutline, notificationsOutline } from 'ionicons/icons';
import Feed from './pages/Feed';
import People from './pages/People';
import Messages from './pages/Messages';
// import SignIn from './pages/SignIn';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// import { QueryChangeDetector } from 'rxdb';
import { schema } from './Schema';


/* Routers */
import * as Routes from './routes';


/* DB
import {
    createRxDatabase,
    RxDatabase,
    RxCollection,
    RxJsonSchema,
    RxDocument,
} from 'rxdb';

type KomradeDocType = {
    username: string;
    password_hash: string;
};

type KomradeDocument = RxDocument<KomradeDocType>
*/

import * as mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));



// RxDB.plugin(require('pouchdb-adapter-idb'));
// RxDB.plugin(require('pouchdb-adapter-http'));


// import { Capacitor } from '@capacitor/core';
// import { Tor } from '@start9labs/capacitor-tor';
//
// // const isAvailable = Capacitor.isPluginAvailable('Camera');
// //
// // if (!isAvailable) {
// //   // Have the user upload a file instead
// //   console.log('Camera is not available!')
// // } else {
// //   // Otherwise, make the call:
// //   // Camera.getPhoto()
// //   console.log('Camera IS available')
// // }
//
// const tor = new Tor();
// console.log('Initializing Tor Daemon.');
// /* Start tor socks listener on socksPort (9250).
//    If tor takes longer than initTimeout (15000) to start and bootstrap fully,
//    the returned observable will error out. If initTimeout is omitted, tor
//    will attempt to connect forever and the observable will never error out.
// */
// tor.start({socksPort: 9250, controlPort: 9251, initTimeout: 15000}).subscribe({
//    // next: progressPercentage => this.handleConnecting(progressPercentage),
//    error: whatHappened => { throw new Error('Tor subscription blew up: ' + whatHappened) }
// })
// console.log(`Tor Daemon initialized.`);




const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path={Routes.FEED} component={Feed} exact={true} />
          <Route path={Routes.PEOPLE} component={People} exact={true} />
          <Route path={Routes.MESSAGES} component={Messages} />
          <Route path="/" render={() => <Redirect to={Routes.FEED} />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="top">

          <IonTabButton tab="feed" href={Routes.FEED}>
            <IonIcon icon={radioOutline} />
          </IonTabButton>

          <IonTabButton tab="people" href={Routes.PEOPLE}>
            <IonIcon icon={peopleOutline} />
          </IonTabButton>

          <IonTabButton tab="events" href={Routes.FEED}>
            <IonIcon icon={bonfireOutline} />
          </IonTabButton>

          <IonTabButton tab="messages" href={Routes.MESSAGES}>
            <IonIcon icon={mailOutline} />
          </IonTabButton>

          <IonTabButton tab="notifications" href={Routes.MESSAGES}>
            <IonIcon icon={notificationsOutline} />
          </IonTabButton>

        </IonTabBar>


      </IonTabs>
    </IonReactRouter>

  </IonApp>
);

export default App;
