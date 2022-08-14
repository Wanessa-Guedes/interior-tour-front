import Header from "../../Header";
import { useContext } from "react";
import UserContext from "./../../../contexts/UserContext";
import ProfileForm from "../../ProfileForm";

export default function Profile(){
    const [user, setUser] = useContext(UserContext);
    const URL = `infoaccount`;
    return (<>
        <Header value={[user, setUser]}/>
        <ProfileForm value={[user, setUser]} URL={URL}/>
    </>)
}