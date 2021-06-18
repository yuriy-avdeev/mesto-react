import React from 'react';

function ImagePopup({ card, onClose }) {
    
    const handleFieldClick = (evt) => {
        evt.target === evt.currentTarget && onClose(evt)
    }

    React.useEffect(() => {
        const handleEsc = (evt) => {
            evt.key === 'Escape' && onClose(evt)
        }

        if (card) {
            document.addEventListener('keyup', handleEsc);
        }

        return () => {
            document.removeEventListener('keyup', handleEsc);
        };
    }, [card, onClose]);

    return (
        <div className={`popup popup-image ${card ? 'popup_active' : ''}`} onClick={handleFieldClick}>
            <div className="popup-image__container">
                <img className="popup-image__big-foto" src={card && card.link} alt="увеличенное изображение выбранной карточки" />
                <h2 className="popup-image__caption">{card && card.name}</h2>
                <button className="popup__close" type="button" aria-label="закроем" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;