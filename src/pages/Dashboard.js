import { IonContent, IonPage, IonImg, IonTitle, IonRow, IonGrid, IonButton, IonLabel } from "@ionic/react";
import './Dashboard.css';

const Dashboard = () => {


    
    return (
        <IonPage>
            <IonContent fullscreen className="content-page">
                <IonGrid className="dash-grid">
                    <IonRow className="dash-title">
                        <IonLabel className="iondashboard">Welcome to Dictionary App </IonLabel>
                    </IonRow>
                    <IonRow className="dash-img">
                        <IonImg src="https://tse2.explicit.bing.net/th?id=OIP.itccS1KXnmJUt65L94dq5QHaE8&pid=Api&P=0&w=230&h=153"
                            alt="" className="image"
                        />
                    </IonRow>
                    <IonRow className="back">
                        <IonButton className="goback" routerLink="/Home">Logout</IonButton>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )

}
export default Dashboard;