import axios from "axios";
import { useEffect, useState } from "react";
import { ContainImgTxt, ContainInfos, MainContain, Title } from "./style";


const ProfileForm = ({value, URL}) => {

    const [getInfos, setGetInfos] = useState([]);

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

    return(<>
    <Title>Seu Perfil</Title>
    <MainContain>
        <ContainInfos>
            {
                getInfos?.map(info => {
                    return( <>
                            <ContainImgTxt>
                                <p>Imagem de Perfil:</p>
                                <img src={info.profile_picture} alt={`Imagem de perfil do usuário ${info.user_name}`} />
                            </ContainImgTxt>
                            <ContainImgTxt>
                                <p> Nome do Usuário:</p>
                                <li>{info.user_name}</li>
                            </ContainImgTxt>   
                            <ContainImgTxt> 
                                <p>E-mail Cadastrado:</p>
                                <li>{info.email}</li>
                            </ContainImgTxt>
                            </>)
                })
            }
        </ContainInfos>
    </MainContain>
    </>)
}

export default ProfileForm;