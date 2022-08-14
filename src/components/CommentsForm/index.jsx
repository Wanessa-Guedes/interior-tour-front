import { useState } from "react";
import DeleteButton from "../DeleteCommentButton";
import EditButton from "../EditCommentButton";
import { CommentsInfo, ContainCommentButtons, ContainerComments, ContainPicName } from "./style";


const CommentsForm = ({ value, comments, updateComment, setUpdateComment, deleteCommentStatus, setDeleteCommentStatus }) => {
    
    const [commentUpdateStatus, setCommentUpdateStatus] = useState(false);
    
    return (
        <>
        <ContainerComments>
            {
                comments.map(comment => {
                    return (
                        <>
                        {
                            (value[0])?(
                            <CommentsInfo key={comment.id}>
                                    <ContainPicName>
                                {
                                   <img src={comment.user.profile_picture} alt={`Imagem de perfil do ${comment.user.user_name}`}/>
                                }

                                {
                                   <span> {comment.user.user_name} </span>
                                }
                                    </ContainPicName>
                                <ContainCommentButtons>
                                {
                                    (commentUpdateStatus)?(<></>):(<span>{comment.comment}</span>)
                                }

                                {
                                    (value[0].id === comment.user.id)?(<div>
                                        <DeleteButton 
                                            value={value} 
                                            comment={comment}
                                            deleteCommentStatus={deleteCommentStatus}
                                            setDeleteCommentStatus={setDeleteCommentStatus}/>
                                        <EditButton
                                            value={value}
                                            comment={comment}
                                            updateComment={updateComment}
                                            setUpdateComment={setUpdateComment}
                                            commentUpdateStatus={commentUpdateStatus}
                                            setCommentUpdateStatus={setCommentUpdateStatus}/>
                                        </div>):(
                                            <></>)
                                }
                                </ContainCommentButtons>
                            </CommentsInfo>):(<></>)
                        }
                        </>
                        )
                })
            }
        </ContainerComments>
        </>
    )
}

export default CommentsForm;