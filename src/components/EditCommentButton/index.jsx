import { BiEditAlt } from "react-icons/bi";
import { useState, useRef, useEffect} from 'react'
import axios from "axios"
import { Buttons, Form, Input } from "./style";

const EditButton = ({ value, comment, updateComment, setUpdateComment, commentUpdateStatus, setCommentUpdateStatus }) => {
    const [editCommentValue, setEditCommentValue] = useState(false)
    const [disable, setDisable] = useState(false)
    const [commentValue, setCommentValue] = useState(comment.comment)
    const [resetValue, setResetValue] = useState('')
    const inputRef = useRef();
    setCommentUpdateStatus(editCommentValue);

    function editComment() {
        if(editCommentValue === false){
            setResetValue(commentValue)
            setEditCommentValue(true)
            setUpdateComment(false)
        } else {
            setEditCommentValue(false)
            setCommentValue(resetValue)
            setUpdateComment(true)
        }
    }

    function goback() {
        setEditCommentValue(false)
    }

    useEffect(() => {
        if(editCommentValue){
            inputRef.current.focus()
        }
    }, [editCommentValue])

    function editCommentSubmit(e){
        e.preventDefault()
        setDisable(true)
        const promise = axios.put(`${process.env.REACT_APP_API_URL}infocity/update/`+comment.id,{
            comment: commentValue
        },
        {
            headers: {
                Authorization: `Bearer ${value[0].token}`
            }
        })
        promise.then(response => {
            setEditCommentValue(false)
            setUpdateComment(true)
            setDisable(false)
        }).catch(e => {
            alert(e.response.data.message)
            setDisable(false)
            setUpdateComment(false)
            inputRef.current.focus()
        })
    }

    return (
        <>
            <BiEditAlt cursor={'pointer'} onClick={() => editComment()}/>
            {
                (editCommentValue)?(<Form>
                <Input ref={inputRef}
                        type='text'
                        value={commentValue}
                        onChange={e => setCommentValue(e.target.value)}
                        disabled={disable}
                    />
                    <Buttons>
                        <button 
                            onClick={editCommentSubmit}
                            disabled={disable}>{(disable)?(`editando`):(`editar`)}</button>
                        <button 
                            onClick={goback}
                            disabled={disable}>voltar</button>
                    </Buttons>
                </Form>):(<></>)
            }
        </>
    )
}

export default EditButton;