import { Container, ContainImages, ContainImgNav, ContainLogoTitle, ContainNav, SiteIcon, Title } from "./style"
import { BiLogIn }  from "react-icons/bi" 
import { AiOutlineHome } from "react-icons/ai"
import Nav from "../NavOptions"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const navigate = useNavigate();

    function setDrop () {
        setDropDownMenu(!dropDownMenu)
    }

    function goHome() {
        navigate("/")
    }

    return (
        <>
        <Container>
            <ContainLogoTitle>
                <SiteIcon src={"https://cdn-icons-png.flaticon.com/128/7683/7683912.png"} radius={50}/>
                <Title>Interior Tour</Title>
            </ContainLogoTitle>
            <h3>BARRA DE PESQUISA VEM AQUI</h3>
                <ContainImages>
                    <AiOutlineHome onClick={goHome}/>
                    <BiLogIn onClick={setDrop}/>
                </ContainImages>
        </Container>
        <ContainNav>
            {
            (dropDownMenu?<Nav/>:<></>)
            }
        </ContainNav>
        </>
    )

}

export default Header;