import React from 'react';

function PopupWithForm({ title, name, isOpen, onClose, input }) {

    const handleFieldClick = (evt) => {
        evt.target === evt.currentTarget && onClose(evt)
    }

    React.useEffect(() => {
        const handleEsc = (evt) => {
            evt.key === 'Escape' && onClose(evt)
        }

        if (isOpen) {
            document.addEventListener('keyup', handleEsc);
        }

        return () => {
            document.removeEventListener('keyup', handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_active'}`} onClick={handleFieldClick}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={`popup-form_type_${name}`} onSubmit={onClose} noValidate>
                    {input}
                    <button className="popup__submit" type="submit">Сохранить</button>
                </form>
                <button className="popup__close" type="button" aria-label="закрыть форму" onClick={onClose}>
                </button>
            </div>
        </div>
    )
}

export default PopupWithForm;