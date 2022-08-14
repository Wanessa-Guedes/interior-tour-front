import { useContext } from "react";
import AuthForm from "../../../AuthForm/index.jsx";
import { SignInTitle } from "./style.jsx";
import UserContext from "./../../../../contexts/UserContext";


export default function SignIn(){
    const [user, setUser] = useContext(UserContext);
    const inputs = [
        {key: 'email', text: 'E-mail'},
        {key: 'password', text: 'Password'},
    ]

    return(
        <>
        <SignInTitle>SIGN IN</SignInTitle>
        <AuthForm
            options={{
                inputs: inputs,
                submitButtonText: 'Entrar',
                auxPageLink: '/sign-up',
                auxPageLinkText: 'Ainda não tem uma conta? Cadastre-se',
                font: 'sign-in'
            }}
        />
        </>
    )
}