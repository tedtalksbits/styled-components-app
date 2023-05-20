import { useState, useEffect, MouseEventHandler } from 'react';
import Cookies from 'js-cookie';

// type UseColormodeReturn = [string, MouseEventHandler<HTMLButtonElement>];

type UseColorMode = () => [string, MouseEventHandler<HTMLButtonElement>];

export const useColorMode: UseColorMode = () => {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    const nextColorMode = colorMode === 'light' ? 'dark' : 'light';
    Cookies.set('theme', nextColorMode);
    setColorMode(nextColorMode);
  };

  useEffect(() => {
    const theme = Cookies.get('theme');
    if (theme) {
      setColorMode(theme);
    }
    console.log('theme', theme);
  }, [colorMode]);
  return [colorMode, toggleColorMode];
};
