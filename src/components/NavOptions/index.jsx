import { NavHeader, Ul } from "./style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = ({ value }) => {
    // console.log(value[0])
    const navigate = useNavigate();
    // TODO: LEMBRAR DE MUDAR PARA A ROTA CORRETA
    function userProf () {
        if(value[0] !== null){
            if(value[0].token !== null){
                return `/sign-up`
            }} else {
                return `/sign-in`
            }
    } 

    const logout = () => {
        localStorage.removeItem('user');
        value[1](null);
        navigate("/");
    }

    return (
        <NavHeader>
            <Ul>
                <Link to={userProf()}>
                    {
                        (value[0] === null)?`Login`:(`Seu Perfil`)
                    }
                </Link >

                <Link to={`/`}>
                    {
                        (value[0] === null)?<></>:(`Favoritas`)
                    }
                </Link>
                {
                    (value[0]?(value[0].token?<li onClick={logout}>Sair</li>:<></>):<></>)
                }
            </Ul>
        </NavHeader>
    )

}

export default Nav;