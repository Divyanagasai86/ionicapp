import {
    IonContent, IonPage, IonInput, IonLabel,
    IonButton, IonGrid, IonRow, useIonRouter,
    IonCol, useIonAlert, useIonToast,useIonLoading
}
    from "@ionic/react";
import './Signup.css';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

import { Link } from 'react-router-dom';


const Signup = () => {
    const [present] = useIonToast();
    const [showLoading, dimissLoading] = useIonLoading();


    async function handleButtonClick(message) {
        present({
            message: message,
            duration: 2000,
            position: "top",
            color: "light",
            mode: "ios",
            icon: alert,
        });
    }
    const [presentAlert] = useIonAlert();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser,  } = UserAuth();

    const router = useIonRouter();

    async function handleAlert(message) {
        presentAlert({
            header: "Alert",
            message: message,
            buttons: ["OK"],
            mode: "ios",
            color: "light",
        });
    }

    const clearInputs = () => {
        setName('');
        setEmail('');
        setPassword('');

    }

    const handleSubmit = async (e) => {
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");

        if (name == null || name === "" || email == null || email === "" || password == null || password === "") {
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
                    message: 'Signing up please wait...',
                    duration: 3000,
                    cssClass: 'loginpage-alert',
                    color: 'dark'
                })
                await createUser(email, password);
                dimissLoading();
                handleButtonClick(name + " " + "user successfully signedup");
                clearInputs();
                router.push("/login")
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
                        <IonLabel className="logintitle">SIGNUP</IonLabel>
                    </IonRow>

                    <IonRow className="login-input">
                        <IonLabel className="loginlabel">FullName</IonLabel>
                        <IonInput className="logininput" type="text" placeholder="Enter your FullName" value={name}
                            onIonChange={(e) => setName(e.target.value)}></IonInput>
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
                            Signup
                        </IonButton>


                    </IonRow>
                    <IonRow className="login-content">
                        <IonCol size="md">
                            <IonLabel className="logincontent">Didn't have any account ?</IonLabel>
                        </IonCol>
                        <IonCol size="md" className="loginbtn">
                            <Link to="/Login" className="signup">Login</Link>
                        </IonCol>

                    </IonRow>

                </IonGrid>

            </IonContent>
        </IonPage>
    )
};
export default Signup;