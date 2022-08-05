import axios from "axios";
import { useEffect, useState } from "react";
import { Container, MainInfo } from "./style";


const CityBlock = () => {
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
                            <h6>{`${city.name}`}</h6>
                            <p>{`${city.short_call}`}</p>
                            <p>CONHEÇA MELHOR</p>
                        </Container>
                        </>
                    )
                })
            }
        </MainInfo>
    )


}

export default CityBlock;