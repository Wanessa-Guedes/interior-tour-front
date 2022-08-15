import axios from "axios";
import { useEffect, useState } from "react";
import { InfinitySpin } from  'react-loader-spinner';
import { ContainImgTxt, ContainInfos, Loader, MainContain, Title } from "./style";


const ProfileForm = ({value, URL}) => {

    const [getInfos, setGetInfos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(value[0] !== null){
            setLoading(true)
            const config = {headers: { authorization: `Bearer ${value[0].token}`}}
            const promise = axios.get(`${process.env.REACT_APP_API_URL}${URL}`, config);
            promise.then(response => {
                setGetInfos([response.data])
                setLoading(false)
            }).catch((error) => console.log('Error get infos user ', error))
    }}, [value]);

    return(<>
    {(loading)?(<Loader><InfinitySpin/></Loader>):(
        <>
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
    </>)}
    </>)
}

export default ProfileForm;