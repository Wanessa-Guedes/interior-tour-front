import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { InfinitySpin } from  'react-loader-spinner';
import { CityDescription, CityTitle, CommentsText, Container, ImgCity, Loader } from "./style";
import Comments from "../Comments";
import Restaurants from "../AttractionsInfos/Restaurants";
import Attractions from "../AttractionsInfos/Attractions";
import Events from "../AttractionsInfos/Events";

const CityInfos = ({ value }) => {

    const { id } = useParams();
    const [getCity, setGetCity] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}city/${id}`).then(
            response => {
                setGetCity([response.data]);
                setLoading(false)
            }
        ).catch(e => {
            console.log(e.data)
            setLoading(false)})
    }, [id]);

    return (<>
            {(loading)?(<Loader><InfinitySpin/></Loader>):(
                
                    getCity?.map(city => {
                    return (
                        <>
                        <Container>
                            <CityTitle>{city.name} - {city.state.name}</CityTitle>
                            <ImgCity src={city.url_picture} alt={`Cidade de ${city.name} - ${city.state.name}`}/>
                            <CityDescription>{city.description}</CityDescription>
                        </Container>
                        <Restaurants attractions={city.attractions}/>
                        <Attractions attractions={city.attractions}/>
                        <Events attractions={city.attractions}/>
                        <CommentsText>Comentários</CommentsText>
                        <Comments value={value} id={city.id}/>
                        </>
                    )
                })
                
            )}
        </>)
}

export default CityInfos