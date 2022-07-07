
import { IonContent, IonPage, IonTitle, IonInput, IonLabel, 
    IonButton, IonGrid, IonRow,useIonRouter,IonCol,
    useIonAlert,useIonToast, } from "@ionic/react";
 import {Link } from 'react-router-dom';
// import { logoGoogle, logoFacebook } from 'ionicons/icons';
import { useState } from "react";
import './Login.css';

import {UserAuth} from '../context/AuthContext';
import {toastController} from '@ionic/core';


const Login = () => {
  const {login, user} = UserAuth();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [present, dismiss] = useIonToast();
  const [presentAlert] = useIonAlert();
  
  async function handleButtonClick(message) {
    present({
        message: message,
        duration: 2000,
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
      animated:true,
      cssClass: 'loginpage-alert',
      color: 'light'
    });
  }


  const router = useIonRouter();

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if(email == null || email === "" || password == null || password === "") {
        handleButtonClick("Fill the required fields");
    }else if (password.length< 6) {
        handleButtonClick("password must be altest 6 characters");
    }else if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
    ){
        handleButtonClick("Please Enter Correct Email")
    }else {
        try{
            await login(email,password);
            handleButtonClick("user logged in successful");
            clearInputs();
            router.push("/Dashboard");
        }catch (e) {
            setError(e.message);
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
                        <IonInput className="logininput"  type="email" 
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
                        </IonButton><br />
                    </IonRow>
                    <IonRow className="login-content">
                        <IonCol size="md">
                        <IonLabel className="logincontent">Didn't have any account ?</IonLabel>
                        </IonCol>
                        <IonCol size="md" className="loginbtn">
                            <Link to="/Signup" className="signup">Signup</Link>
                          
                        {/* <IonButton className="login_btn" routerLink="/Signup">Signup</IonButton> */}
                        </IonCol>
                    
                    </IonRow>
                    {/* <IonRow className="icons">

                        {/* <IonIcon style={{ fontSize: "20px" }} icon={logoGoogle} color="light" className="google"></IonIcon>
                        <IonIcon style={{ fontSize: "20px" }} icon={logoFacebook} color="light" className="google"></IonIcon> */}


                    {/* </IonRow> */} 

                </IonGrid>
                {/* <IonTitle className="titles">Hi, Welcome Back!</IonTitle>
                <IonTitle className="title1">Hello again, you've been missed!</IonTitle>

                <IonLabel className="input-label">Email</IonLabel><br/>
                <IonInput className="input" type="email" placeholder="Enter your Email Address"></IonInput><br/><br/>
                

                <IonLabel className="input-label">Password</IonLabel><br/>
                <IonInput className="input" type="password" placeholder="Enter your Password"></IonInput><br/><br/>

                <IonButton className="button" shape="round">
                    Login
                </IonButton><br/>
                <IonLabel className="label">Didn't have any account ?<IonButton className="router_btn" routerLink="/Signup">SignUp</IonButton></IonLabel>
                <div className="icons">
                    <IonIcon  style={{fontSize:"20px" }} icon={logoGoogle} color="primary" className="google"></IonIcon>
                    <IonIcon  style={{fontSize:"20px" }} icon={logoFacebook} color="primary" className="google"></IonIcon>
                </div>
             */}
            </IonContent>
        </IonPage>
    )

}

export default Login;