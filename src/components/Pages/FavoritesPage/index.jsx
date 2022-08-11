import { useContext } from "react";
import UserContext from "./../../../contexts/UserContext";
import Header from "../../Header";
import CentralImg from "../../CentralImg";
import FavoriteCity from "../../FavoritesCities";
import { CityTitle } from "./style";


export default function FavoritePage () {
    const [user, setUser] = useContext(UserContext);
    const URL = `/main/favorites`;
    return (<>
            <Header value={[user, setUser]}/>
            <CentralImg/>
            <CityTitle>Suas Cidades Favoritas</CityTitle>
            <FavoriteCity value={[user, setUser]} URL={URL}/>
            </>)
}

