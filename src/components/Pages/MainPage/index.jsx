import CentralImg from "../../CentralImg"
import CityBlock from "../../CityBlockMainPage";
import Header from "./../../Header"
import { CityTitle } from "./style"
import { useContext } from "react";
import UserContext from "./../../../contexts/UserContext";

export default function MainPage(){
    const [user, setUser] = useContext(UserContext);
    const URL = `main`;

    return (
        <>
            <Header value={[user, setUser]}/>
            <CentralImg/>
            <CityTitle>CIDADES</CityTitle>
            <CityBlock value={[user, setUser]} URL={URL}/>
    </>
    )
}