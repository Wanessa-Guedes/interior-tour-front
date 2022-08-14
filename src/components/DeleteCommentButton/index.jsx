import {AiOutlineDelete} from "react-icons/ai"
import axios from "axios"
import { useState } from "react"
import ReactModal from "react-modal"
import { Button, ContentModal, modalStyle } from "./style"

const DeleteButton = ({ value, comment, deleteCommentStatus, setDeleteCommentStatus }) => {
    const [showModal, setShowModal] = useState(false)
    const [modalLoad, setModalLoad] = useState(false)

    function deleteComment () {
        const config = {headers: { authorization: `Bearer ${value[0].token}`}}
        const URL = process.env.REACT_APP_API_URL+'infocity/delete/'+comment.id;
        const promise = axios.delete(URL, config);
        promise.then(response => {
            setModalLoad(false)
            setShowModal(false)
            setDeleteCommentStatus(true)
        }).catch((error) => {
            setModalLoad(false)
            setShowModal(false)
            setDeleteCommentStatus(false)
            console.log('Error delete comment', error)})
    }

    function operationConfirm(){
        setModalLoad(true)
        setTimeout(()=>{
            deleteComment()
            setDeleteCommentStatus(false)
        }, "500")
    }

    return (
        <>
            <ReactModal ariaHideApp={false} isOpen={showModal} style={modalStyle}>
            <ContentModal>
                {(modalLoad===true) ? <p>Carregando...</p>
                :<>
                    Tem certeza que gostaria de deletar o comentário?
                    <div>
                    <Button onClick={() => setShowModal(false)}>
                       <span> Não </span>
                    </Button>
                    <Button onClick={() => operationConfirm()}>
                        <span>
                            Sim
                        </span>
                    </Button>
                    </div>
                </>}
            </ContentModal>
            </ReactModal>
            <AiOutlineDelete cursor={'pointer'} onClick={() => setShowModal(true)}/>
        </>
    )
}

export default DeleteButton;