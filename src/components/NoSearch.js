import { IonCol, IonLabel, IonRow } from "@ionic/react";

export const NoSearch = () => (

    <IonRow className="ion-text-center ion-justify-content-center ion-margin-top">
        <IonCol size="10">
            <IonLabel>
                <p color="light">Search for a word in the English language</p>
                <p>This app will give you word meaninigs, phonetics</p>
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_n2m0isqh.json" mode="bounce" background="transparent" speed="0.8" loop autoplay></lottie-player>
            </IonLabel>
        </IonCol>
    </IonRow>
);