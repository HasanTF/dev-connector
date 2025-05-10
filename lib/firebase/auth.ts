import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

interface AuthProps {
    email: string;
    password: string;
}

export const signUp =  ({email, password}: AuthProps) => {
    return createUserWithEmailAndPassword(auth, email,password)
}

export const signIn = ({email, password}: AuthProps) => {

        return signInWithEmailAndPassword(auth, email, password);
    } 

export const resetPassword = ({email} : AuthProps) => {
    return sendPasswordResetEmail(auth, email)
}