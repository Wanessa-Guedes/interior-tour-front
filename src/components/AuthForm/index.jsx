import { useState, useContext } from "react";
import { Form, Container, Loader, Button } from "./style";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from  'react-loader-spinner';


const AuthForm = ({options}) => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})
    const [user, setUser] = useContext(UserContext)
    let onSubmit;
    
    if(options.font === 'sign-up'){
        onSubmit = async () => {
            try {
                setLoading(true);
                await axios.post(process.env.REACT_APP_API_URL + 'sign-up', data)
                toast.success('Usuário cadastrado com sucesso')
                setLoading(false);
                navigate('/sign-in')
            } catch (error) {
                setLoading(false);
                if(error.response.status === 422){
                    toast.error('Dados incorretos')
                }
            }
    }
    } else {
        onSubmit = async () => {
            try {
                setLoading(true);
                const response = await axios.post(process.env.REACT_APP_API_URL + 'sign-in', data)
                localStorage.setItem('user', JSON.stringify(response.data))
                toast.success('BEM-VINDO');
                setLoading(false);
                setUser(response.data)
                navigate('/')
            } catch (error) {
                setLoading(false);
                if(error.response.status === 401){
                    toast.error('Senha incorreta')
                }
                if(error.response.status === 404){
                    toast.error('E-mail não cadastrado')
                }
            }
    }
    }

    
    const submitHandler = event => {
        event.preventDefault()
        setDisabled(true)
        onSubmit()
        setDisabled(false)
    }

    const changeHandler = key => (({target}) => {
        const newData = {...data}
        newData[key] = target.value
        setData(newData)
    })

    return (<>
        <ToastContainer />
        <Container>
            <Form onSubmit={submitHandler}>
            {
                options.inputs.map(e => {
                return (<input key={`${e.key}`}
                    type={((e.key === 'password') || (e.key === 'confirmpassword'))  ? 'password': 'text'}
                    onChange={changeHandler(e.key)}
                    placeholder={e.text}
                    required
                />
                )})
            }
            
            { (loading)?(<Loader><InfinitySpin color="#fa8bfa"/></Loader>):(<>
            <Button id="button-submit" disabled={disabled} type="submit">
                        <p>{options.submitButtonText}</p>
                </Button>
                <Button id="button-go-sign-up">
                    <Link to={options.auxPageLink}>
                        {options.auxPageLinkText}
                    </Link>
                </Button>
                <Button id="button-go-main-page">
                    <Link to={"/"}>
                        Voltar para a página principal
                    </Link>
                </Button>
            </>) }
            
            </Form>
        </Container>
    </>)
}

export default AuthForm;