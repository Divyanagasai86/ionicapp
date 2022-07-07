import {createContext, useContext,useState } from 'react';
import  {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    
} from 'firebase/auth';
import {auth} from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({});


    const createUser = (email,password) => {
        return  createUserWithEmailAndPassword(auth,email,password)
    };

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    return (
        <UserContext.Provider value={{createUser,login}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
};