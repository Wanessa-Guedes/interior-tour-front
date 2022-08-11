import { useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { ContainFormButton, Form } from './style'
import {FiSend} from "react-icons/fi"


const InsertCommentsForm = ({ value, insertCommentStatus, setInsertCommentStatus }) => {

    const [disable, setDisable] = useState(false)
    const [comment, setComment] = useState('')
    const {id} = useParams();
  
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
            setInsertCommentStatus(!insertCommentStatus)
            console.log(response.data)
        })
        promise.catch(e => {
            setDisable(false)
            setInsertCommentStatus(false)
            alert(e.response.data.message)
        })
    }

    return (
        <>
        <ContainFormButton>
            <Form onSubmit={publish}>
                <input
                    type='text'
                    placeholder='O que você acha dessa cidade?'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    disabled={disable}
                    required />
                    <button disabled={disable}> <FiSend/> </button>
            </Form>
        </ContainFormButton>
        </>
    )

}

export default InsertCommentsForm;