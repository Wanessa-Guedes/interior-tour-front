import { Container, ContainImages, ContainLogoTitle, ContainNav, SiteIcon, Title } from "./style"
import { BiLogIn }  from "react-icons/bi" 
import { AiOutlineHome } from "react-icons/ai"
import Nav from "../NavOptions"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar"

const Header = ({ value }) => {
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
            <ContainLogoTitle onClick={goHome}>
                <SiteIcon src={"https://cdn-icons-png.flaticon.com/128/7683/7683912.png"} radius={50}/>
                <Title>Interior Tour</Title>
            </ContainLogoTitle>
            <SearchBar/>
                <ContainImages>
                    <AiOutlineHome onClick={goHome}/>
                    <BiLogIn id="button-nav-options" onClick={setDrop}/>
                </ContainImages>
        </Container>
        <ContainNav>
            {
            (dropDownMenu?<Nav value={value}/>:<></>)
            }
        </ContainNav>
        </>
    )

}

export default Header;