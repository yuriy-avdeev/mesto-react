import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card)
    }

    const closeAllPopups = (evt) => {
        evt.preventDefault();
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard(null);
    }

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onEditProfile={handleEditProfileClick}
                onCardClick={handleCardClick}
            />


            <PopupWithForm
                title='Обновить аватар'
                name='editAvatar'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    id="url-avatar-input"
                    name="link"
                    type="url"
                    className="popup__input popup__input_new-avatar"
                    placeholder="Ссылка на изображение"
                    required
                />
                <span className="url-avatar-input-error popup__input-error"></span>
            </PopupWithForm>


            <PopupWithForm
                title='Новое место'
                name='addPlace'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
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
            </PopupWithForm>

            <PopupWithForm
                title='Редактировать профиль'
                name='editProfile'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
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
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
            <Footer />
        </div>
    );
}

export default App;