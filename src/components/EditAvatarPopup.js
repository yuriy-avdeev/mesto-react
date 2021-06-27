import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

    const newAvatarRef = React.useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newAvatarRef.current.value && props.onUpdateAvatar(newAvatarRef.current.value);
        props.onClose();
        evt.target.reset();
    }

    return (
        <PopupWithForm
            title='Обновить аватар'
            name='editAvatar'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                id="url-avatar-input"
                name="link"
                type="url"
                className="popup__input popup__input_new-avatar"
                ref={newAvatarRef}
                placeholder="Ссылка на изображение"
                required
            />
            <span className="url-avatar-input-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;