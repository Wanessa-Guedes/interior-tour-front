import { NavHeader, Ul } from "./style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = ({ value }) => {
    const navigate = useNavigate();
    function userProf () {
        if(value[0] !== null){
            if(value[0].token !== null){
                return `/profile`
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
                        (value[0] === null)?(<span id="button-login">{`Login`}</span>):(<span id="button-profile">{`Seu Perfil`}</span>)
                    }
                </Link >

                <Link to={`/favorites`}>
                    {
                        (value[0] === null)?<></>:(<span id="button-favorite-page">{`Favoritas`}</span>)
                    }
                </Link>
                {
                    (value[0]?(value[0].token?<li onClick={logout}><span id="button-logout">Sair</span></li>:<></>):<></>)
                }
            </Ul>
        </NavHeader>
    )

}

export default Nav;