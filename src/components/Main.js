import React from 'react';
import editPen from '../images/edit-pen.svg'
import api from '../utils/api'
import Card from './Card'

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUser()
            .then(res => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
    }, []);

    React.useEffect(() => {
        api.getCards()
            .then(dataCardList => {
                // dataCardList = dataCardList.slice(0, 3);
                setCards(dataCardList);
            })
    }, []);

    return (
        <main className="page">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div
                        className="profile__photo"
                        // src={userAvatar}
                        style={{
                            backgroundImage: `url(${userAvatar})`,
                            backgroundSize: 'cover'
                        }}
                        // alt="изображение владельца профиля"
                    >
                    </div>
                    <img
                        className="profile__avatar-edit"
                        src={editPen}
                        alt="изображение ручки-редактора"
                        onClick={props.onEditAvatar}
                    />
                </div>
                <div className="profile__information">
                    <div className="profile__person">
                        <h1 className="profile__name">{userName}</h1>
                        <p className="profile__activity">{userDescription}</p>
                    </div>
                    <button
                        className="profile__editor-popup profile__click"
                        type="button"
                        aria-label="откроем редактор профиля пользователя"
                        onClick={props.onEditProfile}
                    ></button>
                </div>
                <button
                    className="profile__add-place profile__click"
                    aria-label="добавим фотографию"
                    type="button"
                    onClick={props.onAddPlace}
                ></button>
            </section>

            <section className="places">
                {
                    cards.map((card, i) => (
                        <Card
                            key = {card._id}
                            onCardClick={props.onCardClick}
                            card = {card}
                        />
                    ))
                }
            </section>
        </main>
    );
}

export default Main;