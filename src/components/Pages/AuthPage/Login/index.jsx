import AuthForm from "../../../AuthForm";
import Header from "../../../Header";
import { SignInTitle } from "./style";



export default function SignIn(){

    const inputs = [
        {key: 'email', text: 'E-mail'},
        {key: 'password', text: 'Password'},
    ]

    return(
        <>
        <Header/>
        <SignInTitle>SIGN IN</SignInTitle>
        <AuthForm
            options={{
                inputs: inputs,
                submitButtonText: 'Sign In',
                auxPageLink: '/sign-up',
                auxPageLinkText: 'Switch back to sign up',
                font: 'sign-in'
            }}
        />
        </>
    )
}