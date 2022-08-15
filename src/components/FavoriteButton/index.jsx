import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconsPopUp } from "./style";

const FavoriteButton = ({ favorite, token, userId, cityId }) => {
    const [isFavorite, setisFavorite] = useState(favorite);
    const navigate = useNavigate();

    function toogleFavorite () {
        if(userId === undefined){
            navigate("/sign-in");
        } else if(!isFavorite){
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'main/'+cityId+'/favorite';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisFavorite(true);
            }).catch((error) => console.log('Error Post Favorite ', error))
            console.log('sou a rota de Favorite')
        } else {
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'main/'+cityId+'/unfavorite';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisFavorite(false);
            }).catch((error) => console.log('Error Post Unfavorite ', error))
        }
    }

    useEffect(() => {
        setisFavorite(favorite)
    }, [favorite])

    return (
        <>
        <IconsPopUp>
        {
            ((userId !== undefined)?
                            ((isFavorite)?<><AiFillStar cursor={"pointer"} fill={'#f3dc58'} onClick={toogleFavorite}/>
                                              <div class="hdg-label-popup">Desfavoritar</div> </>
                                    :<><AiOutlineStar cursor={"pointer"} onClick={toogleFavorite}/><div class="hdg-label-popup">Favoritar</div> </>)
                                        :(<><AiOutlineStar cursor={"pointer"} onClick={toogleFavorite}/><div class="hdg-label-popup">Favoritar</div> </>))
        }
        </IconsPopUp>
        </>
    )
}


export default FavoriteButton