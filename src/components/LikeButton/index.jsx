import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconsPopUp } from "../FavoriteButton/style";

const LikeButton = ({ liked, token, userId, cityId }) => {
    // console.log(liked)
    //console.log(userId) // undefined
    const [isLiked, setisLiked] = useState(liked);
    const navigate = useNavigate();

    function toogleLike () {
        if(userId === undefined){
            navigate("/sign-in");
        } else if(!isLiked){
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'/main/'+cityId+'/like';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisLiked(true)
            }).catch((error) => console.log('Error Post Like ', error))
            console.log('sou a rota de like')
        } else {
            const config = {headers: { authorization: `Bearer ${token}`}}
            const URL = process.env.REACT_APP_API_URL+'/main/'+cityId+'/dislike';
            const promise = axios.post(URL, {}, config);
            promise.then(response => {
                setisLiked(false);
            }).catch((error) => console.log('Error Post Dislike ', error))
            console.log('sou a rota de dislike')
        }
    }

    useEffect(() => {
        setisLiked(liked)
    }, [liked])

    return (
        <>
        <IconsPopUp>
        {
            ((userId !== undefined)?
                ((isLiked)?<><AiFillHeart cursor={"pointer"} fill={'#AC0000'} onClick={toogleLike}/><div class="hdg-label-popup">Descurtir</div> </>
                            :<><AiOutlineHeart cursor={"pointer"} onClick={toogleLike}/><div class="hdg-label-popup">Curtir</div> </>)
                                :(<><AiOutlineHeart cursor={"pointer"} onClick={toogleLike}/><div class="hdg-label-popup">Curtir</div> </>))
        }
        </IconsPopUp>
        </>
    )
}


export default LikeButton