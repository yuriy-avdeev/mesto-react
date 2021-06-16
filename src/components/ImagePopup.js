function ImagePopup(props) {
    
    const handleFieldClick = (evt) => {
        evt.target === evt.currentTarget && props.onClose(evt)
    }

    if (props.card) {
        return (
            <div className="popup popup-image popup_active" onClick={handleFieldClick}>
                <div className="popup-image__container">
                    <img className="popup-image__big-foto" src={props.card.link} alt="увеличенное изображение выбранной карточки" />
                    <h2 className="popup-image__caption">{props.card.name}</h2>
                    <button className="popup__close" type="button" aria-label="закроем" onClick={props.onClose}></button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="popup popup-image">
                <div className="popup-image__container">
                    <img className="popup-image__big-foto" src="#" alt="увеличенное изображение выбранной карточки" />
                    <h2 className="popup-image__caption">''</h2>
                    <button className="popup__close" type="button" aria-label="закроем"></button>
                </div>
            </div>
        );
    }
}

export default ImagePopup;