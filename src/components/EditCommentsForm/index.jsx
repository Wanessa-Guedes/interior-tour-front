import DeleteButton from "../DeleteCommentButton";
import EditButton from "../EditCommentButton";
import { CommentsInfo } from "./style";


const CommentsForm = ({ value, comments, updateComment, setUpdateComment, deleteCommentStatus, setDeleteCommentStatus }) => {
    
    return (
        <>
            {
                comments.map(comment => {
                    return (
                        <>
                        {
                            (value[0])?(
                            <CommentsInfo key={comment.id}>
                                <div>
                                {
                                   <img src={comment.user.profile_picture} alt={`Imagem de perfil do ${comment.user.user_name}`}/>
                                }

                                {
                                    comment.user.user_name
                                }

                                {
                                    comment.comment
                                }

                                {
                                    (value[0].id === comment.user.id)?(<>
                                        <EditButton
                                            value={value}
                                            comment={comment}
                                            updateComment={updateComment}
                                            setUpdateComment={setUpdateComment}/>
                                        <DeleteButton 
                                            value={value} 
                                            comment={comment}
                                            deleteCommentStatus={deleteCommentStatus}
                                            setDeleteCommentStatus={setDeleteCommentStatus}/>
                                        </>):(
                                            <></>)
                                }
                                </div>
                            </CommentsInfo>):(<></>)
                        }
                        </>
                        )
                })
            }
        </>
    )
}

export default CommentsForm;