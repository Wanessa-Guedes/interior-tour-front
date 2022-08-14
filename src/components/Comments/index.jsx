import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InsertCommentsForm from "../InsertCommentsForm";
import CommentsForm from "../CommentsForm";
import { DefaultText } from "./style";

const Comments = ({ value, id }) => {
    const [comments, setComments] = useState([])
    const [updateComment, setUpdateComment] = useState(false)
    const [deleteCommentStatus, setDeleteCommentStatus] = useState(false)
    const [insertCommentStatus, setInsertCommentStatus] = useState(false)

        useEffect(() => {
            if(value[0] !== null){
                const config = {headers: { authorization: `Bearer ${value[0].token}`}}
                const URL = process.env.REACT_APP_API_URL+'infocity/comments/'+id;
                const promise = axios.get(URL, config);
                promise.then(response => {
                    setComments(response.data)
                }).catch((error) => console.log('Error get comments ', error))
        }}, [id, value, updateComment, deleteCommentStatus, insertCommentStatus]);

    return (
        <>
        {
            (value[0] === null)?(<DefaultText>Faça o login ou cadastre-se para ver os comentários</DefaultText>)
                :((comments.length === 0)?(<>
                        <DefaultText>Nehum comentário ainda. Deixe o seu!</DefaultText>
                        <InsertCommentsForm value={value}
                            insertCommentStatus={insertCommentStatus}
                            setInsertCommentStatus={setInsertCommentStatus}/>
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