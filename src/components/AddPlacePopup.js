import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');

    const handleNameInput = (evt) => {
        setName(evt.target.value);
    }

    const handleUrlInput = (evt) => {
        setUrl(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.onAddPlace({ name, url });
        props.onClose();
        evt.target.reset();
        setName('')
        setUrl('')
    }

    return (
        <PopupWithForm
            title='Новая карточка'
            name='addPlace'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                id="place-input"
                name="name"
                type="text"
                className="popup__input popup__input_type_place"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                onChange={handleNameInput}
                required
            />
            <span className="place-input-error popup__input-error"></span>
            <input
                id="url-input"
                name="link"
                type="url"
                className="popup__input popup__input_type_url"
                placeholder="Ссылка на картинку"
                onChange={handleUrlInput}
                required
            />
            <span className="url-input-error popup__input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;