import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { Theme } from '../../types';
import { useNavigate } from 'react-router-dom';

const MainButton: React.FC = () => {
  const navigate = useNavigate();

  const { theme } = useContext<Theme>(ThemeContext);

  const onClickHandler = () => {
    navigate('/');
  };

  return (
    <button className="mainButton" onClick={onClickHandler}>
      <img
        className="mainButton__icon"
        alt="moon icon"
        src={`/assets/${
          theme === 'light' ? 'icon-arrow-black.png' : 'icon-arrow-white.png'
        }`}
      />
      <p className="mainButton__text">Back</p>
    </button>
  );
};

export default MainButton;
