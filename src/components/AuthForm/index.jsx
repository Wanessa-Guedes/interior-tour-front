import { useState } from "react";
import { Form } from "./style";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const AuthForm = ({options}) => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({})
    let onSubmit;
    
    if(options.font === 'sign-up'){
        onSubmit = async () => {
            try {
                await axios.post(process.env.REACT_APP_API_URL + '/sign-up', data)
                alert('Usuário cadastrado com sucesso')
                navigate('/sign-in')
            } catch (error) {
                const {response} = error
                const fieldNotFilled = response.data.constraint.split('_')[1]
                if(response.status === 409) alert(`ERRO: ${fieldNotFilled} já está em uso`)
                else alert(error)
            }
    }
    } else {
        onSubmit = async () => {
            try {
                const response = await axios.post(process.env.REACT_APP_API_URL + '/sign-in', data)
                localStorage.setItem('user', JSON.stringify(response.data))
                alert('BEM-VINDO')
                navigate('/')
            } catch (error) {
                const {response} = error
                const fieldNotFilled = response.data.constraint.split('_')[1]
                if(response.status === 409) alert(`ERRO: ${fieldNotFilled} já está em uso`)
                else alert(error)
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
            <Form onSubmit={submitHandler}>
            {
                options.inputs.map(e => {
                return (<input key={`${e.key}`}
                    type={e.key === ('password' || 'confirmpassword')  ? 'password': 'text'}
                    onChange={changeHandler(e.key)}
                    placeholder={e.text}
                    required
                />
                )})
            }
                <button disabled={disabled} type="submit">
                    {options.submitButtonText}
                </button>
                <Link to={options.auxPageLink}>
                    {options.auxPageLinkText}
                </Link>
            </Form>
    
    </>)
}

export default AuthForm;