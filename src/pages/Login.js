
import {
    IonContent, IonPage, IonInput, IonLabel,
    IonButton, IonGrid, IonRow, useIonRouter, IonCol, IonIcon,
    useIonAlert, useIonToast, useIonLoading
} from "@ionic/react";
import { Link } from 'react-router-dom';
import { logoGoogle, logoFacebook } from 'ionicons/icons';
import { useState } from "react";
import './Login.css';

import { UserAuth } from '../context/AuthContext';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';



const Login = () => {
    const { login } = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ setError] = useState("");
    const [present] = useIonToast();
    const [presentAlert] = useIonAlert();
    const [showLoading, dimissLoading] = useIonLoading();

    async function handleButtonClick(message) {
        present({
            message: message,
            duration: 4000,
            position: "top",
            color: "white",
            mode: "ios",
            icon: alert,
        });
    }

    async function handleAlert(message) {
        presentAlert({
            header: "Alert",
            message: message,
            buttons: ["OK"],
            mode: "md",
            animated: true,
            cssClass: 'loginpage-alert',
            color: 'light'
        });
    }


    const router = useIonRouter();

    const clearInputs = () => {
        setEmail('');
        setPassword('');

    }
    const signInGoogle = async () => {

        GoogleAuth.initialize();

        const result = await GoogleAuth.signIn();



        console.log(result);

        if (result) {
            router.push("/Dashboard");
            console.log(result);
        }

    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");

        if (email == null || email === "" || password == null || password === "") {
            handleButtonClick("Fill the required fields");
        } else if (password.length < 6) {
            handleButtonClick("password must be altest 6 characters");
        } else if (
            atposition < 1 ||
            dotposition < atposition + 2 ||
            dotposition + 2 >= email.length
        ) {
            handleButtonClick("Please Enter Correct Email")
        } else {
            try {
                showLoading({
                    message: 'Dismissing after sometime...',
                    duration: 3000,
                    cssClass: 'loginpage-alert',
                    color: 'dark'
                })
                await login(email, password);
                handleButtonClick("user logged in successful");
                dimissLoading();
                clearInputs();
                router.push("/Dashboard");
            } catch (e) {
                setError(e.message);
                dimissLoading();
                clearInputs();
                handleAlert(e.message);
            }
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen className="content-page">
                <IonGrid className="login-grid">
                    <IonRow className="login-title">
                        <IonLabel className="logintitle">Hi, Welcome Back!</IonLabel>
                    </IonRow>
                    <IonRow className="login-subtitle">
                        <IonLabel className="loginsubtitle">Hello again, you've been missed!</IonLabel>
                    </IonRow>

                    <IonRow className="login-input">
                        <IonLabel className="loginlabel">Email</IonLabel><br />
                        <IonInput className="logininput" type="email"
                            placeholder="Enter your Email Address"
                            onIonChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required></IonInput>
                    </IonRow>

                    <IonRow className="login-input">
                        <IonLabel className="loginlabel">Password</IonLabel><br />
                        <IonInput className="logininput" type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onIonChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </IonRow>

                    <IonRow className="login-button">
                        <IonButton className="loginbutton" shape="round" onClick={handleSubmit}>
                            Login
                        </IonButton>
                    </IonRow>

                    <IonRow className="login-content">
                        <IonCol size="md">
                            <IonLabel className="logincontent">Didn't have any account ?</IonLabel>
                        </IonCol>
                        <IonCol size="md" className="loginbtn">
                            <Link to="/Signup" className="signup">Signup</Link>
                        </IonCol>

                    </IonRow>
                    <IonRow className="icons">

                        <IonButton fill="clear" onClick={(e) => { signInGoogle() }} >
                            <IonIcon
                                icon={logoGoogle}
                                color="white"
                                className="google" 
                            />
                        </IonButton>

                        <IonButton fill="clear"  >
                            <IonIcon
                                icon={logoFacebook }
                                color="white"
                                className="google" 
                            />
                        </IonButton>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    )

}

export default Login;