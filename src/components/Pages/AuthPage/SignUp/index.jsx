import { useContext } from "react";
import AuthForm from "../../../AuthForm";
import Header from "../../../Header";
import { SignUpTitle } from "./style";
import UserContext from "./../../../../contexts/UserContext";



export default function SignUp(){
    const [user, setUser] = useContext(UserContext);
    const inputs = [
        {key: 'email', text: 'E-mail'},
        {key: 'userName', text: 'Username'},
        {key: 'profilepicture', text: 'Profile Picture'},
        {key: 'password', text: 'Password'},
        {key: 'confirmpassword', text: 'Confirm Password'}
    ]

    return(
        <>
        <SignUpTitle>CADASTRE SEUS DADOS</SignUpTitle>
        <AuthForm
            options={{
                inputs: inputs,
                submitButtonText: 'Cadastrar',
                auxPageLink: '/sign-in',
                auxPageLinkText: 'Voltar para o login',
                font: 'sign-up'
            }}
        />
        </>
    )
}