import { useContext } from "react";
import UserContext from "./../../../contexts/UserContext";
import Header from "../../Header";
import CentralImg from "../../CentralImg";
import { CityTitle } from "../../CityInfosPage/style";
import CityBlock from "../../CityBlockMainPage";
import FavoriteCity from "../../FavoritesCities";


export default function FavoritePage () {
    const [user, setUser] = useContext(UserContext);
    const URL = `/main/favorites`;
    return (<>
            <Header value={[user, setUser]}/>
            <CentralImg/>
            <CityTitle>Suas cidades Favoritas</CityTitle>
            <FavoriteCity value={[user, setUser]} URL={URL}/>
            </>)
}

