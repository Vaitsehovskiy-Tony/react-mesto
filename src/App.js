// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="root">

        <header className="header root__section">
              <img src="./images/logo.svg" alt="mesto logo" class="logo" />
        </header>

        <div className="profile root__section">
          <div className="user-info">
            <div className="user-info__photo"></div>
            <div className="user-info__data">
              <h1 className="user-info__name">Jaques Causteau</h1>
              <p className="user-info__job">Sailor, Researcher</p>
            </div>
            <button className="button user-info__button">+</button>
          </div>
        </div>
        <div className="places-list root__section">

          <div className="place-card">
            {/* <div 
            className="place-card__image" 
            style="background-image: url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)"
            >
              <button className="place-card__delete-icon"></button>
            </div> */}
            <div className="place-card__description">
              <h3 className="place-card__name">Камчатка</h3>
              <button className="place-card__like-icon"></button>
            </div>
          </div>
        </div>

        <div className="popup">
          <div className="popup__content">
            <img src="./images/close.svg" alt="" className="popup__close" />
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" name="new">
                <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" />
                <input type="text" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" />
                <button type className="button popup__button">+</button>
            </form>
          </div>
        </div>

    </div>
  );
}

export default App;
