import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';


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
import { AuthContextProvider } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';



setupIonicReact();

const App: React.FC = () => (
  <AuthContextProvider>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/Home">
          <Home />
        </Route>
        {/* <Route exact path="/">
           <Redirect to="/Login"/>
        </Route> */}
        <Route exact path="/Login">
            <Login/>
        </Route>
        {/* <Route exact path="/SignUp">
           <Redirect to="/SignUp"/>
        </Route> */}
        <Route exact path="/SignUp">
            <Signup />
        </Route>
        <Route exact path="/">
           <Redirect to="/Home"/>
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </AuthContextProvider>
);

export default App;
