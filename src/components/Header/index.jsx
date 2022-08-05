import { Container, SiteIcon } from "./style"
import { BiLogIn }  from "react-icons/bi" 
import { AiOutlineHome } from "react-icons/ai"

const Header = () => {

    return (
        <Container>
            <SiteIcon src={"https://cdn-icons-png.flaticon.com/128/7683/7683912.png"} radius={50}/>
            <AiOutlineHome/>
            <BiLogIn/>
        </Container>
    )

}

export default Header;