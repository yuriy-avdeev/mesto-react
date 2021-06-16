import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="photo-place">
            <div
                className="photo-place__image"
                onClick={handleClick}
                style={{
                    backgroundImage: `url(${props.card.link})`,
                    backgroundSize: 'cover',
                }}>
            </div>
            <h2 className="photo-place__caption">{props.card.name}</h2>
            <div className="photo-place__like-area">
                <button className="photo-place__like" aria-label="поставим лайк" type="button"></button>
                <p className="photo-place__like-number" value="like-number">{props.card.likes.length}</p>
            </div>
            <button className="photo-place__basket" type="button" aria-label="удаляем фотографию"></button>
        </div>
    );
}

export default Card;