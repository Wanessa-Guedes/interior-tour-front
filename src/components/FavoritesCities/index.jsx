import axios from "axios";
import { useEffect, useState } from "react";
import { Buttons, CityInfos, Container, ContainerDown, MainInfo } from "./../CityBlockMainPage/style";
import LikeButton from "../LikeButton";
import FavoriteButton from "../FavoriteButton";
import VisitedButton from "../VisitedButton";
import { Link } from "react-router-dom";
import { NoCitiesFound } from "../CitiesByState/style";

const FavoriteCity = ({value, URL}) => {

    const [getCities, setGetCities] = useState([]);
    let citiesRefact = [];

    useEffect(() => {
        if(value[0] !== null){
            const config = {headers: { authorization: `Bearer ${value[0].token}`}}
            const promise = axios.get(`${process.env.REACT_APP_API_URL}${URL}`, config);
            promise.then(response => {
                cityArray(response.data)
                //setGetCities(response.data)
            }).catch((error) => console.log('Error get favorite cities ', error))
            // console.log('sou a rota de comentários')
    }}, [value, getCities]);

    function cityArray (cities) {
        for(let i = 0; i < cities.length; i++){
            citiesRefact.push(cities[i].city)
        }
        setGetCities(citiesRefact)
    }

    return (
        <MainInfo>
            {
            (getCities.length === 0)?(<NoCitiesFound>Favorite umas cidades!! </NoCitiesFound>):(
               getCities?.map((cities, index) => {
                return (
                    <>
                    <Container key={cities.id}>
                        <img src={cities.url_picture} alt={`imagem da cidade de ${cities.name}`}/>
                        <ContainerDown>
                            <CityInfos>
                                <h6>{`${cities.name}`}</h6>
                                <p>{`${cities.short_call}`}</p>
                                <button><Link to={`/city/${cities.id}`}>CONHEÇA MAIS</Link></button>
                            </CityInfos>
                            <Buttons>
                                {
                                    (value[0]?<LikeButton 
                                                liked={cities.likes?.filter((e) => e.userId === value[0].id).length !== 0}
                                                token={value[0].token} 
                                                userId={value[0].id} 
                                                cityId={cities.id}/>
                                                :<LikeButton liked={false}/>)
                                }

                                {
                                    (value[0]?<FavoriteButton 
                                                favorite={cities.favorites?.filter((e) => e.userId === value[0].id).length !== 0}
                                                token={value[0].token} 
                                                userId={value[0].id} 
                                                cityId={cities.id}/>
                                                :<FavoriteButton favorite={false}/>)
                                }
                                                                    {
                                    (value[0]?<VisitedButton 
                                                visited={cities.visits?.filter((e) => e.userId === value[0].id).length !== 0}
                                                token={value[0].token} 
                                                userId={value[0].id} 
                                                cityId={cities.id}/>
                                                :<VisitedButton visited={false}/>)
                                }

                           </Buttons>
                        </ContainerDown>
                    </Container>
                    </>
                )
            })
            )}
        </MainInfo>
    )


}

export default FavoriteCity;