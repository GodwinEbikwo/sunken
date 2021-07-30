import { createContext, useContext, useState, useEffect } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  function toogleMenu() {
    setMenuOpen(!cartOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
    setCanScroll(true);
  }

  function openMenu() {
    setMenuOpen(true);
    setCanScroll(false);
  }

  return (
    <LocalStateProvider
      value={{ menuOpen, setMenuOpen, toogleMenu, closeMenu, openMenu }}>
      {children}
    </LocalStateProvider>
  );
}

function useMenu() {
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };

