import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsForm from "./../EditCommentsForm"
import InsertCommentsForm from "../InsertCommentsForm";

const Comments = ({ value, id }) => {
    // console.log(value)
    const [comments, setComments] = useState([])
    const [updateComment, setUpdateComment] = useState(false)
    const [deleteCommentStatus, setDeleteCommentStatus] = useState(false)
    const [insertCommentStatus, setInsertCommentStatus] = useState(false)
    // console.log(comments)
    // console.log(updateComment)
    // console.log(deleteCommentStatus)

        useEffect(() => {
            if(value[0] !== null){
                const config = {headers: { authorization: `Bearer ${value[0].token}`}}
                const URL = process.env.REACT_APP_API_URL+'/infocity/comments/'+id;
                const promise = axios.get(URL, config);
                promise.then(response => {
                    setComments(response.data)
                }).catch((error) => console.log('Error get comments ', error))
                // console.log('sou a rota de comentários')
        }}, [id, value, updateComment, deleteCommentStatus, insertCommentStatus]);

    return (
        <>
        {
            (value[0] === null)?(<p>Faça o login ou cadastre-se para ver os comentários</p>)
                :((comments.length === 0)?(<>
                        <p>Nehum comentário ainda. Deixe o seu!</p>
                        <InsertCommentsForm value={value}/>
                        </>)
                    :(<>
                        <CommentsForm 
                            value={value}
                            comments={comments}
                            updateComment={updateComment}
                            setUpdateComment={setUpdateComment}
                            deleteCommentStatus={deleteCommentStatus}
                            setDeleteCommentStatus={setDeleteCommentStatus}/>
                        <InsertCommentsForm 
                            value={value}
                            insertCommentStatus={insertCommentStatus}
                            setInsertCommentStatus={setInsertCommentStatus}/>
                        </>))
        }
        </>
    )

}


export default Comments;