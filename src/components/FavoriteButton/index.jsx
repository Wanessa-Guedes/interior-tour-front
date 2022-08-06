import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FavoriteButton = ({ favorite, token, userId, cityId }) => {
    // console.log(favorite)
    //console.log(userId) // undefined
    const [isFavorite, setisFavorite] = useState(favorite);
    const navigate = useNavigate();

    function toogleFavorite () {
        if(userId === undefined){
            navigate("/sign-in");
        } else if(!isFavorite){
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'/main/'+cityId+'/favorite';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisFavorite(true)
            }).catch((error) => console.log('Error Post Favorite ', error))
            console.log('sou a rota de Favorite')
        } else {
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'/main/'+cityId+'/unfavorite';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisFavorite(false);
            }).catch((error) => console.log('Error Post Unfavorite ', error))
            console.log('sou a rota de Unfavorite')
        }
    }

    useEffect(() => {
        setisFavorite(favorite)
    }, [favorite])

    return (
        <>
        {
            ((userId !== undefined)?
                            ((isFavorite)?<AiFillStar fill={'#f3dc58'} onClick={toogleFavorite}/>
                                    :<AiOutlineStar onClick={toogleFavorite}/>)
                                        :(<AiOutlineStar onClick={toogleFavorite}/>))
        }
        </>
    )
}


export default FavoriteButton