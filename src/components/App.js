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
                onEditAvatar = {handleEditAvatarClick}
                onAddPlace = {handleAddPlaceClick}
                onEditProfile = {handleEditProfileClick}
                onCardClick = {handleCardClick}
            />
            <PopupWithForm
                title='Обновить аватар'
                name='editAvatar'
                id='1'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />
            <PopupWithForm
                title='Новое место'
                name='addPlace'
                id='2'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />
            <PopupWithForm
                title='Редактировать профиль'
                name='editProfile'
                id='3'
                isOpen = {isEditProfilePopupOpen}
                onClose={closeAllPopups}
            />

            <ImagePopup 
                card = {selectedCard}
                onClose = {closeAllPopups}
            /> 
            <Footer />
        </div>
    );
}

export default App;