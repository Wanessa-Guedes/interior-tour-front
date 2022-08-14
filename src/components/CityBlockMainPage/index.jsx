import axios from "axios";
import { useEffect, useState } from "react";
import { Buttons, CityInfos, Container, ContainerDown, Loader, MainInfo } from "./style";
import LikeButton from "../LikeButton";
import FavoriteButton from "../FavoriteButton";
import VisitedButton from "../VisitedButton";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { InfinitySpin } from  'react-loader-spinner';

const CityBlock = ({value, URL}) => {

    const [getCities, setGetCities] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(getCities)
    console.log(process.env.REACT_APP_API_URL)

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
                                    <Button variant="contained"><Link to={`/city/${city.id}`}>CONHEÇA MAIS</Link></Button>
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