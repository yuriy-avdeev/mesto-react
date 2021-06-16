import React from 'react';

function PopupWithForm(props) {

    const inputEditProfile =
        <>
            <input
                id="username-input"
                name="name"
                type="text"
                className="popup__input popup__input_type_name"
                placeholder="Имя пользователя"
                minLength="2"
                maxLength="40"
                required
            />
            <span className="username-input-error popup__input-error"></span>
            <input
                id="useractivity-input"
                name="activity"
                type="text"
                className="popup__input popup__input_type_activity"
                placeholder="Профессия"
                minLength="2"
                maxLength="200"
                required
            />
            <span className="useractivity-input-error popup__input-error"></span>
        </>

    const inputAddPlace =
        <>
            <input
                id="place-input"
                name="name"
                type="text"
                className="popup__input popup__input_type_place"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
            />
            <span className="place-input-error popup__input-error"></span>
            <input
                id="url-input"
                name="link"
                type="url"
                className="popup__input popup__input_type_url"
                placeholder="Ссылка на картинку"
                required
            />
            <span className="url-input-error popup__input-error"></span>
        </>

    const inputEditAvatar =
        <>
            <input
                id="url-avatar-input"
                name="link"
                type="url"
                className="popup__input popup__input_new-avatar"
                placeholder="Ссылка на изображение"
                required
            />
            <span className="url-avatar-input-error popup__input-error"></span>
        </>

    const handleFieldClick = (evt) => {
        evt.target === evt.currentTarget && props.onClose(evt)
    }

    React.useEffect(() => {
        const handleEsc = (evt) => {
            evt.key === 'Escape' && props.onClose(evt)
        }

        document.addEventListener('keyup', handleEsc);

        return () => {
            document.removeEventListener('keyup', handleEsc);
        };
    });

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_active'}`} onClick={handleFieldClick}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`popup-form_type_${props.name}`} onSubmit={props.onClose} noValidate>
                    {props.name === 'editProfile' && inputEditProfile}
                    {props.name === 'addPlace' && inputAddPlace}
                    {props.name === 'editAvatar' && inputEditAvatar}
                    <button className="popup__submit" type="submit">Сохранить</button>
                </form>
                <button className="popup__close" type="button" aria-label="закрыть форму" onClick={props.onClose}>
                </button>
            </div>
        </div>
    )
}

export default PopupWithForm;