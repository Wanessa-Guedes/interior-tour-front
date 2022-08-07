import CentralImg from "../../CentralImg";
import CityBlock from "../../CityBlockMainPage";
import Header from "../../Header";
import { CityTitle } from "../MainPage/style";
import { useContext } from "react";
import UserContext from "./../../../contexts/UserContext";
import CityInfos from "../../CityInfosPage";


export default function CityPage () {
    const [user, setUser] = useContext(UserContext);

    return (
        <>
            <Header value={[user, setUser]}/>
            <CityInfos value={[user, setUser]}/>
        </>
    )
}