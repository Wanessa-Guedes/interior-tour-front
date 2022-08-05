import CentralImg from "../../CentralImg"
import CityBlock from "../../CityBlock"
import Header from "./../../Header"
import { CityTitle } from "./style"


export default function MainPage(){
    return (
        <>
            <Header/>
            <CentralImg/>
            <CityTitle>CIDADES</CityTitle>
            <CityBlock/>
        </>
    )
}