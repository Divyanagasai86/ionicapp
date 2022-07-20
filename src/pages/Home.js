import { IonButton, IonContent, IonGrid, IonRow, IonPage, IonTitle } from '@ionic/react';

import './Home.css';



const Home = () => {

  return (
    <IonPage >
      <IonContent fullscreen className="content-page" >
        <IonGrid className="content-grid">
          <IonRow className="hometitle">
            <IonTitle > BEST OFFLINE DICTIONARY...</IonTitle>
          </IonRow>
          <IonRow className="homesubtitle">
            <IonTitle>For iOS, ANDRIOD,Windows</IonTitle>
          </IonRow>
          <IonRow className="grid-row3">

            <IonButton className="get-started" shape="round" routerLink="/Login">Get Started</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
