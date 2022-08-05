import AuthForm from "../../../AuthForm";
import Header from "../../../Header";
import { SignUpTitle } from "./style";



export default function SignUp(){

    const inputs = [
        {key: 'email', text: 'E-mail'},
        {key: 'userName', text: 'Username'},
        {key: 'profilepicture', text: 'Profile Picture'},
        {key: 'password', text: 'Password'},
        {key: 'confirmpassword', text: 'Confirm Password'}
    ]

    return(
        <>
        <Header/>
        <SignUpTitle>CADASTRE SEUS DADOS</SignUpTitle>
        <AuthForm
            options={{
                inputs: inputs,
                submitButtonText: 'Sign Up',
                auxPageLink: '/sign-in',
                auxPageLinkText: 'Switch back to sign in',
                font: 'sign-up'
            }}
        />
        </>
    )
}