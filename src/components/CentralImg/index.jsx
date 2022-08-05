import MainImg from "../assets/imgs/interior.jpg";
import { Container, Filter, Img } from "./styled";

const CentralImg = () => {

    return(
        <Container>
           <Img src={MainImg} alt="Cidade do interior do Brasil"/>
           <h3>CONHEÇA SEU INTERIOR</h3>
        </Container>
    )
}

export default CentralImg