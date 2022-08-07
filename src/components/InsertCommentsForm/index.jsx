import { useState, useRef, useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Form } from './style'


const InsertCommentsForm = ({ value }) => {

    const [disable, setDisable] = useState(false)
    const [comment, setComment] = useState('')
    const {id} = useParams();
    console.log(id)
 
    function publish(e){
        e.preventDefault()
        setDisable(true)
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/infocity/insertComment/`+id,{
            comment: comment
        },
        {
            headers: {
                Authorization: `Bearer ${value[0].token}`
            }
        })
        promise.then(response => {
            setComment('')
            setDisable(false)
            console.log(response.data)
        })
        promise.catch(e => {
            setDisable(false)
            alert(e.response.data.message)
        })
    }

    return (
        <>
            <Form onSubmit={publish}>
                <input
                    type='text'
                    placeholder='O que você acha dessa cidade?'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    disabled={disable}
                    required />
                    <button disabled={disable}> Comentário</button>
            </Form>
        </>
    )

}

export default InsertCommentsForm;