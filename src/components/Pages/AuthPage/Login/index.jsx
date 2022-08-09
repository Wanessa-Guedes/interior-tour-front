import { useContext } from "react";
import AuthForm from "../../../AuthForm";
import Header from "../../../Header";
import { SignInTitle } from "./style";
import UserContext from "./../../../../contexts/UserContext";


export default function SignIn(){
    const [user, setUser] = useContext(UserContext);
    const inputs = [
        {key: 'email', text: 'E-mail'},
        {key: 'password', text: 'Password'},
    ]

    return(
        <>
        <Header value={[user, setUser]}/>
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