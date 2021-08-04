import React, { useEffect } from "react";

import Portal from "./Portal";

import { Overlay, Dialog } from "./styles";

const Modal = ({ children, open, onClose }) => {
    useEffect(() => {
        function onEsc(e){
            if(e.keyCode === 27) onClose() // pegando a tecla esc 
        }

        window.addEventListener('keydown', onEsc);
        return () => {
            window.removeEventListener('keydown', onEsc); // vai remover o evento de escuta
        } 
    }, [onClose]) // só vai escutar o evento de escuta quando essa função for chamada
    if(!open) return null;

    function onOverlayClick(){
        onClose();
    }

    function onDialogClick(e){
        e.stopPropagation();
    }

    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>
    )
}

export default Modal;