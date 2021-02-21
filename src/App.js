import './App.scss';

import { useState } from 'react';
import Navigation from './components/Navigation';

const App = () => {
  const [state, setstate] = useState({ lang: 'eng', theme: 'light' });

  const changeLang = () => {
    console.log('change Language!');
    setstate({ ...state, lang: state.lang === 'eng' ? 'esp' : 'eng' });
  };

  const changeLight = () => {
    console.log('change Light!');
    setstate({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' });
  };

  return (
    <div className="App">
      <Navigation action={changeLight}></Navigation>
      {JSON.stringify(state)}
    </div>
  );
};

export default App;
