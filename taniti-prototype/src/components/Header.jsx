import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyleMap } from '../hooks/useStyleMap';
import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const styles = useStyleMap();
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a
                    onClick={() => { navigate("/"); }}
                    className={styles.logo}
                >
                    Visit Taniti
                </a>

                <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
                <Navigation isMobile={false} />
            </div>

            {menuOpen && <Navigation isMobile={true} onLinkClick={() => setMenuOpen(false)} />}
        </header>
    );
};

export default Header;