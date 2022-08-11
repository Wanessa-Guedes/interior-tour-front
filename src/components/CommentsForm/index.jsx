import DeleteButton from "../DeleteCommentButton";
import EditButton from "../EditCommentButton";
import { CommentsInfo, ContainCommentButtons, ContainerComments, ContainPicName } from "./style";


const CommentsForm = ({ value, comments, updateComment, setUpdateComment, deleteCommentStatus, setDeleteCommentStatus }) => {
    
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
                                    comment.user.user_name
                                }
                                    </ContainPicName>
                                <ContainCommentButtons>
                                {
                                    <span>{comment.comment}</span>
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