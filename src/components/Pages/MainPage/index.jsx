import CentralImg from "../../CentralImg/index.jsx"
import CityBlock from "../../CityBlockMainPage/index.jsx";
import Header from "./../../Header/index.jsx"
import { CityTitle } from "./style.jsx"
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