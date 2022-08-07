import EditButton from "../EditCommentButton";
import { CommentsInfo } from "./style";


const CommentsForm = ({ value, comments }) => {
    
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
                                    (value[0].id === comment.user.id)?(<EditButton value={value} comment={comment}/>):(<></>)
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