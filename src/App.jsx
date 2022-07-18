import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, isPlatform, setupIonicReact, useIonAlert, useIonToast } from '@ionic/react';
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
import Find from './pages/Find';
import Signup from './pages/Signup';

import {Browser} from '@capacitor/browser';
import { App as app } from '@capacitor/app';
import {useEffect, useState} from 'react';
import { collection, doc, getDoc, setDoc } from "firebase/firestore"; 
import {db} from './firebase';

setupIonicReact();

const App = () => {
  const [updateDetails,setUpdateDetails] = useState({});
  const [appVersion, setAppVersion] = useState("");
  const updateRef= doc(db, "dictionary_app_config",
  "DpOAil0XVLlVegkfPcsn");

  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  const handleToast = (msg) => {
    present({
      message: msg,
      position: "top",
      animated: true,
      duration: 2000,
      color: "white",
      mode:'ios',
    });
  };

  const handleAlert = (msg, title, btn, appVersion) => {
    presentAlert({
      header:title,
      subHeader:`Version: ${appVersion}`,
      message: msg,
      buttons: [
        {
          text: btn,
          role:"Download",
          handler: async () => {
            handleToast("Download Clicked");
            await Browser.open ({
              url: "https://play.google.com/store/apps/details?id=com.dictionaryapp.app",
            });
          },
        },
      ],
      backdropDismiss: true,
      translucent: true,
      animated: true,
    });
  };

  const getAppInfo = async () => {
    let info = await app.getInfo();
    return info;
  };

  const getConfigData = async () => {
       const docSnap = await getDoc(updateRef);
       if(docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:" , docSnap.data());
        setUpdateDetails(data.UpdateMsg);
        setAppVersion(data.current);
       }else{
        console.log("No such document!");
       }
  };

  const checkUpdate = async () => {
    try {
      if (isPlatform("android")) {
        const currentAppInfo = getAppInfo();
        if (appVersion > (await currentAppInfo).version) {
          const msg = updateDetails.msg;
          const title = updateDetails.title;
          const btn = updateDetails.btn;
          handleAlert(msg, title, btn, appVersion);
        }
      } 
    } 
    catch (error) {
      handleAlert(error.message);
    }
  };

  useEffect(() => {
    getConfigData();
    getAppInfo();
    // if (isPlatform("android")){
      
    // }
  }, [0]);

    checkUpdate();



return (
  <AuthContextProvider>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Login">
            <Login/>
        </Route>
        <Route exact path="/SignUp">
            <Signup />
        </Route>
        <Route exact path="/">
           <Redirect to="/Home"/>
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Find">
          <Find />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </AuthContextProvider>
);
      }
export default App;

