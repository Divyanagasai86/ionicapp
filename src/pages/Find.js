import {IonToolbar,IonCardTitle,IonCard,IonGrid,IonRow,IonCol,IonSearchbar,IonButton,IonTitle,IonContent,IonHeader,IonPage, IonCardContent } from "@ionic/react";
import './Find.css';


const Find = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent fullscreen className="content-page">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle>Search</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonGrid className="find-grid">
                    <IonRow className="find-row ion-margin">
                        <IonCol size="8" sizeSm="8" sizeMd="8">
                            <IonSearchbar />
                        </IonCol>

                        <IonCol size="4" sizeSm="4" sizeMd="4">
                            <IonButton className="find-btn">Search</IonButton>
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol size="12">
                          <IonCard className="card-content">
                            <IonCardContent>
                               <IonCardTitle color="white">Apart</IonCardTitle>  
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Find;