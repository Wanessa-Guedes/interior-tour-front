import axios from "axios";
import { useEffect, useState } from "react";


const ProfileForm = ({value, URL}) => {

    const [getInfos, setGetInfos] = useState([]);
    let infosUser;

    useEffect(() => {
        if(value[0] !== null){
            const config = {headers: { authorization: `Bearer ${value[0].token}`}}
            const promise = axios.get(`${process.env.REACT_APP_API_URL}${URL}`, config);
            promise.then(response => {
                setGetInfos([response.data])
                //setGetCities(response.data)
            }).catch((error) => console.log('Error get infos user ', error))
            // console.log('sou a rota de comentários')
    }}, [value]);

/*     function infosArray (infos) {
        for(let i = 0; i < infos.length; i++){
            infosUser.push(infos[i])
        }
        setGetInfos(infosUser)
    } */

    return(<>
        <ul>
            {
                getInfos?.map(info => {
                    return( <>
                            <img src={info.profile_picture} alt={`Imagem de perfil do usuário ${info.user_name}`} />
                            <li>{info.user_name}</li>
                            <li>{info.email}</li>
                            </>)
                })
            }
        </ul>
    </>)
}

export default ProfileForm;