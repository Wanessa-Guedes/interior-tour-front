import axios from "axios";
import { useEffect, useState } from "react";
import { Buttons, CityInfos, Container, ContainerDown, MainInfo } from "./style";
import LikeButton from "../LikeButton";
import FavoriteButton from "../FavoriteButton";
import VisitedButton from "../VisitedButton";
import { Link } from "react-router-dom";



const CityBlock = ({value, URL}) => {

    const [getCities, setGetCities] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}${URL}`).then(
            response => {
                setGetCities(response.data);
            }
        ).catch(e => {console.log(e.data)})
    }, [value]);

    return (
        <MainInfo>
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
                                    <Link to={`/city/${city.id}`}>CONHEÇA MELHOR</Link>
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
    )


}

export default CityBlock;