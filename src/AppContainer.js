import { useState } from 'react';
import { ThemeContext, THEMES } from './contexts/ThemeContext';
import { widthLoading } from './hoc/widthLoading';
import App from './App';
import { getLanguage } from './const/languages';



const AppComponents = widthLoading(App, getLanguage);

export const AppContainer = () => {
  const [ theme, setTheme ] = useState(THEMES.dark);

  const toggleTheme = () => {
    const nextTheme = (theme === THEMES.dark) ? THEMES.light : THEMES.dark;
    setTheme(nextTheme);
  };

  return (

    <ThemeContext.Provider value={[ theme, toggleTheme ]}>
      <AppComponents/>
    </ThemeContext.Provider>

  )
};
