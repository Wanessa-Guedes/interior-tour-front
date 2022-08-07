import { BiEditAlt } from "react-icons/bi";
import { useState, useRef, useEffect} from 'react'
import axios from "axios"
import { Input } from "./style";

const EditButton = ({ value, comment }) => {
    console.log(comment)

    const [editCommentValue, setEditCommentValue] = useState(false)
    const [disable, setDisable] = useState(false)
    const [commentValue, setCommentValue] = useState(comment.comment)
    const [resetValue, setResetValue] = useState('')
    const inputRef = useRef()

    function editComment() {
        if(editCommentValue === false){
            setResetValue(commentValue)
            setEditCommentValue(true)
        } else {
            setEditCommentValue(false)
            setCommentValue(resetValue)
        }
    }

    useEffect(() => {
        if(editCommentValue){
            inputRef.current.focus()
        }
    }, [editCommentValue])

    function editCommentSubmit(e){
        e.preventDefault()
        setDisable(true)
        const promise = axios.put(`${process.env.REACT_APP_API_URL}/infocity/update/`+comment.id,{
            comment: commentValue
        },
        {
            headers: {
                Authorization: `Bearer ${value[0].token}`
            }
        })
        promise.then(response => {
            setEditCommentValue(false)
            setDisable(false)
        }).catch(e => {
            alert(e.response.data.message)
            setDisable(false)
            inputRef.current.focus()
        })
    }

    return (
        <>
            <BiEditAlt cursor={'pointer'} onClick={() => editComment()}/>
            {
                (editCommentValue)?(<form onSubmit={editCommentSubmit}>
                <Input ref={inputRef}
                        type='text'
                        value={commentValue}
                        onChange={e => setCommentValue(e.target.value)}
                        disabled={disable}
                    />
                </form>):(<></>)
            }
        </>
    )
}

export default EditButton;