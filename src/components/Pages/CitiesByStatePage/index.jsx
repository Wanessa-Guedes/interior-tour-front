import CentralImg from "../../CentralImg"
import Header from "./../../Header"
import { CityTitle } from "./style"
import { useContext } from "react";
import UserContext from "./../../../contexts/UserContext";
import CityByState from "../../CitiesByState";


export default function StatePage(){
    const [user, setUser] = useContext(UserContext);

    return (
        <>
            <Header value={[user, setUser]}/>
            <CentralImg/>
            <CityTitle>CIDADES</CityTitle>
            <CityByState value={[user, setUser]}/>
        </>
    )
}