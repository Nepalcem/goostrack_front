import React from 'react'

// import Button from 'react-bootstrap/Button'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Form from 'react-bootstrap/Form'
// import { FaCoffee } from 'react-icons/fa'
import ThemeIcoButtonMoon from '../../images/svg/moon.svg';
import ThemeIcoButtonSun from '../../images/svg/sun.svg'

import useTheme from '../../redux/use-theme'

import { ThemeToggleButton } from './ThemeToggler.style';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()

  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

const ThemeDarkButton = () => {
    return (
        <ThemeToggleButton type="button" onClick={handleDarkThemeClick}>
            <img src={ThemeIcoButtonMoon} alt="change theme" width="100%" />
        </ThemeToggleButton>
    )
};

const ThemeLightButton = () => {
    return (
        <ThemeToggleButton type="button" onClick={handleLightThemeClick}>
            <img src={ThemeIcoButtonSun} alt="change theme" width="100%" />
        </ThemeToggleButton>
    )
};

const CurrentButton = () => {
    if (theme === 'light') {
        return <ThemeDarkButton/>
    }
        return <ThemeLightButton/>
};

    return(
        <CurrentButton/>
    )
};

export default ThemeToggler;
