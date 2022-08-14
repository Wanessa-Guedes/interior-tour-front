import axios from "axios";
import { useEffect, useState } from "react";
//import { Buttons, CityInfos, Container, ContainerDown, Loader, MainInfo } from "./style.jsx";
import LikeButton from "../LikeButton";
import FavoriteButton from "../FavoriteButton";
import VisitedButton from "../VisitedButton";
import { Link } from "react-router-dom";
import { InfinitySpin } from  'react-loader-spinner';

import styled from "styled-components";

const CityBlock = ({value, URL}) => {

    const [getCities, setGetCities] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}${URL}`).then(
            response => {
                setGetCities(response.data);
                setLoading(false)
            }
        ).catch(e => {
            console.log(e)
            alert(e.response.data.message)
            setLoading(false)
        })
    }, [value]);

    return (<>
        {(loading)?(<Loader><InfinitySpin/></Loader>):
        (<MainInfo>
            {
                getCities?.map((city) => {
                    return (
                        <>
                        <Container key={city.id}>
                            <img src={city.url_picture} alt={`imagem da cidade de ${city.name}`}/>
                            <ContainerDown>
                                <CityInfos>
                                    <h6>{`${city.name}`}</h6>
                                    <p>{`${city.short_call}`}</p>
                                    <button><Link to={`/city/${city.id}`}>CONHEÇA MAIS</Link></button>
                                </CityInfos>
                                <Buttons>
                                    {
                                        (value[0]?<LikeButton 
                                                    liked={city.likes?.filter((e) => e.userId === value[0].id).length !== 0}
                                                    token={value[0].token} 
                                                    userId={value[0].id} 
                                                    cityId={city.id}/>
                                                    :<LikeButton liked={false}/>)
                                    }

                                    {
                                        (value[0]?<FavoriteButton 
                                                    favorite={city.favorites?.filter((e) => e.userId === value[0].id).length !== 0}
                                                    token={value[0].token} 
                                                    userId={value[0].id} 
                                                    cityId={city.id}/>
                                                    :<FavoriteButton favorite={false}/>)
                                    }
                                                                        {
                                        (value[0]?<VisitedButton 
                                                    visited={city.visits?.filter((e) => e.userId === value[0].id).length !== 0}
                                                    token={value[0].token} 
                                                    userId={value[0].id} 
                                                    cityId={city.id}/>
                                                    :<VisitedButton visited={false}/>)
                                    }

                               </Buttons>
                            </ContainerDown>
                        </Container>
                        </>
                    )
                })
            }
        </MainInfo>
)}
</>)


}

export default CityBlock;

export const Container = styled.div`
    max-width: 300px;
    min-height: 350px;
    background-color: var(--block-card-color);
    border-radius: 5px;
    box-shadow: 5px 10px #888888;
    margin-left: 2%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :hover {
        transform: scale(1.1);
    }

    img {
        width: 90%;
        height: 90%;
        margin-top: 1%;
        border-radius: 10px;
    }
`

export const MainInfo = styled.main`
    //max-width: 100%;
    max-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2%;
`

export const CityInfos = styled.div`
    width: 90%;
    height: 100%;

    a {
        text-decoration: none;
        color: white;
    }

    button {
        padding: 2%;
        margin-bottom: 1%;
    }

    p {
        width: 65%;
        word-break: normal;
        font-family: var(--normal-font);
        font-size: 13px;
    }

    h6 {
        font-family: var(--normal-font);
        font-size: 12px;
        font-weight: bold;
    }
`

export const Buttons = styled.div`
    //border: solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--block-buttons-color);
    padding: 5%;
    margin: 2% 0 2% 0;
    border-radius: 20px 5px;
`
export const ContainerDown = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    word-break: break-word;
`

export const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--backgrund-title);
    margin-top: 25%;
`