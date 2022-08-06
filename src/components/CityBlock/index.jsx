import axios from "axios";
import { useEffect, useState } from "react";
import { Buttons, CityInfos, Container, ContainerDown, MainInfo } from "./style";
import LikeButton from "../LikeButton";



const CityBlock = ({value}) => {
    const [getCities, setGetCities] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/main`).then(
            response => {
                setGetCities(response.data);
            }
        ).catch(e => {console.log(e.data)})
    }, []);

    return (
        <MainInfo>
            {
                getCities.map((city) => {
                    return (
                        <>
                        <Container key={city.id}>
                            <img src={city.url_picture} alt={`imagem da cidade de ${city.name}`}/>
                            <ContainerDown>
                                <CityInfos>
                                    <h6>{`${city.name}`}</h6>
                                    <p>{`${city.short_call}`}</p>
                                    <p>CONHEÇA MELHOR</p>
                                </CityInfos>
                                <Buttons>
                                    {
                                        (value[0]?<LikeButton value={city.likes?.filter((e) => e.userId == value[0].id)} userId={value[0].id} cityId={city.id}/>
                                                    :<LikeButton value={[]}/>)
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