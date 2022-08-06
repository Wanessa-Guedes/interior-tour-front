import {TbMapPin, TbMapPinOff} from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const VisitedButton = ({ visited, token, userId, cityId }) => {
    // console.log(visited)
    //console.log(userId) // undefined
    const [isVisited, setisVisited] = useState(visited);
    const navigate = useNavigate();

    function toogleVisited () {
        if(userId === undefined){
            navigate("/sign-in");
        } else if(!isVisited){
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'/main/'+cityId+'/visited';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisVisited(true)
            }).catch((error) => console.log('Error Post Visity ', error))
            console.log('sou a rota de Visity')
        } else {
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'/main/'+cityId+'/unvisited';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisVisited(false);
            }).catch((error) => console.log('Error Post UnVisity ', error))
            console.log('sou a rota de UnVisity')
        }
    }

    useEffect(() => {
        setisVisited(visited)
    }, [visited])

    return (
        <>
        {
            ((userId !== undefined)?
                    ((isVisited)?<TbMapPin onClick={toogleVisited}/>
                                :<TbMapPinOff onClick={toogleVisited}/>)
                                    :(<TbMapPinOff onClick={toogleVisited}/>))
        }
        </>
    )
}


export default VisitedButton