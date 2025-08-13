import React from 'react';
import { useStyleMap } from '../hooks/useStyleMap';

const HamburgerMenu = ({ onClick }) => {
  const styles = useStyleMap();

  return (
    <div className={styles.hamburger} onClick={onClick} aria-label="Menu toggle">
      <div className={styles.hamburgerBar}></div>
      <div className={styles.hamburgerBar}></div>
      <div className={styles.hamburgerBar}></div>
    </div>
  );
};

export default HamburgerMenu;