import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentsForm from "./../EditCommentsForm"
import InsertCommentsForm from "../InsertCommentsForm";

const Comments = ({ value, id }) => {
    // console.log(value)
    const [comments, setComments] = useState([])
    // console.log(comments)

        useEffect(() => {
            if(value[0] !== null){
                const config = {headers: { authorization: `Bearer ${value[0].token}`}}
                const URL = process.env.REACT_APP_API_URL+'/infocity/comments/'+id;
                const promise = axios.get(URL, config);
                promise.then(response => {
                    setComments(response.data)
                }).catch((error) => console.log('Error get comments ', error))
                // console.log('sou a rota de comentários')
        }}, [id, value, comments]);

    return (
        <>
        {
            (value[0] === null)?(<p>Faça o login ou cadastre-se para ver os comentários</p>)
                :((comments.length === 0)?(<>
                        <p>Nehum comentário ainda. Deixe o seu!</p>
                        <InsertCommentsForm value={value}/>
                        </>)
                    :(<>
                        <CommentsForm value={value} comments={comments}/>
                        <InsertCommentsForm value={value}/>
                        </>))
        }
        </>
    )

}


export default Comments;