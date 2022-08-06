import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LikeButton = ({ value, userId, cityId }) => {
    //console.log(value)
    //console.log(userId) // undefined
    const navigate = useNavigate();

    function like () {
        if(userId === undefined){
            navigate("/sign-in");
        } else if(value.length == 0){
            console.log('sou a rota de like')
            console.log(cityId)
        } else {
            console.log('sou a rota de dislike')
            console.log(cityId)
        }
    }

    return (
        <>
        {
            ((value.length !== 0)?<AiFillHeart fill={'#AC0000'} onClick={like}/>:<AiOutlineHeart onClick={like}/>)
        }
        </>
    )
}


export default LikeButton