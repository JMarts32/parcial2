import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import LoginPage from './Components/loginpage';
import Tarjetas from './Components/tarjetas';
import { IntlProvider } from 'react-intl';
import localeEn from './locales/en.json';
import localeEs from './locales/es.json';

function App() {

  const userLocale = navigator.language || navigator.userLanguage;

  const messagesMap = {
    en: localeEn,
    es: localeEs,
  }
  return (
    <IntlProvider locale={userLocale} messages={messagesMap[userLocale.slice(0,2)]}>
      <header>
          <h3><FormattedMessage id="title"/></h3>
          <hr/>
          <img src='https://cdn.discordapp.com/attachments/1023419960363581492/1111644735304638556/image.png' alt='book'></img>
          <hr/>
      </header>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/cafes' element={<Tarjetas />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

// <Route path="/..." element={< />} />

export default App;
