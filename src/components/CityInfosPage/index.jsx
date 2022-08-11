import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CityDescription, CityTitle, CommentsText, Container, ImgCity } from "./style";
import AttracttionsInfos from "../Attractions/style";
import Comments from "../Comments";

const CityInfos = ({ value }) => {

    const { id } = useParams();
    const [getCity, setGetCity] = useState([]);
     console.log(getCity)
    //console.log(process.env.API_GOOGLE)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/city/${id}`).then(
            response => {
                setGetCity([response.data]);
            }
        ).catch(e => {console.log(e.data)})
    }, [id]);

    return (<>
                {
                    getCity?.map(city => {
                        return (
                        <>
                        <Container>
                            <CityTitle>{city.name} - {city.state.name}</CityTitle>
                            <ImgCity src={city.url_picture} alt={`Cidade de ${city.name} - ${city.state.name}`}/>
                            <CityDescription>{city.description}</CityDescription>
                        </Container>
                        <AttracttionsInfos city={city}/>
                        <CommentsText>Comentários</CommentsText>
                        <Comments value={value} id={city.id}/>
                        </>
                    )
                })
                }
        </>)
}

export default CityInfos