import { Container, ContainImages, ContainImgNav, ContainLogoTitle, ContainNav, SiteIcon, Title } from "./style"
import { BiLogIn }  from "react-icons/bi" 
import { AiOutlineHome } from "react-icons/ai"
import Nav from "../NavOptions"
import { useState } from "react"

const Header = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);

    function setDrop () {
        setDropDownMenu(!dropDownMenu)
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
                    <AiOutlineHome/>
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