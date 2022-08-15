import axios from "axios";
import { useEffect, useState } from "react";
import { InfinitySpin } from  'react-loader-spinner';
import { Button, Buttons, CityInfos, Container, ContainerDown, MainInfo } from "./../CityBlockMainPage/style"
import LikeButton from "../LikeButton";
import FavoriteButton from "../FavoriteButton";
import VisitedButton from "../VisitedButton";
import { Link, useParams } from "react-router-dom";
import { Loader, NoCitiesFound } from "./style";


const CityByState = ({value}) => {

    const [getCities, setGetCities] = useState([]);
    const {stateId} = useParams();
    const [loading, setLoading] = useState(false);

     useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}state/`+stateId+'/cities').then(
            response => {
                setGetCities(response.data);
                setLoading(false);
            }
        ).catch(e => {
            console.log(e.data)
            setLoading(false);})
    }, [stateId]);

    return (<>
        {(loading)?(<Loader><InfinitySpin/></Loader>):
        (<MainInfo>
            {
               getCities?.map((cities) => {
                if(cities.cities.length === 0){
                    return <NoCitiesFound>Nenhuma cidade cadastrada nesse estado ainda</NoCitiesFound>
                }
                    return cities.cities?.map((city) => {
                            return (
                                <>
                                <Container key={city.id}>
                                    <img src={city.url_picture} alt={`imagem da cidade de ${city.name}`}/>
                                    <ContainerDown>
                                        <CityInfos>
                                            <h6>{`${city.name}`}</h6>
                                            <p>{`${city.short_call}`}</p>
                                            <Button><Link to={`/city/${city.id}`}>CONHEÇA MAIS</Link></Button>
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
            })
            }
        </MainInfo>)}
    </>)


}

export default CityByState;